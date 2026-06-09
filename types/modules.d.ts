/**
 * These packages publish types, but their plugin object types are not currently
 * assignable to ESLint's Plugin type in this config.
 */

declare module "@typescript-eslint/eslint-plugin" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}
