# Mermaid Source Assets

This directory stores the canonical Mermaid source files used by the repository.

Mermaid files are **source assets**, representing the logical structure of repository figures.

Generated PNG and SVG images are **implementation artifacts** derived from these source files.

Markdown articles should reference generated figures rather than embedding Mermaid code directly whenever practical.

---

## Division Responsibilities

**Research Division**

* Maintains Mermaid source logic.
* Preserves conceptual models and methodology.
* Reviews figure semantics and consistency.

**Operations Division**

* Generates PNG/SVG figures from Mermaid sources.
* Embeds generated figures into Markdown articles.
* Maintains implementation consistency.

**Strategy Division**

* Reviews figure allocation across the repository.
* Maintains repository architecture and knowledge graph consistency.
* Ensures long-term maintainability and navigation quality.

---

## Repository Pipeline

```text
Research
    ↓
Mermaid Source (.mmd)
    ↓
Operations
    ↓
PNG / SVG Figures
    ↓
Markdown Articles
    ↓
Repository
```

Mermaid source files should be treated as the canonical implementation of repository diagrams.

Presentation assets may be regenerated from these sources whenever necessary.
