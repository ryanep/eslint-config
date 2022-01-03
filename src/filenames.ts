import { type Linter } from "eslint";

const filenames: Linter.Config = {
  plugins: ["filenames"],
  rules: {
    "filenames/match-regex": [2, "^[a-z-.]+$", true],
    "filenames/match-exported": [2, "kebab", true],
    "filenames/no-index": 0,
  },
};

export = filenames;
