---
title: Mahāpurāṇas
description: Which of the eighteen Mahāpurāṇas on Sanskrit Wikisource are complete enough to ingest.
sidebar:
  order: 1
---

Probe date: 27 Sep 2026, MediaWiki API on [sa.wikisource.org](https://sa.wikisource.org). A leaf under 800 bytes counts as a stub. “Complete” means the usual divisions have real chapter text. It is not a collation against a critical edition.

The nine titles below are the ingest set, in order. Vāmana and Brahmāṇḍa were present but left out because of short pages and mixed numbering. Three further books are large partials. Four are not texts on this site.

## Nine to ingest

| Order | Text | Wikisource page | What the probe found |
| :--- | :--- | :--- | :--- |
| 1 | Bhāgavata | `श्रीमद्भागवतपुराणम्` | 12 skandhas. Chapter counts match the vulgate, plus two extra pages in skandha 10 and one in skandha 12. About 4.6 MB. |
| 2 | Mārkaṇḍeya | `मार्कण्डेयपुराणम्` | Chapters 1–134 in continuous bundles, about 2.0 MB. Devīmāhātmya (81–93) is inside them. Some prints run to 137. |
| 3 | Brahma | `ब्रह्मपुराणम्` | 246 adhyāya pages, no stubs, 4.0 MB. |
| 4 | Viṣṇu | `विष्णुपुराणम्` | All six aṃśas. 132 pages, one stub, 1.7 MB (126 chapters plus the six aṃśa pages). |
| 5 | Agni | `अग्निपुराणम्` | 383 chapter pages plus an index, one stub, 3.6 MB. |
| 6 | Garuḍa | `गरुडपुराणम्` | Ācāra, Preta, and Brahma kāṇḍas, no stubs, 3.8 MB. |
| 7 | Matsya | `मत्स्यपुराणम्` | About 291 chapter pages, 11 short, 3.7 MB. |
| 8 | Śiva | `शिवपुराणम्` | Seven saṃhitās, 6.8 MB, 31 short pages. |
| 9 | Varāha | `वराहपुराणम्` | About 218 chapter pages, 18 short, 3.0 MB. |

These nine are the `puranas` work-set in `content-puranas`.

## Partials held back

| Text | What is there |
| :--- | :--- |
| Brahmavaivarta | Brahma, Prakṛti, and Kṛṣṇajanma kāṇḍas are real text. The Gaṇapati kāṇḍa is a 149-byte stub. |
| Skanda | Numbered khaṇḍas 1–8 hold the text. Kāśī is about 100 chapters. Unnumbered khaṇḍa titles are empty scaffolds. |
| Padma | Sṛṣṭi, Bhūmi, and Uttara are real. Kriyā is thinner. Svarga, Brahma-khaṇḍa, and Pātāla are stub trees. |

## No chapter text

Liṅga has an index and a table of contents only. Nārada and Kūrma are 500-byte indexes with no subpages. Bhaviṣya’s chapter scaffold is stubs, with a few Uttara chapters copied under several titles.

## Where the text comes from

There is no separate corpus JSON for these books. Each chapter is a wiki page. The Veda crawlers already fetch that source through the MediaWiki parse API (`action=parse`, `prop=wikitext`, `format=json`) and cache the response as `*.wikitext.json`. Purāṇa crawl will do the same. HTML scraping is the older Rigveda path, not this one.

Packed `.vyview` files are GitHub Release assets, one tag per work (`vyview/<work-id>`), created with `work release`. The Pages catalog stays a thin index of those URLs.
