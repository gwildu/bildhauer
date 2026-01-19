import { Heading } from "../../packages/typography/heading";
import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { LayoutImage } from "../../layout/default/inner-layout/layout-image";
import { Paragraph } from "../../packages/typography/paragraph";

export const JobOffer = () => (
  <DefaultInnerLayout
    pageHead={pageHead}
    image={
      <LayoutImage
        src={"/media/images/layout/working.jpg"}
        alt={"bei der Arbeit"}
      />
    }
  >
    <Heading markupLevel={"h1"} stylingLevel={"MAIN_HEADING"}>
      <strong>Stellenangebote</strong>
    </Heading>
    <Paragraph>Aktuell haben wir keine offenen Stellen.</Paragraph>
  </DefaultInnerLayout>
);

const pageHead = (
  <PageHead
    title={"Bildhauerei-Rickenbacher - Offene Stellen"}
    canonical={"/job-offer"}
  />
);
