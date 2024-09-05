import yamlPlugin from "eslint-plugin-yml";
import * as yamlParser from "yaml-eslint-parser";
import type { Linter } from "eslint";

export const yamlConfig: Linter.FlatConfig = {
  files: ["**/*.{yml,yaml}"],
  languageOptions: {
    parser: yamlParser,
  },
  plugins: {
    yml: yamlPlugin,
  },
  rules: {
    "yml/block-mapping": "error",
    "yml/block-mapping-colon-indicator-newline": "error",
    "yml/block-mapping-question-indicator-newline": "error",
    "yml/block-sequence": "error",
    "yml/block-sequence-hyphen-indicator-newline": "error",
    "yml/file-extension": "off",
    "yml/flow-mapping-curly-newline": "error",
    "yml/flow-mapping-curly-spacing": "error",
    "yml/flow-sequence-bracket-newline": "error",
    "yml/flow-sequence-bracket-spacing": "error",
    "yml/indent": "error",
    "yml/key-name-casing": "off",
    "yml/key-spacing": "error",
    "yml/no-empty-document": "error",
    "yml/no-empty-key": "error",
    "yml/no-empty-mapping-value": "error",
    "yml/no-empty-sequence-entry": "error",
    "yml/no-irregular-whitespace": "error",
    "yml/no-multiple-empty-lines": "error",
    "yml/no-tab-indent": "error",
    "yml/no-trailing-zeros": "error",
    "yml/plain-scalar": "error",
    "yml/quotes": "error",
    "yml/require-string-key": "error",
    "yml/sort-keys": [
      "error",
      "asc",
      {
        allowLineSeparatedGroups: true,
      },
    ],
    "yml/sort-sequence-values": [
      "error",
      { order: { type: "asc" }, pathPattern: ".*" },
    ],
    "yml/spaced-comment": "error",
    "yml/vue-custom-block/no-parsing-error": "error",
  },
};
