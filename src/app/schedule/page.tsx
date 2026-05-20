import PageHeader from "../_components/PageHeader";

const events = [
  {
    time: "1:30 PM",
    name: "Ceremony",
    venue: "Lindsay Chapel at Emmanuel Church",
    address: "15 Newbury Street, Boston, MA 02116",
    note: "Doors open at 1:00 PM. Please be seated by 1:15 PM.",
  },
  {
    time: "2:00 PM",
    name: "Photos",
    venue: "Boston Public Garden and Boston Common",
    address: "4 Charles Street, Boston, MA 02116",
    note: "Join us in the garden for family photos",
  },
  {
    time: "6:00 PM",
    name: "Dinner & Drinks",
    venue: "Mamma Maria",
    address: "3 North Square, Boston, MA 02113",
    note: "Dinner, drinks, and dessert in the heart of the North End.",
  },
];

const accommodations = [
  {
    name: "The Newbury Boston",
    distance: "Steps from the ceremony",
    address: "1 Newbury Street, Boston, MA 02116",
  },
  {
    name: "The Lenox Hotel",
    distance: "0.1 mi from the ceremony",
    address: "61 Exeter Street, Boston, MA 02116",
  },
  {
    name: "The Liberty Hotel",
    distance: "0.8 mi from the ceremony",
    address: "215 Charles Street, Boston, MA 02114",
  },
];

export default function SchedulePage() {
  return (
    <>
      <PageHeader title="Schedule" subtitle="Friday, September 25, 2026" variant="rose" />

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={i} className="flex gap-8 group">
              {/* Time column */}
              <div className="w-24 shrink-0 pt-1 text-right">
                <span
                  className="font-body text-xs tracking-widest text-teal uppercase"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {event.time}
                </span>
              </div>

              {/* Line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-teal mt-1.5 shrink-0" />
                {i < events.length - 1 && (
                  <div className="w-px flex-1 bg-teal mt-2 mb-0 min-h-16" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-16 ${i === events.length - 1 ? "pb-0" : ""}`}>
                <h2 className="font-display text-3xl text-espresso font-light">
                  {event.name}
                </h2>
                <p className="font-body text-sm text-espresso mt-1">
                  {event.venue}
                </p>
                <p className="font-body text-xs mt-0.5 text-espresso-light">
                  {event.address}
                </p>
                <p className="font-body text-sm mt-3 italic text-espresso-light">
                  {event.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider
      <div className="flex justify-center py-4 text-espresso-light">

      </div> */}

      {/* Getting around */}
      <section className="border-t border-cream-dark bg-sage-cream py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-teal font-light mb-8">
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

      {/* Accommodations
      <section className="bg-espresso-light px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-cream font-light mb-2">
            Where to Stay
          </h2>
          <p
            className="font-body text-xs tracking-widest uppercase mb-12 text-cream-dark"
            style={{ letterSpacing: "0.15em" }}
          >
            Recommended hotels near the venue
          </p>

          <div className="space-y-8">
            {accommodations.map((hotel, i) => (
              <div key={i} className="border-l-2 border-cream pl-6" >
                <p className="font-display text-2xl text-cream">{hotel.name}</p>
                <p className="font-body text-xs mt-1 text-cream-dark">{hotel.distance}</p>
                <p className="font-body text-sm mt-1 text-cream-dark">
                  {hotel.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Divider */}
      <div className="flex justify-center py-4 bg-cream" style={{ backgroundColor: "rgba(127,168,181,0.15)" }}>

      </div>

      {/* Dress code */}
      <section className="bg-teal text-cream py-16 px-6 text-center">
        <p
          className="font-body text-xs tracking-widest uppercase mb-4"
          style={{ letterSpacing: "0.2em", color: "rgba(232,224,208,0.7)" }}
        >
          Dress Code
        </p>
        <p className="font-display text-4xl font-light text-cream">Cocktail Attire</p>

      </section>
    </>
  );
}
