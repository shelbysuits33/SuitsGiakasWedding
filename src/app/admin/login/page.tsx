"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/admin");
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
        className="font-display text-xl tracking-widest text-espresso uppercase mb-12"
        style={{ letterSpacing: "0.25em" }}
      >
        Admin
      </p>

      <h1 className="font-display text-3xl md:text-4xl text-espresso font-light italic mb-3">
        Manage RSVPs
      </h1>
      <p className="font-body text-sm text-espresso-light max-w-sm mx-auto mb-10">
        Enter the admin password to view responses.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label htmlFor="pw" className="sr-only">
          Password
        </label>
        <input
          id="pw"
          type="password"
          autoComplete="off"
          autoFocus
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Password"
          className="w-full text-center font-body text-base bg-transparent border-b border-espresso text-espresso placeholder:text-espresso-light/60 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-sm py-3 outline-none focus:border-teal transition-colors"
        />

        <div className="h-6 mt-3">
          {error && (
            <p
              className="font-body text-xs text-rose-dark uppercase tracking-widest"
              style={{ letterSpacing: "0.15em" }}
            >
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
