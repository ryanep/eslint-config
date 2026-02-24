import importPlugin from "eslint-plugin-import-x";
import { defineConfig } from "eslint/config";

export const importConfig = defineConfig([
  {
    plugins: {
      "import-x": importPlugin,
    },
    rules: {
      "import-x/export": "error",
      "import-x/extensions": [
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
      "import-x/imports-first": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-deprecated": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-extraneous-dependencies": "off",
      "import-x/no-mutable-exports": "error",
      "import-x/no-named-as-default": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": "error",
      "import-x/order": "off",
      "import-x/prefer-default-export": "off",

      // TODO: Review disabled import rules.
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "off",
      "import-x/dynamic-import-chunkname": "off",
      "import-x/exports-last": "off",
      "import-x/first": "off",
      "import-x/group-exports": "off",
      "import-x/max-dependencies": "off",
      "import-x/named": "off",
      "import-x/namespace": "off",
      "import-x/no-absolute-path": "off",
      "import-x/no-amd": "off",
      "import-x/no-anonymous-default-export": "off",
      "import-x/no-commonjs": "off",
      "import-x/no-cycle": "off",
      "import-x/no-default-export": "off",
      "import-x/no-dynamic-require": "off",
      "import-x/no-empty-named-blocks": "off",
      "import-x/no-import-module-exports": "off",
      "import-x/no-internal-modules": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-named-default": "off",
      "import-x/no-named-export": "off",
      "import-x/no-namespace": "off",
      "import-x/no-nodejs-modules": "off",
      "import-x/no-relative-packages": "off",
      "import-x/no-relative-parent-imports": "off",
      "import-x/no-rename-default": "off",
      "import-x/no-restricted-paths": "off",
      "import-x/no-unassigned-import": "off",
      "import-x/no-unused-modules": "off",
      "import-x/no-useless-path-segments": "off",
      "import-x/no-webpack-loader-syntax": "off",
      "import-x/prefer-namespace-import": "off",
      "import-x/unambiguous": "off",
    },
    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
      },
      "import-x/resolver": {
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
      "import-x": importPlugin,
    },
    rules: {
      "import-x/no-default-export": "off",
    },
  },
]);
