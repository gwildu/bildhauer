import { FC, PropsWithChildren } from "react";
import { Header } from "../header/header";
import gridClasses from "../../packages/grid/grid.module.css";
import classes from "./fullscreen-outer-layout.module.css";
import { Footer } from "../../footer/footer";
import footerClasses from "./footer-container.module.css";
import headerClasses from "./header-container.module.css";

export const FullscreenOuterLayout: FC<PropsWithChildren> = ({
  children: pageContent,
}) => {
  return (
    <>
      <div className={classes.container}>
        <header className={`${gridClasses.container} ${headerClasses.outer}`}>
          <div className={headerClasses.inner}>
            <Header />
          </div>
        </header>
        <main className={classes.content}>{pageContent}</main>
        <footer className={`${gridClasses.container} ${footerClasses.outer}`}>
          <div className={footerClasses.inner}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};
