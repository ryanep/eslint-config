import { baseConfig } from "./base";
import { builtInConfig } from "./built-in";
import { graphqlConfig } from "./graphql";
import { ignoresConfig } from "./ignores";
import { importConfig } from "./import";
import { jestConfig } from "./jest";
import { jsonConfig } from "./json";
import { jsxA11yConfig } from "./jsx-a11y";
import { nextConfig } from "./next";
import { perfectionistConfig } from "./perfectionist";
import { prettierConfig } from "./prettier";
import { reactConfig } from "./react";
import { reactHooksConfig } from "./react-hooks";
import { regexConfig } from "./regex";
import { tailwindConfig } from "./tailwindcss";
import { testingLibraryConfig } from "./testing-library";
import { typescriptConfig } from "./typescript";
import { unicornConfig } from "./unicorn";
import { yamlConfig } from "./yaml";
import type { Linter } from "eslint";

interface CreateConfigOptions {
  isGraphql?: boolean;
  isNext?: boolean;
  isTailwind?: boolean;
}

export const createConfig = ({
  isGraphql = true,
  isNext = true,
  isTailwind = true,
}: CreateConfigOptions = {}): Linter.Config[] => {
  const config = [
    baseConfig,
    builtInConfig,
    ignoresConfig,
    ...importConfig,
    jestConfig,
    jsonConfig,
    jsxA11yConfig,
    perfectionistConfig,
    prettierConfig,
    reactConfig,
    reactHooksConfig,
    regexConfig,
    testingLibraryConfig,
    typescriptConfig,
    unicornConfig,
    yamlConfig,
  ];

  if (isGraphql) {
    config.push(graphqlConfig);
  }

  if (isNext) {
    config.push(nextConfig);
  }

  if (isTailwind) {
    config.push(tailwindConfig);
  }

  return config;
};
