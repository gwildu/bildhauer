import classes from "./logo.module.css";
import { Link } from "../link";

export const HeaderLogo = () => {
  return (
    <div className={classes.wrapper}>
      <Link href={"/"}>
        <img
          className={classes.logo}
          src={"/media/images/layout/logo-without-stone.jpg"}
          role="presentation"
        />
      </Link>
    </div>
  );
};
