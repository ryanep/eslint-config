import tailwindPlugin from "eslint-plugin-tailwindcss";
import type { Linter } from "eslint";

export const tailwindConfig: Linter.FlatConfig = {
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    tailwindcss: tailwindPlugin,
  },
  rules: {
    "tailwindcss/classnames-order": "error",
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    "tailwindcss/migration-from-tailwind-2": "error",
    "tailwindcss/no-arbitrary-value": "error",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-custom-classname": "error",
  },
};
