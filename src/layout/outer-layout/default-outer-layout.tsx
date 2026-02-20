import { FC, PropsWithChildren } from "react";
import gridClasses from "../../packages/grid/grid.module.css";
import innerLayoutClasses from "../inner-layout/inner-layout.module.css";
import { Footer } from "../../footer/footer";
import { Header } from "../header/header";
import classes from "./default-outer-layout.module.css";

export const DefaultOuterLayout: FC<PropsWithChildren> = ({
  children: pageContent,
}) => {
  return (
    <>
      <div className={classes.container}>
        <Header />
        {pageContent}
        <footer className={gridClasses.container}>
          <div className={innerLayoutClasses.footer}>
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};
