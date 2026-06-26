import tailwindPlugin from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";

export const tailwindConfig = defineConfig({
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    tailwindcss: tailwindPlugin as never,
  },
  rules: {
    "tailwindcss/classnames-order": "error",
    "tailwindcss/enforces-negative-arbitrary-values": "error",
    "tailwindcss/enforces-shorthand": "error",
    // Removed in v4: tailwindcss/migration-from-tailwind-2
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/no-unnecessary-arbitrary-value": "error",
  },
  settings: {
    tailwindcss: {
      config: {},
    },
  },
});
