/*
  V2 flag. The pages below are built but not public yet. While the flag is off,
  their links are hidden and visiting them shows a "not found" page. To turn
  them all on, set NEXT_PUBLIC_V2=true (in .env.local, and in the Vercel
  project's environment variables) and restart or redeploy: the value is baked
  in when the site is built.
*/
export const V2 = process.env.NEXT_PUBLIC_V2 === "true";

// Every page (and API route) that belongs to V2.
export const V2_PATHS = [
  "/our-story",
  "/rsvp",
  "/api/rsvp",
  "/schedule",
  "/boston",
  "/registry",
  "/faq",
];

export function isV2Path(pathname: string) {
  return V2_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
