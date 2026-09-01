import tailwindPlugin from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";
import type { ESLint } from "eslint";

export const tailwindConfig = defineConfig({
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    tailwindcss: tailwindPlugin as unknown as ESLint.Plugin,
  },
  rules: {
    "tailwindcss/classnames-order": "error",
    "tailwindcss/enforces-canonical-classname": "off",
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    "tailwindcss/important-modifier-suffix": "off",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/no-unnecessary-arbitrary-value": "error",
  },
  settings: {
    tailwindcss: {},
  },
});
