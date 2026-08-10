# Light Ore Inheritance

## Overview

Light Ore Inheritance (historical research label: Messhilite Inheritance) is an observation-based research topic describing inheritance behavior observed when Light Ore is incorporated into inheritance recipes.

This article summarizes one conceptual interpretation derived from repeated gameplay observations and validation experiments.

In this repository, Messhilite Inheritance is treated as a validation interface for the Candidate Count Model rather than as an isolated mechanic.

---

## Why It Matters

Messhilite matters because it gives a relatively clear way to observe how candidate count and successful combinations may affect inheritance success.

The key observation is that adding materials does not always have the same meaning.

```text
Same target material added
        ↓
Candidate count increases
        ↓
Successful combinations may also increase
        ↓
Success rate may rise

Different material added
        ↓
Candidate count increases
        ↓
Successful combinations may not increase
        ↓
Success rate may fall
```

This makes Messhilite useful for testing whether observed gameplay results are consistent with candidate-count / combination-space explanations.

Validation in this context does not mean proof. It means checking whether repeated observations are consistent with the proposed conceptual model.

---

## Raffle Analogy: From Three Visible Candidates to Four Candidates

![Messhilite Inheritance — Raffle Analogy](../images/messhilite-inheritance/messhilite-inheritance-raffle-analogy-en.png)

The `1/4` probability shown in the illustration belongs to the simplified equal-draw raffle example. It illustrates the combination space and should not be read as evidence that the game selects every candidate or subset with equal probability under all conditions.

This raffle analogy offers an intuitive way to read the Candidate Count interpretation used in this article. Rather than treating the three visible inheritance candidates as the entire candidate set, the explanatory model also counts Messhilite, producing a four-candidate structure.

With a three-slot selection limit, a four-candidate structure creates multiple possible three-candidate combinations. The desired result therefore becomes one possible outcome among several, which helps explain why a reset or repeated attempt may be required in some routes.

The figure is an analogy and explanatory model based on gameplay observations. It does not establish that the game internally performs a literal raffle, nor does it prove the internal implementation of Messhilite inheritance.

---

## Representative Figure

![Messhilite Inheritance Overview](../images/messhilite-inheritance/messhilite-inheritance-mechanism-en.png)

*Conceptual illustration of one possible Messhilite inheritance mechanism.*

This path intentionally uses `../images/messhilite-inheritance/` rather than `../images/candidate-count-model/`.

The repository uses Article-centric Asset Management: each article should normally refer to its own article asset folder, even when a similar figure also appears elsewhere.

---

## Same Material vs Different Material

![Same Material Success Model](../images/messhilite-inheritance/messhilite-same-material-success-model-en.png)

*Same-material additions may increase both candidate count and successful combinations.*

![Success Probability Reference](../images/messhilite-inheritance/messhilite-success-probability-reference-en.png)

*Different-material additions may increase candidate count without increasing the number of successful combinations.*

---

## Mermaid Source Concept

```mermaid
flowchart TD
    A[Messhilite Inheritance] --> B{Added material type}
    B -->|Same target material| C[N increases]
    C --> D[A also increases]
    D --> E[Success rate may rise]
    B -->|Different material| F[N increases]
    F --> G[A does not increase]
    G --> H[Success rate may fall]
```

---

## Preliminary Observation

![Preliminary Observation](../images/messhilite-inheritance/messhilite-preliminary-observation-en.png)

*Preliminary observations suggested that same-material stacking and different-material addition may behave differently.*

Early observations were not treated as proof. They were treated as a reason to perform larger validation trials.

---

## Validation Results

![Messhilite Validation Results](../images/messhilite-inheritance/messhilite-validation-results-en.png)

*Validation results summarize repeated observations that are consistent with the Candidate Count Model.*

The current RF5 validation dataset contains 4,000 total trials.

