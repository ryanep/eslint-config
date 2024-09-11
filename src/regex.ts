import regexpPlugin from "eslint-plugin-regexp";
import type { Linter } from "eslint";

export const regexConfig: Linter.FlatConfig = {
  plugins: {
    regexp: regexpPlugin,
  },
  rules: {
    // Disable conflicting built-in rules
    "no-control-regex": "error",
    "no-empty-character-class": "off",
    "no-invalid-regexp": "off",
    "no-misleading-character-class": "error",
    "no-regex-spaces": "error",
    "no-useless-backreference": "off",
    "prefer-regex-literals": "error",

    // Regexp rules
    "regexp/confusing-quantifier": "warn",
    "regexp/control-character-escape": "error",
    "regexp/grapheme-string-literal": "error",
    "regexp/hexadecimal-escape": "error",
    "regexp/letter-case": "error",
    "regexp/match-any": "error",
    "regexp/negation": "error",
    "regexp/no-contradiction-with-assertion": "error",
    "regexp/no-control-character": "error",
    "regexp/no-dupe-characters-character-class": "error",
    "regexp/no-dupe-disjunctions": "error",
    "regexp/no-empty-alternative": "warn",
    "regexp/no-empty-capturing-group": "error",
    "regexp/no-empty-character-class": "error",
    "regexp/no-empty-group": "error",
    "regexp/no-empty-lookarounds-assertion": "error",
    "regexp/no-empty-string-literal": "error",
    "regexp/no-escape-backspace": "error",
    "regexp/no-extra-lookaround-assertions": "error",
    "regexp/no-invalid-regexp": "error",
    "regexp/no-invisible-character": "error",
    "regexp/no-lazy-ends": "warn",
    "regexp/no-legacy-features": "error",
    "regexp/no-misleading-capturing-group": "error",
    "regexp/no-misleading-unicode-character": "error",
    "regexp/no-missing-g-flag": "error",
    "regexp/no-non-standard-flag": "error",
    "regexp/no-obscure-range": "error",
    "regexp/no-octal": "error",
    "regexp/no-optional-assertion": "error",
    "regexp/no-potentially-useless-backreference": "warn",
    "regexp/no-standalone-backslash": "error",
    "regexp/no-super-linear-backtracking": "error",
    "regexp/no-super-linear-move": "error",
    "regexp/no-trivially-nested-assertion": "error",
    "regexp/no-trivially-nested-quantifier": "error",
    "regexp/no-unused-capturing-group": "error",
    "regexp/no-useless-assertions": "error",
    "regexp/no-useless-backreference": "error",
    "regexp/no-useless-character-class": "error",
    "regexp/no-useless-dollar-replacements": "error",
    "regexp/no-useless-escape": "error",
    "regexp/no-useless-flag": "warn",
    "regexp/no-useless-lazy": "error",
    "regexp/no-useless-non-capturing-group": "error",
    "regexp/no-useless-quantifier": "error",
    "regexp/no-useless-range": "error",
    "regexp/no-useless-set-operand": "error",
    "regexp/no-useless-string-literal": "error",
    "regexp/no-useless-two-nums-quantifier": "error",
    "regexp/no-zero-quantifier": "error",
    "regexp/optimal-lookaround-quantifier": "warn",
    "regexp/optimal-quantifier-concatenation": "error",
    "regexp/prefer-character-class": "error",
    "regexp/prefer-d": "error",
    "regexp/prefer-escape-replacement-dollar-char": "error",
    "regexp/prefer-lookaround": "error",
    "regexp/prefer-named-backreference": "error",
    "regexp/prefer-named-capture-group": "error",
    "regexp/prefer-named-replacement": "error",
    "regexp/prefer-plus-quantifier": "error",
    "regexp/prefer-predefined-assertion": "error",
    "regexp/prefer-quantifier": "error",
    "regexp/prefer-question-quantifier": "error",
    "regexp/prefer-range": "error",
    "regexp/prefer-regexp-exec": "error",
    "regexp/prefer-regexp-test": "error",
    "regexp/prefer-result-array-groups": "error",
    "regexp/prefer-set-operation": "error",
    "regexp/prefer-star-quantifier": "error",
    "regexp/prefer-unicode-codepoint-escapes": "error",
    "regexp/prefer-w": "error",
    "regexp/require-unicode-regexp": "error",
    "regexp/require-unicode-sets-regexp": "error",
    "regexp/simplify-set-operations": "error",
    "regexp/sort-alternatives": "error",
    "regexp/sort-character-class-elements": "error",
    "regexp/sort-flags": "error",
    "regexp/strict": "error",
    "regexp/unicode-escape": "error",
    "regexp/unicode-property": "error",
    "regexp/use-ignore-case": "error",
  },
};
