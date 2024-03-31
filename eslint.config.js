// @ts-check
import { createConfig } from "./lib/index.js";

const eslintConfig = createConfig({
  isGraphql: false,
  isNext: false,
  isTailwind: false,
});

export default eslintConfig;
