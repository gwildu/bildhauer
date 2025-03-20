import classes from "./heading.module.css";

import { FunctionComponent, ReactNode } from "react";

export type HeadingType = "MAIN_HEADING" | "SUB_HEADING_1";

interface IHeadings {
  markupLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  stylingLevel: HeadingType;
  children: ReactNode;
}

const styleMap = {
  MAIN_HEADING: classes.mainHeading,
  SUB_HEADING_1: classes.subHeading1,
};

export const Heading: FunctionComponent<IHeadings> = ({
  markupLevel,
  stylingLevel,
  children,
}) => {
  const HeadingTag = markupLevel;
  const styles = styleMap[stylingLevel];
  return <HeadingTag className={styles}>{children}</HeadingTag>;
};
