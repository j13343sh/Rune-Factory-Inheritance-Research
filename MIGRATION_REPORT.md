# Semantic Migration — Migration Report

Status: **Research / Strategy Review Gate**. HQ Production Merge: **WAIT**.

## Scope and source

This patch applies the approved Observation / Historical Model / Unknown boundary to a staged copy of `06-Rune-Factory-Inheritance-Research-main-1-.zip` (SHA-256 `d2ae5de59496cf8df81fd0fee63b7e3b10175e159b629fcbc84c2c6a00fd5848`). The production repository was not modified. The later Strategy clarification excludes 天羽, Archive translation, and any external mechanism account from this migration. No such account is asserted or promoted here.

Current observations: **Equipment-Body Candidateization** and **Internal Arrangement Reference**. **Performance-Source Contamination**, **Self Contamination**, and **Recursive Processing** are historical terminology. **First Same-Category Internal-Arrangement Reference** remains HOLD. Unknown transitions remain unknown.

## Changed

| Files | Change |
| --- | --- |
| `articles/Recursive-Processing.md`, `mermaid/rune-factory-recursive-processing-flow-en.mmd`, `mermaid/rune-factory-recursive-processing-expansion-tree-en.mmd` | Reinterpreted the article and two diagrams around Internal Arrangement Reference; marked recursive expansion as a historical model; kept the candidate transition unknown. |
| `articles/Self-Contamination.md`, `mermaid/rune-factory-self-contamination-mechanism-en.mmd`, `mermaid/rune-factory-self-contamination-expansion-tree-en.mmd` | Reinterpreted the article and two diagrams around Equipment-Body Candidateization; retained deprecated terms as history. |
| `99_補遺_追加未解決事項備忘録.txt` | Separated observation, historical scenarios, and current unknowns; preserved the original D-XX passage in a labeled historical source block. |
| `README.md`, `ROADMAP.md`, `articles/README.md`, `Repository-State.md` | Updated navigation and authority language while preserving historical physical links. |
| `articles/Candidate-Count-Model.md` | Corrected the attached mechanism explanation and inline diagram; retained the Candidate Count Model and its formulas as active work. |
| `articles/Auto-Arrange.md`, `articles/Success-Probability.md`, `articles/Messhilite-Inheritance.md` | Corrected dependent explanations and related-link labels; preserved observation data and probability formulas. |
| `00_roadmap_en.txt`, `mermaid/roadmap-knowledge-network.mmd` | Updated secondary navigation terminology and its boundary. |

Total: **17 changed source files**. The patch also contains this report.

## Unchanged

- `SYNC_MANIFEST.json`: physical paths remain correct.
- Existing PDFs, PNGs, and GIFs: historical assets, with no binary edits.
- `ルンファク（全部入り文字列検索可）/07_数式・一般化モデル_コラム.txt`: its `自己混入` occurrence is within an older Japanese research text and is preserved as historical material.
- `mermaid/rune-factory-auto-arrange-trigger-condition-flow-en.mmd`: its “auto-arrange contamination” concerns Auto Arrange, not the deprecated Self Contamination claim.
- Other repository material with no affected authority assertion.

## Historical-Preserved

The deprecated English and Japanese terms remain where explicitly identified as historical terminology or historical interpretation. The original D-XX scenario and calculations remain in a labeled historical source block; their assumptions are not presented as verified candidate-generation mechanics. Legacy figures and prose inside archival assets remain untouched.

## Filename-Preserved

The physical names `articles/Recursive-Processing.md`, `articles/Self-Contamination.md`, and the four corresponding Mermaid files remain unchanged. Links to these paths and to historical PDFs, including `05_再帰処理解析.pdf`, remain intact. Historical image names and folder paths are also preserved.

## Impact-Audit-New-Hits

Beyond the initial priority list, the repository sweep identified an inline candidate-count relationship diagram requiring boundary correction, historical PDF and image labels within navigation, the older Japanese `07_数式・一般化モデル_コラム.txt` occurrence, and path-only legacy terms in `SYNC_MANIFEST.json`. The Auto Arrange Mermaid “contamination” hit was classified as unrelated. Each was reviewed by role rather than subjected to global replacement.

## Needs-Research-Review

- The early supplemental historical description of a performance-source special ability entering a candidate pool does not establish its precise relation to Equipment-Body Candidateization. It remains historical/unknown; Operations did not supply a mechanism.
- Historical four/five-candidate probability scenarios are preserved as conditional examples; whether their per-case assumptions hold requires research validation before any current mechanism claim.
- Priority C files `99_Candidate-Count-Model_Unresolved-Questions_JA.txt` and `99_Candidate-Count-Model_Unresolved-Questions_EN.txt` were absent from the supplied ZIP. No substitute files were invented. If those files exist in the production branch, they require separate impact review before merging.

## Authority-Sensitive-Rewrite

- Removed current-mechanism presentation of recursive expansion and its claimed increase of candidate count. Internal Arrangement Reference is observed; the intervening candidate transition is unknown.
- Reframed source-equipment entry as Equipment-Body Candidateization and retained contamination names only as history.
- Reworked all four Mermaid diagrams and matching inline versions so they do not portray the old processing order as confirmed.
- Separated historical numerical hypotheses from the current Candidate Count Model; the model itself was not demoted.
- Did not adopt the HOLD phrase as current terminology or fill an unknown transition with a new mechanism.

## Verification and limits

- Compared staged files against the supplied ZIP and packaged only the 17 changed paths plus this report.
- Confirmed that modified Markdown files preserve their original relative-link targets and that the four standalone diagrams match their article-embedded counterparts.
- Audited residual old terms by semantic role; a zero-count replacement was not used as the success condition.
- No gameplay reproduction or independent Research Judgment was performed. The attached ZIP is the patch base; a live production revision comparison and conflict review remain necessary at the review/merge gate.
