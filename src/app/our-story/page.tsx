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
      "[Placeholder] Tell the story of how you two met: where it was, when it happened, and what you remember most about that first meeting.",
      "[Placeholder] Add a second paragraph about the early days: the first date, the moment you knew.",
    ],
  },
  {
    label: "Chapter Two",
    title: "Our Travels",
    paragraphs: [
      "[Placeholder] Share a few of the trips that shaped your relationship: favorite places, funny travel mishaps, and the adventures you still want to take.",
    ],
  },
  {
    label: "Chapter Three",
    title: "The Engagement",
    paragraphs: [
      "[Placeholder] Share the story of the proposal: where it happened, how it felt, and how the two of you celebrated afterward.",
    ],
  },
  {
    label: "Chapter Four",
    title: "Our Life Together",
    paragraphs: [
      "[Placeholder] Write about the life you've built together: your home, your routines, the traditions that are yours, and what you're looking forward to next.",
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
