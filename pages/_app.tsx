import "../src/packages/stack/css/reset.css";
import "../src/styles/theme.css";
import "../src/packages/stack/css/global.css";
import { Layouts } from "../src/layout/outer-layout/layout-map";
import { CustomAppProps } from "../src/common/types";

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Layouts[Component.Layout] || Layouts.Default;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
