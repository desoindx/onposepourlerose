import React from "react";
import styles from "./Banner.module.css";
import classNames from "classnames";

const Banner = ({
  header,
  className,
}: {
  header: string;
  className: string;
}) => {
  return (
    <div className={classNames(styles.banner, className)}>
      <h1>{header.toUpperCase()}</h1>
    </div>
  );
};

export default Banner;
