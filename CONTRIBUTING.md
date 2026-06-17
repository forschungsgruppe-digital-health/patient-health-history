# Contributing

Thank you for your interest in contributing to **patient-health-history** — the Angular
SVG timeline library published as `@forschungsgruppe-digital-health/health-history`.

## Setup

```bash
git clone https://github.com/forschungsgruppe-digital-health/patient-health-history.git
cd patient-health-history
npm ci --legacy-peer-deps
ng build calendar-lib --configuration production   # produces dist/calendar-lib
ng test                                             # runs the library unit tests
```

Node 22 is required (Angular 21). See the [README](README.md#setup) for prerequisites and the
hot-reload development loop.

## Branching

A GitHub-flow model with a single releasable branch:

- **`master`** — always releasable; releases are cut here (see [RELEASE.md](RELEASE.md)). This is
  the only long-lived branch — there is no separate `dev` integration branch.
- **Short-lived branches** off `master`: `feat/<description>`, `fix/<description>`,
  `docs/<description>`, `chore/<description>` (also `refactor/`, `test/`, `build/`, `ci/`,
  `perf/`). Keep them small and rebase/merge often.
- **Flow:** branch off `master` → PR into `master` → squash-merge → release-please opens/updates
  the release PR. Stacked PRs are fine for dependent work; note the base in the PR.
- **Protection:** PRs are mandatory; direct pushes to `master` are blocked. Merge requires green
  CI and review.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/): `feat`, `fix`, `refactor`, `docs`,
`test`, `chore`, `perf`, `build`, `ci`. A breaking change uses `!` (e.g. `feat!:`) or a
`BREAKING CHANGE:` footer.

Example: `feat(grid): add icon-longtext row layout`

The commit type drives the version bump (see [VERSIONING.md](VERSIONING.md)). **PR titles must
also be Conventional-Commit-formatted** — they become the squash-merge commit and feed the
changelog/version automation; the `pr-lint` workflow enforces this.

## Versioning & releases

The library is versioned with [SemVer](https://semver.org/) — see **[VERSIONING.md](VERSIONING.md)**.
The published package version lives in [`projects/calendar-lib/package.json`](projects/calendar-lib/package.json).
Releases are cut from `master` per the runbook in **[RELEASE.md](RELEASE.md)** (engine:
release-please, PR-based). The [CHANGELOG.md](CHANGELOG.md) follows Keep a Changelog.

## Pull request rules

- Tests green (CI must pass): `ci` builds the library and runs the unit tests.
- Keep one logical change per PR; keep diffs reviewable.
- PR title is Conventional-Commit-formatted (enforced by `pr-lint`).
- Update the relevant docs in the same PR as any change they describe; the README is the
  canonical API documentation.

No ADR is required in this repository — it is a single-purpose library. Architecture context for
the wider patient-portal lives in the [cross-hub-patientportal](https://github.com/forschungsgruppe-digital-health/cross-hub-patientportal)
repository.

## Security reports

Please report security issues privately to the maintainers rather than opening a public issue.
