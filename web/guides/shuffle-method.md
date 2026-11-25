---
layout: rf-guide
slug: shuffle-method
title: シャッフル製法：投入順を変えてリセマラを減らす
description: RF5の実機例で、同じ装備の投入順を変えて不要な継承抽選を避ける方法を解説します。
kind: 製法
lang: ja
lead: 同じ素材でも、最初に使う装備によってリセットが必要になる場合があります。
seo_title: 装備継承と素材の投入順｜シャッフル製法
seo_description: 同じ素材でも投入順によって継承結果が変わる場合があります。RF5の実機例から、不要な抽選条件を減らす投入順の工夫を解説します。
---

<h2 id="shuffle-quiz">同じ素材なのに運ゲーになるのはどちら？</h2>

問題です。この2つのアレンジのうち、リセマラが必要になるのはどちらでしょうか？

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:1rem">
<figure style="margin:0"><img src="{{ '/assets/images/shuffle/left.webp' | relative_url }}" alt="RF5 装飾画面。もこもこのマフラー、賢者の証の順に投入" style="width:100%;height:auto" loading="lazy"><figcaption>A（左）：もこもこのマフラー → 賢者の証</figcaption></figure>
<figure style="margin:0"><img src="{{ '/assets/images/shuffle/right.webp' | relative_url }}" alt="RF5 装飾画面。賢者の証、もこもこのマフラーの順に投入" style="width:100%;height:auto" loading="lazy"><figcaption>B（右）：賢者の証 → もこもこのマフラー</figcaption></figure>
</div>

<details style="margin:1rem 0"><summary><strong>答えを見る</strong></summary><p><strong>答えはA（左）です。</strong> この実機例では左の順序で抽選に依存する工程が生じ、右の順序ではその工程を回避できました。同じ素材を使っていても、最初に使う装備によってリセットが必要になる条件が変わる場合があります。</p></details>

この性質を利用して、不要な抽選やリセマラを減らす方法を、本研究では**シャッフル製法**と呼びます。

## 動かすのは「順序」

理由は、内部アレンジ参照（旧称「再帰処理」）の観測結果から説明できます。

<figure style="margin:1rem 0"><a href="{{ '/assets/images/shuffle/reference.png' | relative_url }}"><img src="{{ '/assets/images/shuffle/reference.png' | relative_url }}" alt="RF5の三条件比較。性能継承元と追加アレンジ側で内部アレンジの参照結果が異なる観測例" style="width:100%;height:auto" loading="lazy"></a><figcaption>観測当時の比較図（クリックで拡大）。図中の「再帰処理」は旧称であり、内部実装を確定するものではありません。</figcaption></figure>

比較図では、内部アレンジを持つもこもこのマフラーを追加アレンジ側に置いた条件と、性能継承元側に置いた条件で、完成品に現れる内部素材の情報が異なりました。装備本体が候補になることと、その内部アレンジが参照されることは別の観測です。

[ロケット→ゴーストの具体例](inheritance-basics.html#first-reference-example)でも、先頭の内部A・Bが参照され、後続の内部C・Dは参照されない一方、両方の本体が候補になります。順序を替えると参照される内部情報が変わり得るため、同じ素材でも競合する候補の構成が変わると説明できます。

重要なのは、乱数を操作することではなく、不要な抽選条件を減らせる投入順を選ぶことです。[オートアレンジと内部アレンジの基礎](inheritance-basics.html#装備製作を読む順序)も参照してください。

<h2 id="shuffle-steps">シャッフル製法の手順</h2>

<ol class="steps"><li>通常レシピと追加装備を固定する。</li><li>各装備の内部アレンジを事前鑑定して記録する。</li><li>同カテゴリ装備の投入順を調整して製作する。</li><li>完成品を鑑定し、狙う特殊効果も別に確認する。</li></ol>

{% include rf/evidence.html type="観測" text="RF5の製作例では、同じ素材の順序変更により不要なランダム依存段階を避けられました。全レシピでの成功保証ではありません。" %}

内部が空の装備を先頭へ置く[クッション製法](cushion-method.html#候補集合を変える原理)は、この条件付き規則を利用する応用です。ダミー製法は候補の構成・種類を工夫する別の着眼点です。

**未確認**：全レシピへの適用、走査順序、内部候補登録アルゴリズム、成功率の一般値。具体例はRF5であり、RF4SPに同じ手順を無条件に適用できるとは限りません。

[クッション製法](cushion-method.html) / [3製法比較](method-comparison.html)

## 出典と確認範囲

実機画像・観測比較図：研究者提供資料。[内部アレンジ参照の現行研究記事](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Recursive-Processing.md)。旧称「再帰処理」を内部実装の確定名称として使用しません。
