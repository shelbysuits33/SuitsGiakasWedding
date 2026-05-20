import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        {/* Content */}
        <p
          className="font-body text-xs tracking-widest text-teal uppercase mb-8 relative"
          style={{ letterSpacing: "0.25em" }}
        >
          Friday, September 25, 2026
        </p>

        <h1 className="font-display text-[14vw] md:text-8xl lg:text-9xl text-espresso font-light leading-none relative">
          <span className="whitespace-nowrap">Shelby Renae</span>
          <br />
          <span className="italic text-espresso-light">&amp;</span>
          <br />
          <span className="whitespace-nowrap">Julian Anthony</span>
        </h1>

        <div className="mt-10 flex items-center gap-4 text-teal relative">
          <span className="block w-12 h-px bg-espresso-light" />
          <p
            className="font-body text-xs tracking-widest uppercase"
            style={{ letterSpacing: "0.2em" }}
          >
            Boston, Massachusetts
          </p>
          <span className="block w-12 h-px bg-teal" />
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 relative">
          <Link
            href="/schedule"
            className="font-body text-xs tracking-widest uppercase px-8 py-3 border border-teal text-teal hover:bg-teal hover:text-cream transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            View Schedule
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6 text-espresso-light">
      </div>

      {/* Details strip */}
      <section className="bg-rose border-t border-b border-rose-dark grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rose-dark">
        <div className="py-14 px-10 text-center">
          <p
            className="font-body text-xs tracking-widest text-cream-dark uppercase mb-3"
            style={{ letterSpacing: "0.2em" }}
          >
            Save the Date
          </p>
          <p className="font-display text-2xl text-cream">9 · 25 · 2026</p>
          <p className="font-body text-sm text-cream-dark mt-1">
            Friday
          </p>
          <p className="font-body text-sm text-cream-dark">
            Boston, Massachusetts
          </p>
        </div>
        <div className="py-14 px-10 text-center">
          <p
            className="font-body text-xs tracking-widest text-cream-dark uppercase mb-3"
            style={{ letterSpacing: "0.2em" }}
          >
            Ceremony
          </p>
          <p className="font-display text-2xl text-cream">Lindsay Chapel</p>
          <p className="font-body text-sm text-cream-dark mt-1">
            Emmanuel Church, Newbury Street
          </p>
          <p className="font-body text-sm text-cream-dark">1:30 PM</p>
        </div>

        <div className="py-14 px-10 text-center">
          <p
            className="font-body text-xs tracking-widest text-cream-dark uppercase mb-3"
            style={{ letterSpacing: "0.2em" }}
          >
            Reception
          </p>
          <p className="font-display text-2xl text-cream">Mamma Maria</p>
          <p className="font-body text-sm text-cream-dark mt-1">
            North End, Boston
          </p>
          <p className="font-body text-sm text-cream-dark">6:00 PM</p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center py-6 text-espresso-light">
      </div>

      {/* Mood quote */}
      <section className="py-24 px-6 text-center max-w-2xl mx-auto relative">
        <p className="font-display text-3xl md:text-4xl text-espresso font-light italic leading-relaxed">
          &ldquo;Come celebrate with us in the city we love.&rdquo;
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <Link
            href="/boston"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Explore Boston
          </Link>
          <Link
            href="/gallery"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Our Gallery
          </Link>
          <Link
            href="/registry"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Registry
          </Link>
        </div>
      </section>
    </>
  );
}