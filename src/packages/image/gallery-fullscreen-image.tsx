import { FunctionComponent } from "react";
import { SrcSet } from "./srcSet-fullscreen";
import classes from "./gallery-fullscreen-image.module.css";

type IGalleryImage = {
  path: string;
  originalHeight: number;
  originalWidth: number;
  alt?: string;
  fetchPriority?: "auto" | "high" | "low";
  loading?: "eager" | "lazy";
  onLoad?: () => void;
};

export const GalleryImageFullScreen: FunctionComponent<IGalleryImage> = ({
  path,
  originalHeight,
  originalWidth,
  alt = "",
  fetchPriority = "auto",
  loading = "eager",
  onLoad,
}) => {
  return (
    <picture className={classes.picture}>
      <SrcSet
        path={path}
        width={originalWidth}
        height={originalHeight}
        alt={alt}
        fetchPriority={fetchPriority}
        loading={loading}
        onLoad={onLoad}
      />
    </picture>
  );
};
