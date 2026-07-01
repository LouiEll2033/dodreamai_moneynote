import { env } from "cloudflare:workers";

export type DodreamSharedPayload = {
  records: unknown[];
  calendarItems: unknown[];
  updatedAt: string | null;
};

const TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS dodream_shared_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    records_json TEXT NOT NULL DEFAULT '[]',
    calendar_items_json TEXT NOT NULL DEFAULT '[]',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

let ensured = false;

function getD1() {
  if (!env.DB) {
    throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  }

  return env.DB;
}

async function ensureTable() {
  if (ensured) return;
  await getD1().prepare(TABLE_SQL).run();
  ensured = true;
}

function parseArrayJson(value: string | null | undefined) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function readDodreamSharedState(): Promise<DodreamSharedPayload> {
  await ensureTable();
  const row = await getD1()
    .prepare(
      "SELECT records_json, calendar_items_json, updated_at FROM dodream_shared_state WHERE id = 1"
    )
    .first<{
      records_json: string;
      calendar_items_json: string;
      updated_at: string;
    }>();

  return {
    records: parseArrayJson(row?.records_json),
    calendarItems: parseArrayJson(row?.calendar_items_json),
    updatedAt: row?.updated_at ?? null,
  };
}

export async function writeDodreamSharedState(input: {
  records: unknown[];
  calendarItems: unknown[];
}) {
  await ensureTable();
  const recordsJson = JSON.stringify(Array.isArray(input.records) ? input.records : []);
  const calendarItemsJson = JSON.stringify(Array.isArray(input.calendarItems) ? input.calendarItems : []);

  await getD1()
    .prepare(
      `INSERT INTO dodream_shared_state (id, records_json, calendar_items_json, updated_at)
       VALUES (1, ?, ?, CURRENT_TIMESTAMP)
       ON CONFLICT(id) DO UPDATE SET
         records_json = excluded.records_json,
         calendar_items_json = excluded.calendar_items_json,
         updated_at = CURRENT_TIMESTAMP`
    )
    .bind(recordsJson, calendarItemsJson)
    .run();

  return readDodreamSharedState();
}
