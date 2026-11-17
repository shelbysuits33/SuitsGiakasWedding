import Image from "next/image";
import { getPhotoDimensions } from "./photoDimensions";

export type PhotoSection = {
  title: string;
  photos: { src: string; alt: string }[];
};

// Reference column width (px) used to translate each photo's real aspect
// ratio into a grid row-span, so mixed portrait/landscape photos pack
// tightly instead of leaving whitespace. Tuned for the 3-column desktop
// view; other breakpoints fall back gracefully (see grid-auto-rows below).
const REFERENCE_COLUMN_WIDTH = 320;

function getPhotoSpan(width: number, height: number) {
  return Math.max(1, Math.round((height / width) * REFERENCE_COLUMN_WIDTH));
}

export default function PhotoSections({
  sections,
  emptyNote,
}: {
  sections: PhotoSection[];
  emptyNote: string;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      {sections.length === 0 ? (
        <div className="text-center py-24 relative">
          <p
            className="font-display text-3xl text-espresso font-light italic"
            style={{ opacity: 0.7 }}
          >
            Photos coming soon.
          </p>
          <p
            className="font-body text-xs tracking-widest text-teal uppercase mt-4"
            style={{ letterSpacing: "0.15em" }}
          >
            {emptyNote}
          </p>
        </div>
      ) : (
        sections.map((section) => (
          <details key={section.title} className="group mb-6 last:mb-0">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 border border-sage-cream transition-colors hover:border-teal hover:bg-sage-cream/40 focus-visible:outline-2 focus-visible:outline-teal [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block font-display text-2xl text-espresso font-light">
                  {section.title}
                </span>
                <span
                  className="block font-body text-xs tracking-widest text-espresso-light uppercase mt-1"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {section.photos.length}{" "}
                  {section.photos.length === 1 ? "photo" : "photos"}
                </span>
              </span>
              <span className="flex items-center gap-3 shrink-0">
                <span
                  className="font-body text-xs tracking-widest text-teal uppercase"
                  style={{ letterSpacing: "0.15em" }}
                >
                  <span className="group-open:hidden">View</span>
                  <span className="hidden group-open:inline">Hide</span>
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-teal text-teal transition-transform duration-200 group-open:rotate-180">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 5l4 4 4-4" />
                  </svg>
                </span>
              </span>
            </summary>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 mt-6 items-start"
              style={{
                gridAutoRows: "minmax(1px, auto)",
                gridAutoFlow: "dense",
                rowGap: 0,
              }}
            >
              {section.photos.map((photo, i) => {
                const { width, height } = getPhotoDimensions(photo.src);
                const span = getPhotoSpan(width, height);
                return (
                  <div
                    key={i}
                    className="pb-4"
                    style={{ gridRowEnd: `span ${span}` }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={width}
                      height={height}
                      className="w-full h-auto block"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                );
              })}
            </div>
          </details>
        ))
      )}
    </section>
  );
}
