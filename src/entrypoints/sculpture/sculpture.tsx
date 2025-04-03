import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";

export const Sculpture = () => {
  return <DefaultInnerLayout pageHead={pageHead}>sculpture</DefaultInnerLayout>;
};

const pageHead = <PageHead title={"Bildhauerei-Rickenbacher - Bildhauerei"} />;