| Condition | Trials | Successes | Observed Rate | Reference Model |
|---|---:|---:|---:|---:|
| 3-stack | 1,000 | 250 | 25.0% | 25.0% |
| 4-stack | 1,000 | 387 | 38.7% | 40.0% |
| 5-stack | 1,000 | 519 | 51.9% | 50.0% |
| 6-stack | 1,000 | 571 | 57.1% | 57.1% |

The main purpose of this validation was not to prove internal game code. The purpose was to check whether the model was strong enough to support the rest of the Candidate Count interpretation.

---

## Mathematical Interpretation

![Mathematical Interpretation](../images/messhilite-inheritance/messhilite-mathematical-interpretation-en.png)

*Mathematical interpretation connects observed Messhilite results to candidate count and combination space.*

A simplified expression used by the repository is:

```text
P ≈ A / C(N,3)
```

Where:

- `N` is the number of candidates;
- `C(N,3)` is the number of possible three-slot combinations;
- `A` is the number of combinations that satisfy the target condition.

For example, `20 / 35 = 57.1%` is easier to verify than a purely symbolic explanation and still connects naturally to `C(6,3) / C(7,3)`.

---

## Practical Implications

Messhilite Inheritance suggests that players should distinguish between:

- adding more of the same target material;
- adding different materials that only increase the candidate pool;
- preserving a clean candidate structure;
- blindly adding useful-looking materials.

In practical terms, success may improve when the added material increases successful combinations, but success may drop sharply when the added material only increases `N`.

---

## Weapon Category and Shield Effects

Repeated gameplay observations in RF4SP and RF5 suggest that Messhilite inheritance may preserve not only the source weapon's performance, but also a category-dependent property used for shield-effect calculation.

| Performance source | Final weapon appearance | Shield effect |
|---|---|---|
| Claymore / two-handed sword | Dual blades | Applied |
| Dual blades | One-handed sword | Not applied |

Under the tested conditions, shield effectiveness followed the weapon category of the performance source rather than the visible category of the completed weapon.

This observation is limited to shield-effect behavior. It does not by itself establish that all weapon-category-dependent mechanics use the same inherited category.

---

## Relationship to Candidate Count Model

Messhilite Inheritance is not the root model.

It is a validation interface.

```text
Candidate Count Model
        ↓
Success Probability Model
        ↓
Messhilite Validation
        ↓
Observed consistency check
```

This article should therefore point to the Candidate Count Model as the conceptual root, while keeping its own images under `images/messhilite-inheritance/` for article independence.

---

## Validation Documents

Readers interested in the experimental methodology, aggregated results, or raw validation data may refer to the following supplementary materials.

English-language PDFs are available in the [English PDF Edition](../pdf/english_edition/). The links below point to the Japanese primary research archive.

### Additional Research Materials

- [Validation Methodology](../research/01_検証方法.pdf)
- [Validation Results Summary](../research/02_集計結果.pdf)
- [Integrated Validation Data](../research/07_統合データ.csv)

### Research Repository

- [Research Archive](../research)

---

## Detailed Research PDF

This article provides an English overview only.

Detailed observations, validation results, statistical discussion, confidence intervals, experimental design, and additional interpretation are documented in the accompanying research archive.

- [Messhilite Inheritance Analysis](../pdf/08_メッシライト継承解析.pdf)

---

## Practical Tip: Upgrade After Final Inheritance

During testing in RF5, weapon upgrade effects applied through the 9 upgrade slots did not carry over after inheritance under the tested conditions.

If you intend to use Messhilite inheritance, performing weapon upgrades after completing the final inheritance may help avoid unnecessary rework.

---

## Related Articles

### Research Root

- [Candidate Count Model](Candidate-Count-Model.md)

### Related Mechanics

- [Success Probability](Success-Probability.md)
- [Auto Arrange](Auto-Arrange.md)
- [Recursive Processing](Recursive-Processing.md)
- [Self Contamination](Self-Contamination.md)

---

## Notes

This article describes an observation-based model. It should not be read as a definitive implementation claim.

---

## Navigation

- [Back to Articles](README.md)
- [Back to ROADMAP](../ROADMAP.md)
- [Back to Repository README](../README.md)
