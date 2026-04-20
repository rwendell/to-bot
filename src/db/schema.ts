import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const verifiedUsers = sqliteTable(
  "verified_users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    guildId: text("guild_id").notNull(),
    userId: text("user_id").notNull(),
    startggUsername: text("startgg_username").notNull(),
    startggUserId: text("startgg_user_id").notNull(),
    verifiedAt: integer("verified_at", { mode: "timestamp" }).notNull(),
  },
  (table) => ({
    unique: uniqueIndex("verified_user_unique_idx").on(
      table.guildId,
      table.userId,
    ),
  }),
);
