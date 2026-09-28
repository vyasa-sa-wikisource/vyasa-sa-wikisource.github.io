---
title: Onboarding
description: What to clone, where edits land, and how a work-set is published.
---

## Clone

```text
vyasa-sa-wikisource/
  publisher/          # hub: sa_wikisource/, work CLI, catalog merge
  content-puranas/    # Mahāpurāṇas; sibling of publisher
  content-<set>/      # later affinity work-sets
```

`vyasac` must be on `PATH`. The compiler rules live in `project-vyasa/vyasa/AGENTS.md`.

Open the multi-root workspace from `meta/vyasa-sa-wikisource.code-workspace` when you are migrating. That window also includes the monorepo. Day-to-day editing of one work-set needs only `publisher` and that content repo.

## Where a change goes

| Change | Repo |
| :--- | :--- |
| Crawl, extract, transform, `.vy` text | The content repo for that work-set |
| `publisher.toml`, shared CSS, catalog merge, `work` CLI | `publisher` |
| These pages | `vyasa-sa-wikisource` |
| A Veda pipeline that has not moved yet | `project-vyasa/sa.wikisource.org` |

Do not add crawl or extract code to `publisher`.

## Publish a work-set

From the publisher clone, point `work` at the content repo:

```bash
bun run work list --root ../content-puranas
bun run work build bhagavata-purana --root ../content-puranas
bun run work release bhagavata-purana --root ../content-puranas --repo vyasa-sa-wikisource/content-puranas
```

`work build` runs `vyasac pack` and `vyasac publish` for each workspace in the slice. The content repo's `vyasac.toml` sets `publisher_dir` to the publisher clone's `sa_wikisource/` directory.

`work release` prints the GitHub Release it would create (`vyview/<work-id>` plus the packed `.vyview`). Add `--yes` to create the tag, or to replace the asset when that tag already exists. The Pages site stays a thin catalog that points at those URLs.

Each content repo owns `data/wikisource-works.toml` and commits its crawl under `data/raw/`. The `.vy` edition is a later commit. Publisher CI merges catalog fragments into one `catalog.json`.

To read the local catalog in a viewer, start Caddy from `publisher/sa_wikisource` (`caddy run`) and set the registry URL to `http://localhost:9100/registry.json`.

## First content repo

`content-puranas` holds the nine complete Mahāpurāṇas, in ingest order, starting with Bhāgavata. The probe is the [Mahāpurāṇas](/reference/mahapuranas/) reference. Vāmana, Brahmāṇḍa, and the partials stay out of the `puranas` work-set until their gaps are closed.

Before adding an `*-upanishad` catalog id, read [Upaniṣads](/architecture/upanishads/).
