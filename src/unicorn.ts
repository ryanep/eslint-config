import { type Linter } from "eslint";

const unicorn: Linter.Config = {
  plugins: ["unicorn"],
  extends: ["plugin:unicorn/recommended"],
  rules: {
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: false,
        },
      },
    ],
  },
};

export = unicorn;
