import tailwindPlugin from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";

export const tailwindConfig = defineConfig({
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    tailwindcss: tailwindPlugin,
  },
  rules: {
    "tailwindcss/classnames-order": "error",
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    "tailwindcss/migration-from-tailwind-2": "error",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/no-unnecessary-arbitrary-value": "error",
  },
});
