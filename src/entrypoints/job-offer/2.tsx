import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { Apprentice as CurrentJobOffer } from "../../job-offer/apprentice";
import { LayoutImage } from "../../layout/default/inner-layout/layout-image";

export const JobOffer = () => {
  return (
    <>
      <DefaultInnerLayout
        pageHead={pageHead}
        image={
          <LayoutImage
            src={"/media/images/layout/working.jpg"}
            alt={"bei der Arbeit"}
          />
        }
      >
        <CurrentJobOffer />
      </DefaultInnerLayout>
    </>
  );
};

const pageHead = (
  <PageHead
    title={
      "Bildhauerei-Rickenbacher - Steinbildhauer/in 60-100% in der Grabmal Herstellung"
    }
  />
);
