import { existsSync } from "node:fs";
import path from "node:path";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import PhotoSections, { type PhotoSection } from "../_components/PhotoSections";

/*
  Photos live in public/images/memory-lane. Each line below is
  [file name without .jpg, description for screen readers], grouped by year in
  the order they were taken. "More Memories" holds photos with no date saved in
  the file. To add a photo, drop the .jpg into that folder and add a line to
  the right year. To add another group, add another { title, photos } entry.
*/
const memories: { title: string; photos: [string, string][] }[] = [
  {
    title: "2021",
    photos: [
      ["img_6756", "Julian and Shelby in a lively crowd at night"],
      ["img_7186", "Julian and Shelby dressed up for the MBA formal"],
      ["img_7187", "Julian and Shelby at the MBA formal"],
      ["img_0086", "Julian and Shelby at a restaurant table"],
      ["img_0177", "Julian and Shelby with friends around a fire pit"],
      ["img_7293", "Julian and Shelby on graduation day"],
      ["img_0286", "Julian and Shelby after a white coat ceremony"],
      ["img_0597", "Julian and Shelby sitting together indoors"],
      ["fullsizerender", "Julian and Shelby on a city overlook"],
      ["img_7811", "Julian and Shelby curled up in bed with stuffed animals"],
      ["img_0039", "Julian and Shelby on the beach"],
      ["img_0535", "Julian and Shelby in front of the White House"],
      ["img_1399", "Julian and Shelby on a mountain overlook"],
      ["img_9379", "Julian and Shelby with a friend on a sidewalk"],
      ["img_9849", "Julian and Shelby laughing together on the floor"],
    ],
  },
  {
    title: "2022",
    photos: [
      ["img_5727", "Julian and Shelby at the Trevi Fountain"],
      ["img_5864", "Julian and Shelby at the Colosseum"],
      ["img_6165", "Margherita pizzas at dinner"],
      ["img_6467", "Julian and Shelby on a sunny street with backpacks"],
      ["img_6540", "Julian and Shelby on a balcony above the sea"],
      ["img_4397", "Julian and Shelby in a selfie beside a river"],
      ["img_6944", "Julian and Shelby among wine barrels"],
      ["img_4660", "Julian and Shelby in front of the Sagrada Família"],
      ["img_7577", "Julian holding a gift basket"],
      ["img_5230", "Julian and Shelby with friends at a concert"],
      ["img_6186", "Julian and Shelby with friends on a couch"],
      ["img_8477", "Julian and Shelby in masks on a plane"],
    ],
  },
  {
    title: "2023",
    photos: [
      ["img_0232", "Julian and Shelby in a golden-hour selfie"],
      ["img_2006", "Julian and Shelby in a selfie"],
      ["img_8014", "Julian and Shelby hugging in a kitchen"],
      ["img_8924", "Julian and Shelby in the snow with a dog"],
      ["img_3929", "Julian and Shelby dressed up for a formal"],
    ],
  },
  {
    title: "2024",
    photos: [
      ["img_0808", "Julian and Shelby at a ballpark"],
      ["img_2675", "Julian and Shelby looking out over the water at sunset"],
      ["img_3190", "Julian and Shelby in costume"],
      ["img_0073", "Julian and Shelby holding drinks, posing together"],
      ["img_2192", "Julian and Shelby with glasses of wine"],
    ],
  },
  {
    title: "2025",
    photos: [
      ["img_7573", 'Julian holding an "I Matched!" sign'],
      ["img_4712", "Julian and Shelby in front of ancient ruins"],
      ["img_8365", "Julian and Shelby on a hilltop above a city"],
      ["img_5166", "Shelby walking down a whitewashed lane below a rocky hill"],
      [
        "img_9850",
        "Julian and Shelby sharing a quiet moment on a waterfront balcony",
      ],
      [
        "img_9495",
        "Julian and Shelby embracing above the water with a city skyline behind them",
      ],
      ["img_9793", "Julian and Shelby in front of a canyon landscape"],
      ["img_1026", "Julian and Shelby on a lawn on graduation day"],
      ["img_4478", "Julian and Shelby in front of a U-Haul truck"],
      ["img_1684", "Julian and Shelby in a lobster photo cutout"],
      ["img_3779", "Julian and Shelby in an ornate theater lobby"],
      ["img_3812", "Julian and Shelby in a selfie at the theater"],
      ["img_4779", "Julian and Shelby in a snowy selfie"],
    ],
  },
  {
    title: "2026",
    photos: [
      ["img_0510", "Julian and Shelby with friends on a patio at night"],
      ["img_6597", "Julian and Shelby dressed up for an event"],
      ["img_6973", "Julian and Shelby in front of red rock formations"],
      ["img_0931", "Julian and Shelby at dinner"],
      ["img_0957", "Julian and Shelby dressed up in front of a vineyard"],
    ],
  },
  {
    title: "More Memories",
    photos: [
      [
        "a8c20a8e-05d3-4e06-a90e-4f49362ac3ce",
        "Julian and Shelby in a silly airport selfie",
      ],
      ["img_3903", "Julian and Shelby in a selfie"],
      ["img_5809", "Julian and Shelby at a dimly lit bar"],
      ["img_6711", "Julian and Shelby in a bright selfie"],
      ["img_7165", "Julian and Shelby dressed up at a party"],
      ["img_7771", "Julian and Shelby in caps on a hike"],
    ],
  },
];

// Check the folder on every render so a deleted photo just drops out of the
// page (and a section with no photos left disappears) instead of erroring.
function loadSections(): PhotoSection[] {
  return memories
    .map(({ title, photos }) => ({
      title,
      photos: photos
        .filter(([file]) =>
          existsSync(
            path.join(
              process.cwd(),
              "public/images/memory-lane",
              `${file}.jpg`,
            ),
          ),
        )
        .map(([file, alt]) => ({
          src: `/images/memory-lane/${file}.jpg`,
          alt,
        })),
    }))
    .filter((section) => section.photos.length > 0);
}

export default function MemoryLanePage() {
  const sections = loadSections();
  return (
    <>
      <PageHeader
        title="Memory Lane"
        subtitle="Julian & Shelby"
        variant="rose"
      />

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider className="mb-6" />
      </div>

      <PhotoSections sections={sections} emptyNote="More photos on the way" />
    </>
  );
}
