import classes from "./text.module.css";
import spacingClasses from "../spacing/spacing.module.css";
import { FC } from "react";

export interface IText {
  className?: string;
}

export const Text: FC<IText> = ({ children, className = "" }) => {
  return (
    <p
      className={`${classes.text} ${spacingClasses.margin_paragraph}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </p>
  );
};
