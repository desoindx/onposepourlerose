import React, { ReactNode } from "react";
import styles from "./Line.module.css";

const Line = ({ children }: { children: ReactNode }) => {
  return <div className={styles.line}>{children}</div>;
};

export default Line;
