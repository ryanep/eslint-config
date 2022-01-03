import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

const libraryPath = "./lib";
const basePath = "./";

const main = async () => {
  const files = await readdir(libraryPath);

  files.forEach(async (file) => {
    const filePath = path.join(basePath, file);

    await unlink(filePath);
  });
};

main().catch(console.error);
