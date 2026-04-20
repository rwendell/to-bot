import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

// TODO: Store verified users - persists so they don't reverify each time
export const verifiedUsers = sqliteTable("verified_users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  // Discord user ID (global, not server-specific)
  userId: text("user_id").notNull().unique(),
  // start.gg username (the slug, not display name)
  startggUsername: text("startgg_username").notNull(),
  // start.gg internal user ID
  startggUserId: text("startgg_user_id").notNull(),
  // When user was verified
  verifiedAt: integer("verified_at", { mode: "timestamp" }).notNull(),
});
// TODO: Add tournaments table - store user's entered tournaments for quick access
// export const userTournaments = sqliteTable('user_tournaments', { ... });
