import React from "react";
import { useTranslations } from "next-intl";
import BurgerDropDown from "./BurgerDropDown";
import Link from "../Link/Link";
import styles from "./BurgerMenu.module.css";
import BurgerMenuCheckBox from "./BurgerMenuCheckBox";

const BurgerMenu = (): JSX.Element => {
  const t = useTranslations("header");
  return (
    <>
      <BurgerMenuCheckBox />
      <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
        <div className={styles.menuButton}></div>
      </label>
      <ul className={styles.menu}>
        <li>
          <Link activeLink href="/">
            {t("accueil").toUpperCase()}
          </Link>
        </li>
        <BurgerDropDown
          label={t("a-propos").toUpperCase()}
          options={[
            { label: t("en-savoir-plus"), href: "/a-propos" },
            { label: t("bureau"), href: "/a-propos/bureau" },
            {
              label: t("editions"),
              href: "/a-propos/editions-precedentes",
            },
            { label: t("partenaires"), href: "/a-propos/partenaires" },
          ]}
        />
        <li>
          <Link activeLink href="/nos-photographes">
            {t("photographes").toUpperCase()}
          </Link>
        </li>
        <li>
          <Link activeLink href="/inscriptions">
            {t("inscriptions").toUpperCase()}
          </Link>
        </li>
        <BurgerDropDown
          label={t("soutenir").toUpperCase()}
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
      </ul>
    </>
  );
};
export default BurgerMenu;
