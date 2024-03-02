import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Inscriptions.module.css";
import Section from "./Grid/Section";
import Separator from "./Separator/Separator";
import Image from "next/image";
import { rich } from "@/message";

const Inscriptions = () => {
  const t = useTranslations("inscriptions");
  return (
    <>
      <Section>
        <h2>{t("title")}</h2>
        <Separator />
        <Image
          src="/images/inscriptions.jpeg"
          width={640}
          height={428}
          alt=""
        />
        <div>{t.rich("description", rich)}</div>
        <Separator />
      </Section>
    </>
  );
};

export default Inscriptions;
