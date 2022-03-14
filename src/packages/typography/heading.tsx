import classes from "./heading.module.css";

import { FunctionComponent, ReactNode } from "react";

export type HeadingType = "MAIN_HEADING" | "SUB_HEADING_1";

interface IHeadings {
  markupLevel: 1 | 2 | 3 | 4 | 5 | 6;
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
  const HeadingTag = `h${markupLevel}` as keyof JSX.IntrinsicElements;
  const styles = styleMap[stylingLevel];
  return <HeadingTag className={styles}>{children}</HeadingTag>;
};
