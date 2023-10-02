const { baseConfig } = require("@ryanep/eslint-config/lib/base");
const { typescriptConfig } = require("@ryanep/eslint-config/lib/typescript");

module.exports = [
  baseConfig,
  typescriptConfig,
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/lib/**",
      "eslint.config.js",
    ],
  },
];
