import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "ws-auth";
const AUTH_VALUE = "yes";

export function proxy(request: NextRequest) {
  const authed = request.cookies.get(AUTH_COOKIE)?.value === AUTH_VALUE;
  if (authed) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Run on every path EXCEPT: /login, /api/login, Next.js internals, and common static assets
  matcher: [
    "/((?!login|api/login|admin|api/admin|_next/static|_next/image|favicon.ico|icon|apple-icon|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
