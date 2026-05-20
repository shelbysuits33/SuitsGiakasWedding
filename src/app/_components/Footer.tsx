"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/login") return null;

  return (
    <footer className="border-t border-cream-dark py-10 text-center">
      <p className="font-display text-2xl text-espresso italic">
        Julian & Shelby
      </p>
      <p
        className="font-body text-xs tracking-widest text-espresso-light mt-2 uppercase"
        style={{ letterSpacing: "0.15em" }}
      >
        September 25, 2026 · Boston, Massachusetts
      </p>
    </footer>
  );
}
