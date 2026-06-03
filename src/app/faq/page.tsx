"use client";

import { useState } from "react";
import Divider from "../_components/Divider";
import PageHeader from "../_components/PageHeader";

const faqs = [
  {
    q: "Can I take photos during the ceremony?",
    a: "We kindly request that no phones are out during the ceremony. Because of the small guest list, our photographer has communicated to us that guests using phones during the ceremony will be VERY VISIBLE in our wedding photos. We are having an unplugged ceremony — please keep phones and cameras away during the service so everyone can be fully present. Our photographer will capture everything beautifully. You are of course welcome to take photos at the cocktail hour and reception.",
  },
  {
    q: "Can I post photos of the wedding?",
    a: "We kindly request that you refrain from posting photos of the bride and groom until after we have had a chance to send our wedding announcements. We would like to be the first to announce our marriage to our friends and family who are not in attendance.",
  },
  {
    q: "Is there parking near the ceremony?",
    a: "Street parking on Newbury Street is limited. We recommend using public transportation or rideshare.",
  },
  {
    q: "How do I get from the ceremony to the reception?",
    a: "Mamma Maria in the North End is about a 30-minute walk from Emmanuel Church — a lovely route through the park and downtown Boston. Public transportation and rideshare are also easy; the trip takes about 20 minutes and 10 minutes, respectively.",
  },
  {
    q: "What is the dress code?",
    a: "Cocktail Attire",
  },
  {
    q: "Will the ceremony and reception be indoors?",
    a: "Yes — the ceremony is inside Lindsey Chapel at Emmanuel Church, and the reception is inside Mamma Maria. September in Boston can be beautiful but unpredictable, so you won't need to worry about weather.",
  },
  {
    q: "What time should I arrive for the ceremony?",
    a: "Doors open at 1:00 PM. Please be seated by 1:15 PM. The ceremony will begin promptly at 1:30 PM.",
  },
  {
    q: "Will there be a vegetarian / allergy / halal option?",
    a: "Yes! You will order your dinner selections from a prix fixe menu. The restaurant has assured us that they can cater to any and all dietary restrictions and allergies.",
  },
  {
    q: "I have another question — who do I contact?",
    a: "Please reach out to us directly!",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-dark">
      <button
        className="w-full text-left py-6 flex items-start justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-xl text-espresso font-light leading-snug">
          {q}
        </span>
        <span className="text-sage mt-1 shrink-0 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="font-body text-sm leading-relaxed pb-6 pr-8 text-espresso-light">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Frequently asked questions" variant="rose" />

      <section className="max-w-2xl mx-auto px-6 py-10 relative">
        <Divider className="mb-6" />
        {faqs.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </section>
    </>
  );
}
