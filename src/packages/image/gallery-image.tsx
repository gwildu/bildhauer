import { FunctionComponent } from "react";
import { SrcSet } from "./srcSet";
import classes from "./gallery-image.module.css";

type IGalleryImage = {
  path: string;
  originalHeight: number;
  originalWidth: number;
  alt?: string;
  fetchPriority?: "auto" | "high" | "low";
};
export const GalleryImage: FunctionComponent<IGalleryImage> = ({
  path,
  originalHeight,
  originalWidth,
  alt = "",
  fetchPriority = "auto",
}) => {
  return (
    <picture className={classes.picture}>
      <SrcSet
        path={path}
        width={originalWidth}
        height={originalHeight}
        alt={alt}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};
