import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

const libraryPath = "./src";
const basePath = "./";

const main = async () => {
  const files = await readdir(libraryPath);

  for (const file of files) {
    const filePath = path.join(basePath, file.replace(".ts", ".js"));

    await unlink(filePath);
  }
};

main().catch(console.error);
