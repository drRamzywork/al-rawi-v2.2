// middleware.js
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export default async function middleware(req) {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/languages`
  ).then((r) => r.json());
  const locales = data.map((l) => l.code);

  return createMiddleware({
    locales,
    defaultLocale: "ar",
    localePrefix: "as-needed",
  })(req);
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
