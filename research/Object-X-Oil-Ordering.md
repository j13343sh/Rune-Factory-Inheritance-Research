# Object X + Oil Ordering Observation (RF4SP)

## Observation Status

This document records an RF4SP ordering observation under two tested candidate conditions.

It is an observation case, not a confirmed internal-mechanism explanation.

---

## Two-Candidate Condition

### Input order

```text
Object X → Oil
```

### Observed order

```text
Object X → Oil
```

### Result

```text
54 / 54
```

The result applies only to this tested two-candidate condition. It does not establish that Object X must precede Oil under other candidate sets or conditions.

---

## Three-Candidate Condition

### Candidates

- Object X
- Oil
- Oil

### Observed position of Object X

| Position | Count |
| --- | ---: |
| 1st | 52 / 300 |
| 2nd | 75 / 300 |
| 3rd | 173 / 300 |

The two Oil candidates are duplicates, so this case records the observed position of Object X rather than treating the two Oil instances as distinguishable items.

---

## Confirmed Observation Boundary

A clear difference in ordering behavior was observed between the tested two-candidate and three-candidate conditions:

- In the tested two-candidate condition, Object X preceded Oil in **54 / 54** observations.
- In the tested three-candidate condition, the position of Object X varied: **52 / 300** first, **75 / 300** second, and **173 / 300** third.

This comparison records a difference between the two observed conditions.

It does not identify the cause of that difference.

---

## Unknown

The current observation does not distinguish among:

- candidate count;
- duplicate-candidate structure;
- candidate-set structure;
- other unobserved processing differences.

The following are not established:

- that candidate count itself caused the ordering change;
- that two to three candidates forms a confirmed regime boundary;
- that duplicate Oil candidates caused the difference;
- that a specific internal weighting or ordering algorithm exists;
- that the internal implementation has been identified.

```text
Observed difference = confirmed
Cause of the difference = unknown
Internal implementation = unknown
```

---

## Practical Context

This observation can matter in practical equipment design when
Object X must appear before a material whose negative effect is
intended to be reversed.

For example, an equipment design may sometimes achieve its practical
target with only one reversed resistance material rather than using
additional copies to maximize the final resistance value.

In such a case, reducing the arrangement candidate set can avoid
introducing an additional ordering problem.

This is a practical consequence of the observed case, not evidence
that two-candidate arrangements generally preserve input order.

---

## Research Position

```text
Reality > Interpretation
```

This case preserves the observed results and keeps the unresolved transition between the tested conditions explicit.

Future observations may separate candidate-count effects, duplicate structure, candidate-set structure, or other processing differences. Until then, the cause remains unknown.

---

## Navigation

- [Research index](README.md)
- [Repository README](../README.md)
