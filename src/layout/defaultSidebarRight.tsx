import { QuickLinks } from "../quick-links/quick-links";

export const DefaultSidebarRight = () => {
  // eslint-disable-next-line react-hooks/purity
  const numberOfImageNumber = Math.floor(Math.random() * 251) + 1;
  const isHundredOrMore = numberOfImageNumber > 99;
  const isTenOrMore = numberOfImageNumber > 9;
  const filler = isHundredOrMore ? "" : isTenOrMore ? "0" : "00";
  const numberOfImage = `${filler}${numberOfImageNumber}`;
  return (
    <QuickLinks
      links={[
        {
          href: "/gallery/grabmale",
          text: "Gallerie Grabmale",
          isLinkActive: false,
          image: {
            src: `/media/images/gallery/grabmale-grabmale-${numberOfImage}.lowDensity.avif`,
          },
        },
      ]}
    />
  );
};
