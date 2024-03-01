"use client";

import NextLink, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import styles from "./NextEditionButton.module.css";
import LinkButton from "../Link/LinkButton";
import classNames from "classnames";
import { useParams } from "next/navigation";

const NextEditionButton = (
  props: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const params = useParams();
  const href = props.href.startsWith("/")
    ? `/${params.locale}${props.href}`
    : props.href;

  return (
    <LinkButton
      {...props}
      href={href}
      className={classNames(styles.button, props.className)}
    />
  );
};

export default NextEditionButton;
