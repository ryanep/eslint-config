import type { Linter } from "eslint";

const config: Linter.Config = {
  overrides: [
    {
      parser: "jsonc-eslint-parser",
      files: ["*.json", "*.json5"],
      plugins: ["jsonc"],
      rules: {
        "jsonc/array-bracket-newline": [
          "off",
          {
            minItems: 1,
            multiline: true,
          },
        ],
        "jsonc/array-bracket-spacing": "off",
        "jsonc/array-element-newline": ["off", "always"],
        "jsonc/auto": "off",
        "jsonc/comma-dangle": "error",
        "jsonc/comma-style": ["error", "last"],
        "jsonc/indent": ["error", 2],
        "jsonc/key-name-casing": "off",
        "jsonc/key-spacing": "error",
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-comments": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/object-curly-newline": "error",
        "jsonc/object-curly-spacing": "error",
        "jsonc/object-property-newline": "error",
        "jsonc/quote-props": "error",
        "jsonc/quotes": "error",
        "jsonc/sort-keys": [
          "off",
          "asc",
          {
            caseSensitive: false,
            natural: true,
          },
        ],
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
      },
    },
  ],
};

export = config;
