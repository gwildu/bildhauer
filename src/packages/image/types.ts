import { StaticImageData } from "next/image";

export type ImageProps = ImageA11yProps & {
  src: string;
  originalHeight: number;
  originalWidth: number;
};

type ImageA11yProps = IImageA11yPresentationProps | IImageAllyDescriptiveProps;

interface IImageA11yPresentationProps {
  allyRole: "presentation";
}

interface IImageAllyDescriptiveProps {
  allyRole: "descriptive";
  alt: string;
}

export const transformStaticImageDataToPartialImageProps = (
  staticImageData: StaticImageData,
): Pick<ImageProps, "src" | "originalHeight" | "originalWidth"> => {
  const { src, height, width } = staticImageData;
  return {
    src,
    originalHeight: height,
    originalWidth: width,
  };
};
