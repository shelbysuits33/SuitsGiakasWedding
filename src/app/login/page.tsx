"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reveal, setReveal] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setError(true);
        setPassword("");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <p
        className="font-display text-xl tracking-widest text-espresso uppercase mb-3"
        style={{ letterSpacing: "0.25em" }}
      >
        J &amp; S
      </p>
      <p
        className="font-body text-xs tracking-widest text-teal uppercase mb-12"
        style={{ letterSpacing: "0.2em" }}
      >
        Friday, September 25, 2026
      </p>

      <h1 className="font-display text-4xl md:text-5xl text-espresso font-light italic mb-3">
        A private celebration
      </h1>
      <p className="font-body text-sm text-espresso-light max-w-sm mx-auto mb-10">
        Please enter the password shared with your invitation to continue.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label htmlFor="pw" className="sr-only">
          Password
        </label>
        <div className="relative">
          <input
            id="pw"
            type={reveal ? "text" : "password"}
            autoComplete="off"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Password"
            className="w-full text-center font-body text-base bg-transparent border-b border-espresso text-espresso placeholder:text-espresso-light/60 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-sm py-3 px-16 outline-none focus:border-teal transition-colors"
          />
          <button
            type="button"
            onClick={() => setReveal((v) => !v)}
            aria-label={reveal ? "Hide password" : "Show password"}
            className="absolute right-0 top-1/2 -translate-y-1/2 font-body text-[10px] tracking-widest text-espresso-light hover:text-teal uppercase px-2 py-1 transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            {reveal ? "Hide" : "Show"}
          </button>
        </div>

        <div className="h-6 mt-3">
          {error && (
            <p className="font-body text-xs text-rose-dark uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
              That password isn&apos;t quite right
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || password.length === 0}
          className="mt-6 font-body text-xs tracking-widest uppercase px-10 py-3 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ letterSpacing: "0.15em" }}
        >
          {loading ? "Entering…" : "Enter"}
        </button>
      </form>
    </main>
  );
}
