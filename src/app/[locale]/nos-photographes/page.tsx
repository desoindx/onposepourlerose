import { photographes } from "@/airtable";
import Photographes from "@/components/Photographes";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Nos photographes - On pose pour le rose",
};

export default async function NosPhotographesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const result = await photographes.select().all();
  return <Photographes />;
}
