import * as importPlugin from "eslint-plugin-import";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import type { Linter } from "eslint";

export const baseConfig: Linter.FlatConfig = {
  files: ["**/*.[jt]s?(x)"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    import: importPlugin,
    perfectionist: perfectionistPlugin,
    prettier: prettierPlugin,
    unicorn: unicornPlugin,
  },
  rules: {
    // #region built-in
    "constructor-super": "error",
    "default-case": "error",
    "for-direction": "error",
    "func-names": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-nested-ternary": "off",
    "no-new-object": "off",
    "no-new-symbol": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-object-constructor": "off",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-setter-return": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-useless-backreference": "error",
    "no-useless-catch": "error",
    "no-useless-escape": "error",
    "no-with": "error",
    "object-shorthand": "error",
    "prefer-promise-reject-errors": "error",
    "require-atomic-updates": "error",
    "require-yield": "error",
    "sort-keys": [
      "off", // Replaced by perfectionist/sort-objects.
      "asc",
      { allowLineSeparatedGroups: true, natural: false },
    ],
    "use-isnan": "error",
    "valid-typeof": "error",
    "yoda": "error",

    // TODO: Review rules.
    "accessor-pairs": "off",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-scoped-var": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "callback-return": "off",
    "camelcase": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "complexity": "off",
    "computed-property-spacing": "off",
    "consistent-return": "off",
    "consistent-this": "off",
    "curly": "off",
    "default-case-last": "off",
    "dot-location": "off",
    "eol-last": "off",
    "eqeqeq": "off",
    "func-call-spacing": "off",
    "func-name-matching": "off",
    "func-style": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "global-require": "off",
    "grouped-accessor-pairs": "off",
    "guard-for-in": "off",
    "handle-callback-err": "off",
    "id-blacklist": "off",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off",
    "indent": "off",
    "indent-legacy": "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-around-directive": "off",
    "lines-between-class-members": "off",
    "logical-assignment-operators": "off",
    "max-classes-per-file": "off",
    "max-depth": "off",
    "max-len": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": "off",
    "new-parens": "off",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "off",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-buffer-constructor": "off",
    "no-caller": "off",
    "no-catch-shadow": "off",
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-constant-binary-expression": "off",
    "no-constructor-return": "off",
    "no-div-regex": "off",
    "no-else-return": "off",
    "no-empty-static-block": "off",
    "no-eq-null": "off",
    "no-eval": "off",
    "no-extend-native": "off",
    "no-extra-bind": "off",
    "no-extra-label": "off",
    "no-extra-parens": "off",
    "no-floating-decimal": "off",
    "no-implicit-globals": "off",
    "no-inline-comments": "off",
    "no-iterator": "off",
    "no-label-var": "off",
    "no-labels": "off",
    "no-lone-blocks": "off",
    "no-lonely-if": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "off",
    "no-multi-assign": "off",
    "no-multi-spaces": "off",
    "no-multi-str": "off",
    "no-multiple-empty-lines": "off",
    "no-native-reassign": "off",
    "no-negated-condition": "off",
    "no-negated-in-lhs": "off",
    "no-new": "off",
    "no-new-func": "off",
    "no-new-native-nonconstructor": "off",
    "no-new-require": "off",
    "no-new-wrappers": "off",
    "no-octal-escape": "off",
    "no-path-concat": "off",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-promise-executor-return": "off",
    "no-proto": "off",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-return-await": "off",
    "no-script-url": "off",
    "no-self-compare": "off",
    "no-sequences": "off",
    "no-spaced-func": "off",
    "no-sync": "off",
    "no-tabs": "off",
    "no-template-curly-in-string": "off",
    "no-ternary": "off",
    "no-trailing-spaces": "off",
    "no-undef-init": "off",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "off",
    "no-unneeded-ternary": "off",
    "no-unreachable-loop": "off",
    "no-unused-private-class-members": "off",
    "no-useless-call": "off",
    "no-useless-computed-key": "off",
    "no-useless-concat": "off",
    "no-useless-rename": "off",
    "no-useless-return": "off",
    "no-var": "off",
    "no-void": "off",
    "no-warning-comments": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "off",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "off",
    "prefer-object-has-own": "off",
    "prefer-object-spread": "off",
    "prefer-reflect": "off",
    "prefer-regex-literals": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
    "prefer-template": "off",
    "quote-props": "off",
    "quotes": "off",
    "radix": "off",
    "require-jsdoc": "off",
    "require-unicode-regexp": "off",
    "rest-spread-spacing": "off",
    "semi": "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "sort-imports": "off", // Replaced by perfectionist/sort-imports.
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "off",
    "strict": "off",
    "switch-colon-spacing": "off",
    "symbol-description": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "valid-jsdoc": "off",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    // #endregion

    // #region import
    "import/export": "error",
    "import/extensions": [
      "error",
      "never",
      {
        pattern: {
          css: "always",
          json: "always",
          scss: "always",
          svg: "always",
        },
      },
    ],
    "import/imports-first": "error",
    "import/newline-after-import": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": "error",
    "import/order": "off",
    "import/prefer-default-export": "off",

    // TODO: Review rules.
    "import/consistent-type-specifier-style": "off",
    "import/default": "off",
    "import/dynamic-import-chunkname": "off",
    "import/exports-last": "off",
    "import/first": "off",
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "off",
    "import/no-amd": "off",
    "import/no-anonymous-default-export": "off",
    "import/no-commonjs": "off",
    "import/no-cycle": "off",
    "import/no-default-export": "off",
    "import/no-dynamic-require": "off",
    "import/no-empty-named-blocks": "off",
    "import/no-import-module-exports": "off",
    "import/no-internal-modules": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-default": "off",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-packages": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-unassigned-import": "off",
    "import/no-unused-modules": "off",
    "import/no-useless-path-segments": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/unambiguous": "off",
    // #endregion

    // #region perfectionist
    "perfectionist/sort-array-includes": "error",
    "perfectionist/sort-astro-attributes": "error",
    "perfectionist/sort-classes": "error",
    "perfectionist/sort-enums": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-imports": [
      "error",
      {
        "groups": [
          "side-effect",
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "type",
          "internal-type",
          ["parent-type", "sibling-type", "index-type"],
          "object",
          "unknown",
        ],
        "internal-pattern": ["#/**", "@/**"],
        "newlines-between": "never",
        "type": "natural",
      },
    ],
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-jsx-props": "error",
    "perfectionist/sort-maps": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-objects": [
      "error",
      {
        "partition-by-comment": true,
      },
    ],
    "perfectionist/sort-svelte-attributes": "error",
    "perfectionist/sort-union-types": "error",
    "perfectionist/sort-vue-attributes": "error",
    // #region

    // #region prettier
    "prettier/prettier": "warn",
    // #region

    // #region unicorn
    "unicorn/better-regex": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-destructuring": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/custom-error-definition": "off",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": "error",
    "unicorn/import-style": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-callback-reference": "error",
    "unicorn/no-array-for-each": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-await-expression-member": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-document-cookie": "error",
    "unicorn/no-empty-file": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-negated-condition": "off",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-array": "off",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-null": "off",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-reduce": "off",
    "unicorn/no-static-only-class": "error",
    "unicorn/no-thenable": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/no-typeof-undefined": "error",
    "unicorn/no-unnecessary-await": "error",
    "unicorn/no-unnecessary-polyfills": "off",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unreadable-iife": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-switch-case": "error",
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/numeric-separators-style": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-blob-reading-methods": "error",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-event-target": "error",
    "unicorn/prefer-export-from": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-logical-operator-over-ternary": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-modern-math-apis": "error",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-native-coercion-functions": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-object-from-entries": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-set-size": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-switch": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      { allowList: { args: true, Args: true, props: true, Props: true } },
    ],
    "unicorn/relative-url-style": "error",
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/require-post-message-target-origin": "off",
    "unicorn/string-content": "off",
    "unicorn/switch-case-braces": "error",
    "unicorn/template-indent": "error",
    "unicorn/text-encoding-identifier-case": "error",
    "unicorn/throw-new-error": "error",

    // deprecated
    "unicorn/import-index": "off",
    "unicorn/no-array-instanceof": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/prefer-dataset": "off",
    "unicorn/prefer-event-key": "off",
    "unicorn/prefer-exponentiation-operator": "off",
    "unicorn/prefer-flat-map": "off",
    "unicorn/prefer-node-append": "off",
    "unicorn/prefer-node-remove": "off",
    "unicorn/prefer-object-has-own": "off",
    "unicorn/prefer-replace-all": "off",
    "unicorn/prefer-starts-ends-with": "off",
    "unicorn/prefer-text-content": "off",
    "unicorn/prefer-trim-start-end": "off",
    "unicorn/regex-shorthand": "off",
    // #endregion
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
    },
  },
};
