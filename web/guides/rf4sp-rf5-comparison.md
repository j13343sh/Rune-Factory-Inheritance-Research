---
layout: rf-guide
slug: rf4sp-rf5-comparison
title: RF4SPとRF5：何を共通に考え、何を分ける？
description: 候補構成を考える視点は共通でも、製法の成立条件や抽選モデルは作品ごとに検証。RF4SPとRF5の証拠を整理します。
kind: 作品比較
lang: ja
lead: 似ている現象にも、同じ仕組みとは限らない。作品と条件を分けて読みます。
seo_title: RF4SPとRF5の装備継承・アレンジの違い
seo_description: RF4SPとRF5の装備継承を実機観測と研究モデルから比較。共通して使える考え方と、作品別に区別すべき抽選特性を解説します。
---

<div class="panel"><p><strong>「候補構成を考える」視点は共有し、成立条件は作品ごとに確かめる。</strong><br>RF4SPで得た説明を、そのままRF5の内部仕様にしないことが大切です。</p></div>

## このサイトで紹介する証拠

<div class="table-scroll" markdown="1" tabindex="0" role="region" aria-label="RF4SPとRF5の比較表。横にスクロールできます。">

| 観点 | RF4SP | RF5 |
|---|---|---|
| 今回の製法例 | サクラカブを使うダミー製法の応用実演 | 空レザーブーツを使うクッション製法の実演 |
| 最終結果の確認 | バレットの鑑定で目的の3種を表示した記録 | マーティンの鑑定で目的の3種を表示した記録 |
| 反復検証 | 上記応用実演から再現率は認定しない | メッシライト特定条件では各1,000回、計4,000回の記録。靴の実演とは別 |
| モデルの扱い | 候補の種類による抽選上の違いを研究 | 組合せによるモデル説明と実測を区別 |
| 他方への転用 | RF4SPの抽選モデルをRF5へそのまま適用しない | RF5のモデルをRF4SPの実装と同一視しない |

</div>

上の表は掲載する実演を作品別に示しています。[クッション製法](cushion-method.html)と[シャッフル製法](shuffle-method.html)はRF4SP・RF5で利用できます。実演の投入手順や成功率は、その作品とレシピの条件ごとに確認します。

## 二つの観測を一つにしない

<div class="cards"><div class="card"><h3>装備本体候補化</h3><p>投入した装備そのものが結果に現れる観測。</p></div><div class="card"><h3>内部アレンジ参照</h3><p>装備が持つ内部アレンジ情報が、後の製作結果に現れる観測。</p></div></div>

本体が現れることだけで内部の展開を認定しません。内部情報が現れることだけで、処理順序や候補数を認定しません。同カテゴリ装備の投入順と結果の対応も、内部の先頭走査を証明するものではありません。

## 実際に試す前のチェック

1. 作品名・起点レシピ・通常素材をそろえる。
2. 追加素材の位置と、装備の内部アレンジ状態を記録する。
3. 完成後の鑑定表示を確認する。
4. 特殊効果は必要に応じて別途確かめる。
5. 一度の成功を、一般的な成功率や全レシピの保証にしない。

## 根拠を読む

- [内部アレンジ参照：観測範囲と未知の点](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Recursive-Processing.md)
- [装備本体候補化：別の観測](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Self-Contamination.md)
- [メッシライト継承：検証結果](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Messhilite-Inheritance.md)

Item-IDのアルゴリズム詳細は、この解説の対象外です。既存の解析報告を、このWeb実装によって独立確認済みへ昇格させてはいません。

## 作品ごとの定量資料

- [RF4SPメッシライト400回](rf4sp-messhilite-trials.html)：各100回×4条件。
- [RF5メッシライト4,000回](rf5-4000-trials.html)：各1,000回×4条件。
- [RF4SP排列位置の偏り](rf4sp-selection-bias.html)：3候補の位置と候補脱落を分離。
- [素材レベル比較](material-levels.html)：非有意を同等性としない。

候補数モデルの枠組みと、全候補部分集合が等確率という補助仮定は別です。RF4SPで等確率近似が崩れる条件があっても、候補構成を整理する枠組み全体の反証とは限りません。

## 等確率ツールはRF5の参考モデル

RF5の特定条件の実測と整合する[等確率計算ツール](candidate-count-calculator.html)を用意しています。内部抽選式が確定したという意味ではありません。RF4SPの候補数管理の概念は維持しますが、素材の選択・排列の偏りがあるため、同じ数式を攻略成功率へそのまま当てはめません。排列位置の偏りと、4→3の候補選択の偏りを分けて読みます。
