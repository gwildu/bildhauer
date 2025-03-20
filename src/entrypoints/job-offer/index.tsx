import { Heading } from "../../packages/typography/heading";
import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import { TextListUnordered } from "../../packages/list/textList";
import { Link } from "../../link";

export const JobOffer = () => (
  <DefaultInnerLayout pageHead={pageHead}>
    <Heading markupLevel={"h1"} stylingLevel={"MAIN_HEADING"}>
      <strong>Stellenangebote</strong>
    </Heading>
    <TextListUnordered>
      <li>
        <Link href={"/job-offer/1"}>
          Steinbildhauer/in 50-100% in der Grabmal Herstellung
        </Link>
      </li>
    </TextListUnordered>
  </DefaultInnerLayout>
);

const pageHead = (
  <PageHead title={"Bildhauerei-Rickenbacher - Offene Stellen"} />
);
