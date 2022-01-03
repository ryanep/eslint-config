import { type Linter } from "eslint";

const jsdoc: Linter.Config = {
  plugins: ["jsdoc"],
  extends: ["plugin:jsdoc/recommended"],
};

export = jsdoc;
