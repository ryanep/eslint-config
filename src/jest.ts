import globals from "globals";
import jestPlugin from "eslint-plugin-jest";
import type { Linter } from "eslint";

export const jestConfig: Linter.FlatConfig = {
  files: ["**/__mocks__/**/*", "**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}"],
  plugins: {
    jest: jestPlugin,
  },
  languageOptions: {
    globals: globals.jest,
  },
  rules: {
    // #region jest
    "jest/consistent-test-it": "error",
    "jest/expect-expect": "error",
    "jest/max-nested-describe": [
      "error",
      {
        max: 5,
      },
    ],
    "jest/no-alias-methods": "error",
    "jest/no-commented-out-tests": "error",
    "jest/no-conditional-expect": "error",
    "jest/no-conditional-in-test": "error",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-done-callback": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-export": "error",
    "jest/no-focused-tests": "error",
    "jest/no-hooks": "off",
    "jest/no-identical-title": "error",
    "jest/no-if": "error",
    "jest/no-interpolation-in-snapshots": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-large-snapshots": "off",
    "jest/no-mocks-import": "error",
    "jest/no-restricted-matchers": "off",
    "jest/no-standalone-expect": "error",
    "jest/no-test-prefixes": "error",
    "jest/no-test-return-statement": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-expect-assertions": [
      "error",
      { onlyFunctionsWithAsyncKeyword: true },
    ],
    "jest/prefer-expect-resolves": "error",
    "jest/prefer-hooks-in-order": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-lowercase-title": "error",
    "jest/prefer-spy-on": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "error",
    "jest/require-hook": "off",
    "jest/require-to-throw-message": "error",
    "jest/require-top-level-describe": "error",
    "jest/unbound-method": "error",
    "jest/valid-describe-callback": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-title": "error",

    // TODO: Review rules.
    "jest/max-expects": "off",
    "jest/prefer-comparison-matcher": "off",
    "jest/prefer-each": "off",
    "jest/prefer-equality-matcher": "off",
    "jest/prefer-mock-promise-shorthand": "off",
    "jest/prefer-snapshot-hint": "off",
    "jest/no-confusing-set-timeout": "off",
    "jest/no-restricted-jest-methods": "off",
    "jest/no-untyped-mock-factory": "off",
    // #endregion
  },
  settings: {
    jest: {
      version: "latest",
    },
  },
};
