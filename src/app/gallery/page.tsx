import { readdirSync } from "node:fs";
import path from "node:path";
import BackToTop from "../_components/BackToTop";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import PhotoSections, { type PhotoSection } from "../_components/PhotoSections";

/*
  Photos live in public/images/gallery and are named
  <prefix>.devstroudphoto-<number>.jpg. Each section below lists which photo
  numbers belong to it: a plain number, or a [first, last] range (inclusive).
  Photos show in the order listed, wedding photos first, then film photos
  (or film first, if the section sets filmFirst). A section with reversed shows
  the whole list backwards. A section with first puts those photos at the top
  (and removes them from the rest of its list), even when it is reversed.
  A section with priority claims its photos: they are removed from every other
  section, so a photo can be moved to Portraits just by adding its number there.
  Numbers with no file (a few are missing from the download) are skipped.
*/
type PhotoNumbers = (number | [number, number])[];

const GALLERY_DIR = "images/gallery";

function loadPhotos(
  galleryFiles: Set<string>,
  prefix: string,
  alt: string,
  numbers: PhotoNumbers,
) {
  return numbers
    .flatMap((n) =>
      typeof n === "number"
        ? [n]
        : Array.from({ length: n[1] - n[0] + 1 }, (_, i) => n[0] + i),
    )
    .map((n) => ({ n, file: `${prefix}.devstroudphoto-${n}.jpg` }))
    .filter(({ file }) => galleryFiles.has(file))
    .map(({ n, file }) => ({
      src: `/${GALLERY_DIR}/${file}`,
      alt: `${alt} ${n}`,
    }));
}

const sectionDefinitions: {
  title: string;
  wedding: PhotoNumbers;
  film: PhotoNumbers;
  filmFirst?: boolean;
  priority?: boolean;
  reversed?: boolean;
  first?: { wedding?: PhotoNumbers; film?: PhotoNumbers };
}[] = [
  {
    title: "Shelby Getting Ready",
    wedding: [
      [55, 167],
      [213, 221],
      [224, 241],
    ],
    film: [1, 2, 7, 9, 42, 48, 49],
    filmFirst: true,
  },
  {
    title: "Julian Getting Ready",
    wedding: [
      [1, 54],
      [168, 209],
      [222, 223],
    ],
    film: [3, 10, 11],
  },
  {
    title: "Ceremony",
    wedding: [
      [210, 212],
      [242, 450],
    ],
    film: [4, 41, 50, 51, 52, 53, 54],
  },
  {
    title: "Portraits",
    // The couple's park session, then Shelby alone, then Julian alone.
    // Only photos of the two of them: no other guests or family.
    wedding: [
      [726, 775],
      [778, 818],
      [133, 167],
      [228, 239],
      [182, 201],
    ],
    film: [2, 5, 6, 7, 8, 12, 15, 42, 48, 49, 55, 56, 57, 59],
    priority: true,
    reversed: true,
    first: { film: [43] },
  },
  {
    title: "Family Photos",
    wedding: [
      [451, 512],
      [724, 961],
    ],
    film: [5, 6, 8, 12, 15, 55, 56, 57, 58, 59],
  },
  {
    title: "After Party",
    // Photos of the two of them lead the section. Then the empty tables and
    // place settings, then the dinner (the photographer put those table shots
    // last). The street photos outside the restaurant come near the end,
    // followed by 516, 513, 546 and 553 (two men laughing, the hug and the two
    // window shots).
    first: {
      wedding: [704, 664, 651, 615, 561, 564],
    },
    wedding: [
      661,
      [709, 713],
      717,
      722,
      [554, 660],
      [662, 708],
      [714, 716],
      [718, 721],
      723,
      [514, 515],
      [517, 545],
      [547, 552],
      516,
      513,
      546,
      553,
    ],
    film: [[16, 37], 44, 45, 46, 60],
  },
];

// Read the folder on every render so deleted photos drop out without a restart.
function loadSections(): PhotoSection[] {
  const galleryFiles = new Set(
    readdirSync(path.join(process.cwd(), "public", GALLERY_DIR)),
  );
  const sections = sectionDefinitions.map(
    ({ title, wedding, film, filmFirst, priority, reversed, first }) => {
      const leadPhotos = [
        ...loadPhotos(
          galleryFiles,
          "shelbyjulianwedding",
          "Wedding photo",
          first?.wedding ?? [],
        ),
        ...loadPhotos(
          galleryFiles,
          "shelbyjulianfilm",
          "Film photo",
          first?.film ?? [],
        ),
      ];
      const weddingPhotos = loadPhotos(
        galleryFiles,
        "shelbyjulianwedding",
        "Wedding photo",
        wedding,
      );
      const filmPhotos = loadPhotos(
        galleryFiles,
        "shelbyjulianfilm",
        "Film photo",
        film,
      );
      const ordered = filmFirst
        ? [...filmPhotos, ...weddingPhotos]
        : [...weddingPhotos, ...filmPhotos];
      // Lead photos always come first, even in a reversed section; drop their
      // later duplicates.
      const leadSrcs = new Set(leadPhotos.map((p) => p.src));
      const rest = ordered.filter((p) => !leadSrcs.has(p.src));
      return {
        title,
        priority,
        photos: [...leadPhotos, ...(reversed ? rest.reverse() : rest)],
      };
    },
  );

  const claimed = new Set(
    sections.flatMap((s) => (s.priority ? s.photos.map((p) => p.src) : [])),
  );
  return sections.map(({ title, priority, photos }) => ({
    title,
    photos: priority ? photos : photos.filter((p) => !claimed.has(p.src)),
  }));
}

export default function GalleryPage() {
  const sections = loadSections();
  return (
    <>
      <PageHeader
        title="Wedding Photos"
        subtitle="Julian & Shelby"
        variant="rose"
      />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

      <PhotoSections
        sections={sections}
        emptyNote="Check back closer to the wedding"
      />

      <BackToTop />
    </>
  );
}
