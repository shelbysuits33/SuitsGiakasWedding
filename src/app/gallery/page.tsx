import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import Image from "next/image";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";

// Reference column width (px) used to translate each photo's real aspect
// ratio into a grid row-span, so mixed portrait/landscape photos pack
// tightly instead of leaving whitespace. Tuned for the 3-column desktop
// view; other breakpoints fall back gracefully (see grid-auto-rows below).
const REFERENCE_COLUMN_WIDTH = 320;

function getPhotoDimensions(src: string) {
  const filePath = path.join(process.cwd(), "public", src);
  const { width, height } = imageSize(readFileSync(filePath));
  return { width, height };
}

function getPhotoSpan(width: number, height: number) {
  return Math.max(1, Math.round((height / width) * REFERENCE_COLUMN_WIDTH));
}

const sections: { title: string; photos: { src: string; alt: string }[] }[] = [
  {
    title: "Getting Ready",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-2.jpg", alt: "Iron" },
      { src: "/images/giakassneaks.devstroudphoto-8.jpg", alt: "Makeup" },
      { src: "/images/giakassneaks.devstroudphoto-5.jpg", alt: "Makeup B&W" },
      { src: "/images/giakassneaks.devstroudphoto-1.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-6.jpg", alt: "Winnie" },
      { src: "/images/giakassneaks.devstroudphoto-7.jpg", alt: "Hair" },
      { src: "/images/giakassneaks.devstroudphoto-3.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-9.jpg", alt: "Zip Dress" },
      { src: "/images/giakassneaks.devstroudphoto-4.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-10.jpg", alt: "Steps" },

      //  { src: "/images/IMG_1681.HEIC", alt: "Sneak Peak" },
      //  { src: "/images/IMG_1681.HEIC", alt: "Sneak Peak" },
    ],
  },
  {
    title: "Ceremony",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-11.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-12.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-13.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-14.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-15.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-16.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-17.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-18.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-19.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-20.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-21.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-22.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-23.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-24.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-25.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-26.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-27.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-28.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-29.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-30.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-31.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-32.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-33.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-34.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-35.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-36.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-37.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-38.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-39.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-40.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-41.jpg", alt: "Sneak Peak" },
    ],
  },
  {
    title: "The After Party",
    photos: [
      { src: "/images/giakassneaks.devstroudphoto-42.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-43.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-44.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-45.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-46.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-47.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-48.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-49.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-50.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-51.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-52.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-53.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-54.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-55.jpg", alt: "Sneak Peak" },
      { src: "/images/giakassneaks.devstroudphoto-56.jpg", alt: "Sneak Peak" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Julian & Shelby" variant="rose" />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

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
              Check back closer to the wedding
            </p>
          </div>
        ) : (
          sections.map((section) => (
            <details key={section.title} open className="group mb-12 last:mb-0">
              <summary className="flex items-center justify-between cursor-pointer list-none py-3 border-b border-sage-cream [&::-webkit-details-marker]:hidden">
                <span className="font-display text-2xl text-espresso font-light">
                  {section.title}
                </span>
                <span className="text-sage text-xl transition-transform duration-200 group-open:rotate-180">
                  ⌄
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
    </>
  );
}
