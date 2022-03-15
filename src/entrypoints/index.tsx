import { DefaultInnerLayout } from "../layout/default/inner-layout/inner-layout";
import { PageHead } from "../packages/seo/page-head";
import { LayoutImage } from "../layout/default/inner-layout/layout-image";
import { Facts } from "../layout/default/inner-layout/facts";
import { QuickLinks } from "../quick-links/quick-links";
import { useEffect, useState } from "react";
import { Teaser } from "../teaser/teaser";

const getDaysLeft = (goal: Date): number => {
  const now = Date.now();
  const difference = goal.getTime() - now;
  const days = difference / (1000 * 60 * 60 * 24);
  return Math.floor(days) + 1;
};

const useDaysLeft = (goal: Date) => {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft(goal));
  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(getDaysLeft(goal));
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);
  return daysLeft;
};

export const Index = () => {
  const days = useDaysLeft(new Date(2026, 9, 23));
  const facts = (
    <Facts>
      {[
        {
          teaser: "1 Grabmal",
          paragraphs: [
            "erhielt die höchste Auszeichnung:",
            '"Qualitätszeichen mit besonderer Auszeichnung"',
          ],
        },
        {
          teaser: "50 Grabsteine",
          paragraphs: ["aus der Schweiz führen wir in unserem Sortiment"],
        },
        {
          teaser: `${days} Tage`,
          paragraphs: ["bis zu unserem 20 Jahr Jubiläum"],
        },
      ]}
    </Facts>
  );
  return (
    <>
      <DefaultInnerLayout
        pageHead={pageHead}
        image={layoutImage}
        facts={facts}
        sideBarLeft={sidebarLeft}
        sideBarRight={sidebarRight()}
      >
        <Teaser
          title={"Steinbildhauer/in 60-100% in der Grabmal Herstellung"}
          text={
            "Zur Verstärkung suchen wir nach Vereinbarung eine/n Steinbildhauer/in EFZ"
          }
          link={{
            href: "/job-offer",
            children: "zur Stellenbeschreibung...",
          }}
        />
      </DefaultInnerLayout>
    </>
  );
};

const pageHead = <PageHead title={"Bildhauerei-Rickenbacher"} />;
const layoutImage = (
  <LayoutImage
    src={"/media/images/layout/stone-with-gold.jpg"}
    alt={"grabstein fragment"}
  />
);

const sidebarRight = () => {
  const numberOfImageNumber = Math.floor(Math.random() * 107);
  const isHundredOrMore = numberOfImageNumber > 99;
  const isTenOrMore = numberOfImageNumber > 9;
  const filler = isHundredOrMore ? "" : isTenOrMore ? "0" : "00";
  const numberOfImage = `${filler}${numberOfImageNumber}`;
  return (
    <QuickLinks
      links={[
        {
          href: "/sculpture/grave-markers/index.html",
          text: "Gallerie Grabmale",
          isLinkActive: false,
          image: {
            src: `/img/galleries/aa/500/aa${numberOfImage}.jpg`,
          },
        },
      ]}
    />
  );
};
const sidebarLeft = <h2>Aktuelles</h2>;
