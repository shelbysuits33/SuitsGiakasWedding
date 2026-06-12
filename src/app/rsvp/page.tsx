"use client";

import { useMemo, useState } from "react";
import PageHeader from "../_components/PageHeader";
import { allGuests, findParty, parties, type Party } from "@/data/guests";

type Response = { name: string; attending: boolean | null; dietary: string };

export default function RsvpPage() {
  const [query, setQuery] = useState("");
  const [party, setParty] = useState<Party | null>(null);
  const [responses, setResponses] = useState<Response[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return allGuests
      .filter((g) => g.name.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  function selectGuest(partyId: string) {
    const p = findParty(partyId);
    if (!p) return;
    setParty(p);
    setResponses(
      p.guests.map((name) => ({ name, attending: null, dietary: "" }))
    );
    setQuery("");
  }

  function updateResponse(i: number, patch: Partial<Response>) {
    setResponses((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  }

  const allAnswered = responses.every((r) => r.attending !== null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!party || !allAnswered) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partyId: party.id,
          responses: responses.map((r) => ({
            name: r.name,
            attending: r.attending === true,
            dietary: r.dietary,
          })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  // Empty guest list = config not finished
  if (parties.length === 0) {
    return (
      <>
        <PageHeader title="RSVP" subtitle="We can't wait to celebrate with you" variant="rose" />
        <section className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="font-display text-xl text-espresso italic">
            The guest list isn&apos;t ready yet. Please check back soon.
          </p>
        </section>
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <PageHeader title="RSVP" subtitle="Thank you" variant="rose" />
        <section className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="font-display text-3xl text-espresso italic mb-4">
            Your response is in.
          </p>
          <p className="font-body text-sm text-espresso-light leading-relaxed">
            We&apos;re so glad you let us know. If anything changes, you can
            return to this page and submit again.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="RSVP"
        subtitle={party ? "Confirm your party" : "Please find your name"}
        variant="rose"
      />

      <section className="max-w-xl mx-auto px-6 py-16">
        {!party ? (
          <div className="text-center">
            <p className="font-body text-sm text-espresso-light leading-relaxed mb-10 max-w-md mx-auto">
              Start typing your name and we&apos;ll pull up your invitation.
            </p>
            <div className="relative">
              <label htmlFor="guest" className="sr-only">Your name</label>
              <input
                id="guest"
                type="text"
                autoComplete="off"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Your name"
                className="w-full text-center font-body text-base bg-transparent border-b border-espresso text-espresso placeholder:text-espresso-light/60 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-sm py-3 outline-none focus:border-teal transition-colors"
              />
              {suggestions.length > 0 && (
                <ul className="mt-4 border border-cream-dark bg-cream/60 backdrop-blur-sm divide-y divide-cream-dark text-left">
                  {suggestions.map((s) => (
                    <li key={s.partyId + s.name}>
                      <button
                        type="button"
                        onClick={() => selectGuest(s.partyId)}
                        className="w-full text-left px-5 py-3 font-display text-lg text-espresso hover:bg-rose hover:text-cream transition-colors"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {query.trim().length >= 2 && suggestions.length === 0 && (
                <p className="mt-4 font-body text-xs uppercase tracking-widest text-rose-dark" style={{ letterSpacing: "0.15em" }}>
                  We couldn&apos;t find that name. Try a different spelling?
                </p>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-8">
            <p className="font-display text-2xl text-espresso italic text-center">
              RSVP for <span className="text-teal">{party.partyName}</span>
            </p>

            {responses.map((r, i) => (
              <div key={r.name} className="border-b border-cream-dark pb-6">
                <p className="font-display text-xl text-espresso mb-3">{r.name}</p>

                <div className="flex gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => updateResponse(i, { attending: true })}
                    className={`flex-1 font-body text-xs uppercase tracking-widest py-2 border transition-colors ${
                      r.attending === true
                        ? "bg-teal text-cream border-teal"
                        : "border-espresso text-espresso hover:bg-espresso hover:text-cream"
                    }`}
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Coming
                  </button>
                  <button
                    type="button"
                    onClick={() => updateResponse(i, { attending: false })}
                    className={`flex-1 font-body text-xs uppercase tracking-widest py-2 border transition-colors ${
                      r.attending === false
                        ? "bg-rose-dark text-cream border-rose-dark"
                        : "border-espresso text-espresso hover:bg-espresso hover:text-cream"
                    }`}
                    style={{ letterSpacing: "0.15em" }}
                  >
                    Regrets
                  </button>
                </div>

                {r.attending === true && (
                  <div>
                    <label className="block font-body text-xs uppercase tracking-widest text-espresso-light mb-1" style={{ letterSpacing: "0.15em" }}>
                      Dietary restrictions or allergies (optional)
                    </label>
                    <input
                      type="text"
                      value={r.dietary}
                      onChange={(e) => updateResponse(i, { dietary: e.target.value })}
                      placeholder="e.g. vegetarian, no peanuts"
                      className="w-full font-body text-sm bg-transparent border-b border-cream-dark text-espresso placeholder:text-espresso-light/50 py-2 outline-none focus:border-teal transition-colors"
                    />
                  </div>
                )}
              </div>
            ))}

            {error && (
              <p className="font-body text-xs uppercase tracking-widest text-rose-dark text-center" style={{ letterSpacing: "0.15em" }}>
                {error}
              </p>
            )}

            <div className="flex gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={() => { setParty(null); setResponses([]); setError(null); }}
                className="font-body text-xs tracking-widest uppercase px-6 py-3 border border-cream-dark text-espresso-light hover:text-espresso hover:border-espresso transition-colors"
                style={{ letterSpacing: "0.15em" }}
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!allAnswered || submitting}
                className="font-body text-xs tracking-widest uppercase px-10 py-3 border border-teal text-teal hover:bg-teal hover:text-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ letterSpacing: "0.15em" }}
              >
                {submitting ? "Sending…" : "Send RSVP"}
              </button>
            </div>
          </form>
        )}
      </section>
    </>
  );
}
