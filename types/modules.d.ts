/**
 * This declaration file adds the missing types for eslint plugins/parsers. To
 * be removed when/if the types are added to the plugin.
 */

declare module "@graphql-eslint/eslint-plugin" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-yml" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "@typescript-eslint/eslint-plugin" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-import" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-jsonc" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "@next/eslint-plugin-next" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}
