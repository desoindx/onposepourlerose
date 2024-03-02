"use client";

import NextLink, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import styles from "./LinkButton.module.css";
import classNames from "classnames";
import { useParams } from "next/navigation";

const LinkButton = ({
  priority,
  ...props
}: { priority?: "secondary" } & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const params = useParams();
  const href = props.href.startsWith("/")
    ? `/${params.locale}${props.href}`
    : props.href;

  return (
    <NextLink
      {...props}
      href={href}
      className={classNames(styles.button, props.className, {
        [styles.secondary]: priority === "secondary",
      })}
    />
  );
};

export default LinkButton;
