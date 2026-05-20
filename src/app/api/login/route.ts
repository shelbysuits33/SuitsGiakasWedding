import { NextResponse } from "next/server";

const AUTH_COOKIE = "ws-auth";
const AUTH_VALUE = "yes";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 60; // 60 days

export async function POST(request: Request) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  if (typeof password !== "string" || password !== process.env.SITE_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, AUTH_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE_SECONDS,
    path: "/",
  });
  return res;
}
