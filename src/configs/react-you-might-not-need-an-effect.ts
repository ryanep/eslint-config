import reactYouMightNotneedAnEffectPlugin from "eslint-plugin-react-you-might-not-need-an-effect";
import { defineConfig } from "eslint/config";

export const reactYouMightNotneedAnEffectConfig = defineConfig({
  files: ["**/*.{jsx,tsx}"],
  plugins: {
    "react-you-might-not-need-an-effect": reactYouMightNotneedAnEffectPlugin,
  },
  rules: {
    "react-you-might-not-need-an-effect/no-adjust-state-on-prop-change":
      "error",
    "react-you-might-not-need-an-effect/no-chain-state-updates": "error",
    "react-you-might-not-need-an-effect/no-derived-state": "error",
    "react-you-might-not-need-an-effect/no-empty-effect": "error",
    "react-you-might-not-need-an-effect/no-event-handler": "error",
    "react-you-might-not-need-an-effect/no-initialize-state": "error",
    "react-you-might-not-need-an-effect/no-pass-data-to-parent": "error",
    "react-you-might-not-need-an-effect/no-pass-live-state-to-parent": "error",
    "react-you-might-not-need-an-effect/no-pass-ref-to-parent": "error",
    "react-you-might-not-need-an-effect/no-reset-all-state-on-prop-change":
      "error",
  },
});
