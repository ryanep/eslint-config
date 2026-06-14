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

## Dependency Scope

Only update packages that are directly related to ESLint rule discovery or ESLint config behavior.

Allowed package scopes and names:

- `eslint`
- packages starting with `@eslint/`
- packages starting with `@typescript-eslint/`
- `@graphql-eslint/eslint-plugin`
- `@next/eslint-plugin-next`
- packages starting with `eslint-`
- packages whose names contain `eslint` and `parser`

Do not update unrelated packages, even if they are outdated. This includes general runtime, build, release, and type packages such as `@types/node`, `typescript`, `tsx`, `tsup`, `semantic-release`, and `prettier`.

If the workflow provides an explicit package list, update only those packages. Do not add packages outside that list unless they are transitive lockfile changes required by npm to install the selected packages.

Preserve existing `package.json` semver range style for direct dependencies. If a package currently uses a `^` range, the upgraded entry must still use `^`; do not replace it with an exact version. Use targeted npm commands with `--save-prefix="^"` when needed, then inspect `package.json` before committing.

When running in a pipeline, the workflow may pass the selected package list in the prompt or environment, for example as `OPENCODE_ESLINT_PACKAGES`. Treat that list as an allowlist. Do not update direct dependencies outside it.

## Workflow

1. Check the working tree with `git status`.
2. Inspect ESLint-related dependencies in `package.json`.
3. Upgrade only the selected ESLint-related dependencies using targeted npm commands so `package-lock.json` is updated, preserving existing semver range prefixes such as `^`, and preferring non-breaking semver-compatible updates unless a major upgrade is explicitly required.
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

Use this PR body format:

```markdown
## Summary

- Upgrade ESLint-related dependencies only.
- Reconcile rule changes reported by `npm run scan`.

## Dependency Updates

| Package | From | To | Type |
| --- | --- | --- | --- |
| `package-name` | `old` | `new` | patch/minor/major |

## Rule Changes

| Rule | Change | Reason |
| --- | --- | --- |
| `plugin/rule-name` | added as `"off"` / removed / replaced | unset / invalid / deprecated |

## Deprecated Rules

- Resolved: <count>, with replacements where scanner metadata was clear.
- Left unchanged: <count>, because no safe replacement was identified.
- Notes: include only notable rules, not the full scanner table.

## Compatibility

- Breaking changes: none / describe unavoidable breaking or stricter behavior.
- Semver ranges preserved: yes / no, with explanation.
- Non-ESLint direct dependency changes: none / explain why required.

## Verification

- [x] `npm run scan`
- [x] `npm run typecheck`
- [x] `npm run build`
- [x] `npm run lint`
```

Keep the PR body concise. Do not paste the full deprecated-rule scanner table unless it is short and directly useful.

Do not create a pull request if:

- Verification fails.
- There are no changes.
- GitHub authentication is unavailable.
- The repository has no configured remote.

## Constraints

- Do not manually edit generated `lib`.
- Do not run broad dependency update commands such as `npm update`, `npm install` with no package arguments, or package manager commands that update unrelated dependencies.
- Do not commit unrelated package updates. If unrelated direct dependencies change, revert those package entries before continuing.
- Do not pin direct dependency versions that previously used a range. Preserve `^` ranges in `package.json` unless the user explicitly requests exact versions.
- Keep changes minimal.
- Preserve existing formatting and grouping.
- Prefer explicit rule entries over generated abstractions.
- Avoid breaking changes where possible, especially major dependency upgrades and newly enabled strict rules.
- Do not force-push.
- Do not amend commits unless explicitly requested.
- Do not commit, push, or create a pull request until scan, typecheck, build, and lint pass.
- If already on a dedicated feature branch, use the current branch for the commit and pull request. Do not switch back to `main`.

## Pipeline Behavior

- Do not wait for user confirmation unless blocked by ambiguity that could cause incorrect changes.
- Prefer safe defaults.
- Prefer non-breaking updates and report any unavoidable breaking changes clearly.
- Create a pull request only after verification passes.
- If GitHub CLI authentication is unavailable, stop after successful local verification and report that PR creation is blocked.
- Fail clearly if `npm run scan`, `npm run typecheck`, `npm run build`, or `npm run lint` fails after attempted fixes.
- Include enough final detail for a pipeline log to explain what changed and what still needs review.

## Final Report

End with this concise format:

```markdown
## Result

- PR: <url or not created>
- Status: completed / blocked / failed

## Changes

- Dependencies: <count> updated (`pkg old -> new`, ...)
- Rules: <added> added, <removed> removed, <replaced> replaced, <unchanged deprecated> deprecated left unchanged
- Compatibility: no breaking changes / <short note>

## Verification

- `npm run scan`: pass/fail
- `npm run typecheck`: pass/fail
- `npm run build`: pass/fail
- `npm run lint`: pass/fail

## Follow-Up

- <only include if human review or manual action is needed>
```

Avoid long raw command output in the final report. Summarize counts and link to the pull request for details.
