import type { ReactNode } from "react";

export type StoryQuote = {
  text: string;
  attribution: ReactNode;
};

interface StorySectionProps {
  label: string;
  title: string;
  paragraphs: ReactNode[];
  quote?: StoryQuote;
  tone?: "cream" | "sage";
}

export default function StorySection({
  label,
  title,
  paragraphs,
  quote,
  tone = "cream",
}: StorySectionProps) {
  return (
    <section className={`py-16 px-6 ${tone === "sage" ? "bg-sage-cream" : ""}`}>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="font-body text-xs tracking-widest text-teal uppercase mb-4"
          style={{ letterSpacing: "0.15em" }}
        >
          {label}
        </p>
        <h2 className="font-display text-4xl text-espresso font-light mb-8">
          {title}
        </h2>
        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="font-body text-sm leading-relaxed text-espresso-light [&_strong]:font-medium [&_strong]:text-espresso"
            >
              {text}
            </p>
          ))}
        </div>

        {quote && (
          <blockquote className="mt-8 border-t border-cream-dark pt-6">
            <p className="font-display text-lg md:text-xl italic font-light leading-relaxed text-espresso">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer
              className="font-body text-xs tracking-widest text-teal uppercase mt-6"
              style={{ letterSpacing: "0.15em" }}
            >
              &mdash; {quote.attribution}
            </footer>
          </blockquote>
        )}
      </div>
    </section>
  );
}
