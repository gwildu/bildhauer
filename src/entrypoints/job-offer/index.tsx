import { Heading } from "../../packages/typography/heading";
import { Paragraph } from "../../packages/typography/paragraph";
import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";

export const JobOffer = () => (
  <DefaultInnerLayout pageHead={pageHead}>
    <Heading markupLevel={1} stylingLevel={"MAIN_HEADING"}>
      <strong>Stellenangebote</strong>
    </Heading>
    <Paragraph>Momentan haben wir keine offenen Stellen...</Paragraph>
  </DefaultInnerLayout>
);

const pageHead = (
  <PageHead title={"Bildhauerei-Rickenbacher - Offene Stellen"} />
);
