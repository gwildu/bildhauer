import { readdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const get__dirname = () => {
  const __filename = fileURLToPath(import.meta.url);
  return dirname(__filename);
};
export const resolveRelativePath = (relativePath) => {
  const dirname = get__dirname();
  console.log({ dirname, relativePath });
  return resolve(dirname, relativePath);
};
export const readDirectoryNames = (relativePath) => {
  return readdirSync(relativePath, { withFileTypes: true })
    .filter((entries) => entries.isDirectory())
    .map((dirent) => dirent.name);
};

export const readFileNames = (relativePath) => {
  return readdirSync(relativePath, { withFileTypes: true })
    .filter((entries) => entries.isFile())
    .map((dirent) => dirent.name);
};
