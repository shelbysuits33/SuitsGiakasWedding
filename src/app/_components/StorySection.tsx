interface StorySectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  tone?: "cream" | "sage";
}

export default function StorySection({
  label,
  title,
  paragraphs,
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
              className="font-body text-sm leading-relaxed text-espresso-light"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
