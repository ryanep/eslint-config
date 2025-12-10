import reactHooksPlugin from "eslint-plugin-react-hooks";
import type { Linter } from "eslint";

export const reactHooksConfig: Linter.Config = {
  files: ["**/*.{jsx,tsx}"],
  plugins: {
    "react-hooks": reactHooksPlugin,
  },
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",

    /**
     * New rules to review
     */
    "react-hooks/automatic-effect-dependencies": "off",
    "react-hooks/capitalized-calls": "off",
    "react-hooks/component-hook-factories": "off",
    "react-hooks/config": "off",
    "react-hooks/error-boundaries": "off",
    "react-hooks/fbt": "off",
    "react-hooks/fire": "off",
    "react-hooks/gating": "off",
    "react-hooks/globals": "off",
    "react-hooks/hooks": "off",
    "react-hooks/immutability": "off",
    "react-hooks/incompatible-library": "off",
    "react-hooks/invariant": "off",
    "react-hooks/memoized-effect-dependencies": "off",
    "react-hooks/no-deriving-state-in-effects": "off",
    "react-hooks/preserve-manual-memoization": "off",
    "react-hooks/purity": "off",
    "react-hooks/refs": "off",
    "react-hooks/rule-suppression": "off",
    "react-hooks/set-state-in-effect": "off",
    "react-hooks/set-state-in-render": "off",
    "react-hooks/static-components": "off",
    "react-hooks/syntax": "off",
    "react-hooks/todo": "off",
    "react-hooks/unsupported-syntax": "off",
    "react-hooks/use-memo": "off",
    "react-hooks/void-use-memo": "off",
  },
};
