"use client";

import React, { useEffect, useState } from "react";
import stylesLink from "../Link/Link.module.css";
import styles from "./DropDown.module.css";
import Link from "../Link/Link";
import DropDownArrow from "./DropDownArrow";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const DropDown = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; href: string; target?: string; rel?: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (open) {
      const handleClick = () => {
        setOpen(false);
      };
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [open]);

  return (
    <div className={styles.container}>
      <button
        className={classNames(stylesLink.link, {
          [stylesLink.active]: pathName.includes(options[0].href),
        })}
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className={styles.button}>
          <span>{label} </span>
          <DropDownArrow open={open} />
        </div>
      </button>
      {open && (
        <div className={styles.items}>
          {options.map(({ label, ...props }) => (
            <div key={label}>
              <Link activeLink {...props}>
                {label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
