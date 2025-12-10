import { baseConfig } from "./configs/base";
import { builtInConfig } from "./configs/built-in";
import { graphqlConfig } from "./configs/graphql";
import { ignoresConfig } from "./configs/ignores";
import { importConfig } from "./configs/import";
import { jestConfig } from "./configs/jest";
import { jsonConfig } from "./configs/json";
import { jsxA11yConfig } from "./configs/jsx-a11y";
import { nextConfig } from "./configs/next";
import { perfectionistConfig } from "./configs/perfectionist";
import { prettierConfig } from "./configs/prettier";
import { reactConfig } from "./configs/react";
import { reactHooksConfig } from "./configs/react-hooks";
import { regexConfig } from "./configs/regex";
import { tailwindConfig } from "./configs/tailwindcss";
import { testingLibraryConfig } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import { yamlConfig } from "./configs/yaml";
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
