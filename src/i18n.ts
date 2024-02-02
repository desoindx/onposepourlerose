import { getRequestConfig } from "next-intl/server";

export const supportedLocales = ["fr", "es"];
export const defaultLocale = "fr";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}.json`)).default,
}));
