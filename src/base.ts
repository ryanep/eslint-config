import globals from "globals";
import type { Linter } from "eslint";

export const baseConfig: Linter.Config = {
  files: ["**/*.[jt]s?(x)"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: "error",
  },
};
