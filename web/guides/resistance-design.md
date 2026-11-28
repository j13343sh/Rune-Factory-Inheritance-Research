---
layout: rf-guide
slug: resistance-design
title: ルンファク4SP・5 全身装備の耐性設計ガイド
description: 防具5部位の属性・状態異常耐性を組み立て、素材や強化枠を配分します。
kind: 実用装備
lang: ja
lead: ''
seo_title: ルンファク4SP・5 全身装備の耐性設計ガイド
seo_description: 防具5部位の属性・状態異常耐性を組み立て、素材や強化枠を配分します。
---

耐性は装備単体ではなく、頭・鎧・盾・靴・アクセサリーの組み合わせで考えます。使用武器によって盾の反映条件も変わります。

## 属性耐性の基盤 {#elemental-foundation}
火・水・地・風・光・闇は物体Xと無力のリンゴ、愛はおおきなカブ、無属性は4色コアで補います。通常の属性攻撃では100%が無効化、100%超が吸収の目安です。筆者は戦闘用では無属性以外の全属性吸収、日常用では80%以上を目安としています。これは設計目標であり完成レシピではありません。

RF5攻略Wikiの強化ページでは、4色コアを一つの防具に使用することで無属性耐性10%を得る方法が紹介されています。筆者も装備設計に採用しています。5部位すべてで有効なら合計50%となりますが、装備の反映条件に注意します。

<figure class="rf-lesson inheritance-figure p49-figure" id="p49-d01" markdown="0">
<figcaption>属性耐性の基盤をつくる3群</figcaption>
<div class="p49-cards"><div class="inheritance-panel"><h3>火・水・地・風・光・闇</h3><p>物体Xが有効な状態で無力のリンゴ</p></div><div class="inheritance-panel"><h3>愛</h3><p>おおきなカブ</p></div><div class="inheritance-panel"><h3>無属性</h3><p>4色コアの組み合わせ</p></div></div>
<p class="inheritance-note">盾の反映は武器などの条件に依存します。4色コアの合計例は全5部位で効果が有効な場合です。</p>
</figure>

## 属性耐性素材 {#elemental-materials}
以下は筆者の既存確認記録とRF5攻略Wikiの強化ページを参考にした補完候補です。同WikiにはRF4SP由来の記述が多いという注意書きがあり、資料値はRF5での独立実測ではありません。反転素材は物体Xが有効な場合の値です。

<div class="p49-table" role="region" tabindex="0" aria-label="素材の比較表" markdown="1">

|用途|素材・補完量|根拠・条件|
|---|---|---|
|火の集中補完|油：30ポイント|筆者確認、反転|
|光の集中補完|超失敗作：25ポイント|筆者確認、反転|
|複数属性の基盤|無力のリンゴ|反転、攻略Wiki参考・筆者の設計例|
|愛の補完|おおきなカブ|攻略Wiki参考・筆者の設計例|
|無属性の補完|4色コア|4種類の組合せ、攻略Wiki参考・筆者の設計例|
|個別属性の補完|対応する調味料・大きな水晶花|作品別の素材説明と実際の効果を確認|

</div>

調味料は反転中の個別属性補完候補です。既存のRF5属性吸収ブローチ記事では調味料を用いた構成と計算例を示しています。大きな水晶花は通常強化の候補です。

## 状態異常とその他の耐性 {#status-resistances}
筆者は封印、睡眠、気絶、スタン、吹き飛び、クリティカルへの対策を優先します。毒、マヒ、疲労、病気はタリスマンの利用目的に応じて調整します。

<div class="p49-table" role="region" tabindex="0" aria-label="補完対象の比較表" markdown="1">

|補完対象|設計の考え方|
|---|---|
|封印・スタン・CRIT抵抗|複数の抵抗を補える素材を優先して確認する|
|睡眠・気絶|固有耐性を持つ防具と追加強化を比較する|
|吹き飛び|盾・靴などの固有耐性と実際の反映条件を確認する|
|吸収攻撃抵抗|属性吸収とは別に不足分を確認する|
|毒・マヒ・疲労・病気|タリスマンの利用目的に応じて調整する|

</div>

攻撃付与率、飲食効果、抵抗値は別の効果です。素材の説明と完成装備で確認してください。

RF4無印攻略Wikiでは右岩の破片が吹き飛び抵抗15%の素材、氷壁のかけらが睡眠対策の素材として掲載されています。RF4SP固有の再検証値ではありません。RF5では盾・靴の固有耐性を利用する設計も有効です。

<figure class="rf-lesson inheritance-figure p49-figure" id="p49-d03" markdown="0">
<figcaption>作品ごとの耐性補完候補</figcaption>
<div class="p49-cards"><div class="inheritance-panel"><h3>RF4系列｜素材で補う</h3><p>右岩の破片は吹き飛び抵抗15%（RF4無印資料値）。氷壁のかけらは睡眠対策の候補。</p></div><div class="inheritance-panel"><h3>RF5｜固有耐性を使う</h3><p>盾・靴の固有耐性から不足分を補う。実効値は装備と反映条件を確認。</p></div></div>
<p class="inheritance-note">右岩の破片の数値はRF4SPで独立に再検証した値ではありません。</p>
</figure>
<figure class="rf-lesson inheritance-figure p49-figure" id="p49-d04" markdown="0">
<figcaption>伝説のオーク布で補う3つの抵抗</figcaption>
<p class="p49-source">伝説のオーク布</p><div class="p49-cards"><div class="inheritance-panel"><h3>封印</h3><p>補完候補</p></div><div class="inheritance-panel"><h3>スタン</h3><p>補完候補</p></div><div class="inheritance-panel"><h3>CRIT抵抗</h3><p>補完候補</p></div></div>
<p class="inheritance-note">RF4無印攻略Wikiには3抵抗の記載があります。筆者のRF5装備でも採用していますが、RF5単品の各補完量は本記事では確定しません。</p>
</figure>

