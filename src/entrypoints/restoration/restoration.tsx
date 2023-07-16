import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { LayoutImage } from "../../layout/default/inner-layout/layout-image";

export const Restoration = () => {
  return (
    <DefaultInnerLayout pageHead={pageHead} image={layoutImage}>
      restoration
    </DefaultInnerLayout>
  );
};

const layoutImage = (
  <LayoutImage
    src={"/media/images/layout/restaurationen1.jpg"}
    alt={"grabstein fragment"}
  />
);

const pageHead = (
  <PageHead title={"Bildhauerei-Rickenbacher - Restaurationen"} />
);
