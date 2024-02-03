import React from "react";
import styles from "./Bureau.module.css";
import { useTranslations } from "next-intl";
import Section from "./Grid/Section";
import { rich } from "@/message";
import Separator from "./Separator/Separator";
import Line from "./Grid/Line";
import Image from "next/image";
import Member from "./Equipe/Member";
import Banner from "./Banner/Banner";
const Bureau = () => {
  const t = useTranslations("bureau");
  const tHeader = useTranslations("header");
  return (
    <>
      <Banner header={tHeader("bureau")} className={styles.banner} />
      <Section>
        <div>
          <h2>{t("origin")}</h2>
          <br />
          <div>{t.rich("subtitle", rich)}</div>
        </div>
        <Separator />
        <Line>
          <div className={styles.images}>
            <Image
              src="/images/agathe_logo.jpeg"
              width={150}
              height={150}
              alt=""
            />
            <Image
              src="/images/Agathe_photo.jpeg"
              width={150}
              height={150}
              alt=""
            />
          </div>
          <div className="text">{t.rich("origin-description", rich)}</div>
        </Line>
      </Section>
      <Section color>
        <h2>{t("equipe")}</h2>
        <div className={styles.equipe}>
          <Member name="agathe duffaut" />
          <Member name="jennifer serantoni" />
          <Member name="eulalie nakache" />
          <Member name="pauline poinet" />
          <Member name="amandine blanchi" />
          <Member name="laetitia" />
          <Member name="jennyfer" />
          <Member name="séverine raynaud" />
          <Member name="clémence spriet" />
        </div>
        <Separator />
      </Section>
    </>
  );
};

export default Bureau;
