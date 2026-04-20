import initSqlJs, { Database } from "sql.js";

let db: Database | null = null;

export async function getDb(): Promise<Database> {
  if (!db) {
    const SQL = await initSqlJs();
    db = new SQL.Database();
    db.run(`
            CREATE TABLE IF NOT EXISTS verified_users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                guild_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                startgg_username TEXT NOT NULL,
                startgg_user_id TEXT NOT NULL,
                verified_at INTEGER NOT NULL,
                UNIQUE(guild_id, user_id)
            )
        `);
  }
  return db;
}

export interface VerifiedUser {
  id: number;
  guildId: string;
  userId: string;
  startggUsername: string;
  startggUserId: string;
  verifiedAt: Date;
}

export async function addVerifiedUser(
  guildId: string,
  userId: string,
  startggUsername: string,
  startggUserId: string,
): Promise<void> {
  const database = await getDb();
  database.run(
    `INSERT OR IGNORE INTO verified_users (guild_id, user_id, startgg_username, startgg_user_id, verified_at) VALUES (?, ?, ?, ?, ?)`,
    [guildId, userId, startggUsername, startggUserId, Date.now()],
  );
}

export async function getVerifiedUser(
  guildId: string,
  userId: string,
): Promise<VerifiedUser | null> {
  const database = await getDb();
  const result = database.exec(
    `SELECT * FROM verified_users WHERE guild_id = ? AND user_id = ?`,
    [guildId, userId],
  );
  if (!result.length || !result[0].values.length) return null;
  const row = result[0].values[0];
  return {
    id: row[0] as number,
    guildId: row[1] as string,
    userId: row[2] as string,
    startggUsername: row[3] as string,
    startggUserId: row[4] as string,
    verifiedAt: new Date(row[5] as number),
  };
}
