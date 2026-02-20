import { writeFileSync } from "fs";
import { EOL } from "os";
import {
  readDirectoryNames,
  readFileNames,
  resolveRelativePath,
} from "./common.mjs";
import {
  getGalleryCode,
  getGalleryEntrypointCode,
  getGalleryPageCode,
} from "./src/components/gallery/templates.mjs";
import devices from "./src/reference-data/devices.json" with { type: "json" };

const RELATIVE_GALLERY_IMAGES_SOURCE_BASE_PATH = "./src/images/gallery";
const GALLERY_IMAGES_SOURCE_BASE_PATH = "./src/images/gallery";
const GALLERY_IMAGES_PUBLIC_BASE_PATH = "./public/media/images/gallery";
const GM_BATCH_FILE_PATH = "./src/images/gallery/galleryImagesGMBatch.gm";
const GALLERY_CODE_BASE_PATH = "./src/components/gallery/";
const GALLERY_PAGE_BASE_PATH = "./pages/gallery/";
const GALLERY_ENTRYPOINT_BASE_PATH = "./src/entrypoints/gallery/";

const galleryNames = readDirectoryNames(
  resolveRelativePath(RELATIVE_GALLERY_IMAGES_SOURCE_BASE_PATH),
);

// console.log(JSON.stringify(galleryNames, null, 2));

const galleryAndImageNames = galleryNames.map((galleryName) => {
  const fileNames = readFileNames(
    `${RELATIVE_GALLERY_IMAGES_SOURCE_BASE_PATH}/${galleryName}`,
  );
  return { galleryName, fileNames };
});

const mostCommonViewportSizes = devices;

// console.log(JSON.stringify(galleryAndImageNames, null, 2));

const getGMCommandsPerFile = (galleryName, imageName) => {
  const sourcePath = `${GALLERY_IMAGES_SOURCE_BASE_PATH}/${galleryName}/${imageName}`;
  const publicGalleryPath = `${GALLERY_IMAGES_PUBLIC_BASE_PATH}`;
  const imageNameWithoutExtension = imageName.split(".")[0];

  const fallbackFilePath = `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.fallback.jpg`;
  const highDensityAvifPath = `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.highDensity.avif`;
  // const highDensityWebpPath = `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.highDensity.webp`;
  const lowDensityAvifPath = `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.lowDensity.avif`;
  // const lowDensityWebpFilePath = `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.lowDensity.webp`;

  return `
convert ${sourcePath} -resize "234x393" -auto-orient ${fallbackFilePath}
convert ${sourcePath} -resize "468x786" -auto-orient ${highDensityAvifPath}
convert ${sourcePath} -resize "234x393" -auto-orient ${lowDensityAvifPath}
${mostCommonViewportSizes
  .map(({ width, height }) => {
    const aspectRatio = (width / height).toFixed(2);
    return [
      `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.fallback-${width}-${height}-${aspectRatio}.jpg`,
      `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.highDensity-${width}-${height}-${aspectRatio}.avif`,
      // `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.highDensity-${width}-${height}-${aspectRatio}.webp`,
      `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.lowDensity-${width}-${height}-${aspectRatio}.avif`,
      // `${publicGalleryPath}/${galleryName}-${imageNameWithoutExtension}.lowDensity-${width}-${height}-${aspectRatio}.webp`,
    ]
      .map((path) => {
        const densityFactor = path.includes("highDensity") ? 2 : 1;
        return `convert ${sourcePath} -resize "${densityFactor * width}x${
          densityFactor * height
        }" -auto-orient ${path}`;
      })
      .join(EOL);
  })
  .join(EOL)}
`;
};

const getGMCommandsPerGallery = (galleryName, imageNames) =>
  imageNames.reduce((acc, imageName) => {
    return `${acc}# Image: ${imageName}${getGMCommandsPerFile(
      galleryName,
      imageName,
    )}`;
  }, `# Gallery: ${galleryName}${EOL}`);

const output = galleryAndImageNames.reduce(
  ({ commands, code: { galleryCodeOutputs } }, { galleryName, fileNames }) => {
    const result = {
      commands: `${commands}${getGMCommandsPerGallery(galleryName, fileNames)}`,
      code: {
        galleryCodeOutputs: [
          ...galleryCodeOutputs,
          {
            galleryName,
            output: getGalleryCode({
              galleryName,
              images: fileNames.map((fileName) => ({
                imageName: fileName.split(".")[0],
              })),
              isFullScreen: false,
            }),
            outputFullscreen: getGalleryCode({
              galleryName,
              images: fileNames.map((fileName) => ({
                imageName: fileName.split(".")[0],
              })),
              isFullScreen: true,
            }),
          },
        ],
      },
    };
    //console.log(JSON.stringify(result, null, 2));
    return result;
  },
  { commands: "", code: { galleryCodeOutputs: [] } },
);

// console.log(JSON.stringify({ output }, null, 2));

writeFileSync(resolveRelativePath(GM_BATCH_FILE_PATH), output.commands, {
  flag: "w",
});

for (const galleryCodeOutput of output.code.galleryCodeOutputs) {
  // console.log(
  //   JSON.stringify({ output, outputFullscreen, galleryName }, null, 2),
  // );
  const { galleryName, output, outputFullscreen } = galleryCodeOutput;
  writeFileSync(
    resolveRelativePath(`${GALLERY_CODE_BASE_PATH}${galleryName}.tsx`),
    output,
    { flag: "w" },
  );
  console.log(
    JSON.stringify(
      {
        outputFullscreen,
        path: resolveRelativePath(
          `${GALLERY_CODE_BASE_PATH}fullscreen/${galleryName}.tsx`,
        ),
      },
      null,
      2,
    ),
  );
  writeFileSync(
    resolveRelativePath(
      `${GALLERY_CODE_BASE_PATH}fullscreen/${galleryName}.tsx`,
    ),
    outputFullscreen,
    { flag: "w" },
  );
  writeFileSync(
    resolveRelativePath(`${GALLERY_PAGE_BASE_PATH}${galleryName}.tsx`),
    getGalleryPageCode({ galleryName, isFullScreen: false }),
    { flag: "w" },
  );
  writeFileSync(
    resolveRelativePath(
      `${GALLERY_PAGE_BASE_PATH}fullscreen/${galleryName}.tsx`,
    ),
    getGalleryPageCode({ galleryName, isFullScreen: true }),
  );
  writeFileSync(
    resolveRelativePath(`${GALLERY_ENTRYPOINT_BASE_PATH}${galleryName}.tsx`),
    getGalleryEntrypointCode({ galleryName, isFullScreen: false }),
    { flag: "w" },
  );
  writeFileSync(
    resolveRelativePath(
      `${GALLERY_ENTRYPOINT_BASE_PATH}fullscreen/${galleryName}.tsx`,
    ),
    getGalleryEntrypointCode({ galleryName, isFullScreen: true }),
    { flag: "w" },
  );
}
