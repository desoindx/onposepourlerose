import React, { ReactNode } from "react";
import styles from "./NextEdition.module.css";
import { rich } from "@/message";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const NextEdition = ({
  banner,
  children,
}: {
  banner: string;
  children?: ReactNode;
}) => {
  const t = useTranslations("home");

  return (
    <div className={styles.banner}>
      <div className={classNames(styles.bannerImage, banner)} />
      <div className={styles.box}>
        {t.rich("next-edition", rich)}
        {children && <div className={styles.children}>{children}</div>}
      </div>
    </div>
  );
};

export default NextEdition;
