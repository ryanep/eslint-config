import testingLibraryPlugin from "eslint-plugin-testing-library";
import type { Linter } from "eslint";

export const testingLibraryConfig: Linter.FlatConfig = {
  files: ["**/__mocks__/**/*", "**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}"],
  plugins: {
    "testing-library": testingLibraryPlugin,
  },
  rules: {
    // #region testing-library
    "testing-library/await-async-utils": "error",
    "testing-library/no-container": "error",
    "testing-library/no-debugging-utils": "error",
    "testing-library/no-dom-import": ["error", "react"],
    "testing-library/no-node-access": "error",
    "testing-library/no-promise-in-fire-event": "error",
    "testing-library/no-unnecessary-act": "error",
    "testing-library/no-wait-for-multiple-assertions": "error",
    "testing-library/no-wait-for-side-effects": "error",
    "testing-library/no-wait-for-snapshot": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/prefer-presence-queries": "error",
    "testing-library/prefer-query-by-disappearance": "error",
    "testing-library/prefer-screen-queries": "error",
    "testing-library/render-result-naming-convention": "error",

    // TODO: Review rules.
    "testing-library/consistent-data-testid": "off",
    "testing-library/no-await-sync-events": "off",
    "testing-library/no-global-regexp-flag-in-query": "off",
    "testing-library/no-manual-cleanup": "off",
    "testing-library/prefer-explicit-assert": "off",
    "testing-library/prefer-user-event": "off",
    "testing-library/await-async-events": "off",
    "testing-library/await-async-queries": "off",
    "testing-library/no-await-sync-queries": "off",
    "testing-library/no-render-in-lifecycle": "off",
    "testing-library/prefer-query-matchers": "off",
    // #endregion",
  },
};
