import { FunctionComponent } from "react";
import { StaticImageData } from "next/image";
import classes from "./gallery.module.css";
import { GalleryImage } from "../image/gallery-image";
import {
  isInLoadingSpan,
  useSortedImageLoading,
} from "./useSortedImageLoading";
import { Heading } from "../typography/heading";

interface IGallery {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
  name: string;
}

export const Gallery: FunctionComponent<IGallery> = ({ images, name }) => {
  const { loadingSpan, onImageLoaded } = useSortedImageLoading(
    images.length,
    0,
  );

  return (
    <>
      <Heading
        markupLevel={"h1"}
        stylingLevel={"MAIN_HEADING"}
        className={classes.heading}
      >
        {name}
      </Heading>

      <div className={classes.galleryContainer}>
        {images.map((image, index) => {
          const {
            staticImageData: { height, width },
            path,
            alt,
          } = image;
          const backLink = `/gallery/${name}#${alt}`;
          const urlSearchParams = new URLSearchParams();
          urlSearchParams.append("imageIndex", index.toString());
          urlSearchParams.append("backlink", backLink);
          const key = image.path + index;
          const shouldImageLoad = isInLoadingSpan(loadingSpan, index);
          return (
            <article key={key} className={classes.imageContainer} id={alt}>
              <a
                href={`./fullscreen/${name}?${urlSearchParams.toString()}#${alt}`}
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
                    onLoad={() => onImageLoaded(index)}
                  />
                ) : (
                  <div style={{ height: `${height}px`, width: `${width}px` }} />
                )}
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
};
