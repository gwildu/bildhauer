import NextLink, { LinkProps } from "next/link";
import { ComponentPropsWithRef, FC } from "react";
import classes from "./link.module.css";

export interface ILink extends Omit<ComponentPropsWithRef<"a">, "href"> {
  href: LinkProps["href"];
  as?: LinkProps["as"];
  replace?: LinkProps["replace"];
  scroll?: LinkProps["scroll"];
  shallow?: LinkProps["shallow"];
  passHref?: LinkProps["passHref"];
  prefetch?: LinkProps["prefetch"];
  locale?: LinkProps["locale"];
}

export const Link: FC<ILink> = ({
  href,
  as,
  children,
  locale,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  className,
  ...rest
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      locale={locale}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a
        className={`${classes.link}${className ? ` ${className}` : ""}`}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  );
};
