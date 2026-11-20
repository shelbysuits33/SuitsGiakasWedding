import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { V2, isV2Path } from "@/lib/flags";

const AUTH_COOKIE = "ws-auth";
const AUTH_VALUE = "yes";

export function proxy(request: NextRequest) {
  const authed = request.cookies.get(AUTH_COOKIE)?.value === AUTH_VALUE;
  if (!authed) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // V2 pages and routes show "not found" until the flag is on (src/lib/flags.ts).
  if (!V2 && isV2Path(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run on every path EXCEPT: /login, /api/login, Next.js internals, and common static assets
  matcher: [
    "/((?!login|api/login|admin|api/admin|_next/static|_next/image|favicon.ico|icon|apple-icon|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
