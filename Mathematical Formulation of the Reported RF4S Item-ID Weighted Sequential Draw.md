# Mathematical Formulation of the Reported RF4S Item-ID Weighted Sequential Draw

## Purpose and Important Caveat

This note is a mathematical formulation of the crafting / inheritance selection process described by Amou (天羽) based on reverse-engineering and disassembly work.

The equations and examples below were organized with the assistance of AI.

Therefore:

> **This document should NOT be treated as an independent verification of the implementation.**

Its purpose is only to translate the reported implementation behavior into a compact mathematical model that can be checked against:

1. the actual disassembled code,
2. existing gameplay observations,
3. and future controlled observations if necessary.

If any equation below disagrees with the actual implementation, the implementation takes precedence.

---

# 1. Reported Process

For a candidate pool containing three or more candidates, the reported process can be represented as a sequential weighted draw without replacement.

Let the candidate set be

\[
C = \{1,2,\ldots,N\}
\]

and let candidate \(i\) have Item ID

\[
w_i = ID_i.
\]

The Item ID is treated here as the candidate's draw weight.

At each draw:

1. calculate the total weight of all remaining candidates,
2. select one candidate with probability proportional to its Item ID,
3. remove the selected candidate from the pool,
4. repeat until three candidates have been selected or the relevant selection process terminates.

The important point is that the denominator changes after every draw because the previously selected candidate is removed.

---

# 2. General Formula

Let

\[
R_k
\]

be the set of candidates remaining immediately before draw \(k\).

For candidate \(i \in R_k\),

\[
P(i_k=i \mid R_k)
=
\frac{w_i}
{\sum_{j\in R_k} w_j}.
\]

Using Item ID directly as the weight,

\[
\boxed{
P(i_k=i \mid R_k)
=
\frac{ID_i}
{\sum_{j\in R_k} ID_j}
}
\]

This is the basic draw equation.

---

# 3. General Ordered-Sequence Formula

Suppose the observed selected order is

\[
(i_1,i_2,\ldots,i_m).
\]

For the reported inheritance process,

\[
m=\min(3,N)
\]

for the weighted-draw branch.

The probability of that complete ordered result is

\[
\boxed{
P(i_1,i_2,\ldots,i_m)
=
\prod_{k=1}^{m}
\frac{w_{i_k}}
{\displaystyle
\sum_{j\notin\{i_1,\ldots,i_{k-1}\}} w_j
}
}
\]

where

\[
w_i = ID_i.
\]

Expanded explicitly:

\[
P(i_1,i_2,\ldots,i_m)
=
\frac{w_{i_1}}
{\sum_j w_j}
\times
\frac{w_{i_2}}
{\sum_j w_j-w_{i_1}}
\times
\frac{w_{i_3}}
{\sum_j w_j-w_{i_1}-w_{i_2}}
\times\cdots
\]

until the required number of draws has been completed.

This is mathematically equivalent to a Plackett-Luce-style sequential weighted ordering process.

That mathematical label does **not** imply that the game internally implements a statistical "Plackett-Luce model"; it only describes the probability distribution produced by the reported algorithm.

---

# 4. Three-Candidate Expansion

Consider three candidates:

\[
A,\ B,\ C
\]

with Item-ID weights

\[
a,\ b,\ c.
\]

Suppose the final order is

\[
A \rightarrow B \rightarrow C.
\]

The first draw gives

\[
P(A\text{ first})
=
\frac{a}{a+b+c}.
\]

After \(A\) is removed, only \(B\) and \(C\) remain.

Therefore,

\[
P(B\text{ second}\mid A\text{ first})
=
\frac{b}{b+c}.
\]

Once \(A\) and \(B\) have been selected, \(C\) is the only remaining candidate.

Thus,

\[
P(C\text{ third}\mid A,B)
=
1.
\]

The complete permutation probability is therefore

\[
\boxed{
P(A,B,C)
=
\frac{a}{a+b+c}
\times
\frac{b}{b+c}
}
\]

Similarly,

\[
P(A,C,B)
=
\frac{a}{a+b+c}
\times
\frac{c}{b+c},
\]

\[
P(B,A,C)
=
\frac{b}{a+b+c}
\times
\frac{a}{a+c},
\]

and so on for all six permutations.

The probabilities of all six possible orders sum to 1.

---

# 5. Pairwise Precedence Formula

An interesting consequence of this sequential weighted process is that the probability that candidate \(A\) appears before candidate \(B\) is

\[
\boxed{
P(A \prec B)
=
\frac{a}{a+b}
}
\]

where \(A \prec B\) means "A is selected before B."

Likewise,

\[
P(B \prec A)
=
\frac{b}{a+b}.
\]

Under the fixed-weight model, this pairwise probability does not depend on the weight of a third candidate \(C\).

Therefore, if the implementation is exactly described by this model, changing only the third candidate should not systematically change the pairwise ordering probability between \(A\) and \(B\).

This gives a useful gameplay-side test of the mathematical formulation.

---

# 6. Concrete Example: Turnip Seeds vs. ID-936 Ore vs. Turnip

Using the Item IDs currently associated with the three candidates:

| Candidate | Item ID / Weight |
|---|---:|
| Turnip Seeds | 753 |
| ID-936 Ore | 936 |
| Turnip | 29 |

The total initial weight is

\[
753+936+29=1718.
\]

Therefore, the first-draw probabilities are

\[
P(\text{Turnip Seeds first})
=
\frac{753}{1718}
\approx 0.4383,
\]

\[
P(\text{ID-936 Ore first})
=
\frac{936}{1718}
\approx 0.5448,
\]

