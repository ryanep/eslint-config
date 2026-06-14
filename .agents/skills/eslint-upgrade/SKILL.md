---
name: eslint-upgrade
description: Upgrade ESLint-related dependencies, run the rule scan, resolve missing/invalid/deprecated rules, verify the package, and open a pull request.
license: MIT
metadata:
  repo: "@ryanep/eslint-config"
  workflow: eslint-upgrade
  pipeline-ready: "true"
---

## Purpose

Use this skill when upgrading ESLint, ESLint plugins, ESLint parsers, or related rule packages in this repository.

The workflow updates dependencies, runs the rule scanner, resolves missing or invalid rule entries, verifies the package, commits the changes, pushes a branch, and opens a pull request.

Prefer non-breaking upgrades and rule changes where possible. If a breaking dependency major upgrade or stricter rule behavior is unavoidable, keep the change explicit and call it out in the pull request and final report.

## Repository Context

- Source configs live in `src/configs`.
- Generated build output lives in `lib`; do not manually edit `lib`.
- The scanner lives at `scripts/scan.ts`.
- Run the scanner with `npm run scan`.
- The package manager is npm.
- Keep `package-lock.json` in sync with `package.json`.
- This repository's `eslint.config.js` imports from `lib`, so build before linting.

## Workflow

1. Check the working tree with `git status`.
2. Inspect ESLint-related dependencies in `package.json`.
3. Upgrade ESLint-related dependencies using npm so `package-lock.json` is updated, preferring non-breaking semver-compatible updates unless a major upgrade is explicitly required.
4. Run `npm run scan`.
5. Resolve `Invalid rules`.
6. Resolve `Unset rules`.
7. Handle deprecated rules when a clear replacement exists.
8. Re-run `npm run scan`.
9. Repeat until there are no unset or invalid rules.
10. Run verification:
    - `npm run scan`
    - `npm run typecheck`
    - `npm run build`
    - `npm run lint`
11. If verification passes and there are changes:
    - Create a branch if needed.
    - Commit the dependency and rule updates.
    - Push the branch.
    - Create a pull request.
12. If verification fails:
    - Do not commit, push, or create a pull request.
    - Report the failing command and relevant output.

## Rule Handling

For `Invalid rules`:

- Search `src/configs` for each invalid rule.
- Remove the rule if it no longer exists.
- Replace the rule only when scanner output or upstream metadata clearly identifies the replacement.

For `Unset rules`:

- Built-in ESLint rules go in `src/configs/built-in.ts`.
- Plugin rules go in the config file that imports and registers that plugin.
- Add new rules near an existing `TODO: Review new rules` block when present.
- Default new rules to `"off"` unless the surrounding config shows an obvious, consistent rule family preference.
- Do not enable newly introduced rules by default if doing so could create new lint failures for consumers.

For deprecated rules:

- Prefer replacement metadata from the scanner.
- Do not invent replacements.
- Avoid replacements that make behavior stricter unless the existing config already clearly prefers that behavior.
- If uncertain, leave the rule unchanged and report it.

## Pull Request Requirements

Create a pull request only after verification passes.

The PR body should include:

- Dependency upgrades.
- Rules added.
- Rules removed.
- Rules replaced.
- Deprecated rules left unresolved.
- Potential breaking changes or stricter behavior, if any.
- Verification checklist.

Do not create a pull request if:

- Verification fails.
- There are no changes.
- GitHub authentication is unavailable.
- The repository has no configured remote.

## Constraints

- Do not manually edit generated `lib`.
- Keep changes minimal.
- Preserve existing formatting and grouping.
- Prefer explicit rule entries over generated abstractions.
- Avoid breaking changes where possible, especially major dependency upgrades and newly enabled strict rules.
- Do not force-push.
- Do not amend commits unless explicitly requested.
- Do not commit, push, or create a pull request until scan, typecheck, build, and lint pass.

## Pipeline Behavior

- Do not wait for user confirmation unless blocked by ambiguity that could cause incorrect changes.
- Prefer safe defaults.
- Prefer non-breaking updates and report any unavoidable breaking changes clearly.
- Create a pull request only after verification passes.
- If GitHub CLI authentication is unavailable, stop after successful local verification and report that PR creation is blocked.
- Fail clearly if `npm run scan`, `npm run typecheck`, `npm run build`, or `npm run lint` fails after attempted fixes.
- Include enough final detail for a pipeline log to explain what changed and what still needs review.

## Final Report

End with a concise report containing:

- Dependency upgrades.
- Rules added.
- Rules removed.
- Rules replaced.
- Deprecated rules left unresolved.
- Potential breaking changes or stricter behavior, if any.
- Verification results.
- Pull request URL, if created.
