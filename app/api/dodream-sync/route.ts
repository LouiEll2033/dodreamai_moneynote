import { readDodreamSharedState, writeDodreamSharedState } from "../../../db/dodream-store";

export const dynamic = "force-dynamic";

function toMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unexpected error";
}

export async function GET() {
  try {
    const state = await readDodreamSharedState();
    return Response.json(state);
  } catch (error) {
    return Response.json({ error: toMessage(error) }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const payload = (await request.json()) as {
      records?: unknown[];
      calendarItems?: unknown[];
    };

    const state = await writeDodreamSharedState({
      records: Array.isArray(payload.records) ? payload.records : [],
      calendarItems: Array.isArray(payload.calendarItems) ? payload.calendarItems : [],
    });

    return Response.json(state);
  } catch (error) {
    return Response.json({ error: toMessage(error) }, { status: 500 });
  }
}
