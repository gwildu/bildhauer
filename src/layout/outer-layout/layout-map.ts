import { DefaultOuterLayout } from "./default-outer-layout";
import { PlainOuterLayout } from "./plain-outer-layout";
import { FullscreenOuterLayout } from "./fullscreen-outer-layout";

export const Layouts = {
  Default: DefaultOuterLayout,
  Plain: PlainOuterLayout,
  Fullscreen: FullscreenOuterLayout,
};

export type LayoutKeys = keyof typeof Layouts;
