type Variant = "default" | "sage" | "olive" | "muted" | "mist" | "rose" | "espresso";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: Variant;
}

const variantClasses: Record<Variant, { bg: string; title: string; subtitle: string; border: string; divider: string }> = {
  default: {
    bg: "",
    title: "text-espresso",
    subtitle: "text-espresso-light",
    border: "border-cream-dark",
    divider: "opacity-75",
  },
  sage: {
    bg: "bg-sage",
    title: "text-cream",
    subtitle: "text-cream opacity-70",
    border: "border-sage-dark",
    divider: "opacity-65",
  },
  espresso: {
    bg: "bg-espresso",
    title: "text-cream",
    subtitle: "text-cream opacity-70",
    border: "border-espresso",
    divider: "opacity-60",
  },
  olive: {
    bg: "bg-olive",
    title: "text-cream",
    subtitle: "text-cream opacity-70",
    border: "border-olive",
    divider: "opacity-65",
  },
  muted: {
    bg: "bg-espresso-light",
    title: "text-cream",
    subtitle: "text-cream opacity-70",
    border: "border-espresso-light",
    divider: "opacity-60",
  },
  mist: {
    bg: "bg-teal",
    title: "text-cream",
    subtitle: "text-cream-dark",
    border: "border-sage-light",
    divider: "opacity-70",
  },
  rose: {
    bg: "bg-rose",
    title: "text-cream",
    subtitle: "text-cream opacity-70",
    border: "border-rose",
    divider: "opacity-65",
  },
};

export default function PageHeader({ title, subtitle, variant = "default" }: PageHeaderProps) {
  const v = variantClasses[variant];
  return (
    <div className={`relative text-center py-20 px-6 border-b overflow-hidden ${v.bg} ${v.border}`}>

      <h1 className={`font-display text-5xl md:text-6xl font-light relative ${v.title}`}>
        {title}
      </h1>
      {subtitle && (
        <p
          className={`font-body text-xs tracking-widest mt-4 uppercase relative ${v.subtitle}`}
          style={{ letterSpacing: "0.2em" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
