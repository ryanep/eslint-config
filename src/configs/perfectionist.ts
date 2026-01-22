import perfectionistPlugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";

export const perfectionistConfig = defineConfig({
  files: ["**/*.[jt]s?(x)"],
  plugins: {
    perfectionist: perfectionistPlugin,
  },
  rules: {
    "perfectionist/sort-array-includes": "error",
    "perfectionist/sort-classes": "error",
    "perfectionist/sort-decorators": "error",
    "perfectionist/sort-enums": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-heritage-clauses": "error",
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "side-effect",
          "value-builtin",
          "value-external",
          "value-internal",
          ["value-parent", "value-sibling", "value-index"],
          "type",
          "type-internal",
          ["type-parent", "type-sibling", "type-index"],
          "unknown",
        ],
        internalPattern: ["^~/.*", "^#/.*", "^@/.*"],
        newlinesBetween: 0,
        type: "natural",
      },
    ],
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-intersection-types": "error",
    "perfectionist/sort-jsx-props": "error",
    "perfectionist/sort-maps": "error",
    "perfectionist/sort-modules": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-objects": [
      "error",
      {
        partitionByComment: true,
      },
    ],
    "perfectionist/sort-sets": "error",
    "perfectionist/sort-switch-case": "error",
    "perfectionist/sort-union-types": "error",
    "perfectionist/sort-variable-declarations": "error",
    // TODO: Review new rules
    "perfectionist/sort-export-attributes": "off",
    "perfectionist/sort-import-attributes": "off",
  },
});
