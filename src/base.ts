import { type Linter } from "eslint";

const config: Linter.Config = {
  env: {
    es6: true,
  },
  plugins: ["import", "eslint-comments"],

  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "airbnb-typescript",
    "./unicorn",
    "./filenames",
    "./jsdoc",
    "prettier",
  ],
  overrides: [
    {
      extends: ["./typescript", "prettier"],
      files: "*.ts",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      extends: ["./typescript", "./react", "./jsx-accessibility", "prettier"],
      files: "*.tsx",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      extends: ["./jest", "prettier"],
      files: "*.{test,spec}.{ts,tsx}",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      extends: ["./json", "prettier"],
      files: "*.json",
    },
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: [
              "**/components/**/*",
              "**/pages/**/*",
              "**/containers/**/*",
              "!**/pages/*",
              "!**/components/*",
              "!**/containers/*",
            ],
            message: "Use public index file to import component related files.",
          },
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "#/**",
            group: "internal",
          },
        ],
      },
    ],
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
  },
};

export = config;
