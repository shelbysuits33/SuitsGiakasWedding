// Wedding guest list. Add a party for each invited household.
//
// `id` — short URL-safe slug, must be unique. Used internally to associate RSVPs.
// `partyName` — what shows up on the RSVP form ("RSVP for The Smith Family").
// `guests` — every person on the invite, including named plus-ones.
//            Use a clear placeholder for unnamed plus-ones, e.g. "Bob's Guest".
//
// Editing this file = redeploy. Keep it sorted however you like.

export type Party = {
  id: string;
  partyName: string;
  guests: string[];
};

export const parties: Party[] = [
  // Example — replace with your real guests
  {
    id: "suits-family",
    partyName: "The Suits Family",
    guests: ["Scott Suits", "Diane Suits"],
  },
  {
    id: "suits-burgess-family",
    partyName: "The Suits Family",
    guests: ["Jared Suits", "Courtney Burgess"],
  },
  {
    id: "suits-munroe-family",
    partyName: "The Suits Family",
    guests: ["Eric Suits", "Alycia Munroe-Suits", "Elliott Suits"],
  },
  {
    id: "suits-ensley-family",
    partyName: "The Ensley Family",
    guests: ["Kyla Ensley", "Thomas Ensley"],
  },
  {
    id: "suits-giakas-family",
    partyName: "The Suits & Giakas Family",
    guests: ["Shelby Suits", "Julian Giakas"],
  },
  {
    id: "giakas-family",
    partyName: "The Giakas Family",
    guests: ["William Giakas", "Denise Giakas"],
  },
  {
    id: "giakas-andreas-family",
    partyName: "Andreas Giakas",
    guests: ["Andreas Giakas"],
  },
  {
    id: "ayesh-family",
    partyName: "The Ayesh Family",
    guests: ["Sophia Giakas Ayesh", "Yusouf Ayesh", "Eleni Ayesh", "Nadir Ayesh", "Ilyas Ayesh"],
  },
  {
    id: "giakas-sebastian-family",
    partyName: "The Giakas Family",
    guests: ["Sebastian Giakas", "Haley Giakas"],
  },
];

/** Flat list of every guest name, for the lookup autocomplete. */
export const allGuests: { partyId: string; name: string }[] = parties.flatMap(
  (p) => p.guests.map((name) => ({ partyId: p.id, name }))
);

/** Look up a party by id (server-side validation). */
export function findParty(id: string): Party | undefined {
  return parties.find((p) => p.id === id);
}
