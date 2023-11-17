const { baseConfig } = require("./lib/base");
const { typescriptConfig } = require("./lib/typescript");
const { jsonConfig } = require("./lib/json");
const { ignoresConfig } = require("./lib/ignores");

module.exports = [baseConfig, typescriptConfig, jsonConfig, ignoresConfig];
