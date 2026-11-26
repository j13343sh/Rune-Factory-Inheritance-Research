---
layout: rf-guide
slug: rf4sp-selection-bias
title: RF4SP 素材ごとに並ぶ位置と候補脱落
description: 3候補200試行で素材が並ぶ位置を、候補超過時の脱落とは分けて読みます。
kind: 実測
lang: ja
lead: 3候補200試行で素材が並ぶ位置を、候補超過時の脱落とは分けて読みます。
---

## 3候補の位置：6素材20組×10回

6素材から3素材を選ぶ20組で、それぞれ10回を記録。200試行×3枠＝600登場、各素材は100回登場します。先頭20の生データ区画から集計しました。

<p>棒の左から：1枠目（濃紺）／2枠目（青）／3枠目（薄青）。数値表を併記。</p>
<div class="position-chart"><div class="position-row"><strong>カブの種</strong><div class="stack" aria-label="1枠目80、2枠目19、3枠目1、各100登場"><span class="pos1" style="width:80%">80</span><span class="pos2" style="width:19%">19</span><span class="pos3" style="width:1%"></span></div></div><div class="position-row"><strong>無力のリンゴ</strong><div class="stack" aria-label="1枠目18、2枠目48、3枠目34、各100登場"><span class="pos1" style="width:18%">18</span><span class="pos2" style="width:48%">48</span><span class="pos3" style="width:34%">34</span></div></div><div class="position-row"><strong>サクラカブ</strong><div class="stack" aria-label="1枠目1、2枠目5、3枠目94、各100登場"><span class="pos1" style="width:1%"></span><span class="pos2" style="width:5%"></span><span class="pos3" style="width:94%">94</span></div></div><div class="position-row"><strong>物体X</strong><div class="stack" aria-label="1枠目23、2枠目58、3枠目19、各100登場"><span class="pos1" style="width:23%">23</span><span class="pos2" style="width:58%">58</span><span class="pos3" style="width:19%">19</span></div></div><div class="position-row"><strong>メッシライト鉱石</strong><div class="stack" aria-label="1枠目70、2枠目29、3枠目1、各100登場"><span class="pos1" style="width:70%">70</span><span class="pos2" style="width:29%">29</span><span class="pos3" style="width:1%"></span></div></div><div class="position-row"><strong>カブ</strong><div class="stack" aria-label="1枠目8、2枠目41、3枠目51、各100登場"><span class="pos1" style="width:8%">8</span><span class="pos2" style="width:41%">41</span><span class="pos3" style="width:51%">51</span></div></div></div>

|素材|1枠目|2枠目|3枠目|登場数|
|---|---:|---:|---:|---:|
|カブの種|80|19|1|100|
|無力のリンゴ|18|48|34|100|
|サクラカブ|1|5|94|100|
|物体X|23|58|19|100|
|メッシライト鉱石|70|29|1|100|
|カブ|8|41|51|100|


サクラカブは3枠目94/100、カブの種は1枠目80/100。第三候補が異なる組を合算した記述統計です。600登場を独立した600試行として検定しません。各組10回の6順列を一律にχ²近似すると期待数が小さくなるため、単純な有意判定は掲載しません。

## 4候補以上の脱落：別の問い

別Scoutではカブの種は0/10落選、最終表示は先頭8・中段1・末尾1でした。重複カブが内部で独立した3候補か未確認なので、「4候補なら25%脱落」との比較だけで素材固有weightを認定しません。

## 前向き追試を合算しない

Set16追試はカブの種がID-936鉱石に先行する回数を30回固定で調べた記録です。今回の再集計は15/30。固定仮説753/(753+936)に対する片側正確二項検定はp≈0.338。発見時10/10を主検定へ合算しません。鉱石の実名称と外部解析IDの照合は留保されており、単純IDモデルの証明には使いません。

{% include rf/evidence.html type="仮説" text="順列上の優先性と候補の残りやすさが共通因子を持つ可能性は残ります。両者が同じ機構、またはItem-IDだけで決まるという結論ではありません。" %}


## 出典と確認範囲

[順列問題](https://drive.google.com/open?id=1KucWcKHIqo4aOHEJfiwrLzMMErmAaLhZ3DrtA1rTyW4)、[カブの種落選率](https://drive.google.com/open?id=1p_o9cy6ZBqfkXApL7XhmyFUhhVedUuBcRPYmxcAm3LQ)、[Set16前向き追試](https://drive.google.com/open?id=1kxeMXmXnmwOyTsZrJwG3zq8XvDtqO6uSJI4ickLsWF0)。追加実機試行なし。

## 追加の4候補から3候補を選ぶ検証

3候補が並ぶ位置を数える試験とは別に、4候補から3候補を残す追加検証でも素材による選択の偏りが報告されています。候補数だけから等確率の成功率を割り当てず、候補の種類と試験条件を合わせて扱います。

このページにある3候補200試行の位置集計へ、追加検証の脱落数を混ぜません。選択と並び順の内部処理順、具体的な重み係数、全素材で共通する抽選式は未確定です。追加検証の一次試行表をこのページで再集計したものではありません。
