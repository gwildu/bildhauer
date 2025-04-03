import Head from "next/head";
import { FC } from "react";

interface IPageHead {
  title: string;
  canonical?: string;
}

export const PageHead: FC<IPageHead> = ({ title, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
};
