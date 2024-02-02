import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { defaultLocale, supportedLocales } from "../../i18n";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Association contre le cancer du sein - On pose pour le rose",
  description:
    "On pose pour le rose est une association mais avant tout un évènement de levée de fonds au profit de la recherche contre le cancer du sein.",
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  return (
    <html lang={locale || defaultLocale}>
      <body>
        <nav>
          <Header />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
