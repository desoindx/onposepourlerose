import React from "react";
import styles from "./NextEdition.module.css";
import { rich } from "@/message";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const NextEdition = ({ banner }: { banner: string }) => {
  const t = useTranslations("home");

  return (
    <div className={styles.banner}>
      <div className={classNames(styles.bannerImage, banner)} />
      <div className={styles.box}>{t.rich("next-edition", rich)}</div>
    </div>
  );
};

export default NextEdition;
