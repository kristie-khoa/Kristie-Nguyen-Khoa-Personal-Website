import { readdir } from "fs/promises";
import { extname, join } from "path";

const publicFolder = join(
  process.cwd(),
  "public",
  "project-screenshots",
  "trivia-screenshots"
);

async function getImagePaths() {
  try {
    const files = await readdir(publicFolder);
    const imagePaths = files
      .filter(
        (file) =>
          extname(file).toLowerCase() === ".jpg" ||
          extname(file).toLowerCase() === ".png"
      )
      .map(
        (file) =>
          `/${path.join("project-screenshots", "trivia-screenshots", file)}`
      );

    return imagePaths;
  } catch (error) {
    console.error("Error reading trivia-screenshots folder:", error);
    return [];
  }
}

export default getImagePaths;

////////
