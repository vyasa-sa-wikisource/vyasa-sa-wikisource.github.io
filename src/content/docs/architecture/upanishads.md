---
title: Upaniṣads
description: Featured spans inside a parent corpus, and when a standalone catalog id is allowed.
sidebar:
  order: 4
---

India.org places Upaniṣad as the fourth stratum of each Veda, beside Saṃhitā, Brāhmaṇa, and Āraṇyaka. That is navigation. It does not mean a second Vyasa catalog work for every span already inside a parent we publish.

Use three mechanisms:

1. **Parent corpus** — one `.vyview`, one URN spine.
2. **`featured` span** — `annotations/featured.vy` with `annotate "…" { featured=<key> }`. No second catalog id.
3. **Standalone catalog work** — only when the text is not already a named span of an ingested parent.

Before adding `[[work]] id = "…-upanishad"`, check whether the text is a contiguous URN range in a published parent. If it is, add a `featured` key and a cosmos link to that parent URN. If it is not, it can be a row in `content-upanishads` (or the Veda repo that owns the śākhā) after content adoption accepts it.

## Already inside a parent

| Name | Where | Mechanism |
| :--- | :--- | :--- |
| Śikṣāvallī (Taittirīya Upaniṣad 1) | Taittirīya Āraṇyaka praśna 5 | `featured=sikshavalli` |
| Mahānārāyaṇa | Taittirīya Āraṇyaka praśna 6 | `featured=mahanarayana` |
| Puruṣa sūkta | Taittirīya Āraṇyaka 3.12 | `featured=purusha_sukta` |
| Śrī Rudram / Camakam | Taittirīya Saṃhitā kāṇḍa 4 praśna 5 / 7 | `featured=sri_rudram`, `camakam` |

Taittirīya Upaniṣad 2–3 (Brahmānanda, Bhṛgu) are absent from the Wikisource āraṇyaka recension we ingest. Filling them is extract and transform on Taittirīya Āraṇyaka, then optional `featured` keys. The id `taittiriya-upanishad` stays unallocated.

Īśā and Bṛhadāraṇyaka belong inside Śatapatha / Vājasaneyi when those workspaces exist. The registry row `isha-upanishad` stays planned until that reconcile. Chāndogya and Kena belong in the Sāmaveda brāhmaṇa pipelines when those exist. Kaṭha, Śvetāśvatara, Maitrī, Muṇḍaka, Māṇḍūkya, Praśna, Aitareya, and Kauṣītaki are standalone Wikisource works until their parent āraṇyaka or brāhmaṇa is ingested.

The Muktika list of 108 is a content-adoption candidate, not 108 copies of text already in Taittirīya, Śatapatha, or Sāmaveda. Expect a small set of heavy standalones, plus principal texts linked as spans where the parent exists.

Viewer support for `featured` keys and cosmos deep links is still an open Vyasa apps request. The publisher side of the rule is in force now.
