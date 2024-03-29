import prettierPlugin from "eslint-plugin-prettier";
import type { Linter } from "eslint";

export const prettierConfig: Linter.FlatConfig = {
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    "prettier/prettier": "warn",
  },
};
