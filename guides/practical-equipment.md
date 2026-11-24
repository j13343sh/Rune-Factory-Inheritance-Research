---
layout: rf-guide
slug: practical-equipment
title: ゴーストロケット・属性吸収ブローチ
description: 移動用の靴と属性対策を、目的・製作・完成後の確認に分けます。
kind: 実用装備
lang: ja
lead: 移動用の靴と属性対策を、目的・製作・完成後の確認に分けます。
---

## ゴーストロケットを狙う靴

内部A・Bを持つ靴と、後続の靴を使うと、本体2個＋先頭の内部2個が3枠を取り合う説明ができます。[第一同カテゴリ参照](inheritance-basics.html#第一同カテゴリ内部アレンジ参照)で候補の出所を確認し、[空レザーを先頭にするクッション](cushion-method.html#候補集合を変える原理)で不要な内部参照を抑える、という順に設計します。追加3枠と空の内部状態を満たす条件付きの方法であり、全レシピの成功保証ではありません。

ゴーストブーツとロケットウィングを含む組合せは、移動用装備の設計例です。RF5の用途別装備表には、スニーキングブーツをベースとする周回用構成が掲載されています。用途別表の「成功率100%」という列名を、全工程の一般成功率として転載しません。

- RF5の具体的な投入位置は[クッション製法](cushion-method.html)へ。
- RF4SPのサクラカブ応用例は[ダミー製法](dummy-method.html)へ。
- 鑑定で装備名を確認した後、実際の移動効果は別に確かめてください。

## RF4SP 属性吸収ブローチ

製作時の対応素材は1個。先に物体X、次に対応素材を追加する構成です。風・地・水は**完成後に同素材で2回強化**するため、総消費が1個という意味ではありません。

|属性|ベース|製作時の追加順|完成後強化|原ガイドの最終表示|
|---|---|---|---|---|
|光|サファイアブローチ|物体X→超失敗作|なし|光吸収105%|
|火|ルビーブローチ|物体X→油|なし|火吸収110%|
|風|エメラルドブローチ|物体X→ミックスハーブ|同素材×2|風吸収106%|
|地|アメジストブローチ|物体X→サワードロップ|同素材×2|地吸収106%|
|水|アクアマリンブローチ|物体X→スイートパウダー|同素材×2|水吸収106%|

<ol class="steps"><li>目的属性の通常レシピを満たす。</li><li>物体X、対応素材の順で製作時に追加する。</li><li>風・地・水は完成品を同素材で2回強化する。</li><li>最終耐性表示を確認し、想定した結果と照合する。</li></ol>

超失敗作がない場合の原ガイド例は、カブの種を約50個用意し「レシピを使わない」でまとめて調理、不足なら失敗作を再調理する方法です。必要数や入手を保証する手順ではありません。

数値は公開ガイドの観測表示の転記です。全順序での成功を保証するものではありません。


<span id="rf33-practical"></span>

## ルーンプラーナ：必要性能と作りやすさ

物体X→油の2候補は54/54で投入順保持。一方、物体X＋油＋油の3候補では物体X先頭は52/300でした。[候補構成の異なる実験の図と条件](rf4sp-item-order.html#rf33-fig1)を確認してください。**52/300を、すべての3枠製法や111%案の成功率へ流用しません。** 物体X→超失敗作や各属性素材の2候補について、同じ54/54の実績があると読み替えることもしません。

111%と106%の比較は、**風・地・水の同じ属性ブローチと対応素材**で行います。火のルビーブローチ110%と光のサファイアブローチ105%は、上表の別の製作例です。

|対象属性|共通のベース装備|対応素材M|
|---|---|---|
|風|エメラルドブローチ|ミックスハーブ|
|地|アメジストブローチ|サワードロップ|
|水|アクアマリンブローチ|スイートパウダー|

|比較案|製作時のアレンジ|完成後の追加強化|狙う最終耐性|
|---|---|---|---:|
|3枠案|物体X＋M＋M（物体Xを先頭にする）|Mで1回|111%|
|2枠の簡略案|物体X→M|Mで2回|106%|

素材レベルは固定しません。**完成品に必要な追加強化回数を確保すること**が条件です。3枠案は1回、2枠案は2回の追加強化ができる状態で作成し、最終耐性を確認してください。

比較値は既存の攻略ガイドと製作条件の補足に基づく例です。[攻略PDF](https://drive.google.com/file/d/1ciTo5PsYmywpC01Q7JmbDRmBC4voMwZV/view)には油で106%との記載がありますが、本記事では106%を風・地・水の例として扱います。PDF記載の別確認50/50は54/54の集計に加えていません。今回の掲載に際して新たな実機追試は行っていません。

攻略目的なら、装備一式で必要属性を100%超にできることを確認した上で、最大値との差より素材調達と作り直しの負担を優先する選択ができます。実際の表示と被弾時の効果を確認し、物理攻撃や対象外属性への対策は別に用意します。

- [ルーンプラーナ攻略（英語・ファイル単位）](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/game-guide/rune-prana-tactical-route/README.md)
- [属性吸収ブローチ製作ガイド（英語・ファイル単位）](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/game-guide/elemental-absorption-brooches/README.md)

<details class="rf33-en" lang="en"><summary>English: required performance over maximum performance</summary><p>The 111% versus 106% comparison uses the same matching brooch and material: Emerald Brooch + Mixed Herbs for Wind, Amethyst Brooch + Sour Drop for Earth, or Aquamarine Brooch + Sweet Powder for Water. The three-slot version uses Object X first plus two matching materials, followed by one upgrade with that material. The two-slot version uses Object X → matching material, followed by two upgrades. Material level is not fixed: preserve enough remaining upgrade capacity for the required one or two upgrades. The finished equipment must have sufficient upgrade slots remaining.</p><p>The Fire Ruby Brooch at 110% and Light Sapphire Brooch at 105% are separate examples. The source PDF mentions Oil at 106%; this article uses the clarified Wind/Earth/Water examples instead. No new in-game replication was performed. The 52/300 Oil first-count is not the success rate of these 111% recipes, and the 54/54 Oil result does not validate other two-candidate conditions. Verify final resistance and actual effects. Absorption does not cover all attacks; choose sufficient performance with manageable crafting effort.</p></details>

## 出典と確認範囲

[RF4SP属性吸収ブローチ公開ガイド](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/game-guide/elemental-absorption-brooches/README.md)と日本語図の文字を照合し、HTML表へ再構成。[RF5用途別装備表](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/csv/99_付録_用途別装備一覧/主人公用靴.csv)。
