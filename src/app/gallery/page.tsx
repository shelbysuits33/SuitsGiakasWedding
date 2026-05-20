import Image from "next/image";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";

/*
  Drop your photos into /public/images/ and add them to this array.
  Format: { src: "/images/your-photo.jpg", alt: "Description" }
*/
const photos: { src: string; alt: string }[] = [
  // { src: "/images/photo1.jpg", alt: "Julian and Shelby in Florence" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Julian & Shelby" variant="rose" />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {photos.length === 0 ? (
          <div className="text-center py-24 relative">
            <p className="font-display text-3xl text-espresso font-light italic" style={{ opacity: 0.7 }}>
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
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
