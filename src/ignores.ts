import type { Linter } from "eslint";

export const ignoresConfig: Linter.FlatConfig = {
  ignores: [
    "**/.cache",
    "**/.next",
    "**/build",
    "**/coverage",
    "**/dist",
    "**/lib",
    "**/node_modules",
    "**/package-lock.json",
    "**/public",
    "**/yarn.lock",
  ],
};
