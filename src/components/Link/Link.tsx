"use client";

import NextLink, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import styles from "./Link.module.css";
import { useParams, usePathname } from "next/navigation";
import classNames from "classnames";

const Link = ({
  activeLink,
  ...props
}: { activeLink?: boolean } & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathName = usePathname();

  const params = useParams();
  const href = props.href.startsWith("/")
    ? `/${params.locale}${props.href === "/" ? "" : props.href}`
    : props.href;

  console.log(href, pathName);
  return (
    <NextLink
      {...props}
      href={href}
      className={classNames(styles.link, {
        [styles.activeLink]: activeLink && pathName === href,
      })}
    />
  );
};

export default Link;
