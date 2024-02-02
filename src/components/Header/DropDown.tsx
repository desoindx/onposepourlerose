"use client";

import React, { useEffect, useState } from "react";
import stylesLink from "../Link/Link.module.css";
import styles from "./DropDown.module.css";
import Link from "../Link/Link";

const DropDown = ({
  label,
  options,
}: {
  label: string;
  options: { label: string; href: string; target?: string; rel?: string }[];
}) => {
  const [open, setOpen] = useState(false);

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
        className={stylesLink.link}
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className={styles.button}>
          <span>{label} </span>
          <svg
            width="1rem"
            height="1rem"
            viewBox="2 2 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M7 10L12 15L17 10"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </button>
      {open && (
        <div className={styles.items}>
          {options.map(({ label, ...props }) => (
            <div key={label}>
              <Link {...props}>{label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
