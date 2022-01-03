import path from "node:path";
import { readdir, writeFile } from "node:fs/promises";

const libPath = "./lib";
const exportPath = "./";

const main = async () => {
  const files = await readdir(libPath);

  files.forEach(async (file) => {
    const outputText = `module.exports = require("${libPath}/${file}");`;
    const outputPath = path.join(exportPath, file);

    await writeFile(outputPath, outputText, "utf-8");
  });
};

main().catch(console.error);
