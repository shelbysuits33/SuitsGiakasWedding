import Image from "next/image";
import Link from "next/link";
import { V2 } from "@/lib/flags";
import { getPhotoDimensions } from "./_components/photoDimensions";

const photo = {
  src: "/images/gallery/shelbyjulianwedding.devstroudphoto-766.jpg",
  alt: "Shelby's bouquet of pink flowers, held beside Julian",
};

export default function Home() {
  const { width, height } = getPhotoDimensions(photo.src);
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-12 pb-4 relative overflow-hidden">
        {/* Content */}
        <p
          className="font-display text-sm md:text-base tracking-widest text-teal uppercase mb-6 relative max-w-md leading-relaxed"
          style={{ letterSpacing: "0.2em" }}
        >
          9 • 25 • 2026
        </p>

        <h1 className="font-script text-[9vw] md:text-5xl lg:text-6xl text-espresso font-normal leading-[1.1] relative">
          <span className="whitespace-nowrap">Shelby Renae</span>
          <br />
          <span className="text-espresso-light">&amp;</span>
          <br />
          <span className="whitespace-nowrap">Julian Anthony</span>
        </h1>

        <div className="mt-8 flex items-center gap-4 text-teal relative">
          <span className="block w-12 h-px bg-gold" />
          <p
            className="font-display text-xs md:text-sm tracking-widest uppercase"
            style={{ letterSpacing: "0.2em" }}
          >
            Boston, Massachusetts
          </p>
          <span className="block w-12 h-px bg-gold" />
        </div>
        {V2 && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative">
            <Link
              href="/rsvp"
              className="font-body text-xs tracking-widest uppercase px-8 py-3 border border-teal text-teal hover:bg-teal hover:text-cream transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Répondez s&apos;il vous plaît
            </Link>
          </div>
        )}
      </section>

      {/* Details strip */}
      {/* <section className="bg-rose border-t border-b border-rose-dark grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rose-dark">
        <div className="py-14 px-10 text-center">
          <p
            className="font-body text-xs tracking-widest text-cream-dark uppercase mb-3"
            style={{ letterSpacing: "0.2em" }}
          >
            Save the Date
          </p>
          <p className="font-display text-2xl text-cream">9 · 25 · 2026</p>
          <p className="font-body text-sm text-cream-dark mt-1">Friday</p>
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
          <p className="font-display text-2xl text-cream">Lindsey Chapel</p>
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
      </section> */}

      {/* Featured photo */}
      <section className="pt-10 pb-24 px-6 text-center max-w-2xl mx-auto relative">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={width}
          height={height}
          className="w-full h-auto block"
          sizes="(max-width: 672px) 100vw, 624px"
        />
        <div className="mt-10 flex justify-center gap-8">
          {V2 && (
            <Link
              href="/our-story"
              className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
              style={{ letterSpacing: "0.15em" }}
            >
              Our Story
            </Link>
          )}
          <Link
            href="/the-wedding"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            The Wedding
          </Link>
          <Link
            href="/gallery"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Wedding Photos
          </Link>
          <Link
            href="/memory-lane"
            className="font-body text-xs tracking-widest uppercase text-sage border-b border-sage pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
            style={{ letterSpacing: "0.15em" }}
          >
            Memory Lane
          </Link>
        </div>
      </section>
    </>
  );
}
