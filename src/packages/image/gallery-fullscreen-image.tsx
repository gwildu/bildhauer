import { FunctionComponent } from "react";
import { SrcSet } from "./srcSet-fullscreen";
import classes from "./gallery-fullscreen-image.module.css";

type IGalleryImage = {
  path: string;
  originalHeight: number;
  originalWidth: number;
  alt?: string;
};

export const GalleryImageFullScreen: FunctionComponent<IGalleryImage> = ({
  path,
  originalHeight,
  originalWidth,
  alt = "",
}) => {
  return (
    <picture className={classes.picture}>
      <SrcSet
        path={path}
        width={originalWidth}
        height={originalHeight}
        alt={alt}
      />
    </picture>
  );
};
