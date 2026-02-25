import { FunctionComponent, useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import classes from "./gallery.module.css";
import { GalleryImage } from "../image/gallery-image";

const FIRST_IMAGES_TO_LOAD = 8;

interface IGallery {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
  name: string;
}

export const Gallery: FunctionComponent<IGallery> = ({ images, name }) => {
  const [firstImagesLoaded, setFirstImagesLoaded] = useState(false);
  const [firstImagesCounter, setFirstImagesCounter] = useState(0);

  const onFirstImagesLoaded = () => {
    setFirstImagesCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (firstImagesCounter === FIRST_IMAGES_TO_LOAD) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFirstImagesLoaded(true);
    }
  }, [firstImagesCounter]);

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
            <a
              href={`./fullscreen/${name}?imageIndex=${index}#${alt}`}
              title="fullscreen"
            >
              <GalleryImage
                path={path}
                originalHeight={height}
                originalWidth={width}
                alt={alt}
                fetchPriority={index < FIRST_IMAGES_TO_LOAD ? "high" : "auto"}
                loading={
                  index < FIRST_IMAGES_TO_LOAD
                    ? "eager"
                    : firstImagesLoaded
                      ? "eager"
                      : "lazy"
                }
                onLoad={onFirstImagesLoaded}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};
