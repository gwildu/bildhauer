import "../src/packages/stack/css/reset.css";
import "../src/styles/theme.css";
import "../src/packages/stack/css/global.css";
import { AppProps } from "next/app";
import { OuterLayout } from "../src/layout/default/outer-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OuterLayout>
      <Component {...pageProps} />
    </OuterLayout>
  );
}

export default MyApp;
