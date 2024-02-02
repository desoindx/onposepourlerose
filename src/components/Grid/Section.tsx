import React, { ReactNode } from "react";
import styles from "./Section.module.css";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
