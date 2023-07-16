import { DefaultInnerLayout } from "../layout/default/inner-layout/inner-layout";
import { PageHead } from "../packages/seo/page-head";

export const AboutUs = () => {
  return <DefaultInnerLayout pageHead={pageHead}>about us</DefaultInnerLayout>;
};

const pageHead = <PageHead title={"Bildhauerei-Rickenbacher - Über uns"} />;
