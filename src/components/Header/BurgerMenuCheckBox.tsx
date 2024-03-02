"use client";

import React, { useEffect, useState } from "react";
import styles from "./BurgerMenu.module.css";
import { usePathname } from "next/navigation";

const BurgerMenuCheckBox = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  return (
    <input
      id="menu-toggle"
      className={styles.menuToggle}
      type="checkbox"
      checked={open}
      onChange={(e) => setOpen(e.target.checked)}
    />
  );
};

export default BurgerMenuCheckBox;
