import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import styles from "./Home.module.css";
import Section from "./Grid/Section";
import Line from "./Grid/Line";
import LinkButton from "./Link/LinkButton";
import { rich } from "@/message";
import NextEdition from "./Edition/NextEdition";
import Separator from "./Separator/Separator";
import Banner from "./Banner/Banner";
const Home = () => {
  const t = useTranslations("home");
  const tHeader = useTranslations("header");
  const tGlobal = useTranslations("global");
  return (
    <>
      <Banner header={tGlobal("name")} className={styles.banner1} />
      <Section>
        <h2>{t("association").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div className="text">
            {t.rich("association-description", rich)}
            <br />
            <br />
            <div className={styles.button}>
              <LinkButton href={"/a-propos"}>
                {tHeader("en-savoir-plus")}
              </LinkButton>
            </div>
          </div>
          <div>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/h3-J97cdXbs?si=BJtRcaj2yZn7fvvv"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Line>
      </Section>
      <Section>
        <h3>{t("origin")}</h3>
        <div className="text">
          <Line>
            <Image
              width={300}
              height={300}
              src={"/images/agathe_vence_carre.jpeg"}
              alt=""
            />
            <div className={styles.paragraphs}>
              <div>{t.rich("origin-1", rich)}</div>
              <div>{t.rich("origin-2", rich)}</div>
              <div>{t.rich("origin-3", rich)}</div>
            </div>
          </Line>
          <div className={styles.paragraphs}>
            <div className={styles.firstLine}>{t.rich("origin-4", rich)}</div>
            <div>{t.rich("origin-5", rich)}</div>
            <div>{t.rich("origin-6", rich)}</div>
            <div>{t.rich("origin-7", rich)}</div>
          </div>
        </div>
      </Section>
      <NextEdition banner={styles.banner2Image} />
      <Section>
        <h2>{t("soutien").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div className="text">{t.rich("soutien-description", rich)}</div>
          <div className={styles.buttons}>
            <LinkButton
              href="https://www.helloasso.com/associations/onposepourlerose/adhesions/adhesion-2024"
              target="_blank"
              rel="noopener noreferer"
            >
              {tHeader("adherer")}
            </LinkButton>
            <br />
            <br />
            <LinkButton
              href="https://www.helloasso.com/associations/onposepourlerose/formulaires/1/widget%20_blank"
              target="_blank"
              rel="noopener noreferer"
            >
              {tHeader("dons")}
            </LinkButton>
          </div>
        </Line>
      </Section>
      <Section>
        <h2>{t("chiffres").toUpperCase()}</h2>
        <Separator />
        <Line>
          <div className={styles.data}>
            <Image
              className={styles.dataImage}
              src="/images/photographes.png"
              width={100}
              height={100}
              alt=""
            />
            <div>
              <div className={styles.value}>77</div>
              {t("chiffres-photographes")}
            </div>
          </div>
          <div className={styles.data}>
            <Image
              className={styles.dataImage}
              src="/images/participantes.jpeg"
              width={100}
              height={100}
              alt=""
            />
            <div>
              <div className={styles.value}>{(1414).toLocaleString()}</div>
              {t("chiffres-participantes")}
            </div>
          </div>
          <div className={styles.data}>
            <Image
              className={styles.dataImage}
              src="/images/dons.png"
              width={100}
              height={100}
              alt=""
            />
            <div>
              <div className={styles.value}>{(85000).toLocaleString()}€</div>
              {t("chiffres-dons")}
            </div>
          </div>
        </Line>
        <div className="center">{t.rich("chiffres-description", rich)}</div>
      </Section>
    </>
  );
};

export default Home;
