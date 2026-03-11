export const getGalleryCode = ({ galleryName, images, isFullScreen }) => `
import { Gallery${isFullScreen ? `Fullscreen` : ""} } from "../../${
  isFullScreen ? `../` : ""
}packages/gallery/gallery${isFullScreen ? `-fullscreen` : ""}";
${images
  .map(
    ({ imageName }) => `
import ${imageName.replace("-", "")} from "../../../${
      isFullScreen ? `../` : ""
    }public/media/images/gallery/${galleryName}-${imageName}.fallback.jpg";
`,
  )
  .join("\n")}

const basePath = "/media/images/gallery/";
const getPath = (imageName) => \`\${basePath}${galleryName}-\${imageName}\`;

const images = [
${images
  .map(
    ({ imageName }) => `
  {
    staticImageData: ${imageName.replace("-", "")},
    path: getPath("${imageName}"),
    alt: "${imageName}",
  },
`,
  )
  .join("\n")}
];

export const ${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
} = () => {
  return <Gallery${isFullScreen ? `Fullscreen` : ""} images={images} ${
    isFullScreen ? "" : `name={"${galleryName}"}`
  } />;
};
`;

export const getGalleryPageCode = ({ galleryName, isFullScreen }) => `
import { ${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
}Page } from "../../${isFullScreen ? `../` : ""}src/entrypoints/gallery${
  isFullScreen ? `/fullscreen` : ""
}/${galleryName}";

export default ${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
}Page;
`;

export const getGalleryEntrypointCode = ({ galleryName, isFullScreen }) => `
import { ${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
} } from "../../${isFullScreen ? `../` : ""}components/gallery${
  isFullScreen ? `/fullscreen` : ""
}/${galleryName}";

export const ${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
}Page = () => <${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
} />;

${capitalizeFirst(galleryName)}Gallery${
  isFullScreen ? `Fullscreen` : ""
}Page.Layout = ${isFullScreen ? `"Fullscreen"` : `"Plain"`};
`;

const capitalizeFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);
