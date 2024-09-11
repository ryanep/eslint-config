import importPlugin from "eslint-plugin-import";
import type { Linter } from "eslint";

export const importConfig: Linter.FlatConfig[] = [
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/export": "error",
      "import/extensions": [
        "error",
        "never",
        {
          pattern: {
            css: "always",
            json: "always",
            scss: "always",
            svg: "always",
          },
        },
      ],
      "import/imports-first": "error",
      "import/newline-after-import": "error",
      "import/no-deprecated": "error",
      "import/no-duplicates": "error",
      "import/no-extraneous-dependencies": "off",
      "import/no-mutable-exports": "error",
      "import/no-named-as-default": "error",
      "import/no-self-import": "error",
      "import/no-unresolved": "error",
      "import/order": "off",
      "import/prefer-default-export": "off",

      // TODO: Review disabled import rules.
      "import/consistent-type-specifier-style": "off",
      "import/default": "off",
      "import/dynamic-import-chunkname": "off",
      "import/exports-last": "off",
      "import/first": "off",
      "import/group-exports": "off",
      "import/max-dependencies": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-absolute-path": "off",
      "import/no-amd": "off",
      "import/no-anonymous-default-export": "off",
      "import/no-commonjs": "off",
      "import/no-cycle": "off",
      "import/no-default-export": "off",
      "import/no-dynamic-require": "off",
      "import/no-empty-named-blocks": "off",
      "import/no-import-module-exports": "off",
      "import/no-internal-modules": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-default": "off",
      "import/no-named-export": "off",
      "import/no-namespace": "off",
      "import/no-nodejs-modules": "off",
      "import/no-relative-packages": "off",
      "import/no-relative-parent-imports": "off",
      "import/no-restricted-paths": "off",
      "import/no-unassigned-import": "off",
      "import/no-unused-modules": "off",
      "import/no-useless-path-segments": "off",
      "import/no-webpack-loader-syntax": "off",
      "import/unambiguous": "off",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: true,
      },
    },
  },
  {
    files: [
      // Next app router
      "**/app/**/{page,layout,error,global-error,loading,not-found,template}.{js,ts,cjs,cts,mjs,mts}",

      // Storybook
      "**/.storybook/*.{js,ts,cjs,cts,mjs,mts}",
      "**/*.stories.{js,ts,cjs,cts,mjs,mts}",

      // Config files
      "**/{eslint,cypress,rollup,tailwind,cypress,vite,knip,next,jest}.config.{js,ts,cjs,cts,mjs,mts}",

      // Typescript Declarations
      "**/*.d.ts",
    ],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/no-default-export": "off",
    },
  },
];
