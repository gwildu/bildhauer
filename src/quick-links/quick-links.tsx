import { FC } from "react";
import { Link } from "../link";
import classes from "./quick-link.module.css";

interface IQuickLink {
  href: string;
  text: string;
  isLinkActive: boolean;
  image: {
    src: string;
    alt?: string;
  };
}

interface IQuickLinks {
  links: IQuickLink[];
}

export const QuickLinks: FC<IQuickLinks> = ({ links }) => {
  return (
    <ul>
      {links.map(({ href, text, isLinkActive, image }) => (
        <li
          key={href}
          className={`${classes.container}${
            isLinkActive ? ` ${classes.active}` : ""
          }`}
        >
          <QuickLink
            isLinkActive={isLinkActive}
            href={href}
            key={text}
            image={image}
            text={text}
          />
        </li>
      ))}
    </ul>
  );
};

export const QuickLink: FC<IQuickLink> = ({
  href,
  isLinkActive,
  text,
  image: { src, alt },
}) => {
  return isLinkActive ? (
    <p>{text}</p>
  ) : (
    <Link className={classes.quickLink} href={href}>
      <span className={classes.text}>{text}</span>
      <img
        className={classes.image}
        src={src}
        alt={alt}
        aria-role={!alt ? "representational" : undefined}
      />
    </Link>
  );
};
