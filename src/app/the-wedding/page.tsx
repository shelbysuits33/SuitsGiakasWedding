import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import StorySection from "../_components/StorySection";

/*
  Blurbs about the wedding day. Replace the [Placeholder] text with your own,
  and add or remove entries as you like.
*/
const sections: {
  label: string;
  title: string;
  paragraphs: string[];
}[] = [
  {
    label: "Friday, September 25, 2026",
    title: "The Ceremony",
    paragraphs: [
      "Our ceremony took place att Lindsey Chapel at Emmanuel Church on Newbury Street in Boston.",
      "Julian and the wedding party walked down the aisle to Julian and Shelby's song, You and Me by Penny & The Quarters. Shelby and her parents walked to They Long To Be (Close To You) by the Carpenter, one of Shelby's late Aunt Vicki's favorite songs. The ceremony concluded with the recessional, This Will Be (An Everlasting Loc) by Natalie Cole.",
    "The lovely Leslie Zweis officiated the ceremony; she gave a wonderful reflection on partnership and love. Shelby's mother, Diane, read a passage from Les Miserables by Victor Hugo, as seen below."
    ],
  },
  {
    label: "Standing Beside Us",
    title: "The Wedding Party",
    paragraphs: [
      "[Placeholder] Introduce the people standing up with you: who they are, how you know them, and why they matter to you.",
    ],
  },
  {
    label: "Celebrating With Us",
    title: "The Guests",
    paragraphs: [
      "[Placeholder] Say a few words about the family and friends joining you, and what it means to have them there.",
    ],
  },
  {
    label: "Dinner & Drinks",
    title: "The Party",
    paragraphs: [
      "The evening continues at Mamma Maria in the North End with dinner, drinks, and dessert.",
      "[Placeholder] Add a personal touch here about what you're looking forward to most at the celebration.",
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
          tone={i % 2 === 1 ? "sage" : "cream"}
        />
      ))}
    </>
  );
}
