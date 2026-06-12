import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { parties } from "@/data/guests";
import { ensureSchema, sql, type RsvpRow } from "@/lib/db";

const ADMIN_COOKIE = "ws-admin";

async function getRsvps(): Promise<RsvpRow[]> {
  await ensureSchema();
  const rows = (await sql`
    SELECT party_id, guest_name, attending, dietary, submitted_at::text AS submitted_at
    FROM rsvps
    ORDER BY party_id ASC, guest_name ASC
  `) as unknown as RsvpRow[];
  return rows;
}

function fmtDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "yes") {
    redirect("/admin/login");
  }

  let rsvps: RsvpRow[] = [];
  let dbError: string | null = null;
  try {
    rsvps = await getRsvps();
  } catch (e) {
    console.error("[admin] db error", e);
    dbError =
      "Couldn't read responses. Check that DATABASE_URL is set in this environment.";
  }

  // Index responses by party_id + guest_name for joining with the static guest list.
  const byKey = new Map<string, RsvpRow>();
  for (const r of rsvps) byKey.set(`${r.party_id}::${r.guest_name}`, r);

  // Aggregate counts
  let coming = 0;
  let notComing = 0;
  let respondedGuests = 0;
  const totalGuests = parties.reduce((n, p) => n + p.guests.length, 0);
  for (const r of rsvps) {
    if (r.attending) coming += 1;
    else notComing += 1;
    respondedGuests += 1;
  }
  const outstanding = totalGuests - respondedGuests;

  return (
    <main className="min-h-screen px-4 sm:px-8 py-12 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-10">
        <div>
          <p
            className="font-body text-xs tracking-widest text-espresso-light uppercase"
            style={{ letterSpacing: "0.2em" }}
          >
            Admin
          </p>
          <h1 className="font-display text-4xl text-espresso font-light italic">
            RSVPs
          </h1>
        </div>
        <div className="flex gap-3">
          <a
            href="/api/admin/export"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-teal text-teal hover:bg-teal hover:text-cream transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Export CSV
          </a>
          <Link
            href="/"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-cream-dark text-espresso-light hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Back to site
          </Link>
        </div>
      </header>

      {dbError && (
        <p className="mb-8 p-4 border border-rose-dark bg-rose/20 text-rose-dark font-body text-sm">
          {dbError}
        </p>
      )}

      {/* Summary */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <Stat label="Coming" value={coming} accent="text-teal" />
        <Stat label="Regrets" value={notComing} accent="text-rose-dark" />
        <Stat label="No response" value={outstanding} accent="text-espresso-light" />
        <Stat label="Total invited" value={totalGuests} accent="text-espresso" />
      </section>

      {/* Per-party table */}
      <section className="space-y-10">
        {parties.length === 0 && (
          <p className="font-body text-sm text-espresso-light italic">
            No guests configured yet. Edit{" "}
            <code className="text-espresso">src/data/guests.ts</code>.
          </p>
        )}
        {parties.map((p) => {
          const partyRows = p.guests.map((name) => ({
            name,
            row: byKey.get(`${p.id}::${name}`),
          }));
          const responded = partyRows.filter((g) => g.row).length;
          return (
            <div key={p.id} className="border-t border-cream-dark pt-5">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-display text-2xl text-espresso">{p.partyName}</h2>
                <span
                  className="font-body text-xs tracking-widest uppercase text-espresso-light"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {responded} / {p.guests.length} responded
                </span>
              </div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-espresso-light">
                    <th className="font-body font-normal py-2 pr-4 uppercase tracking-widest text-xs" style={{ letterSpacing: "0.12em" }}>Guest</th>
                    <th className="font-body font-normal py-2 pr-4 uppercase tracking-widest text-xs" style={{ letterSpacing: "0.12em" }}>Attending</th>
                    <th className="font-body font-normal py-2 pr-4 uppercase tracking-widest text-xs" style={{ letterSpacing: "0.12em" }}>Dietary</th>
                    <th className="font-body font-normal py-2 uppercase tracking-widest text-xs" style={{ letterSpacing: "0.12em" }}>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {partyRows.map(({ name, row }) => (
                    <tr key={name} className="border-t border-cream-dark/60">
                      <td className="py-3 pr-4 font-display text-base text-espresso">{name}</td>
                      <td className="py-3 pr-4">
                        {row === undefined ? (
                          <span className="font-body text-xs italic text-espresso-light">No response</span>
                        ) : row.attending ? (
                          <span className="font-body text-xs uppercase tracking-widest text-teal" style={{ letterSpacing: "0.15em" }}>Coming</span>
                        ) : (
                          <span className="font-body text-xs uppercase tracking-widest text-rose-dark" style={{ letterSpacing: "0.15em" }}>Regrets</span>
                        )}
                      </td>
                      <td className="py-3 pr-4 font-body text-sm text-espresso">{row?.dietary || ""}</td>
                      <td className="py-3 font-body text-xs text-espresso-light">{row ? fmtDate(row.submitted_at) : ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>
    </main>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent: string }) {
  return (
    <div className="border border-cream-dark p-4">
      <p
        className="font-body text-xs tracking-widest text-espresso-light uppercase mb-1"
        style={{ letterSpacing: "0.15em" }}
      >
        {label}
      </p>
      <p className={`font-display text-3xl ${accent}`}>{value}</p>
    </div>
  );
}
