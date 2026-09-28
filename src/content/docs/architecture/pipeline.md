---
title: Pipeline stages
description: What stays inside a content repo and what is shared.
sidebar:
  order: 2
---

Each content repo is a publisher pipeline for one family of Wikisource pages. Shared Vyasa packages start at schema and publish.

| Stage | Where it lives | Why |
| :--- | :--- | :--- |
| 1. Crawl and cache | Content repo (`src/crawl/`, committed `data/raw/`) | Wikimedia rate limits, URL schemes, and User-Agent rules are host-specific. The crawl snapshot is the parent for a later upstream diff |
| 2. DOM extract | Content repo (`src/extract/`, `data/extracted/`) | MediaWiki markup for śākhās and purāṇas does not share one parser |
| 3. Schema | `@project-vyasa/schema` | URN syntax and container types must match across publishers |
| Philology helpers | `@project-vyasa/utils` | Transliteration, Vedic accent stripping, syllable counts |
| 4–5. Verify, pack, publish | `vyasac`, invoked by the publisher `work` CLI | One packager for every workspace |

Stage 4 enrichment that is specific to a text (Rigveda anukramaṇī, for example) stays next to that text. A refresh compares three trees: the previous committed crawl, the new crawl, and the `.vy` edition built from the previous crawl. Re-transform the pages whose wikitext changed. That merge helper is not part of this hub yet.

`bun run work build <work-set>` in the publisher repo is the batch entry for pack and publish. Per-work `package.json` scripts in the monorepo stay there until that work-set moves. New CI should call `work build`, not grow a chain of `build:<id>` scripts.

License default for Wikimedia text is CC-BY-SA 4.0.
