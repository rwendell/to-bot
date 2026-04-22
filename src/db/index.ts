import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { existsSync } from "node:fs";
import { join } from "node:path";
import * as schema from "./schema";

const DB_PATH = join(import.meta.dirname ?? ".", "vto.db");

const sqlite = existsSync(DB_PATH) ? new Database(DB_PATH) : new Database(DB_PATH);

export const db = drizzle(sqlite, { schema });

export type VerifiedUser = typeof schema.verifiedUsers.$inferSelect;

export async function isVerified(userId: string): Promise<boolean> {
    const result = await db.query.verifiedUsers.findFirst({
        where: (users, { eq }) => eq(users.userId, userId),
    });
    return !!result;
}

export async function getVerifiedUser(userId: string): Promise<VerifiedUser | undefined> {
    return db.query.verifiedUsers.findFirst({
        where: (users, { eq }) => eq(users.userId, userId),
    });
}

export async function addVerifiedUser(
    userId: string,
    startggUsername: string,
    startggUserId: string
): Promise<void> {
    await db
        .insert(schema.verifiedUsers)
        .values({
            userId,
            startggUsername,
            startggUserId,
            verifiedAt: new Date(),
        })
        .onConflictDoNothing();
}
