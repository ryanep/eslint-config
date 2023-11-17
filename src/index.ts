import { baseConfig } from "./base";
import { ignoresConfig } from "./ignores";
import { jestConfig } from "./jest";
import { jsonConfig } from "./json";
import { nextConfig } from "./next";
import { reactConfig } from "./react";
import { tailwindConfig } from "./tailwindcss";
import { testingLibraryConfig } from "./testing-library";
import { typescriptConfig } from "./typescript";

export const createConfig = () => {
  return [
    baseConfig,
    typescriptConfig,
    jsonConfig,
    reactConfig,
    nextConfig,
    jestConfig,
    tailwindConfig,
    testingLibraryConfig,
    ignoresConfig,
  ];
};
