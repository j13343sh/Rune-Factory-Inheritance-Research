---
layout: rf-guide
slug: rf5-absorption-brooch
title: ルンファク5 属性吸収ブローチの作り方
kind: 実用装備
lang: ja
lead: 敵の攻撃に合わせてブローチを選び、物体Xで対応素材の効果を反転させて耐性100%超を狙います。
seo_title: ルンファク5 属性吸収ブローチの作り方｜物体Xと追加強化
seo_description: RF5で火・水・地・風・光の吸収ブローチを作る手順。物体X、対応素材、製作時と強化後の耐性を計算します。
---

## 属性別に用意する素材 {#brooch-materials}

対象属性の基礎耐性が80%あるブローチを選びます。火・水・地・風を同じ手順で作る場合は、通常レシピのプラチナと宝石に加え、物体Xを1個、表の対応素材を3個用意します。

<div class="table-scroll" tabindex="0" role="region" aria-label="属性別の素材比較表" markdown="1">

|属性|ベース|対応素材|
|---|---|---|
|火|ルビーブローチ|ヘビースパイス|
|水|アクアマリンブローチ|スイートパウダー|
|地|アメジストブローチ|サワードロップ|
|風|エメラルドブローチ|ミックスハーブ|

</div>

## 製作で100%、強化で110% {#brooch-recipe}

1. 装飾台で通常レシピの2素材を置き、物体X → 対応素材 → 同じ対応素材の順で追加して製作します。
2. 目的の属性耐性が100%になったかを確認します。基礎の80%に、符号を反転した10ポイントが2回加わる計算です。
3. 完成品を同じ対応素材で1回強化します。さらに10ポイント加わり、**80% ＋ 10ポイント × 3 ＝ 110%**が目安です。

この投入順は、通常の直接アレンジで3候補がそのまま残り、再抽選を伴わない条件を使います。強化用に1枠を残し、最終表示と対象属性を受けた際の挙動を確認してください。吸収を狙うのは選んだ属性です。無属性や他の属性への対策は装備一式で考えます。

火のルビーブローチは100%から110%への表示例が公開されています。水・地・風の110%は掲載素材の強化値を当てはめた計算値です。

## 火と光を素材1個で作る {#brooch-short-recipe}

**ルビーブローチには油がおすすめです。** 物体Xで反転した後の火耐性は、ヘビースパイスが1個あたり10ポイント、油が30ポイントです。油なら1個で110%に届き、追加強化も省けます。光を狙う場合は超失敗作を使います。通常レシピに物体X → 対応素材の順で追加し、その並び順が保たれた場合の計算です。表の目標には製作後の追加強化を使いません。

|属性|ベース|物体Xの後に入れる素材|完成時の計算値|
|---|---|---|---|
|火|ルビーブローチ|油1個|80% ＋ 30ポイント ＝ 110%|
|光|サファイアブローチ|超失敗作1個|80% ＋ 25ポイント ＝ 105%|

筆者が確認した強化効果を反転すると、1個あたり油は火耐性に30ポイント、**超失敗作は光耐性に25ポイント**加わります。完成時の数値は、対応する基礎耐性と反転後の強化値を足した計算値です。製作後は耐性表示を確認してください。

さらに上げる場合は、物体X → 対応素材 → 同じ対応素材の順で製作し、必要に応じて同素材で1回強化します。

|属性・素材|製作時に同素材2個|同素材で1回追加強化|
|---|---|---|
|火・油|80% ＋ 30ポイント × 2 ＝ **140%**|140% ＋ 30ポイント ＝ **170%**|
|光・超失敗作|80% ＋ 25ポイント × 2 ＝ **130%**|130% ＋ 25ポイント ＝ **155%**|

火110%・光105%で足りる場合は、素材1個の手順で素材と強化枠を節約できます。

## 他の実用装備とRF4SPの参考手順 {#brooch-related}

- [用途別アクセサリー8選](rf5-recommended-accessories.html)
- [RF5で3候補の順序を保持する条件](equipment-inheritance-guide.html#rf5-order-boundary)
- [高難度継承の実践例一覧](practical-equipment.html)

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

RF5の手順は筆者の直接アレンジでの運用に基づき、火の表示例と各素材の強化値を公開資料で照合しています。

- [RF5のルビーブローチの製作・強化例](https://yuigame.com/2021/05/29/%E3%83%AB%E3%83%BC%E3%83%B3%E3%83%95%E3%82%A1%E3%82%AF%E3%83%88%E3%83%AA%E3%83%BC%EF%BC%95%E3%80%80%E3%80%90%E5%B1%9E%E6%80%A7%E5%90%B8%E5%8F%8E%E3%83%96%E3%83%AD%E3%83%BC%E3%83%81%E3%81%AE%E4%BD%9C/)。
- [RF5のブローチの基礎値・レシピ](https://gamepedia.jp/runefactory5/archives/999)と[対応素材の強化値](https://www.kirokiro.cc/games/92009)。
- [RF4SP属性吸収ブローチ公開ガイド](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/game-guide/elemental-absorption-brooches/README.md)と日本語図。
