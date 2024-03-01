import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "../Link/Link";
import { useTranslations } from "next-intl";
import DropDown from "./DropDown";
import Flags from "./Flags";

const Header = () => {
  const t = useTranslations("header");
  return (
    <div className={styles.header}>
      <div className="flex-container">
        <div className={styles.links}>
          <Image src="/images/logo.png" width={180} height={82} alt="" />
          <Link href="/">{t("accueil")}</Link>
          <DropDown
            label={t("a-propos")}
            options={[
              { label: t("en-savoir-plus"), href: "/a-propos" },
              { label: t("bureau"), href: "/a-propos/bureau" },
              { label: t("editions"), href: "/a-propos/editions-precedentes" },
              { label: t("partenaires"), href: "/a-propos/partenaires" },
            ]}
          />
          <Link href="/nos-photographes">{t("photographes")}</Link>
          <Link href="/inscriptions">{t("inscriptions")}</Link>
          <DropDown
            label={t("soutenir")}
            options={[
              {
                label: t("adherer"),
                href: "https://www.helloasso.com/associations/onposepourlerose/adhesions/adhesion-2024",
                target: "_blank",
                rel: "noopener noreferer",
              },
              {
                label: t("dons"),
                href: "https://www.helloasso.com/associations/onposepourlerose/formulaires/1/widget%20_blank",
                target: "_blank",
                rel: "noopener noreferer",
              },
            ]}
          />
        </div>
        <div className={styles.flags}>
          <Flags />
        </div>
      </div>
    </div>
  );
};

export default Header;
