---
layout: rf-guide
slug: rf5-4000-trials
title: RF5 メッシライト継承4,000回検証
description: RF5の特定条件で記録した4,000回の観測を再集計。3〜6積みの成功数と観測成功率、モデルの適用限界を解説します。
kind: 実測
lang: ja
lead: 何を観測し、何を比較したのか。成功率の数字と、その使える範囲を見ます。
seo_title: RF5 メッシライト継承の成功率｜特定条件4,000回の実機検証
seo_description: RF5の特定条件で3～6積みを各1,000回検証。観測成功率の違いと候補数モデルによる説明、モデルの適用限界を紹介します。
---

製作画面の枠や性能継承は[装備継承・アレンジの基礎知識](equipment-inheritance-guide.html#performance)で確認できます。

<div class="panel"><p><strong>同種素材の積み数によって、観測成功率が変化しました。</strong><br>RF5のメッシライト継承、愛の結晶を使う特定条件の4,000試行です。一般的な継承成功率ではありません。</p></div>

## 何を「成功」と数えた？

統合CSVの「吸収率」と「成否」を照合しています。記録では吸収率9%を成功、6%を失敗と判定しています。3〜6積みは実験条件名であり、そのまま総候補数や自由な直接投入レシピを意味しません。

## 観測結果

<div class="chart" role="img" aria-label="RF5特定条件の観測成功率。3積み25.0%、4積み38.7%、5積み51.9%、6積み57.1%。各1000回。横軸は0から100%。"><div class="axis" aria-hidden="true"><span>0%</span><span>25</span><span>50</span><span>75</span><span>100%</span></div><div class="bar-row"><span>3積み</span><div class="track"><div class="bar" style="width:25.0%"></div></div><strong>25.0%</strong></div><div class="bar-row"><span>4積み</span><div class="track"><div class="bar" style="width:38.7%"></div></div><strong>38.7%</strong></div><div class="bar-row"><span>5積み</span><div class="track"><div class="bar" style="width:51.9%"></div></div><strong>51.9%</strong></div><div class="bar-row"><span>6積み</span><div class="track"><div class="bar" style="width:57.1%"></div></div><strong>57.1%</strong></div></div>

| 条件 | 成功数／試行数 | 観測成功率 |
|---|---:|---:|
| 3積み | 250 / 1,000 | 25.0% |
| 4積み | 387 / 1,000 | 38.7% |
| 5積み | 519 / 1,000 | 51.9% |
| 6積み | 571 / 1,000 | 57.1% |

各1,000回、合計4,000回。グラフは0〜100%の共通目盛りで、理論値は重ねていません。

## 数を増やすだけでなく、何を候補にするか

候補数モデルは、目的を満たす組合せと全体の組合せを分けて考える説明です。同じ目的素材を足す場合と、別素材を足す場合では、モデル上の意味が異なることがあります。

<details><summary>モデル図を見る：実測とは別の仮定</summary><p><strong>抽選候補のモデル図／実際の製作工程は省略</strong></p><p>何が抽選候補になるかで、目的の素材が選ばれる確率は変わる、という考え方を示します。</p><p class="diagram-label">仮定A：愛の結晶4＋メッシライト1</p><div class="tokens"><span class="token">愛</span><span class="token">愛</span><span class="token">愛</span><span class="token">愛</span><span class="token ore">鉱石</span></div><p class="diagram-label">仮定B：愛の結晶3＋別素材1＋メッシライト1</p><div class="tokens"><span class="token">愛</span><span class="token">愛</span><span class="token">愛</span><span class="token noise">別</span><span class="token ore">鉱石</span></div><p>いずれも仮定した候補集合であり、実装から確認した集合ではありません。メッシライトが必ず1候補になるとは断定しません。別素材が常に不利とも断定しません。この比較は4,000回の実験群とは別です。</p></details>

<div class="callout"><p><strong>観測と整合することと、内部仕様の証明は違います。</strong><br>この実験だけで内部の候補上限・抽選実装を確定しません。57.1%を他の装備・素材・作品の成功率として使いません。</p></div>

## 一次データと方法

- [統合データCSV（全4,000行）](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/research/07_統合データ.csv)
- [検証方法PDF](https://drive.google.com/file/d/1nwEbQRd6sJx7crDpziZLL6wvx-3_q1po/view)
- [メッシライト継承解析（日本語PDF）](../pdf/08_メッシライト継承解析.pdf)
- [研究記事と観測値の表](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Messhilite-Inheritance.md)

統合CSVの集計値を掲載しています。環境情報と吸収率の判定条件は検証方法PDFを参照してください。集計の再確認と、ゲーム実機での追加試行は別です。

## 等確率モデルとの比較

[見えない不要候補X](inheritance-basics.html#hidden-x)の例では、グリッタ輝石3個＋メッシライト鉱石1個の4候補を仮定すると、等確率モデルの混入75%・回避25%になります。3積みの実測成功率25.0%との整合を説明するモデルであり、候補集合や内部実装を直接確認した結果ではありません。

|条件|観測成功率|仮定：目的候補g＋不要候補1から3つを等確率非復元選択|
|---|---:|---:|
|3積み|25.0%|C(3,3)/C(4,3) = 25.0%|
|4積み|38.7%|C(4,3)/C(5,3) = 40.0%|
|5積み|51.9%|C(5,3)/C(6,3) = 50.0%|
|6積み|57.1%|C(6,3)/C(7,3) ≈ 57.1429%|

各gは比較のために仮定した有効候補数です。積み数のラベルだけで実際の候補集合を証明しません。総候補数5枠上限の証明にもなりません。[条件付き計算器](candidate-count-calculator.html)はこの等確率補助モデルを扱います。
