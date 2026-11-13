import type { ReactNode } from "react";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import StorySection, { type StoryQuote } from "../_components/StorySection";

/*
  Blurbs about the wedding day. Replace the [Placeholder] text with your own,
  and add or remove entries as you like.

  Plain text goes in quotes. To format part of a paragraph, wrap it in
  <>...</> and use <em>italic</em> or <strong>bold</strong> inside.
*/
const sections: {
  label: string;
  title: string;
  paragraphs: ReactNode[];
  quote?: StoryQuote;
}[] = [
  {
    label: "Friday, September 25, 2026",
    title: "The Ceremony",
    paragraphs: [
      "The ceremony took place at Lindsey Chapel at Emmanuel Church on Newbury Street in Boston.",
      <>
        Julian and the wedding party walked down the aisle to their song, “You
        and Me” by Penny &amp; the Quarters. Shelby and her parents walked to
        “They Long to Be (Close to You)” by the Carpenters, one of her late Aunt
        Vicki&apos;s favorite songs. The ceremony concluded with the
        recessional, “This Will Be (An Everlasting Love)” by Natalie Cole.
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
    paragraphs: [
      "Their immediate families flew in from Michigan, Illinois, and New Jersey to celebrate with them.",
      "Shelby's older sister, Kyla, served as maid of honor. Julian's brothers, Andreas and Sebastian, stood beside him as co-best men.",
    ],
  },
  {
    label: "Dinner & Drinks",
    title: "The Party",
    paragraphs: [
      "The celebration continued at Mamma Maria in the North End with dinner, drinks, and dessert.",
      "They chose Mamma Maria as a nod to Julian's Italian heritage and because it's one of their favorite restaurants in Boston. Shelby wore her late Great-Aunt Sue's 1982 wedding dress, a special way to honor her memory.",
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

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Divider />
      </div>

      {sections.map((section, i) => (
        <StorySection
          key={section.title}
          label={section.label}
          title={section.title}
          paragraphs={section.paragraphs}
          quote={section.quote}
          tone={i % 2 === 1 ? "sage" : "cream"}
        />
      ))}
    </>
  );
}
