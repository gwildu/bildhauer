import { HeaderLogo } from "../../logo/logo";
import { MainNavigation } from "../../navigation/main-navigation";
import { FunctionComponent } from "react";
import classes from "./header.module.css";

export const Header: FunctionComponent = () => (
  <div className={classes.header}>
    <div className={classes.logo}>
      <HeaderLogo />
    </div>
    <div className={classes.navigation}>
      <MainNavigation />
    </div>
  </div>
);
