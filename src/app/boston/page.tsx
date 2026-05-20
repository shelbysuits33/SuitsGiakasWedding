import PageHeader from "../_components/PageHeader";

const categories: { label: string; color: string; bgColor: string; items: { name: string; detail: string; description: string }[] }[] = [
  {
    label: "Eat & Drink",
    color: "text-teal",
    bgColor: "bg-sage",
    items: [
      {
        name: "Mamma Maria",
        detail: "North End",
        description:
          "Northern Italian dining in a restored rowhouse — our reception venue and one of Boston's finest.",
      },
      {
        name: "North Street Grill",
        detail: "North End",
        description:
          "American diner with a popular weekend brunch service.",
      },
      {
        name: "Bricco",
        detail: "North End",
        description:
          "Old-school Italian trattoria beloved by locals on Hanover Street.",
      },
      {
        name: "Boston Sail Loft",
        detail: "The Wharf",
        description:
          "Waterfront seafood restaurant serving iconic lobster rolls and Boston cream pie.",
      },
      {
        name: "Bovas",
        detail: "North End",
        description:
          "Open 24-7 and known for their iconic cannoli and wide selection of Italian pastries.",
      },
      {
        name: "DeLuca's",
        detail: "Back Bay and Beacon Hill",
        description:
          "Gourmet market and deli with sandwiches and imported delicacies.",
      },
      {
        name: "Lucy's Ethiopian Cafe",
        detail: "South End",
        description:
          "Casual Ethiopian cafe open for lunch and dinner.",
      },
      {
        name: "Tora Japanese Restaurant",
        detail: "Chinatown",
        description:
          "Tiny sushi restaurant in the heart of Chinatown.",
      },
    ],
  },
  {
    label: "See & Do",
    color: "text-teal",
    bgColor: "bg-sage",
    items: [
      {
        name: "Isabella Stewart Gardner Museum",
        detail: "Fenway",
        description:
          "A Venetian palazzo transported to Boston, filled with Titians, Rembrandts, and Sargents.",
      },
      {
        name: "Museum of Fine Arts",
        detail: "Fenway",
        description:
          "One of the great American art museums — walk from the Gardner.",
      },
      {
        name: "The Freedom Trail",
        detail: "Downtown",
        description:
          "A 2.5-mile walking path through 16 historic sites. Start at Boston Common.",
      },
      {
        name: "Newbury Street",
        detail: "Back Bay",
        description:
          "Eight blocks of galleries, boutiques, and cafés — including our ceremony venue.",
      },
      {
        name: "Charles River Esplanade",
        detail: "Back Bay",
        description:
          "3-mile park with walking and biking paths. Winds along the banks of the Charles River",
      },
      {
        name: "Public Garden",
        detail: "Back Bay",
        description:
          "Boston's Victorian jewel. Swan boats in summer, golden foliage in September.",
      },
    ],
  },
  {
    label: "Neighborhoods",
    color: "text-teal",
    bgColor: "bg-sage",
    items: [
      {
        name: "Back Bay",
        detail: "Where the ceremony is",
        description:
          "Brownstone-lined streets, the Prudential Center, and some of the city's best dining and shopping.",
      },
      {
        name: "North End",
        detail: "Where the reception is",
        description:
          "Boston's Little Italy — narrow streets, Italian bakeries, and the harbor. Utterly charming.",
      },
      {
        name: "Beacon Hill",
        detail: "10 min walk from ceremony",
        description:
          "Cobblestone streets, gas lamp lighting, and Federal-style architecture straight out of a painting.",
      },
      {
        name: "South End",
        detail: "Where we live",
        description:
          "Victorian brownstones, art galleries, and a thriving restaurant scene.",
      },
    ],
  },
];

export default function BostonPage() {
  return (
    <>
      <PageHeader
        title="Boston"
        subtitle="A guide to the city we call home" variant="rose"
      />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="font-display text-3xl text-espresso font-light italic text-center max-w-2xl mx-auto leading-relaxed" style={{ opacity: 0.85 }}>
          Boston in late September is golden. Here are our favorite places for
          you to explore before and after the wedding.
        </p>
        <p className="font-display text-xl text-espresso-light font-light text-center mb-20 max-w-lg mx-auto leading-relaxed mt-4">
          We have so many more recommendations! Please reach out to us if you&apos;re looking for additional activities or dining options!
        </p>

        {categories.map((cat, i) => (
          <div key={cat.label}>
            {i > 0 && (
              <div className="flex justify-center py-4 mb-12 text-espresso-light">

              </div>
            )}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <span className={`block w-8 h-px ${cat.bgColor}`} />
                <h2
                  className={`font-body text-sm tracking-widest uppercase ${cat.color}`}
                  style={{ letterSpacing: "0.2em" }}
                >
                  {cat.label}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {cat.items.map((item) => (
                  <div key={item.name} className="border-b border-cream-dark pb-8">
                    <p className="font-display text-2xl text-espresso">
                      {item.name}
                    </p>
                    <p
                      className="font-body text-xs tracking-widest text-rose uppercase mt-1"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      {item.detail}
                    </p>
                    <p className="font-body text-sm mt-2 leading-relaxed text-espresso-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Divider before Getting Around */}
        <div className="flex justify-center py-4 text-espresso-light">

        </div>
      </section>

      {/* Getting around */}
      <section className="border-t border-cream-dark bg-cream-dark py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-espresso font-light mb-8">
            Getting Around
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p
                className="font-body text-xs tracking-widest text-teal uppercase mb-2"
                style={{ letterSpacing: "0.15em" }}
              >
                On Foot
              </p>
              <p className="font-body text-sm leading-relaxed text-espresso-light">
                The best way to get around the city when the weather is nice.
              </p>
            </div>
            <div>
              <p
                className="font-body text-xs tracking-widest text-teal uppercase mb-2"
                style={{ letterSpacing: "0.15em" }}
              >
                The T (Subway)
              </p>
              <p className="font-body text-sm leading-relaxed text-espresso-light">
                The T and bus lines are reliable, safe, and affordable. To enter the train/bus, just tap your credit card or apple pay.
              </p>
            </div>
            <div>
              <p
                className="font-body text-xs tracking-widest text-teal uppercase mb-2"
                style={{ letterSpacing: "0.15em" }}
              >
                Rideshare
              </p>
              <p className="font-body text-sm leading-relaxed text-espresso-light">
                Uber and Lyft are widely available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
