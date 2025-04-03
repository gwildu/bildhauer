import { Heading } from "../../packages/typography/heading";
import { DefaultInnerLayout } from "../../layout/default/inner-layout/inner-layout";
import { PageHead } from "../../packages/seo/page-head";
import {
  BulletListItem,
  TextListUnordered,
} from "../../packages/list/textList";
import { Link } from "../../link";
import { LayoutImage } from "../../layout/default/inner-layout/layout-image";

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
    <TextListUnordered>
      <BulletListItem>
        <Link href={"/job-offer/1"}>
          Steinbildhauer/in 50-100% in der Grabmal Herstellung
        </Link>
      </BulletListItem>
      <BulletListItem>
        <Link href={"/job-offer/2"}>
          Lehrstelle als Steinmetz/in – Fachrichtung Bildhauerei 2026
        </Link>
      </BulletListItem>
    </TextListUnordered>
  </DefaultInnerLayout>
);

const pageHead = (
  <PageHead title={"Bildhauerei-Rickenbacher - Offene Stellen"} />
);
