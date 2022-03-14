import { FC, ReactNode } from "react";
import Head from "next/head";
import classes from "./inner-layout.module.css";
import gridClasses from "../../../packages/grid/grid.module.css";

interface IInnerLayout {
  children: ReactNode;
  image: ReactNode;
  facts: ReactNode;
  pageHead: ReactNode;
  sideBarRight: ReactNode;
  sideBarLeft: ReactNode;
}

export const DefaultInnerLayout: FC<IInnerLayout> = ({
  children,
  image,
  facts,
  pageHead,
  sideBarLeft,
  sideBarRight,
}) => {
  return (
    <>
      {pageHead}
      {image}
      <main className={`${gridClasses.container} ${classes.main}`}>
        <aside className={classes.sideBarLeft}>{sideBarLeft}</aside>
        <div className={classes.content}>{children}</div>
        <aside className={classes.sideBarRight}>{sideBarRight}</aside>
      </main>
      {facts}
    </>
  );
};
