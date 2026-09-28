---
title: Catalog and releases
description: Thin GitHub Pages catalog and per-work release artifacts.
sidebar:
  order: 3
---

The catalog is small and updates often. Packed `.vyview` files are large and update per work.

| Layer | Host | Update |
| :--- | :--- | :--- |
| `catalog.json`, shared CSS | GitHub Pages on `publisher` | When a fragment is merged |
| Per-work `.vyview` | GitHub Releases on the content repo | When that work is rebuilt |

Publishing one text is one release asset plus a catalog row. It does not re-upload every existing `.vyview`.

## URLs

| Surface | URL |
| :--- | :--- |
| Docs (this site) | https://vyasa-sa-wikisource.github.io/ |
| Org catalog (target) | https://vyasa-sa-wikisource.github.io/publisher/catalog.json |
| Monorepo catalog (live viewers) | https://project-vyasa.github.io/sa.wikisource.org/catalog.json |

`publisher/sa_wikisource/publisher.toml` names the org catalog URL. The Pages workflow merges every JSON file in `publisher/data/fragments/` and copies `sa_wikisource/works/` next to `catalog.json`. Veda rows point at the monorepo Pages host. Bhāgavata’s `.vyview` is in `sa_wikisource/works/` because `content-puranas` is private. A local `vyasac publish` still fills `sa_wikisource/dist/` on disk; Pages serves the catalog the workflow builds.

## Merge

A fragment is a JSON object with a `publications` array, the same shape `vyasac publish` writes into `catalog.json`. From the publisher repo:

```bash
bun run work merge-catalog \
  --fragment ../content-puranas/catalog-fragment.json \
  --out sa_wikisource/dist/catalog.json
```

Same publication id and same `vyviewUrl`: the row with the newer `updated` timestamp is kept. Same id and a different `vyviewUrl`: the command exits with an error. `--dry-run` prints the ids and writes nothing.

`sa_wikisource/dist/` is build output and is not committed.

## Local catalog

Roots in the Caddyfile are relative to the process working directory, so start it inside `sa_wikisource`:

```bash
cd sa_wikisource
caddy run
```

`http://localhost:9100/registry.json` rewrites to `local-registry.json`. `http://localhost:9100/catalog.json` and the packed `.vyview` files are served from `dist/`. `publisher` and `content-puranas` are sibling clones; each workspace `vyasac.toml` points `publisher_dir` at `../../../../publisher/sa_wikisource`.
