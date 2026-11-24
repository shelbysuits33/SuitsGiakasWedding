import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { V2, isV2Path } from "@/lib/flags";

export function proxy(request: NextRequest) {
  // The site is public: there is no password gate. (The /login page and
  // /api/login route are no longer used; /admin has its own password.)
  // V2 pages and routes show "not found" until the flag is on (src/lib/flags.ts).
  if (!V2 && isV2Path(request.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run on every path EXCEPT: /login, /api/login, /admin, Next.js internals, and common static assets
  matcher: [
    "/((?!login|api/login|admin|api/admin|_next/static|_next/image|favicon.ico|icon|apple-icon|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
