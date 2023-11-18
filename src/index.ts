import { baseConfig } from "./base";
import { graphqlConfig } from "./graphql";
import { ignoresConfig } from "./ignores";
import { jestConfig } from "./jest";
import { jsonConfig } from "./json";
import { nextConfig } from "./next";
import { reactConfig } from "./react";
import { tailwindConfig } from "./tailwindcss";
import { testingLibraryConfig } from "./testing-library";
import { typescriptConfig } from "./typescript";
import { yamlConfig } from "./yaml";

export const createConfig = () => {
  return [
    baseConfig,
    graphqlConfig,
    jestConfig,
    jsonConfig,
    nextConfig,
    reactConfig,
    tailwindConfig,
    testingLibraryConfig,
    typescriptConfig,
    yamlConfig,
    ignoresConfig,
  ];
};
