---
layout: rf-guide
slug: rf4sp-item-order
title: RF4SP アイテム順列問題
description: RF4SPの2候補投入順保持と物体Xの素材別2,100試行を可視化。排列変化と候補脱落を区別します。
kind: 観測
lang: ja
lead: 2候補の順序保持と3候補の素材別排列を、実機観測の回数と条件から読みます。
---

## 何の「順序」か

|対象|記録すること|この観測だけでは分からないこと|
|---|---|---|
|投入順|製作欄の各枠に置いた素材|内部の走査順|
|最終排列|鑑定・完成品の1〜3枠目|候補の脱落確率|
|候補脱落|4候補以上から何が残らなかったか|表示順との因果関係|

物体Xを使う実用装備では、目的の効果順序が重要です。目的と異なる順になったときは、投入順と表示順を両方保存します。

<span id="支給動画の確認範囲" class="compat-anchor"></span>

## 実演記録から分かること

研究者による実機検証報告では、スモールシールド20個の実演はすべて耐性プラスでした。[実演資料（Xの投稿）](https://x.com/object_x_rf/status/2124014221977616815)。20個の結果は研究者の報告に基づき、動画の独立再確認は行っていません。**20個は下の54回と重複する可能性があるため合算しません。** 一括製作20個を独立した20条件の比較とも扱いません。

研究者は2枠条件で百数十回の検証経験を有しますが、正式な集計には加えません。以下の54/54・18/18・18/18は研究者の報告値であり、個票からの独立再集計ではありません。

## 2候補と3候補を比べる

{% include rf/order-figure-1.html %}

|投入順・候補構成|観測する事象|回数|観測割合|95% Wilson区間|
|---|---|---:|---:|---:|
|物体X → 油|投入順保持（物体Xが先頭）|54/54|100.00%|93.36–100.00%|
|無力のリンゴ → 物体X|投入順保持（物体Xは2番目）|18/18|100.00%|82.41–100.00%|
|物体X → 無力のリンゴ|投入順保持（物体Xが先頭）|18/18|100.00%|82.41–100.00%|
|物体X＋油＋油|物体Xが先頭|52/300|17.33%|13.47–22.02%|

表の「投入順保持」と「物体Xが先頭」は異なる事象です。無力のリンゴ→物体Xの18/18を、物体X先頭18/18と読み替えないでください。区間は各試行を独立な二項観測とみなす参考値で、実験手順の独立性まで保証しません。

<div class="rf33-figure"><p><strong>観測できる入力と出力 / Observable input and output</strong></p><div class="rf33-io"><section><h3>2候補 / Two candidates</h3><p class="rf33-slots"><span class="rf33-slot">投入：物体X</span><span class="rf33-slot">油</span></p><p>完成品を確認</p><p class="rf33-slots"><span class="rf33-slot">先頭：物体X</span><span class="rf33-slot">油</span></p><p>54/54でこの順序を観測。</p></section><section><h3>3候補 / Three candidates</h3><p class="rf33-slots"><span class="rf33-slot">候補：物体X</span><span class="rf33-slot">油</span><span class="rf33-slot">油</span></p><p>完成品の物体Xの位置を数える</p><p>先頭52／中央75／末尾173（各分母300）。</p><p>候補の脱落を数える試験ではありません。</p></section></div><p class="rf33-note">ゲーム内部の処理手順を示す図ではありません。 / This shows observable inputs and outputs, not an internal algorithm.</p></div>

|候補数N|今回整理する観測|読めること／限界|
|---|---|---|
|N=2|上記の指定3条件で投入順保持|すべての2候補条件へ一般化しない|
|N=3|物体X＋同素材2個の最終位置|同じ3素材が残っても排列は変わり得る。素材別に集計する|
|N≧4|3枠に残る素材と最終位置を区別|候補脱落が加わる別の問い。本ページの2,100試行から脱落率を推定しない|

Nは今回比較するアレンジ候補の個数（重複素材も個数として数える）で、製作欄の使用数や素材の種類数と同じとは限りません。候補が脱落することと、残った候補の並びが変わることを分けて記録します。

## 物体Xの素材別排列：2100試行

{% include rf/order-figure-2.html %}
{% include rf/order-figure-3.html %}

各素材で「物体X＋同じ素材2個」を記録した原表のA2:H301、各300行を再集計しました。下表は先頭・中央・末尾の回数と割合です。別の[3候補200試行](rf4sp-selection-bias.html)とは候補構成が異なるため、合算しません。

<div class="rf33-table-wrap" markdown="1">

|素材 / Material|先頭 / First|中央 / Middle|末尾 / Last|先頭率95% Wilson区間|
|---|---:|---:|---:|---:|
|無力のリンゴ / Mealy Apple|163/300 (54.33%)|92/300 (30.67%)|45/300 (15.00%)|48.68–59.88%|
|ヘビースパイス / Heavy Spice|91/300 (30.33%)|119/300 (39.67%)|90/300 (30.00%)|25.41–35.76%|
|スイートパウダー / Sweet Powder|111/300 (37.00%)|90/300 (30.00%)|99/300 (33.00%)|31.73–42.60%|
|サワードロップ / Sour Drop|95/300 (31.67%)|99/300 (33.00%)|106/300 (35.33%)|26.66–37.13%|
|ミックスハーブ / Mixed Herbs|107/300 (35.67%)|95/300 (31.67%)|98/300 (32.67%)|30.46–41.24%|
|油 / Oil|52/300 (17.33%)|75/300 (25.00%)|173/300 (57.67%)|13.47–22.02%|
|超失敗作 / Disastrous Dish|92/300 (30.67%)|110/300 (36.67%)|98/300 (32.67%)|25.72–36.10%|

</div>

**ヘビースパイスは91/300（30.33%）を採用。** 原表の1枠目を数えると91回、中央119回、末尾90回です。既存集計の先頭90回（30.00%）は原表と一致しません。誤集計の原因は断定せず、原表自体は変更していません。

無力のリンゴ54.33%と油17.33%には大きな観測差があります。ただし素材も異なるため、候補数だけが差を生むと結論しません。等確率線は比較モデルであり、実際の並びが等確率であるという主張ではありません。Wilson区間は先頭／それ以外の二項化に対する参考区間で、中央・末尾を含む同時区間ではありません。

## 排列位置と属性耐性値

原表「属性耐性値」と試行行の表示値を照合した比較です。**ベース装備込みの最終耐性や、完成後の追加強化結果とは別**です。

|組合せ（X＝物体X、M＝各行の素材）|Xが先頭：X→M→M|Xが中央：M→X→M|Xが末尾：M→M→X|
|---|---:|---:|---:|
|無力のリンゴ・ヘビースパイス・スイートパウダー・サワードロップ・ミックスハーブ|+21%|0%|−20%|
|油|+61%|0%|−60%|
|超失敗作|+50%|0%|−50%|

この差があるため、「3素材が残ったか」だけでは攻略上の成功を評価できません。狙う耐性値と実際の排列を確認する必要があります。具体的な装備例は[属性吸収ブローチ](practical-equipment.html#rf4sp-属性吸収ブローチ)、必要性能と作成容易性の比較は[攻略への接続](practical-equipment.html#rf33-practical)へ。

## RF5との比較範囲

RF5既存原表は「物体X・無力のリンゴ2個・カブの種」の4候補から3候補が残る60試行です。実データには物体Xが残らない18試行があり、RF4SPの「物体X＋同素材2個」の位置だけを数えた300試行とは直接比較できません。作品別の先頭率を同じ棒グラフに並べず、条件を揃えた比較は今後の候補として留保します。今回、新規実機試験は行っていません。

<details class="rf33-en" lang="en"><summary>English: observations, limits and practical use</summary>
<p>In the reported RF4SP in-game observations, Object X → Oil preserved input order in 54/54 trials; Mealy Apple → Object X and the reverse order each preserved input order in 18/18 trials. In the first Mealy Apple condition, Object X is second, not first. The 20-item demonstration reportedly gave positive resistance throughout, but may overlap the 54 trials; it is not added. The video was not independently re-fetched for this update. Broader recollections of more than 100 trials are not a formal denominator. None of these observations guarantees all two-candidate combinations.</p>
<p>Figures 1–3 and the numerical table show RF4SP results. Seven raw-data tabs, each containing Object X and two identical materials, give 2,100 trials. Heavy Spice was recounted as 91 first, 119 middle and 90 last, correcting the existing summary's first-count of 90. All other previously reported first-counts agree with the raw data. The dashed 1/3 line is an equal-position reference, not an asserted game probability. Wilson intervals assume independent binomial observations and describe first versus not-first only.</p>
<p>For X→M→M / M→X→M / M→M→X, the source resistance values are +21/0/−20 for Mealy Apple and the four spice-type materials; +61/0/−60 for Oil; and +50/0/−50 for Disastrous Dish. These are source trial values, not final resistance including base gear and upgrades.</p>
<p>N=2 concerns observed order preservation in the stated conditions. N=3 concerns final positions while all three materials remain. N≥4 also raises a separate selection/omission question. The RF5 data use four candidates (Object X, two Mealy Apples and a Turnip Seed), with Object X absent in 18/60 trials. Comparing its raw first-position rate with the RF4SP three-candidate rate would confound conditions.</p>
<p>Choose equipment that meets the required resistance with manageable crafting effort. See the linked practical-equipment section for the distinct 110% Fire / 105% Light brooch examples and the source guide's 111% versus 106% comparison. No internal implementation is inferred.</p>
</details>

## 出典と確認範囲

- [RF4SP物体X検証・実機原表](https://docs.google.com/spreadsheets/d/1qyaE9kcigVfamYLtNE41DLBTw33QDcGAZqfDrp3EqeE/edit)：7素材の各「並び順」A2:H301と「属性耐性値」。再照合日：2026年11月24日。
- 2候補の54/54・18/18・18/18および20個の結果：研究者による実機検証報告。[実演投稿](https://x.com/object_x_rf/status/2124014221977616815)。個票・動画の独立再検証とは区別。
- [RF5物体X検証原表](https://docs.google.com/spreadsheets/d/1bPw-kEs3GblnTq_TKuoXt9jzQarqGR9ihQodK-nRDrs/edit)：データA2:H61と集計の条件説明。比較条件の確認に使用。

追加実機試験なし。公開する結論は観測された入出力とその集計の範囲に限定します。
