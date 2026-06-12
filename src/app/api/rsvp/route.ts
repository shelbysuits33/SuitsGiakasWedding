import { NextResponse } from "next/server";
import { findParty } from "@/data/guests";
import { ensureSchema, sql } from "@/lib/db";

type Response = { name: string; attending: boolean; dietary?: string };
type Body = { partyId: string; responses: Response[] };

function isResponse(x: unknown): x is Response {
  if (!x || typeof x !== "object") return false;
  const r = x as Record<string, unknown>;
  return (
    typeof r.name === "string" &&
    typeof r.attending === "boolean" &&
    (r.dietary === undefined || typeof r.dietary === "string")
  );
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body.partyId !== "string" || !Array.isArray(body.responses)) {
    return NextResponse.json(
      { ok: false, error: "partyId and responses required" },
      { status: 400 }
    );
  }

  const party = findParty(body.partyId);
  if (!party) {
    return NextResponse.json({ ok: false, error: "Unknown party" }, { status: 404 });
  }

  const allowedNames = new Set(party.guests);
  const cleaned: Response[] = [];
  for (const r of body.responses) {
    if (!isResponse(r)) {
      return NextResponse.json({ ok: false, error: "Bad response shape" }, { status: 400 });
    }
    if (!allowedNames.has(r.name)) {
      return NextResponse.json(
        { ok: false, error: `Guest '${r.name}' not in this party` },
        { status: 400 }
      );
    }
    cleaned.push({
      name: r.name,
      attending: r.attending,
      dietary: (r.dietary ?? "").slice(0, 500).trim(),
    });
  }

  try {
    await ensureSchema();
    // Upsert each response so guests can re-submit and the latest wins.
    for (const r of cleaned) {
      await sql`
        INSERT INTO rsvps (party_id, guest_name, attending, dietary, submitted_at)
        VALUES (${body.partyId}, ${r.name}, ${r.attending}, ${r.dietary ?? ""}, NOW())
        ON CONFLICT (party_id, guest_name) DO UPDATE
          SET attending = EXCLUDED.attending,
              dietary = EXCLUDED.dietary,
              submitted_at = NOW()
      `;
    }
  } catch (e) {
    console.error("[rsvp] db error", e);
    return NextResponse.json(
      { ok: false, error: "Could not save your RSVP — please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
