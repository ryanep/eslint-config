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

Install the packages using `npm install --save-dev @ryanep/eslint-config @rushstack/eslint-patch`.

Create a new `.eslintrc` file and add the following:

```javascript
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@ryanep/eslint-config/base",
    "@ryanep/eslint-config/typescript",
    "@ryanep/eslint-config/react",
    "@ryanep/eslint-config/tailwind",
    "@ryanep/eslint-config/json",
    "@ryanep/eslint-config/jest",
    "@ryanep/eslint-config/testing-library",
    "@ryanep/eslint-config/prettier",
  ],
};
```

## License

Licensed under the MIT license.
