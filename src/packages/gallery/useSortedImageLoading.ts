import { useEffect, useState } from "react";

export const useSortedImageLoading = (
  imageArrayLength: number,
  initialImageIndex: number | null,
) => {
  const [direction, setDirection] = useState<
    "ascending" | "descending" | "none"
  >("ascending");

  const [imagesToLoad, setImagesToLoad] = useState<number[]>([]);
  useEffect(() => {
    if (initialImageIndex === null) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImagesToLoad([initialImageIndex]);
  }, [initialImageIndex]);

  const onImageLoaded = () => {
    const lastImageToLoadIndex = imagesToLoad[imagesToLoad.length - 1];
    const reachedEndOfArray = lastImageToLoadIndex >= imageArrayLength - 2;
    const reachedStartOfArray = lastImageToLoadIndex === 1;
    console.log({
      lastImageToLoadIndex,
      reachedEndOfArray,
      reachedStartOfArray,
      direction,
    });
    if (direction === "none") {
      return;
    }
    const nextImageToLoadIndex =
      direction === "ascending"
        ? lastImageToLoadIndex + 1
        : reachedEndOfArray
          ? initialImageIndex - 1
          : lastImageToLoadIndex - 1;
    console.log({ nextImageToLoadIndex });
    setImagesToLoad((prev) => {
      return [...prev, nextImageToLoadIndex];
    });
    if (reachedEndOfArray) {
      setDirection("descending");
    }
    if (reachedStartOfArray && direction === "descending") {
      setDirection("none");
    }
  };

  return {
    imagesToLoad,
    onImageLoaded,
  };
};

export const useSortedImageLoading_ = (
  imageArrayLength: number,
  imagesInViewPortIndexes: number[],
) => {
  const [loadingInfo, setLoadingInfo] = useState<
    ({ toLoad: boolean; loaded: boolean } | null)[]
  >(
    Array.from({ length: imageArrayLength }, (_, index) => {
      const isImageInViewPort = imagesInViewPortIndexes.includes(index);
      return isImageInViewPort
        ? {
            toLoad: true,
            loaded: false,
          }
        : null;
    }),
  );
  console.log({ loadingInfo });

  useEffect(() => {
    if (imagesInViewPortIndexes.length === 1) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoadingInfo(
        Array.from({ length: imageArrayLength }, (_, index) => {
          const isImageInViewPort = imagesInViewPortIndexes.includes(index);
          return isImageInViewPort
            ? {
                toLoad: true,
                loaded: false,
              }
            : null;
        }),
      );
    }
  }, [imagesInViewPortIndexes.length]);

  const onImageLoaded = (loadedIndex) => {
    const onlyOneImageLoaded = Boolean(
      loadingInfo.filter((image) => image?.loaded === true).length,
    );
    const goingForward =
      imageArrayLength - 1 === loadedIndex
        ? false
        : Boolean(loadingInfo[loadedIndex - 1]?.loaded) || onlyOneImageLoaded;
    const goingBackward =
      (!goingForward && Boolean(loadingInfo[loadedIndex + 1]?.loaded)) ||
      onlyOneImageLoaded;

    setLoadingInfo((prev) => {
      return prev.map((state, index) => {
        return {
          toLoad:
            (goingForward && index - 1 === loadedIndex) ||
            (goingBackward && index + 1 === loadedIndex),
          loaded: index === loadedIndex ? true : state?.loaded || false,
        };
      });
    });
    console.log({ loadedIndex });
  };
  return {
    loadingInfo,
    onImageLoaded,
  };
};
