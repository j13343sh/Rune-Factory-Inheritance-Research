---
layout: rf-guide
slug: equipment-inheritance-guide
title: 装備継承・アレンジの基礎知識｜RF4SP・RF5
description: 製作と強化の違い、メッシライト、靴やアクセサリーの特殊能力、オートアレンジと鑑定をRF4SP・RF5向けに図解。
kind: 基礎知識
lang: ja
lead: 装備を作るときは、外見、性能元、残したいアレンジを別々に決めます。靴とアクセサリーは作品ごとに設計が変わります。
seo_description: ルーンファクトリー4SP・5の装備継承とアレンジを図解。製作の投入枠、メッシライト、特殊能力、オートアレンジ、鑑定の見方を解説。
---
<div class="rf-inheritance-guide" markdown="1">

## 製作時のアレンジと完成後の強化 {#crafting-slots}

製作画面には素材を入れる枠が6つあります。装備のレシピで必要な素材は両作品とも最大5個です。必須素材を置いた残りの枠に追加素材や継承元の装備を入れます。完成品が保持するアレンジは最大3枠で、完成後の強化はLv2〜10の最大9回です。

<figure id="d01" class="rf-lesson">
<figcaption>製作画面の枠と完成品に残る枠</figcaption>
<p>投入6枠（必須素材3個の例）</p>
<ol class="rf-slots"><li>必須</li><li>必須</li><li>必須</li><li>追加可</li><li>追加可</li><li>追加可</li></ol>
<p>完成品のアレンジ枠</p>
<ol class="rf-slots"><li>アレンジ</li><li>アレンジ</li><li>アレンジ</li></ol>
<p>完成後に使う強化枠</p>
<ul class="rf-slots"><li>Lv2</li><li>Lv3</li><li>Lv4</li><li>Lv5</li><li>Lv6</li><li>Lv7</li><li>Lv8</li><li>Lv9</li><li>Lv10</li></ul>
</figure>

## 性能継承とメッシライト {#performance}

武器・鎧・盾・帽子などで性能継承が成立すると、作った装備の外見で別の装備の基礎性能を使えます。RF4SPの靴・アクセサリーでは、欲しい固有能力を持つ装備を製作先にし、残りの能力をアレンジで組み合わせるのが実用上の基本です。RF5の靴・アクセサリーは性能元も選べます。

<figure id="d02" class="rf-lesson"><figcaption>外見と基礎性能を分ける</figcaption><ul class="rf-slots"><li>製作先 A<br>外見を選ぶ</li><li>継承元 B<br>性能を選ぶ</li><li>完成品<br>Aの外見＋Bの基礎性能</li></ul></figure>

通常は同じカテゴリの武器を性能元にします。メッシライト鉱石を使うと異なる武器カテゴリからも性能継承を狙えます。下の図は、いずれも継承が成立した場合です。鉱石を使って性能継承が成立することと、完成品のアレンジに鉱石が残ることは別です。

<figure id="d03" class="rf-lesson"><figcaption>片手剣を製作する場合</figcaption>
<details open><summary>同じカテゴリから継承</summary><p>片手剣Aの外見・操作で、片手剣Bの性能を使います。例の通常条件では、盾の数値性能の反映率は100%です。</p></details>
<details><summary>メッシライトで別カテゴリから継承</summary><p>片手剣Aの外見・操作で、ハンマーBの性能を使います。例の通常条件では、ハンマー由来のカテゴリに従い、盾の数値性能の反映率は50%です。</p></details></figure>

盾の条件は[メッシライト継承と盾の性能](weapon-category-shield.html)を参照してください。成功条件の実測は[RF4SPの検証](rf4sp-messhilite-trials.html)と[RF5の4,000回検証](rf5-4000-trials.html)で扱います。

## 靴・アクセサリーの特殊能力 {#special-effects}

移動や経験値獲得などの固有能力は、攻撃力・防御力などの数値性能とは別に考えます。靴やアクセサリーの固有能力をまとめたいときは製作時の継承を利用します。完成後の強化で靴やアクセサリーを素材にしても、その装備固有の能力は引き継げません。

<figure id="d04" class="rf-lesson"><figcaption>作品別に見る固有能力4種類の構成</figcaption>
<details open><summary>RF4SPの構成</summary><p>欲しい効果のうち一つを持つ装備を製作先にします。</p><ul class="rf-slots"><li>完成品自身 A</li><li>アレンジ B</li><li>アレンジ C</li><li>アレンジ D</li></ul></details>
<details><summary>RF5の構成</summary><p>性能継承が成立すると、製作先の固有能力は性能元由来に置き換わります。</p><ul class="rf-slots"><li>性能元 A</li><li>アレンジ B</li><li>アレンジ C</li><li>アレンジ D</li></ul></details></figure>

4種類は異なる装備を由来とする構成上の上限です。RF4SPの靴・アクセサリーの数値性能については過去の研究資料と一般的な攻略説明に記述差があり、この構成例では数値性能の継承可否を確定していません。4枠は完成時の構成を表します。組み合わせによっては、鑑定に装備名が表示されても狙った効果がすべて発現するとは限りません。

