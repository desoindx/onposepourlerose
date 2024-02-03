import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Partenaires.module.css";
import Banner from "./Banner/Banner";
import Section from "./Grid/Section";
import { rich } from "@/message";
import Link from "next/link";
import Image from "next/image";

const PreviousEditions = () => {
  const tHeader = useTranslations("header");
  const t = useTranslations("partenaires");
  return (
    <>
      <Banner header={tHeader("partenaires")} className={styles.banner} />
      <Section>
        <div className={styles.box}>{t.rich("contact", rich)}</div>
        <div className={styles.partenaires}>
          <Link
            href="https://www.cheriefm.fr/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/cherieFM.jpeg"
              width={300}
              height={167}
              alt="Logo Cherie FM"
            />
          </Link>
          <Link
            href="https://www.mariesavart.com/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/mariesavart.jpeg"
              width={120}
              height={120}
              alt="Logo Marie Savart"
            />
          </Link>
          <Link
            href="https://www.sioou.com/fr/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/sioou.png"
              width={216}
              height={90}
              alt="Logo Sioou"
            />
          </Link>
          <Link
            href="https://www.pny.com/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/pny.png"
              width={300}
              height={300}
              alt="Logo PNY"
            />
          </Link>
          <Link
            href="https://www.cnews.fr/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/cnews.png"
              width={300}
              height={75}
              alt="Logo C News"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/clemencespriet/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/clemdev.png"
              width={300}
              height={196}
              alt="Logo Clem Dev"
            />
          </Link>
          <Link
            href="https://desimagesetvous.fr/"
            target="_blank"
            rel="noopener noreferer"
          >
            <Image
              src="/images/desimagesetvous.png"
              width={300}
              height={300}
              alt="Logo Des images et vous"
            />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default PreviousEditions;
