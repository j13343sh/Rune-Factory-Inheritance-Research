# Rune Factory Inheritance Research

Observation-based research archive for **Rune Factory 4 Special** and **Rune Factory 5**.

This repository documents inheritance mechanics, candidate-count models, success probability interpretation, Messhilite inheritance behavior, friendship farming, shop inventory management, and long-term gameplay optimization based on repeated gameplay observation.

This archive is based entirely on in-game observation, repeated experimentation, and statistical analysis.

No reverse engineering, decompilation, or extracted game source code is used.

---

## Repository Status

Current phase: **Release Preparation**

The repository architecture, article relationships, and directory structure are treated as stable for release.

This README serves as the public entry point.

For the full navigation graph, see:

- [ROADMAP](ROADMAP.md)

---

## Main Research Root

The central research root of this repository is:

- [Candidate Count Model](articles/Candidate-Count-Model.md)

The Candidate Count Model is an observation-based framework for interpreting inheritance behavior through candidate structure, combination space, and success probability.

---

## Major Research Articles

These articles are existing repository nodes connected to the Candidate Count Model.

### Candidate Count Branch

- [Auto Arrange](articles/Auto-Arrange.md)  
  Observation-based model describing how required recipe materials may become inheritance candidates.

- [Self Contamination](articles/Self-Contamination.md)  
  Observation-based model describing how source equipment or inherited information may re-enter the candidate pool.

- [Recursive Processing](articles/Recursive-Processing.md)  
  Conceptual model for inheritance behavior that appears to involve nested or internal arrangement information.

- [Success Probability](articles/Success-Probability.md)  
  Mathematical interface connecting candidate count, combination space, and expected inheritance success.

- [Messhilite Inheritance](articles/Messhilite-Inheritance.md)  
  Validation-oriented article using Messhilite inheritance observations to test candidate-count and combination-space explanations.

---

## Gameplay Strategy Articles

These articles document practical long-term gameplay strategies derived from observation and repeated play.

- [Efficient Friendship Farming Strategy](articles/Efficient-Friendship-Farming-Strategy.md)
- [RF5 Daily Friendship Farming Guide](articles/RF5-Daily-Friendship-Farming-Guide.md)
- [RF4SP Daily Friendship Farming Guide](articles/RF4SP-Daily-Friendship-Farming-Guide.md)
- [Triple Gift Mechanics](articles/Triple-Gift-Mechanics.md)
- [The Hidden Cost of Shipping Everything](articles/The-Hidden-Cost-of-Shipping.md)

---

## Repository Folders

```text
README.md
ROADMAP.md

articles/
csv/
images/
mermaid/
pdf/
research/
ルンファク（全部入り文字列検索可）/
```

### articles/

English Markdown entry points and topic articles.

Use this folder for AI-search-friendly and GitHub-readable navigation into the research.

- [Articles README](articles/README.md)

### images/

Image assets used by Markdown articles.

Images are organized by article or topic folder.

### mermaid/

Mermaid source files for repository diagrams.

Rendered figures may be stored under `images/`.

### pdf/

Stable Japanese research archive.

PDF files preserve detailed discussion, observations, mathematical interpretation, validation results, and long-form analysis.

### research/

Experimental records, validation notes, datasets, and supporting research materials.

### csv/

Structured reference tables and data files.

### ルンファク（全部入り文字列検索可）/

Searchable Japanese full archive and source materials.

---

## PDF Research Archive

The detailed Japanese PDF archive includes:

- [00_README_継承仕様整理](pdf/00_README_継承仕様整理.pdf)
- [00_サマリー](pdf/00_サマリー.pdf)
- [01_用語定義](pdf/01_用語定義.pdf)
- [02_基本仕様整理](pdf/02_基本仕様整理.pdf)
- [03_オートアレンジ詳細](pdf/03_オートアレンジ詳細.pdf)
- [04_自己混入解析](pdf/04_自己混入解析.pdf)
- [05_再帰処理解析](pdf/05_再帰処理解析.pdf)
- [06_抽選処理解析](pdf/06_抽選処理解析.pdf)
- [07_数式・一般化モデル](pdf/07_数式・一般化モデル.pdf)
- [08_メッシライト継承解析](pdf/08_メッシライト継承解析.pdf)
- [09_高難度継承と実運用](pdf/09_高難度継承と実運用.pdf)
- [10_ロールプレイ装備研究](pdf/10_ロールプレイ装備研究.pdf)
- [11_未解決問題・今後の検証課題](pdf/11_未解決問題・今後の検証課題.pdf)
- [12_補遺](pdf/12_補遺.pdf)
- [99_付録_AI比較ログ](pdf/99_付録_AI比較ログ.pdf)

---

## Supporting Documents

Additional supporting notes at the repository root include:

- `00_DOWNLOAD OK.txt`
- `00_roadmap_en.txt`
- `99_bonus_Efficient_Friendship_Guide.txt`
- `99_補足_成功率収束について.txt`
- `99_補遺_追加未解決事項備忘録.txt`
- `99_備忘録_ゲーム検証方法論と検証環境.txt`
- `99_Memo_Collaborative_Research_Environment_and_AI_Selection.txt`
- `99_余談_作物花類陳列候補数問題と効率的な好感度上げ.txt`

---

## Research Position

This archive does not claim to prove internal game code or implementation details.

Its purpose is to document observed behavior and provide reproducible observation-based models that may explain those observations.

Some hypotheses remain unresolved.

Future observations may refine, revise, or replace current interpretations.

---

## Navigation

- [ROADMAP](ROADMAP.md)
- [Articles](articles/README.md)
- [PDF Archive](pdf/README.md)
