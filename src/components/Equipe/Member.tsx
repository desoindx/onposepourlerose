import React from "react";
import styles from "./Member.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Member = ({ name }: { name: string }) => {
  const t = useTranslations("equipe");
  return (
    <div className={styles.member}>
      <Image src={`/images/${name}.jpeg`} width={150} height={150} alt="" />
      {name.toUpperCase()}
      <br />
      <p className={styles.title}>{t(name)}</p>
    </div>
  );
};

export default Member;
