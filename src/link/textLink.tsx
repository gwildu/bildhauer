import { ILink, Link } from "./link";
import { FC } from "react";
import classes from "./text-link.module.css";

interface ITextLink extends ILink {}

export const TextLink: FC<ITextLink> = ({
  className: outerClassName,
  ...rest
}) => {
  const className = `${classes.textLink}${
    outerClassName ? ` ${outerClassName}` : ""
  }`;
  return <Link className={className} {...rest} />;
};
