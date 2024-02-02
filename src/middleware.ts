import createMiddleware from "next-intl/middleware";
import { defaultLocale, supportedLocales } from "./i18n";

export default createMiddleware({
  locales: supportedLocales,
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|es)/:path*"],
};
