"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/the-wedding", label: "The Wedding" },
  // { href: "/rsvp", label: "RSVP" },
  // { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Wedding Photos" },
  { href: "/memory-lane", label: "Memory Lane" },
  // { href: "/boston", label: "Boston" },
  // { href: "/registry", label: "Registry" },
  // { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/login" || pathname.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-cream">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-widest text-espresso uppercase whitespace-nowrap"
          style={{ letterSpacing: "0.2em" }}
        >
          J & S
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${
                  pathname === href
                    ? "text-teal border-b border-teal pb-0.5"
                    : "text-espresso-light hover:text-sage"
                }`}
                style={{ letterSpacing: "0.15em" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-espresso mb-1" />
          <span className="block w-5 h-px bg-espresso mb-1" />
          <span className="block w-5 h-px bg-espresso" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-cream-dark px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-body text-xs tracking-widest uppercase ${
                    pathname === href ? "text-sage" : "text-espresso-light"
                  }`}
                  style={{ letterSpacing: "0.15em" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
