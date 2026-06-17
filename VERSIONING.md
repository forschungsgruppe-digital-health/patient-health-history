# Versioning

**patient-health-history** follows [Semantic Versioning 2.0.0](https://semver.org/). The published
package `@forschungsgruppe-digital-health/health-history` carries the version; its single source of
truth is the `version` field in [`projects/calendar-lib/package.json`](projects/calendar-lib/package.json)
(the root `package.json` is the private workspace shell and stays at `0.0.0`). The
[CHANGELOG.md](CHANGELOG.md) follows [Keep a Changelog](https://keepachangelog.com/).

## Scheme

- **MAJOR** — incompatible changes to the library's public API surface (the exports in
  `projects/calendar-lib/src/public-api.ts`: components, modules, model types) or a peer-dependency
  Angular major bump.
- **MINOR** — new functionality, backward-compatible (new components, inputs, model fields).
- **PATCH** — backward-compatible fixes.
- **Pre-release** — `-rc.N` for release candidates (e.g. `22.0.0-rc.1`).

The current published version is **21.0.0**: the major tracks the supported Angular major
(Angular 21), which is the library's most significant compatibility contract for consumers.

## How versions are computed — Conventional Commits

Versions are derived from [Conventional Commits](https://www.conventionalcommits.org/) (the
project's commit convention, see [CONTRIBUTING.md](CONTRIBUTING.md)):

| Commit type | Bump |
|---|---|
| `fix:` | PATCH |
| `feat:` | MINOR |
| `feat!:` / `BREAKING CHANGE:` footer | MAJOR |
| `docs:`/`chore:`/`refactor:`/`test:`/`build:`/`ci:`/`perf:` | none |

The automation is **[release-please](https://github.com/googleapis/release-please)** (PR-based,
wired in `.github/workflows/release-please.yml` with `release-please-config.json` +
`.release-please-manifest.json`, `release-type: node` targeting `projects/calendar-lib`): it
maintains a "release PR" that accumulates the next version + CHANGELOG entry from merged commits;
merging that PR bumps `projects/calendar-lib/package.json`, cuts the `vX.Y.Z` tag and the GitHub
Release, and triggers the publish job. See [RELEASE.md](RELEASE.md) (incl. the one-time bootstrap
tag). The manual procedure (`publish.yml`) remains a fallback and yields the same artifact.

## Artifact versions

- **Git tag:** `vX.Y.Z` on `master`.
- **npm package:** `@forschungsgruppe-digital-health/health-history@X.Y.Z`, published to GitHub
  Packages (`https://npm.pkg.github.com`). The package version equals the git tag.

## Documentation versioning

Documentation is not SemVer-tagged; docs are updated in the same PR as the change they describe.
The README is the canonical API documentation.