## 物体X・倍率素材・強化順 {#object-x-and-order}
物体Xは以降の素材効果を反転させる手段です。正の耐性素材も反転中は逆効果になり得ます。アレンジで物体Xと無力のリンゴを使用する場合は鑑定で順序も確認します。倍鉄・10倍鉄は効果元の素材と一緒に計画し、反転中に通常時の倍率をそのまま適用しないようにします。同一素材の反復による減衰にも注意し、必要に応じて他部位に分散します。

倍率素材は、補いたい耐性と効果元の素材を決めてから使用します。例えば仮に通常強化で10ポイントを得る素材に、追加効果が元の2倍となる倍鉄を使えば、上限処理前の計算は10＋20＝30ポイントです。これは倍率の説明用の仮定で、特定素材の実測値ではありません。

物体Xの反転中には倍率素材が反転を解除する場合が攻略Wikiに記載されています。通常強化の計算をそのまま当てはめず、順序を確認してください。耐性上限や負補正の処理も単純な全身合算と異なる可能性があるため、完成後に確認してください。

## 不足量と素材選択 {#material-choice}
不足する耐性を先に特定し、反転中なら対応する反転素材、通常強化なら正の耐性素材を候補にします。倍率素材を使う案と、異なる部位へ素材を分散する案を比較します。分散すれば倍率素材を温存できる場合がありますが、装備交換によって耐性が変化し得ます。

## 強化枠の配分 {#slot-budget}
5部位各9枠なら45枠。各部位に4色コアを強化で配置すると20枠を使い、25枠が残ります。その25枠を不足耐性、効果元素材、倍率素材、基礎性能などに配分します。盾などの反映条件は別途確認します。残り枠は耐性だけで埋める必要はありません。例えば、交換頻度の低い頭装備に虫眼鏡を付与するため1枠を確保する設計も有効です。

<figure class="rf-lesson inheritance-figure p49-figure" id="p49-d02" markdown="0">
<figcaption>5部位の強化枠を配分する</figcaption>
<ul class="p49-allocation"><li><strong>頭</strong><span class="p49-sr">コア4枠、残り5枠</span><span class="p49-cells " aria-hidden="true"><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span></span></li><li><strong>鎧</strong><span class="p49-sr">コア4枠、残り5枠</span><span class="p49-cells " aria-hidden="true"><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span></span></li><li><strong>盾</strong><span class="p49-sr">コア4枠、残り5枠</span><span class="p49-cells " aria-hidden="true"><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span></span></li><li><strong>靴</strong><span class="p49-sr">コア4枠、残り5枠</span><span class="p49-cells " aria-hidden="true"><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span></span></li><li><strong>アクセサリー</strong><span class="p49-sr">コア4枠、残り5枠</span><span class="p49-cells " aria-hidden="true"><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-used">核</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span><span class="p49-free">残</span></span></li></ul><p class="p49-legend">核＝4色コア各1枠、残＝残り枠</p><p class="p49-total">45枠 − コア20枠 ＝ 残り25枠</p>
<p class="inheritance-note">5部位各9枠を使い、各部位に4色コアを配置した例。耐性への反映条件は別に確認します。</p>
</figure>

<div class="p49-table" role="region" tabindex="0" aria-label="部位の比較表" markdown="1">

|部位|筆者のRF5設計例|
|---|---|
|頭|気絶・属性・吸収攻撃対策、虫眼鏡|
|鎧|封印・スタン・CRIT抵抗、属性対策|
|盾|吹き飛び・愛属性の補完|
|靴|特殊能力と不足耐性|
|アクセサリー|用途別特殊能力、無属性対策|

</div>

これは役割配分例であり、重要6耐性100%と全属性吸収を同時に保証するものではありません。装備交換後にも必要性能を確認してください。

例えば各部位で異なる2種類の素材に倍鉄と10倍鉄を使う設計は、効果元を含め全身20枠を使います。4色コア20枠との合計は40枠で、残り5枠です。これは一例で、アレンジを利用する場合や倍率素材を温存する場合は変わります。

賢者の証・必殺の極意には属性抵抗の例外があるとの攻略資料の記載がありますが、4色コアや継承先への適用範囲は未確認です。本記事では既存の推奨構成を変更せず、50%の例は全5部位で効果が有効な場合に限定します。

## 参考資料 {#resistance-references}
- [RF5 属性吸収ブローチ：筆者確認と計算例](rf5-absorption-brooch.html)
- [RF5 hyperWiki アイテム一覧（追加調査用の参考リンク。素材表の数値根拠には使用していません）](https://hyperwiki.jp/rf5/item/)
- [RF4攻略Wiki 原材料](https://wikiwiki.jp/rune4/原材料)
- [RF4攻略Wiki 強化](https://wikiwiki.jp/rune4/強化)
- [RF5攻略Wiki 強化](https://wikiwiki.jp/rf5/強化)
- [AppMedia RF5防具](https://appmedia.jp/rf5/6501028)

RF4SP固有の数値、耐性上限処理、完成装備の実効値は独立検証していません。

## 関連記事 {#related-design-guides}
- [最強装備は一つではない](practical-design.html)
- [タリスマン反転と選択耐性](talisman-selective-resistance.html)
- [武器カテゴリ別の盾の性能](weapon-category-shield.html)
- [RF4SP 属性吸収ブローチ](rf4sp-absorption-brooch.html)
- [RF5 属性吸収ブローチ](rf5-absorption-brooch.html)
