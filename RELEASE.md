# Release management

How a release of `@forschungsgruppe-digital-health/health-history` is prepared and cut. Versioning
rules are in [VERSIONING.md](VERSIONING.md); branching is in [CONTRIBUTING.md](CONTRIBUTING.md).

> **Status:** the delivery pipeline is **wired** (engine: [release-please](https://github.com/googleapis/release-please),
> PR-based). `.github/workflows/release-please.yml` maintains the release PR and, on merge, bumps
> `projects/calendar-lib/package.json`, tags `vX.Y.Z`, creates the GitHub Release, and — in the
> **same run** — builds the library and publishes it to GitHub Packages. The existing
> `.github/workflows/publish.yml` stays as the **manual** path (`workflow_dispatch`, or on a
> hand-created GitHub Release). Config: `release-please-config.json` + `.release-please-manifest.json`.
> The **automated procedure** is the normal path; the **manual procedure** below is the fallback
> and produces the same artifact.
>
> **Bootstrap (one-time):** release-please needs a starting point. Tag the current published
> version once — `git tag v21.0.0 <current-master-sha> && git push origin v21.0.0` (matching the
> version in `projects/calendar-lib/package.json` and `.release-please-manifest.json`) — and create
> its GitHub Release, so the first automated release PR computes the next version from commits after
> it. Until that tag exists, use the manual procedure.

## Roles

- **Release manager** — a maintainer with write access to `master` and permission to create tags.
- All releases are cut from **`master`** (always-releasable; see branching).

## Pre-release checklist

- [ ] `master` is green on `ci` (build + unit tests) and the security workflows (`codeql`,
      `dependency-review`).
- [ ] All PRs intended for the release are merged into `master`.
- [ ] The README API documentation reflects the shipped public API.
- [ ] Decide the version per [VERSIONING.md](VERSIONING.md) from the Conventional-Commit history
      since the last tag.

## Automated procedure (release-please — the normal path)

Once the one-time bootstrap tag exists (see Status):

1. Merging Conventional-Commit PRs into `master` makes release-please open/update a **"release
   PR"** that bumps `projects/calendar-lib/package.json` and writes the CHANGELOG.
2. Reviewing and **merging that release PR** creates the `vX.Y.Z` tag and the GitHub Release
   automatically (notes generated from commits) — handled by `release-please.yml`.
3. In the **same workflow run**, the `publish` job (`needs: release-please`, `if: release_created`)
   checks out the tag, sets up Node 22 with the GitHub Packages registry, runs `npm ci`, builds the
   library with `ng build calendar-lib --configuration production`, and runs `npm publish` in
   `dist/calendar-lib` with `NODE_AUTH_TOKEN=${{ secrets.GITHUB_TOKEN }}` (`permissions: packages: write`).
   The result is `@forschungsgruppe-digital-health/health-history@X.Y.Z` on
   `https://npm.pkg.github.com`.

The release manager's job reduces to **merging Conventional-Commit PRs and then merging the
release PR** — the version bump, tag, release notes, build, and publish are all automated.

## Manual release procedure (fallback)

The existing `publish.yml` is the manual path and stays in place:

1. **Set the version.** Bump `version` in `projects/calendar-lib/package.json` and update
   [CHANGELOG.md](CHANGELOG.md). Commit on `master` (`chore(release): X.Y.Z`).
2. **Tag.** `git tag -a vX.Y.Z -m "vX.Y.Z" && git push origin vX.Y.Z` (annotated tag on `master`).
3. **Create the GitHub Release.** `gh release create vX.Y.Z --title "vX.Y.Z" --notes-file <notes>`
   (notes = the changelog section). Publishing a Release triggers `publish.yml`, which builds the
   library and runs `npm publish` to GitHub Packages.
4. **Or trigger by hand.** Run `publish.yml` via **workflow_dispatch** to build + publish without a
   Release event.

Both paths build the same way (`ng build calendar-lib --configuration production`) and publish the
same artifact (`dist/calendar-lib` → `https://npm.pkg.github.com`).
