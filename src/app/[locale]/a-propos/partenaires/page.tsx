import Partenaires from "@/components/Partenaires";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Partenaires - On pose pour le rose",
};

export default function PartenairesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Partenaires />;
}
