import classes from "./text.module.css";
import spacingClasses from "../spacing/spacing.module.css";
import { FC, ReactNode } from "react";

export interface IText {
  className?: string;
  noMargin?: boolean;
  children?: ReactNode;
}

export const Text: FC<IText> = ({
  children,
  className = "",
  noMargin = false,
}) => {
  return (
    <p
      className={`${classes.text}${
        noMargin ? "" : ` ${spacingClasses.margin_paragraph}`
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </p>
  );
};
