import { Text } from "./text";
import classes from "./paragraph.module.css";

export const Paragraph = ({ children }) => (
  <Text className={classes.paragraph}>{children}</Text>
);
