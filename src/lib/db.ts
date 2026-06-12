import { neon } from "@neondatabase/serverless";

// Neon's Marketplace install on Vercel auto-provisions DATABASE_URL.
// For local dev, pull with `vercel env pull .env.local`.

type Sql = ReturnType<typeof neon>;
let _sql: Sql | null = null;

function getSql(): Sql {
  if (_sql) return _sql;
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Install Neon Postgres via the Vercel Marketplace, then `vercel env pull .env.local`."
    );
  }
  _sql = neon(url);
  return _sql;
}

/**
 * Tagged-template wrapper that lazily initializes the Neon client on first use.
 * Callers do `await sql\`SELECT ...\`` exactly as before.
 */
export const sql = ((strings: TemplateStringsArray, ...values: unknown[]) =>
  // The Neon client accepts tagged-template calls directly.
  (getSql() as unknown as (
    s: TemplateStringsArray,
    ...v: unknown[]
  ) => Promise<unknown>)(strings, ...values)) as unknown as Sql;

let schemaEnsured = false;

/** Idempotent — safe to call on every write. CREATE TABLE IF NOT EXISTS. */
export async function ensureSchema(): Promise<void> {
  if (schemaEnsured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS rsvps (
      id            BIGSERIAL PRIMARY KEY,
      party_id      TEXT NOT NULL,
      guest_name    TEXT NOT NULL,
      attending     BOOLEAN NOT NULL,
      dietary       TEXT NOT NULL DEFAULT '',
      submitted_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (party_id, guest_name)
    )
  `;
  schemaEnsured = true;
}

export type RsvpRow = {
  party_id: string;
  guest_name: string;
  attending: boolean;
  dietary: string;
  submitted_at: string;
};
