import { Text } from "./text";
import classes from "./paragraph.module.css";
import { FC, ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children, className }) => (
  <Text className={`${classes.paragraph} ${className}`}>{children}</Text>
);
