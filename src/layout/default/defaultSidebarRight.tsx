import { QuickLinks } from "../../quick-links/quick-links";

export const DefaultSidebarRight = () => {
  const missingImages = [77];
  let numberOfImageNumber = 0;
  do {
    numberOfImageNumber = Math.floor(Math.random() * 107);
  } while (missingImages.includes(numberOfImageNumber));
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
