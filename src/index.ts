import { type Config, defineConfig } from "eslint/config";
import { baseConfig } from "./configs/base";
import { builtInConfig } from "./configs/built-in";
import { graphqlConfig } from "./configs/graphql";
import { ignoresConfig } from "./configs/ignores";
import { importConfig } from "./configs/import";
import { jestConfig } from "./configs/jest";
import { jsdocConfig } from "./configs/jsdoc";
import { jsonConfig } from "./configs/json";
import { jsxA11yConfig } from "./configs/jsx-a11y";
import { nextConfig } from "./configs/next";
import { perfectionistConfig } from "./configs/perfectionist";
import { prettierConfig } from "./configs/prettier";
import { reactConfig } from "./configs/react";
import { reactHooksConfig } from "./configs/react-hooks";
import { reactYouMightNotneedAnEffectConfig } from "./configs/react-you-might-not-need-an-effect";
import { regexConfig } from "./configs/regex";
import { tailwindConfig } from "./configs/tailwindcss";
import { testingLibraryConfig } from "./configs/testing-library";
import { typescriptConfig } from "./configs/typescript";
import { unicornConfig } from "./configs/unicorn";
import { yamlConfig } from "./configs/yaml";

interface CreateConfigOptions {
  /**
   * An array of optional features to enable for the configuration.
   */
  features?: Feature[];
}

type Feature =
  | "graphql"
  | "jest"
  | "next"
  | "react"
  | "tailwind"
  | "testing-library";

const featureConfigMap: Record<Feature, Config[][]> = {
  "graphql": [graphqlConfig],
  "jest": [jestConfig],
  "next": [nextConfig],
  "react": [
    jsxA11yConfig,
    reactConfig,
    reactHooksConfig,
    reactYouMightNotneedAnEffectConfig,
  ],
  "tailwind": [tailwindConfig],
  "testing-library": [testingLibraryConfig],
};

const baseConfigs = [
  baseConfig,
  builtInConfig,
  ignoresConfig,
  jsdocConfig,
  jsonConfig,
  perfectionistConfig,
  prettierConfig,
  regexConfig,
  typescriptConfig,
  unicornConfig,
  yamlConfig,
  ...importConfig,
];

export const createConfig = ({ features = [] }: CreateConfigOptions = {}) => {
  const featureConfigs = features.flatMap(
    (feature) => featureConfigMap[feature]
  );

  const config = defineConfig(baseConfigs, featureConfigs);

  return config;
};
