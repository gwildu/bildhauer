import { FunctionComponent } from "react";
import classes from "./gallery-image.module.css";

interface ISrcSet {
  path: string;
  width: number;
  height: number;
  alt?: string;
  fetchPriority?: "auto" | "high" | "low";
  loading?: "eager" | "lazy";
  onLoad?: () => void;
}
export const SrcSet: FunctionComponent<ISrcSet> = ({
  path,
  width,
  height,
  alt = "",
  fetchPriority = "auto",
  loading = "eager",
  onLoad,
}) => {
  return (
    <>
      <source
        src={`${path}.lowDensity.avif`}
        srcSet={`
            ${path}.lowDensity.avif 1x,
            ${path}.highDensity.avif 2x`}
      />
      <img
        alt={alt}
        className={classes.image}
        width={width}
        height={height}
        style={{ aspectRatio: `${width} / ${height}` }}
        src={path ? `${path}.fallback.jpg` : path}
        fetchPriority={fetchPriority}
        loading={loading}
        onLoad={onLoad}
      />
    </>
  );
};
