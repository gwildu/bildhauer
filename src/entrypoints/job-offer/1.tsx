import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { JobOffer as CurrentJobOffer } from "../../job-offer/job-offer";

export const JobOffer = () => {
  return (
    <>
      <DefaultInnerLayout pageHead={pageHead}>
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
