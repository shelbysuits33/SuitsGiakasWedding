import { NextResponse } from "next/server";

const COOKIE = "ws-admin";
const VALUE = "yes";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  const { password } = await request
    .json()
    .catch(() => ({ password: "" }));

  if (
    typeof password !== "string" ||
    !process.env.ADMIN_PASSWORD ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE_SECONDS,
    path: "/",
  });
  return res;
}
