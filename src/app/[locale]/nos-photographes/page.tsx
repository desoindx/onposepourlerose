import Photographes from "@/components/Photographes";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Nos photographes - On pose pour le rose",
};

export default function NosPhotographesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Photographes />;
}
