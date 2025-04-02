import classes from "./textList.module.css";
import { FC, PropsWithChildren } from "react";

export const TextListUnordered: FC<
  PropsWithChildren & { className?: string }
> = ({ className, children }) => {
  console.log({ className });
  return (
    <ul className={`${classes.wrapper}${className ? ` ${className}` : ""}`}>
      {children}
    </ul>
  );
};

export const BulletListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={classes.bullet}>{children}</li>;
};

export const CheckmarkListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={classes.checkmark}>{children}</li>;
};

export const DiamondListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={classes.diamond}>{children}</li>;
};

export const CheckboxListItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className={classes.checkbox}>{children}</li>;
};
