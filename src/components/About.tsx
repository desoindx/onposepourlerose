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
import Banner from "./Banner/Banner";
import LinkButton from "./Link/LinkButton";
const About = () => {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const tHeader = useTranslations("header");
  return (
    <>
      <Banner header={tHeader("a-propos")} className={styles.banner1} />
      <Section>
        <div>
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
          <br />
          <br />
          {tHome.rich("origin-7", rich)}
        </div>
        <Line>
          <LinkButton
            href="/a-propos/bureau"
            target="_blank"
            rel="noopener noreferer"
          >
            {tHeader("bureau")}
          </LinkButton>
          <LinkButton
            href="/a-propos/editions-precedentes"
            target="_blank"
            rel="noopener noreferer"
          >
            {tHeader("editions")}
          </LinkButton>
        </Line>
      </Section>
      <NextEdition banner={styles.banner2Image} withButton />

      <Section>
        <h2>{t("soutien-titre").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div>{t.rich("soutien-description", rich)}</div>
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
        <h3>{t("soutien-sous-titre")}</h3>
        <div className={styles.logos}>
          <div>
            <Link
              href="https://www.jeuneetrose.fr/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={350}
                height={150}
                src="/images/jeuneetrose.png"
                alt="Logo Jeune Et Rose"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://alsacecontrecancer.com/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={400}
                height={200}
                src="/images/alsace.png"
                alt="Logo Alsace contre le cancer"
              />
            </Link>

            <Link
              href="https://personn-elles.com/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={400}
                height={200}
                src="/images/personnelles.jpeg"
                alt="Logo Personnelles"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.hope-association.com/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={150}
                height={150}
                src="/images/hope.png"
                alt="Logo Hope"
              />
            </Link>

            <Link
              href="https://www.facebook.com/lesrosespoudrees/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={150}
                height={150}
                src="/images/rosepoudree.png"
                alt="Logo Les roses pourdrées"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://toujoursfemmepaysdegrasse.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={150}
                height={150}
                src="/images/toujoursfemme.jpeg"
                alt="Logo Toujours femme"
              />
            </Link>

            <Link
              href="https://proyectomariposas.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={150}
                height={150}
                src="/images/ProtectoMariposa.png"
                alt="Logo Proyecto mariposas"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://soscancerdusein.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={320}
                height={100}
                src="/images/SOS.png"
                alt="Logo SOS cancer du sein"
              />
            </Link>

            <Link
              href="https://lesprinseinses.com/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={250}
                height={150}
                src="/images/prinseinses.jpeg"
                alt="Logo Les prinseinses"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.icap84.org/"
              target="_blank"
              rel="noopener noreferer"
            >
              <Image
                width={350}
                height={100}
                src="/images/institutsaintecatherine.png"
                alt="Logo Institut sainte Catherine"
              />
            </Link>
          </div>
        </div>
        <Line>
          <div>
            {t("temoignage-titre")}
            <br />
            <br />
            {t.rich("temoignage", rich)}
          </div>
          <Image width={350} height={100} src="/images/ruban_rose.png" alt="" />
        </Line>
      </Section>
      <Section color>
        <h2>{t("creneau-solidaire-titre").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div className={styles.images}>
            <Image
              src="/images/creneau-1.jpeg"
              width={150}
              height={150}
              alt=""
            />
            <Image
              src="/images/creneau-2.jpeg"
              width={150}
              height={150}
              alt=""
            />
            <Image
              src="/images/creneau-3.jpeg"
              width={150}
              height={150}
              alt=""
            />
            <Image
              src="/images/creneau-4.jpeg"
              width={150}
              height={150}
              alt=""
            />
          </div>
          <div>{t.rich("creneau-solidaire", rich)}</div>
        </Line>
      </Section>
    </>
  );
};

export default About;
