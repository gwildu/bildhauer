import { FC } from "react";
import classes from "./layout-image.module.css";

const { wrapper, layoutImage } = classes;

interface ILayoutImage {
  src: string;
  alt: string;
}

export const LayoutImage: FC<ILayoutImage> = ({ src, alt }) => {
  return (
    <div className={wrapper}>
      <img src={src} alt={alt} className={layoutImage} />
    </div>
  );
};
