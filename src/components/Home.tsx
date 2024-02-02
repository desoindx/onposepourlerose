import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import styles from "./Home.module.css";
import Section from "./Grid/Section";
import Line from "./Grid/Line";
import LinkButton from "./Link/LinkButton";
import { rich } from "@/message";
const Home = () => {
  const t = useTranslations("home");
  const tGlobal = useTranslations("global");
  return (
    <>
      <div className={styles.banner1}>
        <h1>{tGlobal("name").toUpperCase()}</h1>
      </div>
      <Section>
        <h2>{t("association").toUpperCase()}</h2>
        <div className={styles.separator} />
        <Line>
          <div className="text">
            {t.rich("association-description", rich)}
            <br />
            <br />
            <div className={styles.button}>
              <LinkButton href={"/a-propos"}>En savoir plus</LinkButton>
            </div>
          </div>
          <div>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4NL6tYgZT50?si=b4KRXo0PiVizpgxy"
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
          </div>
        </div>
      </Section>
      <div className={styles.banner2}>
        <div className={styles.banner2Image} />
        <div className={styles.box}>{t.rich("next-edition", rich)}</div>
      </div>
      <Section>
        <h2>{t("soutien").toUpperCase()}</h2>
        <div className={styles.separator} />
        <Line>
          <div className="text">{t.rich("soutien-description", rich)}</div>
          <div className={styles.buttons}>
            <LinkButton
              href="https://www.helloasso.com/associations/onposepourlerose/adhesions/on-pose-pour-le-rose"
              target="_blank"
              rel="noopener noreferer"
            >
              {t("adherer")}
            </LinkButton>
            <br />
            <br />
            <LinkButton
              href="https://www.helloasso.com/associations/onposepourlerose/formulaires/1/widget%20_blank"
              target="_blank"
              rel="noopener noreferer"
            >
              {t("dons")}
            </LinkButton>
          </div>
        </Line>
      </Section>
    </>
  );
};

export default Home;
