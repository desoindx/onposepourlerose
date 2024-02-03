import Inscriptions from "@/components/Inscriptions";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Inscriptions - On pose pour le rose",
};

export default function InscriptionsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Inscriptions />;
}
