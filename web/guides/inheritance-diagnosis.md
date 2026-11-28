---
layout: rf-guide
slug: inheritance-diagnosis
title: 装備継承・製法診断ツール｜ルンファク4SP・5
description: 装備継承の失敗原因、製法選択、候補数と自動補充の条件を確認します。
lead: 欲しい効果が残らないとき、作り直す前に条件を確認しましょう。
kind: 装備継承
lang: ja
permalink: /guides/inheritance-diagnosis.html
---

装備の外見、性能元、アレンジ、強化は別々に確認する必要があります。このページでは、困っていることから原因候補を整理し、次に確認する条件や製法を案内します。実機の結果や成功率を保証するツールではありません。

## 失敗原因を確認する {#symptoms}

<noscript><p>入力による診断にはJavaScriptが必要です。各モードの説明と確認表を以下で読めます。</p></noscript>
<div data-rf-diagnosis="common" hidden></div>
<div data-rf-diagnosis="symptoms" hidden></div>

<div class="rf-diagnosis-static-table" tabindex="0" role="region" aria-label="困っていることの確認表" markdown="1">

|困っていること|まず確認すること|
|---|---|
|特殊能力が消えた|RF5では外見と性能元を区別。RF4SPでは候補の出所・脱落・効果発現を確認。靴・アクセサリー以外には同じ特殊能力モデルを適用しない。|
|不要な素材が混ざる|今回の必須素材からの補充か、以前の装備に残った内部アレンジかを確認。|
|攻撃力・防御力が変わった|性能元、武器カテゴリ、メッシライト鉱石の使用を確認。|
|強化した性能が消えた|RF5では中間装備の強化は引き継がれない。最終装備を強化する。RF4SPは製作前後を確認。|
|鑑定と実際の効果が違う|鑑定表示、数値性能、特殊能力、装備状態を分けて確認。|
|盾の効果が弱い|武器カテゴリと盾の反映条件を確認。|
|3候補を揃えたい|候補の種類、数、並び順、効果発現を確認。|
|4能力をまとめたい|靴・アクセサリーの固有能力と通常3枠を区別。RF5は性能元も確認。|

</div>

[基礎知識](equipment-inheritance-guide.html)・[候補の仕組み](inheritance-basics.html)・[RF5特殊能力](rf5-special-effect-inheritance.html)・[RF5性能継承](rf5-performance-inheritance.html)・[盾の条件](weapon-category-shield.html)

## 製法を選ぶ {#methods}

<div data-rf-diagnosis="methods" hidden></div>

<div class="rf-diagnosis-static-table" tabindex="0" role="region" aria-label="製法の確認表" markdown="1">

|製法|向いている条件|注意点|
|---|---|---|
|通常製作|目的候補が揃い、不要候補が問題にならない|鑑定と効果を確認|
|[クッション](cushion-method.html)|空の内部アレンジを先に配置できる|追加枠、本体候補、RF5の性能元|
|[ダミー](dummy-method.html)|RF4SPで避けにくい不要候補を制御したい|途中工程の鑑定、成功率は保証しない|
|[シャッフル](shuffle-method.html)|投入順を変更できる|RF5では性能元も変わり得る。乱数操作ではない|
|[RF4SP複合製法](rf4sp-combined-inheritance-method.html)|本命兼クッションと適切な中間装備を用意できる|既存実演の条件を確認。並び順は固定されない|

</div>

製法は組み合わせられます。[製法比較](method-comparison.html)と[高度な装備継承設計](advanced-inheritance-design.html)も参照してください。

## 製作条件を確認する {#conditions}

<div data-rf-diagnosis="conditions" hidden></div>

製作時の投入枠は6、完成後の通常アレンジは最大3枠です。以下は通常の同カテゴリ装備1個のみを追加し、他の候補がなく内部参照条件が成立する場合の限定モデルです。複数装備、追加素材、メッシライト鉱石を使う条件には適用しません。

<div class="rf-diagnosis-static-table" tabindex="0" role="region" aria-label="必要素材数の確認表" markdown="1">

|必要素材数|靴・アクセサリー：内部0/1/2/3|その他通常装備：内部0/1/2/3|
|---|---|---|
|3以下|0 / 0 / 0 / 0|0 / 0 / 0 / 0|
|4|1 / 1 / 0 / 0|1 / 1 / 1 / 0|
|5|2 / 1 / 0 / 0|2 / 2 / 1 / 0|

</div>

表はモデル上の補充数です。全条件を個別に実測したものではなく、内部で候補が生成される数を確定するものでもありません。候補数が3以下でも目的候補が揃うとは限りません。RF4SPでは3候補が残っても並び順が変わり得ます。RF5の直接継承は確認済み条件に限ります。

[オートアレンジ制御](auto-arrange-control.html)・[作品比較](rf4sp-rf5-comparison.html)・[RF5候補数モデル計算ツール](candidate-count-calculator.html)（RF4SPの成功率には適用不可）

## 完成後の確認 {#appraisal}

RF4SPではバレット、RF5ではドグやマーティンに鑑定を依頼し、性能元・アレンジを作品に応じて確認します。目的の効果が実際に発揮されるかも確認してください。入力条件が不明なら、まず鑑定やレシピの確認を行いましょう。

## 適用範囲 {#scope}

本ツールは既存の公開研究・実践例を整理した案内です。新規の実機検証や内部抽選式の確定ではありません。候補の保持、並び順、実際の効果は別々に確認します。
