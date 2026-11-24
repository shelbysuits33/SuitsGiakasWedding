import type { ReactNode } from "react";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import StorySection, {
  type StoryPhoto,
  type StoryQuote,
} from "../_components/StorySection";

/*
  Blurbs about the wedding day. Replace the [Placeholder] text with your own,
  and add or remove entries as you like.

  Plain text goes in quotes. To format part of a paragraph, wrap it in
  <>...</> and use <em>italic</em> or <strong>bold</strong> inside.

  To add photos to a section, give it a photos list, for example:
    photos: [
      { src: "/images/gallery/after-party/shelbyjulianwedding.devstroudphoto-704.jpg",
        alt: "Shelby and Julian at dinner" },
    ],
  They appear under the paragraphs (one photo centered, two or more side by
  side). A section with no photos list shows no photos.
*/
const sections: {
  label: string;
  title: string;
  paragraphs: ReactNode[];
  photos?: StoryPhoto[];
  quote?: StoryQuote;
}[] = [
  {
    label: "Friday, September 25, 2026",
    title: "The Ceremony",
    photos: [
      {
        src: "/images/gallery/ceremony/shelbyjulianwedding.devstroudphoto-446.jpg",
        alt: "Shelby and Julian sharing a quiet moment at the altar of Lindsey Chapel",
      },
    ],
    paragraphs: [
      "The ceremony took place at Lindsey Chapel at Emmanuel Church on Newbury Street in Boston.",
      <>
        Julian and the wedding party walked down the aisle to “You and Me” by
        Penny &amp; the Quarters. Shelby and her parents walked to “They Long to
        Be (Close to You)” by the Carpenters, one of her late Aunt Vicki&apos;s
        favorite songs. The ceremony concluded with the recessional, “This Will
        Be (An Everlasting Love)” by Natalie Cole.
      </>,
      <>
        The lovely Leslie Zweis officiated and gave a wonderful reflection on
        partnership and love. Shelby&apos;s mother, Diane, read a passage from{" "}
        <em>Les Misérables</em> by Victor Hugo, which is shared below.
      </>,
    ],
    quote: {
      text: "You can give without loving, but you can never love without giving. The great acts of love are done by those who are habitually performing small acts of kindness. We pardon to the extent that we love. Love is knowing that even when you are alone, you will never be lonely again. And great happiness of life is the conviction that we are loved. Loved for ourselves. And even loved in spite of ourselves.",
      attribution: (
        <>
          Victor Hugo, <em>Les Misérables</em>
        </>
      ),
    },
  },
  {
    label: "Celebrating With Them",
    title: "The Guests",
    photos: [
      {
        src: "/images/gallery/family-photos/shelbyjulianwedding.devstroudphoto-498.jpg",
        alt: "Shelby, Julian, and their families by the pond in the Public Garden",
      },
      {
        src: "/images/gallery/family-photos/shelbyjulianwedding.devstroudphoto-512.jpg",
        alt: "Shelby and Julian with their families under the willow trees",
      },
    ],
    paragraphs: [
      "Their immediate families flew in from Michigan, Illinois, and New Jersey to celebrate with them.",
      "Shelby's older sister, Kyla, served as maid of honor. Julian's brothers, Andreas and Sebastian, stood beside him as co-best men.",
    ],
  },
  {
    label: "Dinner & Drinks",
    title: "The Party",
    photos: [
      {
        src: "/images/gallery/after-party/shelbyjulianwedding.devstroudphoto-544.jpg",
        alt: "Mamma Maria in the North End at night",
      },
      {
        src: "/images/gallery/after-party/shelbyjulianwedding.devstroudphoto-724.jpg",
        alt: "Shelby and Julian posing together in the dining room at Mamma Maria",
      },
    ],
    paragraphs: [
      "The celebration continued at Mamma Maria in the North End with dinner, drinks, and dessert.",
      "They chose Mamma Maria as a nod to Julian's Italian heritage and because it's one of their favorite restaurants in Boston. Shelby wore her late Great-Aunt Sue's 1986 wedding dress.",
    ],
  },
];

export default function TheWeddingPage() {
  return (
    <>
      <PageHeader
        title="The Wedding"
        subtitle="Julian & Shelby"
        variant="rose"
      />

      {sections.map((section, i) => (
        <StorySection
          key={section.title}
          label={section.label}
          title={section.title}
          paragraphs={section.paragraphs}
          photos={section.photos}
          quote={section.quote}
          tone={i % 2 === 1 ? "sage" : "cream"}
        />
      ))}
    </>
  );
}
