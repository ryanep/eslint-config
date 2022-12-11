import type { Linter } from "eslint";

const config: Linter.Config = {
  overrides: [
    {
      env: {
        "jest/globals": true,
      },
      settings: {
        "jest": {
          version: "latest",
        },
        "import/resolver": {
          typescript: true,
        },
      },
      plugins: ["jest"],
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      rules: {
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
          {
            onlyFunctionsWithAsyncKeyword: true,
          },
        ],
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-lowercase-title": "off",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": "off",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-hook": "off",
        "jest/require-to-throw-message": "error",
        "jest/require-top-level-describe": "error",
        "jest/unbound-method": "off",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-expect": "error",
        "jest/valid-title": "error",
      },
    },
  ],
};

export = config;
