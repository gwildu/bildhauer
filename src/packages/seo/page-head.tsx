import Head from "next/head";
import { FC } from "react";

interface IPageHead {
  title: string;
  canonical?: string;
}

const CANONICAL_BASE_URL = "https://bildhauer-stein.ch";

export const PageHead: FC<IPageHead> = ({ title, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      {typeof canonical === "string" && (
        <link rel="canonical" href={`${CANONICAL_BASE_URL}${canonical}`} />
      )}
    </Head>
  );
};
