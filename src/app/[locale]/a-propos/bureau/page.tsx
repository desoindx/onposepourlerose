import Bureau from "@/components/Bureau";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Le bureau - On pose pour le rose",
};

export default function BureauPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Bureau />;
}
