---
layout: rf-guide
slug: cushion-method
title: クッション製法｜RF4SP・RF5
description: RF4SP・RF5で使える製法を、内部アレンジが空のレザーブーツを使ったRF5実演で解説。投入位置、鑑定で分かること、未確認事項を整理します。
kind: 製法
lang: ja
lead: 狙った靴の組合せを継承するために、装備の配置と内部状態を工夫する。
seo_title: クッション製法｜RF4SP・RF5の装備継承とRF5の靴実演
seo_description: RF4SP・RF5で使える製法。内部アレンジが空の装備を配置し、不要な内部参照を抑えます。RF5のスニーキングブーツを使った実演例と適用条件を紹介します。
---

[装備継承・アレンジの基礎知識](equipment-inheritance-guide.html)で、枠の違いと作品ごとの特殊能力を確認できます。

[オートアレンジと内部アレンジの基礎](inheritance-basics.html#装備製作を読む順序)を先に読むと、必須素材由来の候補と投入装備の情報を分けて、この製法でどの候補・参照条件を変えるのか確認できます。


<div class="panel">
  <p>
    <strong>
      RF4SP・RF5で使えます。内部アレンジが空の同カテゴリ装備を配置し、不要な内部参照を抑えることを狙う製法です。
    </strong>
  </p>
  <p>
    公開例はスニーキングブーツへの継承実演です。通常レシピに追加3枠を確保し、クッションとなるレザーブーツの内部が空であることを確認してから試します。入手経路だけで内部状態を判断しません。
  </p>
  <p>
    <a href="#rf5の実演スニーキングブーツ">実演の投入位置と完成後の確認へ</a>。同条件の反復成功率と特殊効果の完全な発現は未確認です。
  </p>
</div>

## 「空の靴」をクッションにする

同カテゴリの装備を複数使った観測では、投入順と後の内部アレンジ参照結果に対応が見られています。クッション製法は、内部アレンジが空の装備を利用する設計です。「先頭」は同カテゴリ装備の配置に関する説明であり、製作欄の1枠目や内部走査順序の確定を意味しません。

<div class="cards">
  <div class="card">
    <h3>利用する性質</h3>
    <p>
      内部アレンジが空の
      <br>
      <strong>レザーブーツ</strong>
    </p>
  </div>
  <div class="card">
    <h3>狙い</h3>
    <p>
      後続装備が持つ不要な
      <br>
      <strong>内部アレンジの影響を抑える</strong>
    </p>
  </div>
</div>

この説明は観測に基づく設計思想です。内部候補集合や処理経路の完全な再現図ではありません。

## 候補集合を変える原理

通常例では、ロケットウィング（内部A・B）を先に、ゴーストブーツ（内部C・D）を後に置くと、ロケット本体・A・B・ゴースト本体という4候補を考えます。後続装備の内部C・Dは参照されなくても、本体は候補になります。

クッションでは、内部が空のレザーブーツを最初の同カテゴリ装備にします。参照先が空なので後続2足の不要な内部アレンジを参照せず、3足の本体だけを候補とする構成を狙えます。

{% include rf/cushion-candidates.html %}

**抽選確率を直接変えるのではなく、抽選前の候補集合を変える製法です。** 他の候補が発生しない条件なら、3候補・3枠の候補選択競合を解消できます。新たなオートアレンジの混入、内部が空でないクッション、追加枠不足などがあれば、この数え方の条件を満たしません。

この説明モデルの後ろ2足はロケット→ゴーストの順ですが、以下の既存RF5実演記録はゴースト→ロケットです。どちらも空のレザーを最初の同カテゴリ装備とする設計です。順序交換が全条件で同じ結果になるとは保証しません。

[保持・本体候補化・第一同カテゴリ参照のつながり](inheritance-basics.html#第一同カテゴリ内部アレンジ参照)を確認し、追加3枠を確保できるベース装備を選んでください。

## RF5比較：同じ名前のマフラー {#cushion-muffler-comparison}

<div class="method-comparison-images" markdown="0">
  <figure>
    <a href="{{ '/assets/method-demos/rf5_mokomoko_noncrafted_white.png' | relative_url }}"><img src="{{ '/assets/method-demos/rf5_mokomoko_noncrafted_white.png' | relative_url }}" width="680" height="398" loading="lazy" alt="RF5の装飾画面で、白文字のもこもこのマフラーと体力＋40の表示"></a>
    <figcaption>白文字は非自作の個体。筆者によるとテリーのガチャ入手品です。画像を開くと原寸で読めます。</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/method-demos/rf5_mokomoko_selfcrafted_blue.png' | relative_url }}"><img src="{{ '/assets/method-demos/rf5_mokomoko_selfcrafted_blue.png' | relative_url }}" width="2000" height="1172" loading="lazy" alt="RF5の装飾画面で、青文字のもこもこのマフラーと自作アクセサリーの表示"></a>
    <figcaption>青文字は筆者の自作品。ゲーム画面に「★自作 アクセサリ」とあります。画像を開くと拡大できます。</figcaption>
  </figure>
</div>

同じ名前の装備でも、最初に参照される個体に内部アレンジがなければ、その個体から追加の内部候補は出ません。内部アレンジがあれば、その中身が候補に加わり、同じ投入枠でも競合が変わります。[第一同カテゴリ内部アレンジ参照](inheritance-basics.html#第一同カテゴリ内部アレンジ参照)を使うクッション製法では、この違いが効きます。

この白文字の個体の入手経路は筆者の説明によります。テリーのガチャ入手品を市販品一般として扱うことはできません。文字色と装飾画面だけで、各個体の内部アレンジの全内容までは確認できません。クッションに使う場合は、入手経路や文字色に加えて鑑定も確認してください。

## RF4SPの靴実演：最終抽選あり {#cushion-rf4sp-video}

{% include rf/method-video.html clip="RF4SP_cushion_shoes_full_random_final" label="RF4SP クッション製法の靴実演（2分17秒）" caption="中間装備の製作とバレットの鑑定に続き、最終工程の結果を確認できます。" %}

この実演の**最終工程には抽選が残ります**。クッションを使っても、最終結果が100%確定する工程ではありません。

## RF5の実演：スニーキングブーツ

| 製作欄 | 実演で置いたもの |
|---|---|
| 1〜3枠目 | スニーキングブーツの通常レシピ素材 |
| 4枠目 | 内部アレンジが空であることを条件とするレザーブーツ |
| 5枠目 | ゴーストブーツ |
| 6枠目 | ロケットウィング |

通常レシピを満たしたうえで追加します。後ろ2足の交換を許容する補足はありますが、このページは実演記録の順序に統一しています。

{% include rf/method-video.html clip="RF5_cushion_shoes_demo" label="RF5 スニーキングブーツの製作と鑑定（37秒）" caption="上の表に対応する製作の流れと、後半のマーティンの鑑定を確認できます。" %}

### 完成後は何を確認する？

実演記録では、マーティンの「装備を見て下さい」から靴を選び、レザーブーツ・ゴーストブーツ・ロケットウィングの3種の鑑定表示を確認しています。見た目はスニーキングブーツ、性能はレザーブーツと説明されています。

<div class="callout">
  <p>
    <strong>この1実演から、成功率は求めません。</strong>
    <br>
    空レザーの準備・事前鑑定、中間装備の内部状態、反復再現率、特殊効果の完全な発現は未確認です。入手経路だけで「内部が空」と判断しないでください。
  </p>
</div>

追加3枠を使う例です。追加2枠しかないストライダーブーツに、そのまま3足を追加する手順ではありません。この投入順と追加枠はRF5の実演レシピの条件です。RF4SPや別レシピでの具体的な手順、成功率、内部処理の同一性はこの実演から確認できません。

## 発展：候補を同種に置き換えるモデル {#cushion-duplicate-model}

余分な候補Xを、欲しい素材Sと同種の候補に置き換えた場合を考えます。S・G・Rが一つずつ残れば成功です。

<figure class="cushion-model" markdown="0">
  <figcaption>4候補から3候補を保持する数学モデル</figcaption>
  <div>
    <strong>通常構成</strong>
    <div class="tokens"><span class="token">S</span><span class="token">G</span><span class="token">R</span><span class="token">X</span></div>
    <span>Xが落ちると成功。4通りのうち1通り（25%）。</span>
  </div>
  <div>
    <strong>同種クッション構成</strong>
    <div class="tokens"><span class="token">S₁</span><span class="token">S₂</span><span class="token">G</span><span class="token">R</span></div>
    <span>S₁とS₂のどちらが落ちても成功。4通りのうち2通り（50%）。</span>
  </div>
</figure>

**25%と50%は条件を置いた計算値です。** 実機の成功率が改善したことを示す実測結果はありません。

<details markdown="1">
<summary>計算の前提と適用範囲</summary>

RES-008の限定モデルでは、候補4個を個別に区別し、重複素材Sも独立の候補として2個保持されると仮定します。4候補から重複なしで3候補を保持する各組合せは等確率で、アレンジの並び順は成功条件に含めません。脱落候補がXだけなら1/4、Sのどちらでもよければ2/4です。

この候補構成を実機で作る具体的条件は未確認です。RF4SPの抽選方式にこの計算を直接適用しません。[候補数モデルと適用範囲](candidate-count-calculator.html)も参照してください。

</details>

## 記録と出典

- [RF5の実演投稿](https://x.com/object_x_rf/status/2103294562215367076)
- [公開実践ガイド](https://drive.google.com/file/d/1qbUBjKUr26vntzbjVCW1UTa8wg74doWp/view)（本ページは上記実演の投入順を記載）
- [内部アレンジ参照の研究記事](https://github.com/j13343sh/Rune-Factory-Inheritance-Research/blob/main/articles/Recursive-Processing.md)

紹介したRF5実演について、同条件での反復再現率や特殊効果の完全な発現を独立に確認した記録は揃っていません。別作品の動画をこのRF5実演の証拠として用いてはいません。
