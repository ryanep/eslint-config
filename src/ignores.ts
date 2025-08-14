import type { Linter } from "eslint";

export const ignoresConfig: Linter.Config = {
  ignores: [
    "**/.cache",
    "**/.changeset",
    "**/.changeset",
    "**/.idea",
    "**/.next",
    "**/.vercel",
    "**/.vscode",
    "**/build",
    "**/bun.lockb",
    "**/coverage",
    "**/dist",
    "**/generated",
    "**/lib",
    "**/next-env.d.ts",
    "**/node_modules",
    "**/out",
    "**/package-lock.json",
    "**/public",
    "**/yarn.lock",
  ],
};
