import { useTranslations } from "next-intl";
import React from "react";
import styles from "./PreviousEditions.module.css";
import Banner from "./Banner/Banner";

const PreviousEditions = () => {
  const tHeader = useTranslations("header");
  return (
    <>
      <Banner header={tHeader("editions")} className={styles.banner} />
    </>
  );
};

export default PreviousEditions;
