"use client";

import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Flags = () => {
  const path = usePathname();
  return (
    <>
      <NextLink href={path.replace("/es/", "/fr/")}>
        <Image
          src="/flags/fr.png"
          width={18}
          height={12}
          alt="Drapeau Français"
        />
      </NextLink>
      <NextLink href={path.replace("/fr/", "/es/")}>
        <Image
          src="/flags/es.png"
          width={18}
          height={12}
          alt="Drapeau Espagnol"
        />
      </NextLink>
    </>
  );
};

export default Flags;
