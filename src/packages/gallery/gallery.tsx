import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";
import classes from "./gallery.module.css";
import { GalleryImage } from "../image/gallery-image";

interface IGallery {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
  name: string;
}
export const Gallery: FunctionComponent<IGallery> = ({ images, name }) => {
  return (
    <div className={classes.galleryContainer}>
      {images.map((image, index) => {
        const {
          staticImageData: { height, width },
          path,
          alt,
        } = image;
        const key = image.path + index;
        return (
          <div key={key} className={classes.imageContainer}>
            <a href={`./fullscreen/${name}#${alt}`} title="fullscreen">
              <GalleryImage
                path={path}
                originalHeight={height}
                originalWidth={width}
                alt={alt}
                fetchPriority={index < 8 ? "high" : "auto"}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};
