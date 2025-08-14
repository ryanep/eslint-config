import { fixupPluginRules } from "@eslint/compat";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import type { Linter } from "eslint";

export const reactHooksConfig: Linter.Config = {
  files: ["**/*.{jsx,tsx}"],
  plugins: {
    "react-hooks": fixupPluginRules(reactHooksPlugin),
  },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
