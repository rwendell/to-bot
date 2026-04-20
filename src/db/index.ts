// TODO: Connect to SQLite database using Drizzle ORM
// Uses better-sqlite3 for local file-based persistence

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { existsSync } from "fs";
import { join } from "path";
import * as schema from "./schema";

const DB_PATH = join(import.meta.dirname ?? ".", "vto.db");

// TODO: Ensure database file exists and create tables if needed
const sqlite = existsSync(DB_PATH)
  ? new Database(DB_PATH)
  : new Database(DB_PATH);

export const db = drizzle(sqlite, { schema });

// TODO: Add helper functions for common DB operations
// - getVerifiedUser(userId): Get user by Discord ID
// - isVerified(userId): Check if user is verified
// - addVerifiedUser(...): Add new verified user
