import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // like .png or .css
  ) {
    return NextResponse.next();
  }

  // Skip if already has a locale in pathname
  const hasLocale = /^\/(ar|en)(\/|$)/.test(pathname);
  if (hasLocale) {
    return NextResponse.next();
  }

  // Check if language is already stored in cookies
  const localeInCookie = request.cookies.get("NEXT_LOCALE");
  if (localeInCookie) {
    return NextResponse.redirect(
      new URL(`/${localeInCookie}${pathname}`, request.url)
    );
  }

  // Detect preferred language from browser
  const acceptLang = request.headers.get("accept-language");
  const preferredLang = acceptLang?.startsWith("ar") ? "ar" : "en";

  return NextResponse.redirect(
    new URL(`/${preferredLang}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico|api).*)"],
};
