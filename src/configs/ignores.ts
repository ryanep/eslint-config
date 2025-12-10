import { defineConfig } from "eslint/config";

export const ignoresConfig = defineConfig({
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
});
