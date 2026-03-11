"use client";

import { FC } from "react";
import classes from "./footer.module.css";
import { Link } from "../link";
import { useHash } from "../packages/routing/useHash";
import { usePathname } from "next/navigation";

interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => {
  const pathName = usePathname();
  const urlSearchParams = new URLSearchParams();

  const hash = useHash();
  urlSearchParams.set(
    "subject",
    `Anfrage zur Seite: bildhauer-stein.ch${pathName}${hash ? `#${hash.substring(1)}` : ""}`,
  );

  const mailToLink = `mailto:info@bildhauer-stein.ch?subject=${urlSearchParams.get("subject")}`;

  return (
    <div className={`${classes.container} ${className}`}>
      <p className={classes.paragraph}>
        <Link href={"tel:+41719518888"}>071 951 88 88</Link>
        <br />
        <Link href={mailToLink}>info@bildhauer-stein.ch</Link>
      </p>

      <p className={`${classes.paragraph} ${classes.hideCompany}`}>
        Bildhauerei & Restaurationen Rickenbacher
        <br />
        Andreas Rickenbacher
      </p>
      <p className={`${classes.paragraph} ${classes.hideAddress}`}>
        Wilerstrasse 51
        <br />
        9536 Schwarzenbach
      </p>
    </div>
  );
};
