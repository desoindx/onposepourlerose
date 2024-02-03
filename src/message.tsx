import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export const rich = {
  br: () => <br />,
  association: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations("global");
    return <span className="pink">{t("name")}</span>;
  },
  pink: (content: ReactNode) => <span className="pink">{content}</span>,
  b: (content: ReactNode) => <b>{content}</b>,
  i: (content: ReactNode) => <i>{content}</i>,
  contact: (content: ReactNode) => (
    <a
      href="mailto:partenariat@onposepourlerose.fr"
      target="_blank"
      rel="noopener noreferer"
    >
      {content}
    </a>
  ),
};
