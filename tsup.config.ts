import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["eslint/config"],
  outDir: "./lib",
  shims: true,
});
