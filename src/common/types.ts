import { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import { LayoutKeys } from "../layout/outer-layout/layout-map";

export type CustomAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, never, never> & {
    Layout: LayoutKeys;
  };
};
