import React, { ReactNode } from "react";
import styles from "./Section.module.css";

const Section = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: boolean;
}) => {
  return (
    <div className={color ? styles.coloredSection : styles.section}>
      <div className="container">
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
