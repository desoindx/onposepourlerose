import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Photographes.module.css";
import Banner from "./Banner/Banner";
import { rich } from "@/message";
import Section from "./Grid/Section";
import Image from "next/image";
import NextEdition from "./Edition/NextEdition";
import Separator from "./Separator/Separator";
import Map from "./Map/Map";

const Photographes = () => {
  const tHeader = useTranslations("header");
  const t = useTranslations("photographes");
  return (
    <>
      <Banner header={tHeader("photographes")} className={styles.banner} />
      <Section>
        <div>{t.rich("description", rich)}</div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div>
              <div className={styles.boxTitle}>
                {t("shooting").toUpperCase()}
              </div>
              <div className={styles.price}>30€</div>
              <br />
              {t("shooting-1")}
              <br />
              <br />
              {t("shooting-2")}
              <span className={styles.price}> 10€</span>
            </div>
            <div className={styles.images}>
              <Image
                src="/images/photographe_1.jpeg"
                width={150}
                height={150}
                alt=""
              />
              <Image
                src="/images/photographe_2.jpeg"
                width={150}
                height={150}
                alt=""
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <div className={styles.boxTitle}>
                {t("options").toUpperCase()}
              </div>
              {t("options-1")}
              <span className={styles.price}> 5€ </span>
              {t("options-2")}
              <br />
              <br />
              {t.rich("options-3", rich)}
            </div>
            <div className={styles.images}>
              <Image
                src="/images/photographe_3.jpeg"
                width={150}
                height={150}
                alt=""
              />
              <Image
                src="/images/photographe_4.jpeg"
                width={150}
                height={150}
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
      <NextEdition banner={styles.banner2} />
      <Section>
        <div>
          <h2>{t("lieux")}</h2>
          <br />
          <div>{t.rich("lieux-sous-titre", rich)}</div>
        </div>
        <Separator />
      </Section>
      <Section>
        <Map />
      </Section>
    </>
  );
};

export default Photographes;
