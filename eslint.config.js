/* eslint-disable unicorn/prefer-module */
const { createConfig } = require("./lib");

module.exports = createConfig({
  isGraphql: false,
  isNext: false,
  isTailwind: false,
});
