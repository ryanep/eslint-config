import { defineConfig } from "eslint/config";
import globals from "globals";

export const baseConfig = defineConfig({
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
});
