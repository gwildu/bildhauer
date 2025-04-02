import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { Apprentice as CurrentJobOffer } from "../../job-offer/apprentice";

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