RF5では性能元がアレンジにも残ることがあります。性能元がAで、アレンジがA・B・Cなら、Dは残らず、異なる由来は3種類です。

<figure id="d05" class="rf-lesson"><figcaption>RF5で性能元が重複した場合</figcaption>
<details open><summary>異なる由来が4種類の例</summary><ul class="rf-slots"><li>性能元 A</li><li>枠1 B</li><li>枠2 C</li><li>枠3 D</li></ul></details>
<details><summary>性能元が重複して3種類の例</summary><ul class="rf-slots"><li>性能元 A</li><li>枠1 A（重複）</li><li>枠2 B</li><li>枠3 C</li></ul><p>Dが残っていません。</p></details></figure>

## アレンジ継承と候補の脱落 {#arrangement-inheritance}

すでにアレンジが入った装備を次の製作で使うと、その装備が持つ素材が候補に入ることがあります。素材を一度中継装備にまとめると、直接追加できる枠が少ない装備にも狙った素材を残せる場合があります。

<figure id="d06" class="rf-lesson"><figcaption>候補が保持枠を超える例</figcaption><ol class="rf-flow"><li>追加素材や素材装備の内部情報から候補が生まれる</li><li>A・B・C・Dの4候補から、最大3枠に収まる結果が選ばれる</li><li>例えばA・B・Dが残り、Cが落ちる</li></ol></figure>

<figure class="rf-lesson"><figcaption>RF4SPの多段階製作例</figcaption><ol class="rf-flow"><li>サクラカブを加えてステステスニーカーを作る</li><li>前の完成品を追加してゴーストブーツを作る</li><li>同じ要領でロケットウィング、次にフェアリーブーツへつなぐ</li></ol><p>この実演では最終鑑定で目的の靴3種が表示されました。工程と確認範囲は<a href="dummy-method.html#サクラカブを使う応用実演">サクラカブダミー製法の実演</a>を参照してください。</p></figure>

何が候補に入るかと、候補から何が残るかは別です。「ランダムに選ばれる」という説明だけでは、各候補の確率が等しいとは判断できません。候補数が3以下でも、想定外の素材の混入や最終順の違いは個別に確認します。

## オートアレンジと既存の内部アレンジ {#auto-arrange}

追加素材を指定しなくても、今回の必須素材の一部が完成品に残ることがあります。追加や継承アレンジがない通常製作の目安では、必須素材3個なら0枠、4個なら1枠、5個なら2枠です。継承や追加で枠が埋まる条件では、この目安だけで最終結果を判断できません。

<figure id="d07" class="rf-lesson"><figcaption>必須素材数と新規オートアレンジの目安</figcaption>
<details><summary>必須素材3個</summary><p>自動アレンジ 0枠</p><ol class="rf-slots"><li>空き</li><li>空き</li><li>空き</li></ol></details>
<details><summary>必須素材4個</summary><p>自動アレンジ 1枠</p><ol class="rf-slots"><li>自動</li><li>空き</li><li>空き</li></ol></details>
<details open><summary>必須素材5個</summary><p>自動アレンジ 2枠</p><ol class="rf-slots"><li>自動</li><li>自動</li><li>空き</li></ol></details></figure>

<figure id="d08" class="rf-lesson"><figcaption>完成品に想定外の素材が残る二つの経路</figcaption><dl><dt>新規オートアレンジ</dt><dd>今回のレシピの必須素材から新たに生じます。</dd><dt>既存内部アレンジ</dt><dd>素材に使った装備が以前から保持している情報が参照される場合があります。</dd></dl><p>どちらも完成品の構成に影響します。鑑定では、表示された素材がどこから来たかも確認します。</p></figure>

図は成立した状態や条件の説明例です。候補の選ばれ方やゲーム内処理を再現していません。

## 物体Xとアレンジ順序 {#object-x}

物体Xは以降に適用される素材の数値効果の正負を反転させるために使います。反転したい素材が残っていても、完成時の順序が違えば結果は変わります。RF4SPでは[2候補と3候補の排列を実機で比較](rf4sp-item-order.html)しています。RF5で[投入順を工夫した観測](shuffle-method.html)は、内部アレンジの参照結果に関するものです。作品間で最終排列が同じ規則に従うかは未確認です。

## 装備鑑定と、うまくいかない場合 {#appraisal}

装備の鑑定は、RF4SPではバレット、RF5ではドグまたはマーティンに頼めます。本研究で使用したのはRF4SPではバレット、RF5ではマーティンです。

1. まず、欲しい性能元とアレンジ素材が残ったかを確認します。
2. 予期しない素材があれば、今回の必須素材と素材装備の内部アレンジを見直します。
3. 物体Xを使う場合は完成品の順序と数値、靴・アクセサリーでは実際に発現した効果も確認します。

不要な内部参照を抑えるなら[クッション製法](cushion-method.html)、投入順を調整するなら[シャッフル製法](shuffle-method.html)、中継装備を使って候補を設計するなら[ダミー製法](dummy-method.html)へ進めます。目的の素材を複数入れる方法は[多積みの検証](rf5-4000-trials.html)、候補形成から考える場合は[装備継承の統合理論](inheritance-basics.html)を参照してください。

</div>
