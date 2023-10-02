<p align="center">
  <img width=100 height=100 alt="Screenshot" src="https://raw.githubusercontent.com/ryanep/eslint-config/main/docs/icon.svg">
</p>
<div align="center">
  <h1>@ryanep/eslint-config</h1>
  <p>A personal ESLint config.</p>
</div>

## Introduction

This project is a personal ESLint configuration to ensure code quality and consistency across multiple personal projects.

## Usage

Install the packages using `npm install --save-dev @ryanep/eslint-config`.

Create a new `eslint.config.js` file and add the following:

```javascript
const { baseConfig } = require("@ryanep/eslint-config/lib/base");
const { typescriptConfig } = require("@ryanep/eslint-config/lib/typescript");

module.exports = [
  baseConfig,
  typescriptConfig,
];

```

## License

Licensed under the MIT license.
