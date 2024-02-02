import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "../Link/Link";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("header");
  return (
    <nav className={styles.header}>
      <div className="flex-container">
        <div className={styles.links}>
          <Image src="/images/logo.png" width={180} height={82} alt="" />
          <Link href="/">{t("accueil")}</Link>
        </div>
        <div className={styles.flags}>
          <NextLink href="/fr">
            <Image
              src="/flags/fr.png"
              width={18}
              height={12}
              alt="Drapeau Français"
            />
          </NextLink>
          <NextLink href="/es">
            <Image
              src="/flags/es.png"
              width={18}
              height={12}
              alt="Drapeau Espagnol"
            />
          </NextLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
