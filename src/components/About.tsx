import React from "react";
import styles from "./About.module.css";
import { useTranslations } from "next-intl";
import { rich } from "@/message";
import Section from "./Grid/Section";
import NextEdition from "./Edition/NextEdition";
import Line from "./Grid/Line";
import Link from "next/link";
import Image from "next/image";
import Separator from "./Separator/Separator";
const About = () => {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const tHeader = useTranslations("header");
  return (
    <>
      <div className={styles.banner1}>
        <h1>{tHeader("a-propos").toUpperCase()}</h1>
      </div>
      <Section>
        <div className="text">
          {t.rich("description", rich)}
          <br />
          <br />
          {tHome.rich("origin-1", rich)}
          <br />
          <br />
          {tHome.rich("origin-2", rich)}
          <br />
          <br />
          {tHome.rich("origin-3", rich)}
          <br />
          <br />
          {tHome.rich("origin-4", rich)}
          <br />
          <br />
          {tHome.rich("origin-5", rich)}
          <br />
          <br />
          {tHome.rich("origin-6", rich)}
        </div>
      </Section>
      <NextEdition banner={styles.banner2Image} />

      <Section>
        <h2>{t("soutien").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div className="text">{t.rich("soutien-description", rich)}</div>
          <Link
            href="https://curie.fr"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/institut_curie.jpg"
              width={150}
              height={150}
              alt="Logo de l'Institut curie"
            />
          </Link>
        </Line>
      </Section>
    </>
  );
};

export default About;
