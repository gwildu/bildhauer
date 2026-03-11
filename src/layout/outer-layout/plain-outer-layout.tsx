import { FC, PropsWithChildren } from "react";
import gridClasses from "../../packages/grid/grid.module.css";
import { Header } from "../header/header";
import { Footer } from "../../footer/footer";
import classes from "./plain-outer-layout.module.css";
import headerClasses from "./header-container.module.css";
import footerClasses from "./footer-container.module.css";

export const PlainOuterLayout: FC<PropsWithChildren> = ({
  children: pageContent,
}) => {
  return (
    <div className={classes.container}>
      <header className={headerClasses.outer}>
        <Header />
      </header>
      <main className={classes.main}>
        <div className={gridClasses.container}>{pageContent}</div>
      </main>
      <footer className={`${gridClasses.container} ${footerClasses.outer}`}>
        <Footer className={footerClasses.inner} />
      </footer>
    </div>
  );
};
