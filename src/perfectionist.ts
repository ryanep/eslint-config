import perfectionistPlugin from "eslint-plugin-perfectionist";
import type { Linter } from "eslint";

export const perfectionistConfig: Linter.FlatConfig = {
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    perfectionist: perfectionistPlugin,
  },
  rules: {
    "perfectionist/sort-array-includes": "error",
    "perfectionist/sort-astro-attributes": "error",
    "perfectionist/sort-classes": "error",
    "perfectionist/sort-enums": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "side-effect",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "type",
          "internal-type",
          ["parent-type", "sibling-type", "index-type"],
          "object",
          "unknown",
        ],
        internalPattern: ["#/**", "@/**"],
        newlinesBetween: "never",
        type: "natural",
      },
    ],
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-intersection-types": "error",
    "perfectionist/sort-jsx-props": "error",
    "perfectionist/sort-maps": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-objects": [
      "error",
      {
        partitionByComment: true,
      },
    ],
    "perfectionist/sort-svelte-attributes": "error",
    "perfectionist/sort-switch-case": "error",
    "perfectionist/sort-union-types": "error",
    "perfectionist/sort-variable-declarations": "error",
    "perfectionist/sort-vue-attributes": "error",
  },
};
