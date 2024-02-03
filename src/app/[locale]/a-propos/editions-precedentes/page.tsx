import PreviousEditions from "@/components/PreviousEditions";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Nos éditions précedentes - On pose pour le rose",
};

export default function EditionsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <PreviousEditions />;
}
