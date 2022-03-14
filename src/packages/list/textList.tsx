import classes from "./textList.module.css";

export const TextListUnordered = ({ children }) => (
  <ul className={classes.wrapper}>{children}</ul>
);
