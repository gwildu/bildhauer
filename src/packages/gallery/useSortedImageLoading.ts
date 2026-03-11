import { useEffect, useState } from "react";

export const useSortedImageLoading = (
  imageArrayLength: number,
  initialImageIndex: number | null,
) => {
  const [batchSize, setBatchSize] = useState(1);
  const [lastDirection, setLastDirection] = useState<Direction>("ascending");

  const [lastLoadingSpan, setLastLoadingSpan] =
    useState<LoadingSpan>(INITIAL_LOADING_SPAN);

  useEffect(() => {
    if (initialImageIndex === null) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLastLoadingSpan([initialImageIndex, initialImageIndex]);
  }, [initialImageIndex]);

  const onImageLoaded = (loadedImageIndex) => {
    const newState = getNewState({
      batchSize,
      lastLoadingSpan: lastLoadingSpan,
      loadedImageIndex,
      initialImageIndex,
      imageArrayLength,
      lastDirection,
    });

    if (!newState) {
      return;
    }
    const { newLoadingSpan, newLastDirection, newBatchSize } = newState;

    setLastLoadingSpan(newLoadingSpan);

    setLastDirection(newLastDirection);

    if (newBatchSize) {
      setBatchSize(newBatchSize);
    }
  };

  return {
    loadingSpan: lastLoadingSpan,
    onImageLoaded,
  };
};

const INITIAL_LOADING_SPAN: LoadingSpan = [Infinity, -1];

export type Direction = "ascending" | "descending";
export type LoadingSpan = [number, number];

export const getNewState = ({
  batchSize,
  lastDirection,
  lastLoadingSpan,
  loadedImageIndex,
  imageArrayLength,
  initialImageIndex,
}: {
  batchSize: number;
  lastDirection: Direction;
  lastLoadingSpan: LoadingSpan;
  loadedImageIndex: number;
  imageArrayLength: number;
  initialImageIndex;
}): {
  newLoadingSpan: LoadingSpan;
  newLastDirection: Direction;
  newBatchSize: number;
} => {
  const [currentStart, currentEnd] = lastLoadingSpan;

  const reachedEndOfArray =
    loadedImageIndex === imageArrayLength - 1 ||
    initialImageIndex === imageArrayLength - 1;
  const reachedStartOfArray = loadedImageIndex === 0 || initialImageIndex === 0;

  const isInitialImage = loadedImageIndex === initialImageIndex;
  const isLastImageOfAscendingSpan =
    (lastDirection === "ascending" && loadedImageIndex === currentEnd) ||
    reachedEndOfArray;
  const isLastImageOfDescendingSpan =
    (lastDirection === "descending" &&
      loadedImageIndex === currentStart + batchSize - 1) ||
    reachedStartOfArray;

  if (
    !isInitialImage &&
    !isLastImageOfAscendingSpan &&
    !isLastImageOfDescendingSpan
  ) {
    return;
  }

  const isNextSpanAscending =
    (reachedStartOfArray && !reachedEndOfArray) ||
    (lastDirection === "descending" && !reachedEndOfArray) ||
    isInitialImage;
  const isNextSpanDescending =
    !isInitialImage &&
    ((reachedEndOfArray && !reachedStartOfArray) ||
      (lastDirection === "ascending" && !reachedStartOfArray));

  const newStart = isNextSpanDescending
    ? currentStart - batchSize
    : currentStart;

  const newEnd = isNextSpanAscending ? currentEnd + batchSize : currentEnd;

  const newLoadingSpan: LoadingSpan = [newStart, newEnd];
  const newLastDirection = isNextSpanAscending ? "ascending" : "descending";
  const newBatchSize =
    !isNextSpanDescending || reachedStartOfArray ? batchSize + 1 : null;

  return { newLoadingSpan, newLastDirection, newBatchSize };
};

export const isInLoadingSpan = (
  loadingSpan: [number, number],
  index: number,
) => {
  const [start, end] = loadingSpan;
  return index >= start && index <= end;
};
