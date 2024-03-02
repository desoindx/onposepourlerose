"use client";

import React, { useState } from "react";
import DropDownArrow from "./DropDownArrow";
import stylesLink from "../Link/Link.module.css";
import Link from "../Link/Link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const BurgerDropDown = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; href: string; target?: string; rel?: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <li>
        <button
          className={classNames(stylesLink.link, {
            [stylesLink.active]: pathName.includes(options[0].href),
          })}
          onClick={() => setOpen(!open)}
        >
          {label} <DropDownArrow open={open} />
        </button>
      </li>
      {open &&
        options.map(({ label, ...props }) => (
          <li key={label}>
            <Link activeLink {...props}>
              {label}
            </Link>
          </li>
        ))}
    </>
  );
};

export default BurgerDropDown;
