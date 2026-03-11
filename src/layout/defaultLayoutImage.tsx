import { LayoutImage } from "./inner-layout/layout-image";
import { FunctionComponent } from "react";

export const DefaultLayoutImage: FunctionComponent = () => (
  <LayoutImage
    src={"/media/images/layout/stone-with-gold.jpg"}
    alt={"grabstein fragment"}
  />
);
