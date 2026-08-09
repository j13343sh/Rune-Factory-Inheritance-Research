# Recursive Processing

## Overview

Recursive Processing is an observation-based research topic describing situations where internal arrangement information may be referenced again during later inheritance processing.

This article summarizes one conceptual model for explaining inheritance behavior that appears difficult to describe with a flat, one-layer candidate model.

---

## Why It Matters

Recursive Processing matters because it can explain why the effective candidate pool may expand beyond the items that the player directly inserted.

If an inherited item contains internal arrangement information, and that internal information is later referenced, then the candidate pool may expand recursively.

This connects Recursive Processing to:

- Candidate Count Model
- Self Contamination
- Auto Arrange
- Success Probability
- practical high-difficulty inheritance routing

---

## Representative Figures

![Recursive Processing Hypothesis](../images/recursive-processing/recursive-processing-hypothesis-en.png)

*Conceptual hypothesis: inherited equipment may carry internal arrangement information that can later affect candidate generation.*

![Recursive Reference Observation](../images/recursive-processing/rune-factory-recursive-reference-observation-en.png)

*Observation-oriented figure: some inheritance behavior appears compatible with internal reference or expansion.*

---

## Mermaid Source Concept

```mermaid
flowchart LR
    A[Input Material] --> B{Has internal arrangement?}
    B -->|No| C[Direct candidate only]
    B -->|Yes| D[Expand internal entries]
    D --> E[Add expanded entries to candidate pool]
    E --> F[Candidate Count N increases]
```

```mermaid
flowchart TD
    A[Final Equipment]
    A --> B[Inherited Equipment A]
    B --> C[Internal Arrangement A-1]
    B --> D[Internal Arrangement A-2]
    C --> E[Recursive Candidate]
    D --> F[Recursive Candidate]
    A --> G[Direct Material]
```

---

## Core Mechanism

The working model is:

```text
Inherited equipment
        ↓
Internal arrangement information exists
        ↓
Internal entries are referenced
        ↓
Additional candidates are generated
        ↓
Candidate Count N increases
```

The key distinction is that the inherited item is not treated as a simple single candidate. It may behave as a container that can expose internal entries under certain conditions.

---

## Candidate Expansion Example

![Recursive Candidate Expansion Example](../images/recursive-processing/rune-factory-recursive-candidate-expansion-example-en.png)

*Conceptual example: candidate count may increase when internal entries are expanded.*

This figure is not intended to prove a specific internal implementation. It illustrates why recursive expansion can rapidly increase candidate count and make inheritance outcomes less stable.

---

## Boundary and Open Questions

![Recursive Processing Boundary](../images/recursive-processing/rune-factory-recursive-processing-boundary-open-questions-en.png)

*Boundary-oriented figure: recursive behavior may be conditional and should not be assumed in every inheritance case.*

Current open questions include:

- when internal arrangement entries are referenced;
- whether different equipment types behave differently;
- whether RF4SP and RF5 differ in recursive depth or candidate handling;
- whether recursive expansion has practical limits;
- how recursive expansion interacts with Self Contamination and Auto Arrange.

---

## Practical Implications

Recursive Processing suggests that high-difficulty inheritance is not only a matter of adding the correct materials.

The player may need to manage:

- source equipment history;
- internal arrangement contents;
- intermediate equipment design;
- candidate count at each crafting stage;
- verification after each important step.

In practical terms, recursive behavior makes intermediate crafting strategy important.

---

## Practical Routing Examples

The following names describe practical applications of the observations in this article. They do not introduce new game mechanics, and neither method should be treated as a universal rule.

### Cushion Method

The **Cushion Method** places an item with no observed internal arrangement on the leading side of an intermediate crafting route. In some routes, this can prevent or reduce recursive candidate expansion that would otherwise be introduced by an item carrying internal arrangement information.

```mermaid
flowchart TD
    A[Item with no observed internal arrangement] --> B[Use as the leading material]
    B --> C[Recursive candidate expansion may be reduced]
    C --> D[An RNG step may become guaranteed or require fewer resets]
```

In the observed example, using an item with no internal arrangement as the first material turned one RNG step into a guaranteed outcome. This result supports a route-dependent practical application: a "cushion" can sometimes keep an unwanted internal reference from expanding the candidate pool at that stage.

The method does not establish that the first material always controls recursive processing. Its usefulness depends on the specific materials, their crafting histories, and the route being tested.

### Shuffle Method

The **Shuffle Method** changes material order while keeping the visible set of materials the same.

> Same materials, different order, different RNG requirement.

In the observed comparison, two crafting setups used the same visible materials, but only one required a reset. Rearranging the material order changed the practical result in a manner compatible with a different recursive reference or candidate-expansion state.

```mermaid
flowchart TD
    A[Same visible materials] --> B[Change material order]
    B --> C[Recursive-reference or candidate-expansion state may differ]
    C --> D[Reset requirement may change]
```

This is a practical routing example based on Recursive Processing observations. It does not mean that material order always determines inheritance, nor does it prove how the game performs the internal transition. The result must be verified for each route.

---

## Relationship to Candidate Count Model

Recursive Processing is one candidate-expansion mechanism.

```text
Recursive Processing
        ↓
Internal entries become candidates
        ↓
Candidate Count N increases
        ↓
Combination space expands
        ↓
Success probability may decrease
```

This article should therefore be read as a branch article under the Candidate Count Model rather than as an isolated theory.

---

## Detailed Research PDF

This article provides an English overview only.

Detailed observations, Japanese terminology, test cases, and discussion are documented in the accompanying research archive.

**Note:** PDF documents are currently available in Japanese only.

- [Recursive Processing Analysis](../pdf/05_再帰処理解析.pdf)

---

## Additional Observation

Weapon upgrade effects did not carry over during inheritance in the tested RF5 conditions.

This suggests that upgrade data may be managed outside the inheritance chain, although additional validation is required.

---

## Related Articles

### Research Root

- [Candidate Count Model](Candidate-Count-Model.md)

### Related Mechanics

- [Auto Arrange](Auto-Arrange.md)
- [Self Contamination](Self-Contamination.md)
- [Success Probability](Success-Probability.md)
- [Messhilite Inheritance](Messhilite-Inheritance.md)

---

## Notes

This article describes an observation-based model. It should not be read as a definitive implementation claim.

---

## Navigation

- [Back to Articles](README.md)
- [Back to ROADMAP](../ROADMAP.md)
- [Back to Repository README](../README.md)
