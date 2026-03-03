import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";
import classes from "./gallery.module.css";
import { GalleryImage } from "../image/gallery-image";
import { useSortedImageLoading } from "./useSortedImageLoading";

interface IGallery {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
  name: string;
}

export const Gallery: FunctionComponent<IGallery> = ({ images, name }) => {
  const { imagesToLoad, onImageLoaded } = useSortedImageLoading(
    images.length,
    0,
  );
  console.log({ imagesToLoad });

  return (
    <div className={classes.galleryContainer}>
      {images.map((image, index) => {
        const {
          staticImageData: { height, width },
          path,
          alt,
        } = image;
        const key = image.path + index;
        const shouldImageLoad = imagesToLoad.includes(index);
        return (
          <div key={key} className={classes.imageContainer}>
            <a
              href={`./fullscreen/${name}?imageIndex=${index}#${alt}`}
              title="fullscreen"
            >
              {shouldImageLoad ? (
                <GalleryImage
                  path={path}
                  originalHeight={height}
                  originalWidth={width}
                  alt={alt}
                  fetchPriority={shouldImageLoad ? "high" : "auto"}
                  loading={shouldImageLoad ? "eager" : "lazy"}
                  onLoad={() => {
                    console.log({ index });
                    onImageLoaded();
                  }}
                />
              ) : (
                <div style={{ height: `${height}px`, width: `${width}px` }} />
              )}
            </a>
          </div>
        );
      })}
    </div>
  );
};
