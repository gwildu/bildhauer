import Head from "next/head";
import { FC } from "react";

interface IPageHead {
  title: string;
}

export const PageHead: FC<IPageHead> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
