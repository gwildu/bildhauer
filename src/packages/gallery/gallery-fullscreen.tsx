import { StaticImageData } from "next/image";
import { FC } from "react";
import classes from "./gallery-fullscreen.module.css";
import { GalleryImageFullScreen } from "../image/gallery-fullscreen-image";
import { useSearchParams } from "next/navigation";

interface IGalleryFullscreen {
  images: {
    staticImageData: StaticImageData;
    path: string;
    alt: string;
  }[];
}
export const GalleryFullscreen: FC<IGalleryFullscreen> = ({ images }) => {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  const searchParams = useSearchParams();
  const imageIndex = Number(searchParams.get("imageIndex"));

  return (
    <div className={classes.container}>
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
            const {
              staticImageData: { height, width },
              path,
              alt,
            } = image;
            console.log({ src: image.staticImageData.src, path });
            return (
              <li className={classes.slide} key={image.path} id={image.alt}>
                <GalleryImageFullScreen
                  path={path}
                  originalHeight={height}
                  originalWidth={width}
                  alt={alt}
                  fetchPriority={
                    Math.abs(imageIndex - index) < 2 ? "high" : "low"
                  }
                />
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
