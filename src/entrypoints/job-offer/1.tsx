import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { JobOffer as CurrentJobOffer } from "../../job-offer/job-offer";
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
    canonical={"/job-offer/1"}
  />
);
