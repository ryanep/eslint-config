import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const libraryPath = "./lib";
const exportPath = "./";

const main = async () => {
  const files = await readdir(libraryPath);

  for (const file of files) {
    const outputText = `module.exports = require("${libraryPath}/${file}");`;
    const outputPath = path.join(exportPath, file);

    await writeFile(outputPath, outputText, "utf8");
  }
};

main().catch(console.error);
