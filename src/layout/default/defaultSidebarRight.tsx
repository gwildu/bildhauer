import { QuickLinks } from "../../quick-links/quick-links";

export const DefaultSidebarRight = () => {
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
