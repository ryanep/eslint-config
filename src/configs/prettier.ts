import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export const prettierConfig = defineConfig({
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    "prettier/prettier": "warn",
  },
});
