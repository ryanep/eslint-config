import { type Linter } from "eslint";

const cypress: Linter.Config = {
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress"],
  rules: {
    "cypress/assertion-before-screenshot": 2,
    "cypress/no-assigning-return-values": 2,
    "cypress/no-async-tests": 2,
    "cypress/no-force": 2,
    "cypress/no-pause": 2,
    "cypress/no-unnecessary-waiting": 2,
    "import/unambiguous": 0,
  },
};

export = cypress;
