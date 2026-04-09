import { StaticImageData } from "next/image";
import { FC, useState } from "react";
import classes from "./gallery-fullscreen.module.css";
import { GalleryImageFullScreen } from "../image/gallery-fullscreen-image";
import { useSearchParams } from "next/navigation";
import {
  isInLoadingSpan,
  useSortedImageLoading,
} from "./useSortedImageLoading";
import { Link } from "../../link";

interface IGalleryFullscreen {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
}
export const GalleryFullscreen: FC<IGalleryFullscreen> = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }

  const searchParams = useSearchParams();
  const rawImageIndexParam = searchParams.get("imageIndex");
  const backLink = searchParams.get("backlink");
  const imageIndex = rawImageIndexParam ? Number(rawImageIndexParam) : null;

  const { loadingSpan, onImageLoaded } = useSortedImageLoading(
    images.length,
    imageIndex,
  );

  return (
    <div className={classes.container}>
      {backLink && !isFullScreen && (
        <Link href={backLink} className={classes.back} scroll={true}>
          zurück
        </Link>
      )}
      <div className={classes.slider}>
        <button className={classes.fullscreen} onClick={toggleFullScreen}>
          <span className={classes.topLeft}>⌜</span>
          <span className={classes.topRight}>⌝</span>
          <span className={classes.bottomLeft}>⌞</span>
          <span className={classes.bottomRight}>⌟</span>
        </button>
        <span className={`${classes.fixedHandle} ${classes.prev}`}>〈</span>
        <span className={`${classes.fixedHandle} ${classes.next}`}>〉</span>
        <ul className={classes.slides}>
          {images.map((image, index) => {
            const shouldImageLoad = isInLoadingSpan(loadingSpan, index);
            const priority = shouldImageLoad ? "high" : "low";
            const loading = shouldImageLoad ? "eager" : "lazy";
            const {
              staticImageData: { height, width },
              path,
              alt,
            } = image;
            return (
              <li className={classes.slide} key={image.path} id={image.alt}>
                {shouldImageLoad ? (
                  <GalleryImageFullScreen
                    path={path}
                    originalHeight={height}
                    originalWidth={width}
                    alt={alt}
                    fetchPriority={priority}
                    loading={loading}
                    onLoad={() => onImageLoaded(index)}
                  />
                ) : (
                  <div style={{ width: `${width}px`, height: `${height}px` }} />
                )}
                <a
                  className={`${classes.prev} ${classes.handle}`}
                  href={`#${
                    index > 0
                      ? images[index - 1]?.alt
                      : images[images.length - 1]?.alt
                  }`}
                  title="previous"
                >
                  〈
                </a>
                <a
                  className={`${classes.next} ${classes.handle}`}
                  href={`#${
                    index < images.length - 1
                      ? images[index + 1]?.alt
                      : images[0]?.alt
                  }`}
                  title="next"
                >
                  〉
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
