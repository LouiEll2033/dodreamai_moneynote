import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const dodreamSharedState = sqliteTable("dodream_shared_state", {
  id: integer("id").primaryKey(),
  recordsJson: text("records_json").notNull().default("[]"),
  calendarItemsJson: text("calendar_items_json").notNull().default("[]"),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
