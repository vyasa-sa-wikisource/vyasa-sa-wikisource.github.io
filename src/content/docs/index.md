---
title: Sanskrit Wikisource
description: How the vyasa-sa-wikisource organization publishes texts from sa.wikisource.org.
---

This organization publishes Sanskrit Wikisource texts for [Project Vyasa](https://github.com/vyasa-sa-wikisource). The publisher identifier in URNs and `catalog.json` stays **`sa_wikisource`**.

## License and thanks

The source text comes from [Sanskrit Wikisource](https://sa.wikisource.org) (विकिस्रोतः). Thank you to the volunteers who typed, proofread, and corrected those pages. This project exists because of their work.

That material is available under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0). Reuse must credit Sanskrit Wikisource and its contributors, link to the license, and distribute adaptations under the same terms. Each publication in our catalog carries `license = "CC-BY-SA-4.0"`. Contributor history for a given page stays on Wikisource.

| Site | URL |
| :--- | :--- |
| These docs | https://vyasa-sa-wikisource.github.io/ |
| Catalog | https://vyasa-sa-wikisource.github.io/publisher/catalog.json |

Viewers still use the monorepo catalog at `https://project-vyasa.github.io/sa.wikisource.org/catalog.json` until content-repo fragments are merged into the org catalog.

## Repos

| Repo | Role |
| :--- | :--- |
| [`meta`](https://github.com/vyasa-sa-wikisource/meta) | Workspace file and agent handoff |
| [`vyasa-sa-wikisource`](https://github.com/vyasa-sa-wikisource/vyasa-sa-wikisource) | This site |
| [`publisher`](https://github.com/vyasa-sa-wikisource/publisher) | `sa_wikisource/`, `work` CLI, catalog merge |
| [`content-puranas`](https://github.com/vyasa-sa-wikisource/content-puranas) | Mahāpurāṇas. Crawl snapshots and `.vy` editions live here |
| [`sa.wikisource.org`](https://github.com/project-vyasa/sa.wikisource.org) | Live pipelines until each work-set moves |

A subject-matter editor clones **`publisher`** and **one content repo**. Docs are this website. `meta` is for the workspace file.

Purāṇas are the first new content repo (`content-puranas`). Existing Veda pipelines stay in the monorepo and move later. Krishna Yajurveda moves before Rigveda.

## How these docs are organized

Pages follow [Diátaxis](https://diataxis.fr/): how-to guides for a task, reference for facts you look up, explanation for the design. The Mahāpurāṇa probe is [reference](/reference/mahapuranas/). There is no tutorial section until there is a lesson to learn from.

## Where to read the design

The Explanation pages are the org copy of the multi-repo plan. The monorepo notes are still present and remain the detailed source until this site replaces them:

- `sa.wikisource.org/notes/architecture-sa-wikisource-org-addendum.md`
- `sa.wikisource.org/notes/architecture-and-sharing.md`
- `sa.wikisource.org/notes/deployment.md`
