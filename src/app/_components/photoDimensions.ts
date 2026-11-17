import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

// Reads a photo's real width and height (at build or render time) from its
// file in public/, so it can be shown at its true aspect ratio.
export function getPhotoDimensions(src: string) {
  const filePath = path.join(process.cwd(), "public", src);
  const { width, height } = imageSize(readFileSync(filePath));
  return { width, height };
}
