---
title: Repositories
description: Publisher hub, content repos, and what stays shared.
sidebar:
  order: 1
---

Sanskrit Wikisource is one Vyasa publisher (`sa_wikisource`) split across repos so a purāṇa editor and a Rigveda editor do not share a pipeline tree.

## Publisher hub

[`vyasa-sa-wikisource/publisher`](https://github.com/vyasa-sa-wikisource/publisher) contains:

- `sa_wikisource/publisher.toml` and shared `styles/`
- `data/sources.toml` — index of content repos and the path of each slice
- `work` CLI — `sources`, `list`, `build`, `publish`, `merge-catalog`
- GitHub Pages for the thin catalog

The logical publisher id in `publisher.toml`, URNs, and `catalog.json` stays `sa_wikisource`.

## Content repos

One repo per affinity work-set (subject, source format, or release cadence):

| Repo | Custody |
| :--- | :--- |
| `content-puranas` | 18 Mahāpurāṇas. First repo. Establishes committed `.vy` and CI |
| `content-krishna-yajur` | Taittirīya family (TTS, TTA, TTB, TPr) |
| `content-rigveda` | Rigveda. Moves last; it dominates repo size |
| `content-samaveda` | Kauthuma and Pañcaviṃśa |
| `content-atharvaveda` | Atharvaveda and Gopatha |
| `content-shukla-yajur` | Śatapatha and Vājasaneyi standalones |
| `content-upanishads` | Muktika texts that are not already a span of a parent |

Layout inside a content repo:

```text
data/wikisource-works.toml          # this repo's slice
data/processed/<workspace>/
  vyasac.toml
  content/**/stream.toml
  content/**/*.vy                   # committed when the repo's policy says so
src/crawl/  src/extract/  src/transform/
```

Content repos commit `data/raw/` crawl snapshots. A later crawl is committed on top of that tree, so `git diff` is the upstream delta and the previous snapshot is the merge base. `data/extracted/` stays regenerable. The edition is the committed `.vy` tree: when source pages change, transform those pages again from the new crawl. The monorepo still gitignores `data/raw/` until a work-set moves.

## What is shared across publishers

Stages 3–5 that are language-wide live in `@project-vyasa/*` packages (`schema`, `utils`, `cli`), as described in the monorepo note `architecture-and-sharing.md`. This org does not reimplement transliteration, URN syntax, or `vyasac`.

## Registry slices

A slice is a TOML file with the same `[[work]]` and `[[work_set]]` tables the monorepo uses today, plus the repo name:

```toml
repo = "content-puranas"

[[work]]
id = "agni-purana"
title_sa = "अग्निपुराणम्"
status = "planned"

[[work_set]]
id = "puranas"
description = "18 Mahāpurāṇas"
work_ids = ["agni-purana"]
```

Two slices must not define the same `[[work]].id`. `work list` reads one slice. `work merge-catalog` unions catalog fragments and refuses two publications that share an id and disagree on `vyviewUrl`.

The monorepo file `data/wikisource-works.toml` remains the live Veda registry. It is listed in `sources.toml` with role `transitional` until those work-sets move.
