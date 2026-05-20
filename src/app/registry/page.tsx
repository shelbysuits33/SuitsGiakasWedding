import PageHeader from "../_components/PageHeader";

/*
  Add your registry links here.
  Replace the href values with your actual registry URLs.
*/
const registries: {
  name: string;
  description: string;
  href: string;
}[] = [
    // {
    //   name: "Crate & Barrel",
    //   description: "Home goods, kitchen, and entertaining",
    //   href: "https://www.crateandbarrel.com/gift-registry/...",
    // },
  ];

export default function RegistryPage() {
  return (
    <>
      <PageHeader title="Registry" subtitle="Gifts & wishes" variant="rose" />

      <section className="max-w-2xl mx-auto px-6 py-20">
        <p className="font-display text-2xl text-espresso font-light italic text-center mb-16 leading-relaxed" style={{ opacity: 0.85 }}>
          Your presence at our wedding is the greatest gift of all. For those
          who wish to celebrate us further, we&apos;ve registered at the
          following:
        </p>

        {registries.length === 0 ? (
          <div className="text-center py-12 relative">
            <p className="font-display text-2xl text-espresso font-light italic" style={{ opacity: 0.6 }}>
              Registry links coming soon.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {registries.map((reg) => (
              <a
                key={reg.name}
                href={reg.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-cream-dark hover:border-sage p-8 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl text-espresso group-hover:text-sage transition-colors">
                      {reg.name}
                    </p>
                    <p className="font-body text-sm mt-1 text-espresso-light">
                      {reg.description}
                    </p>
                  </div>
                  <span className="text-sage text-xl">→</span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16 text-espresso-light">
        </div>

        <div className="mt-8 border-t border-cream-dark pt-12 text-center">
          <p
            className="font-body text-xs tracking-widest text-teal uppercase mb-4"
            style={{ letterSpacing: "0.15em" }}
          >
            A note
          </p>
          <p className="font-body text-sm leading-relaxed max-w-md mx-auto text-espresso-light">
            If you&apos;d prefer to give the gift of experience, contributions
            toward our honeymoon fund are gratefully received. Please reach out
            to us directly.
          </p>
        </div>
      </section>
    </>
  );
}
