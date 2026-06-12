import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { parties } from "@/data/guests";
import { ensureSchema, sql, type RsvpRow } from "@/lib/db";

const ADMIN_COOKIE = "ws-admin";

function csvCell(v: string | number | boolean): string {
  const s = String(v);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export async function GET() {
  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "yes") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    await ensureSchema();
  } catch (e) {
    console.error("[export] schema error", e);
    return NextResponse.json({ ok: false, error: "DB unavailable" }, { status: 500 });
  }

  const rows = (await sql`
    SELECT party_id, guest_name, attending, dietary, submitted_at::text AS submitted_at
    FROM rsvps
  `) as unknown as RsvpRow[];

  const byKey = new Map<string, RsvpRow>();
  for (const r of rows) byKey.set(`${r.party_id}::${r.guest_name}`, r);

  const header = [
    "party_id",
    "party_name",
    "guest_name",
    "responded",
    "attending",
    "dietary",
    "submitted_at",
  ];
  const lines: string[] = [header.join(",")];

  for (const p of parties) {
    for (const name of p.guests) {
      const r = byKey.get(`${p.id}::${name}`);
      lines.push(
        [
          csvCell(p.id),
          csvCell(p.partyName),
          csvCell(name),
          csvCell(r ? "yes" : "no"),
          csvCell(r ? (r.attending ? "yes" : "no") : ""),
          csvCell(r?.dietary ?? ""),
          csvCell(r?.submitted_at ?? ""),
        ].join(",")
      );
    }
  }

  const csv = lines.join("\n") + "\n";
  const stamp = new Date().toISOString().slice(0, 10);
  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="rsvps-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
