"use client";

import NextLink, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";
import { useParams } from "next/navigation";

const Link = (props: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const params = useParams();
  const href = props.href.startsWith("/")
    ? `/${params.locale}${props.href}`
    : props.href;
  return <NextLink {...props} href={href} className={styles.link} />;
};

export default Link;
