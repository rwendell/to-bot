import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { existsSync } from "fs";
import { join } from "path";
import * as schema from "./schema";

const DB_PATH = join(import.meta.dirname ?? ".", "vto.db");

const sqlite = existsSync(DB_PATH)
  ? new Database(DB_PATH)
  : new Database(DB_PATH);

export const db = drizzle(sqlite, { schema });

export type VerifiedUser = typeof schema.verifiedUsers.$inferSelect;
export type NewVerifiedUser = typeof schema.verifiedUsers.$inferInsert;
