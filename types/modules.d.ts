/**
 * This declaration file adds the missing types for eslint plugins/parsers. To
 * be removed when/if the types are added.
 */

declare module "@typescript-eslint/parser" {
  import type { Linter } from "eslint";

  declare const eslintParser: NonNullable<
    NonNullable<Linter.FlatConfig["languageOptions"]>["parser"]
  >;

  export = eslintParser;
}

declare module "jsonc-eslint-parser" {
  import type { Linter } from "eslint";

  declare const eslintParser: NonNullable<
    NonNullable<Linter.FlatConfig["languageOptions"]>["parser"]
  >;

  export = eslintParser;
}

declare module "yaml-eslint-parser" {
  import type { Linter } from "eslint";

  declare const eslintParser: NonNullable<
    NonNullable<Linter.FlatConfig["languageOptions"]>["parser"]
  >;

  export = eslintParser;
}

declare module "@graphql-eslint/eslint-plugin" {
  import type { Linter } from "eslint";

  declare const eslintParser: NonNullable<
    NonNullable<Linter.FlatConfig["languageOptions"]>["parser"]
  >;

  export = eslintParser;
}

declare module "eslint-plugin-yml" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "@next/eslint-plugin-next" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "@typescript-eslint/eslint-plugin" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-cypress" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-eslint-comments" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-import" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-jest" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-jsdoc" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-jsonc" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-jsx-a11y" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-react-hooks" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-react" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-tailwindcss" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-testing-library" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-unicorn" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}

declare module "eslint-plugin-perfectionist" {
  import type { ESLint } from "eslint";

  declare const eslintPlugin: ESLint.Plugin;

  export = eslintPlugin;
}