\[
P(\text{Turnip first})
=
\frac{29}{1718}
\approx 0.0169.
\]

---

## Example permutation

Consider:

\[
\text{Turnip Seeds}
\rightarrow
\text{ID-936 Ore}
\rightarrow
\text{Turnip}.
\]

The first draw is

\[
\frac{753}{1718}.
\]

After Turnip Seeds is removed, the remaining total weight is

\[
936+29=965.
\]

The probability that ID-936 Ore is selected next is therefore

\[
\frac{936}{965}.
\]

Thus,

\[
P(
\text{Seeds}
\rightarrow
\text{Ore}
\rightarrow
\text{Turnip}
)
=
\frac{753}{1718}
\times
\frac{936}{965}.
\]

Numerically,

\[
P
\approx
0.425.
\]

So this single permutation is expected to occur roughly 42.5% of the time under the mathematical model.

---

# 7. Pairwise Example: Turnip Seeds vs. ID-936 Ore

The probability that Turnip Seeds appears before ID-936 Ore is

\[
P(\text{Seeds}\prec\text{Ore})
=
\frac{753}{753+936}.
\]

Therefore,

\[
\boxed{
P(\text{Seeds}\prec\text{Ore})
=
\frac{753}{1689}
\approx 0.4458
}
\]

and

\[
P(\text{Ore}\prec\text{Seeds})
=
\frac{936}{1689}
\approx 0.5542.
\]

Notice that the Turnip weight \(29\) disappears from this pairwise equation.

This was useful for comparing the reverse-engineering account against our existing gameplay observations.

---

# 8. Concrete Example: Pink Turnip

One particularly useful pre-existing gameplay observation involved Pink Turnip.

The relevant Item IDs used in our comparison were:

| Candidate | Item ID / Weight |
|---|---:|
| Pink Turnip | 3 |
| Object X | 131 |
| Turnip Seeds | 753 |

Because Pink Turnip has an extremely small weight compared with the other two candidates, the mathematical model predicts that it should almost always appear late.

For example,

\[
P(\text{Pink Turnip first})
=
\frac{3}{3+131+753}
=
\frac{3}{887}
\approx 0.00338.
\]

So its first-position probability is only about

\[
0.34\%.
\]

Our pre-existing 200-trial RF4SP ordering experiment contained 100 appearances of Pink Turnip across its relevant three-candidate sets.

Its observed aggregate positions were:

\[
1^\text{st}:1,
\qquad
2^\text{nd}:5,
\qquad
3^\text{rd}:94.
\]

Using the fixed Item-ID sequential-draw calculation across those historical candidate sets, the expected aggregate was approximately:

\[
1^\text{st}:0.88,
\qquad
2^\text{nd}:5.08,
\qquad
3^\text{rd}:94.04.
\]

The close agreement is interesting because the gameplay dataset was collected **before we knew about the Item-ID reverse-engineering explanation**.

However, this agreement should be treated as evidence of predictive consistency, not as independent proof of the implementation.

---

# 9. Four Candidates, Three Selected

The same formulation naturally extends to a candidate pool larger than three.

Suppose there are four candidates:

\[
A,B,C,D
\]

with weights

\[
a,b,c,d.
\]

Only three candidates are selected.

For the outcome

\[
A\rightarrow B\rightarrow C
\]

with \(D\) excluded, the probability is

\[
\boxed{
P(A,B,C;\ D\text{ excluded})
=
\frac{a}{a+b+c+d}
\times
\frac{b}{b+c+d}
\times
\frac{c}{c+d}
}
\]

The fourth candidate is simply the candidate left after the three sequential draws.

Therefore, under this formulation:

> **selection, ordering, and exclusion are different observable consequences of the same sequential draw process.**

This was particularly useful for comparison with our existing RF4SP four-candidate gameplay dataset.

---

# 10. Existing Four-Candidate Gameplay Check

A pre-existing controlled RF4SP dataset used:

| Candidate | Item ID |
|---|---:|
| Turnip Seeds | 753 |
| Turnip | 29 |
| Pink Turnip | 3 |
| Gold Turnip | 46 |

There were 50 gameplay trials.

Observed exclusions were:

| Candidate | Observed exclusions |
|---|---:|
| Turnip Seeds | 0 / 50 |
| Turnip | 3 / 50 |
| Pink Turnip | 42 / 50 |
| Gold Turnip | 5 / 50 |

The fixed Item-ID sequential-draw model predicted approximately:

| Candidate | Expected exclusions / 50 |
|---|---:|
| Turnip Seeds | 0.002 |
| Turnip | 3.94 |
| Pink Turnip | 44.17 |
| Gold Turnip | 1.88 |

We also compared the complete four-item outcome

\[
\text{slot 1}
\rightarrow
\text{slot 2}
\rightarrow
\text{slot 3}
\rightarrow
\text{excluded}
\]

over all 24 possible permutations.

The fixed model was not fitted to this dataset.

The full-order deviance was approximately

\[
10.99,
\]

and a 200,000-simulation Monte Carlo goodness-of-fit check gave approximately

\[
p \approx 0.46.
\]

Thus the reported Item-ID sequential-draw account showed strong predictive consistency with this independently collected gameplay dataset.

Again:

> **Predictive consistency with gameplay is not the same thing as independent verification of the disassembled implementation.**

---

# 11. Two-Candidate Boundary

The reverse-engineering account also appears to contain an important branch condition.

For fewer than three candidates, the reported implementation does **not** use the same weighted sequential draw.

Instead, the candidate pool is reportedly written directly in pool order.

Schematically:

```text
N < 3

pool[0] -> trait slot 0
pool[1] -> trait slot 1
