import type { Linter } from "eslint";

const config: Linter.Config = {
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      plugins: ["tailwindcss"],
      rules: {
        "tailwindcss/classnames-order": "error",
        "tailwindcss/enforces-negative-arbitrary-values": "error",
        "tailwindcss/enforces-shorthand": "error",
        "tailwindcss/migration-from-tailwind-2": "error",
        "tailwindcss/no-arbitrary-value": "error",
        "tailwindcss/no-custom-classname": "error",
        "tailwindcss/no-contradicting-classname": "error",
      },
    },
  ],
};

export = config;
