import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";
import StorySection from "../_components/StorySection";

/*
  Replace the placeholder paragraphs below with your own story.
  Each section takes a small label, a title, and one or more paragraphs.
*/
const sections: {
  label: string;
  title: string;
  paragraphs: string[];
}[] = [
  {
    label: "Chapter One",
    title: "How We Met",
    paragraphs: [
      "Julian and Shelby met in college, the way a lot of good things happen: they got assigned to the same group project.",
      "They got an A on the project. Neither of them could have said at the time that it would turn into anything more than a grade, but it did.",
    ],
  },
  {
    label: "Chapter Two",
    title: "Our Travels",
    paragraphs: [
      "Julian and Shelby like to travel. Abroad, that has meant Turkey, Greece, Spain, Italy, Belgium, the Netherlands, and Vatican City.",
      "At home, it has meant Maine, New Jersey, Philadelphia, Delaware, Tennessee, Washington, D.C., Michigan, Illinois, Missouri, Vermont, and a good number of other states too.",
    ],
  },
  {
    label: "Chapter Three",
    title: "The Engagement",
    paragraphs: [
      "During Julian's last semester of medical school, the two of them took a three-week trip through Greece and Turkey.",
      "They got engaged in Istanbul.",
    ],
  },
  {
    label: "Chapter Four",
    title: "Our Life Together",
    paragraphs: [
      "After college, Julian started medical school in St. Louis, and Shelby spent a couple of years traveling. She moved to St. Louis during his fourth year, and they adopted a cat, Winnifred.",
      "When Julian matched to a urology program in Boston, they moved there together. Last spring, they settled into their dream apartment.",
      "They like to watch movies, play pickleball, go for walks, and visit art museums. They also like trying new restaurants, and hosting friends at their apartment.",
    ],
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHeader title="Our Story" subtitle="Julian & Shelby" variant="rose" />

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
