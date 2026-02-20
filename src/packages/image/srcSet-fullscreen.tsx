import { FunctionComponent } from "react";
import classes from "./gallery-fullscreen-image.module.css";

interface ISrcSet {
  path: string;
  width: number;
  height: number;
  alt?: string;
}
export const SrcSet: FunctionComponent<ISrcSet> = ({
  path,
  width,
  height,
  alt = "",
}) => {
  console.log({ path });
  return (
    <>
      <source
        src={`${path}lowDensity-2560-1440-1.78.avif`}
        srcSet={`
            ${path}.lowDensity-2560-1440-1.78.avif 1x,
            ${path}.highDensity-2560-1440-1.78.avif 2x`}
      />
      <source
        src={`${path}.lowDensity-2560-1440-1.78.webp`}
        srcSet={`
            ${path}.lowDensity-2560-1440-1.78.webp 1x,
            ${path}.highDensity-2560-1440-1.78.webp 2x`}
      />
      <img
        alt={alt}
        className={classes.image}
        style={{ aspectRatio: `${width} / ${height}` }}
        src={path ? `${path}.fallback-2560-1440-1.78.jpg` : path}
      />
    </>
  );
};

// const useFullScreenImageSize2 = (orgiginalWidth: number, originalHeight) => {
//   const originalSize = {
//     width: orgiginalWidth,
//     height: originalHeight,
//     aspectRatio: orgiginalWidth / originalHeight,
//   };
//
//   const viewPortSize = useViewPortSize();
//
//   const checkType =
//     viewPortSize.aspectRatio > originalSize.aspectRatio ? "height" : "width";
//
//   const candidates = deviceSizes.reduce<ISize[]>((result, current) => {
//     const delta = current[checkType] - viewPortSize[checkType];
//     if (delta < 0 || delta > 0.2) {
//       return result;
//     }
//     return [...result, current];
//   }, []);
//
//   if (candidates.length === 0) {
//     deviceSizes.sort(sortByDistance(viewPortSize, checkType))[0];
//   }
//
//   return candidates
//     .filter((candidate) => {
//       if (checkType === "width") {
//         return viewPortSize.aspectRatio >= candidate.aspectRatio;
//       }
//       if (checkType === "height") {
//         return viewPortSize.aspectRatio <= candidate.aspectRatio;
//       }
//       return false;
//     })
//     .sort(
//       (a, b) =>
//         Math.abs(viewPortSize.aspectRatio - a.aspectRatio) -
//         Math.abs(viewPortSize.aspectRatio - b.aspectRatio),
//     )[0];
// };

// const sortByDistance =
//   (viewPortSize: ISize, type: "width" | "height") => (a: ISize, b: ISize) => {
//     if (a.aspectRatio === viewPortSize.aspectRatio) {
//       const aTypeDistance = Math.abs(a[type] - viewPortSize[type]);
//       const bTypeDistance = Math.abs(b[type] - viewPortSize[type]);
//     }
//     const aARDistance = Math.abs(a.aspectRatio - viewPortSize.aspectRatio);
//     const bARDistance = Math.abs(b.aspectRatio - viewPortSize.aspectRatio);
//   };

// const useFullscreenImageSize = (
//   orginalWidth: number,
//   originalHeight: number,
// ) => {
//   const originaSize = {
//     width: orginalWidth,
//     height: originalHeight,
//     aspectRatio: orginalWidth / originalHeight,
//   };
//   const { width: viewPortWidth, height: viewPortHeight } = useViewPortSize();
//   const viewPortSize = {
//     width: viewPortWidth,
//     height: viewPortHeight,
//     aspectRatio: +(viewPortWidth / viewPortHeight).toFixed(2),
//   };
//   return deviceSizes.reduce<IResult | null>((result, current) => {
//     if (!result) {
//       return {
//         ...current,
//         distance: getAspectRatioDistance(current, viewPortSize),
//       };
//     } else if (isCandidate(result, current, viewPortSize)) {
//     }
//   }, null);
// };

// const getAspectRatioDistance = (a: ISize, b: ISize) =>
//   Math.abs(a.aspectRatio - b.aspectRatio);

// const isCandidate = (result: IResult, current: ISize, viewPortSize: ISize) => {
//   const currentDistance = getAspectRatioDistance(current, viewPortSize);
//   return result.distance <= currentDistance;
// };

// const getCandidates = (viewPortSize: ISize) => {
//   return deviceSizes.reduce(
//     (result, current) => {
//       if (result.length === 0 || hasSameDistance) {
//         result.push({
//           ...current,
//           distance: currentDistance,
//         });
//       } else if (resultHasBiggerDistance) {
//         return [{ ...current, distance: currentDistance }];
//       }
//
//       return result;
//     },
//     null as IResult | null,
//   );
// };

// interface IResult extends ISize {
//   distance: number;
// }

interface ISize {
  width: number;
  height: number;
  aspectRatio: number;
}

// const useViewPortSize = () => {
//   const { innerWidth, innerHeight } = window;
//   const [viewPortSize, setViewportSize] = useState({
//     width: innerWidth,
//     height: innerHeight,
//     aspectRatio: +(innerWidth / innerHeight).toFixed(2),
//   });
//
//   const onScreenOrientationChange = () => {
//     const { innerWidth, innerHeight } = window;
//     setViewportSize({
//       width: innerWidth,
//       height: innerHeight,
//       aspectRatio: +(innerWidth / innerHeight).toFixed(2),
//     });
//   };
//
//   useEffect(() => {
//     screen.orientation.addEventListener("change", onScreenOrientationChange);
//     return () => {
//       screen.orientation.removeEventListener(
//         "change",
//         onScreenOrientationChange,
//       );
//     };
//   }, []);
//
//   return viewPortSize;
// };
