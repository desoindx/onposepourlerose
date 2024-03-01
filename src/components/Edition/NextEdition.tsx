import React from "react";
import styles from "./NextEdition.module.css";
import { rich } from "@/message";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import NextEditionButton from "./NextEditionButton";

const NextEdition = ({ 
  banner, 
  withButton 
}: { 
  banner: string; 
  withButton?: boolean 
}) => {
  const t = useTranslations("home");
  const tHeader = useTranslations("header");

  return (
    <div className={styles.banner}>
      <div className={classNames(styles.bannerImage, banner)} />
      <div className={styles.box}>
        {t.rich("next-edition", rich)}
        {withButton && 
          <NextEditionButton
            href="https://www.helloasso.com/associations/onposepourlerose/adhesions/adhesion-2024"
            target="_blank"
            rel="noopener noreferer"
          >
            {tHeader("adherer")}
          </NextEditionButton>
        }
      </div>
    </div>
  );
};

export default NextEdition;
