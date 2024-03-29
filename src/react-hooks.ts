import reactHooksPlugin from "eslint-plugin-react-hooks";
import type { Linter } from "eslint";

export const reactHooksConfig: Linter.FlatConfig = {
  files: ["**/*.{jsx,tsx}"],
  plugins: {
    "react-hooks": reactHooksPlugin,
  },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
