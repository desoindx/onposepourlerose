import Home from "@/components/Home";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AProposPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <Home />;
}
