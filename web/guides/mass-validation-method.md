---
layout: rf-guide
slug: mass-validation-method
title: 4,000回検証を可能にした「知恵と工夫」
description: RF5の実機検証を、観測しやすい素材の選定、50本一括作成、画面と記録シートの同期、自動集計で進めた方法を解説します。
kind: 実測
lang: ja
lead: 4,000回を頑張ったのではない。4,000回できる作業に変えた。
---

RF5で4,000回を試したときは、記録込みで1試行約1秒、検証用の装備を用意する時間を含めて全体で約1.5〜2時間でした。いずれも概算で、素材を集めた時間は別に計っていません。ここでは[4,000回検証の結果](rf5-4000-trials.html)を得るまでに、どこで時間と手間を減らしたかを紹介します。

## 何を調べるのか {#goal}

狙いは、**異なるカテゴリ間のメッシライト性能継承と、目的素材でアレンジ3枠を揃えることの両立**です。性能継承そのものの成功率を集計した試験ではありません。

<figure class="rf-lesson inheritance-figure" markdown="0">
<figcaption>目的 → 前提検証 → 観測指標</figcaption>
<ol><li>クレイモア（両手剣）の性能を、ブロードソード（片手剣）の外見に移す条件に固定する。</li><li>グリッタ輝石で、メッシライトを使っても目的素材が共存し得るかを事前に見る。</li><li>何本も続けて観測できる表示値を探し、愛の結晶の吸収率を用いる。</li></ol>
</figure>

異カテゴリを選ぶとメッシライトが必要な条件を作れます。武器名はこの条件を揃えるための選択です。グリッタ輝石を使った事前確認では、目的素材が共存する例を確認できました。1例なので、どのくらいの頻度で起こるかは分かりません。

<details markdown="1">
<summary>事前観測の内訳と留保</summary>

- グリッタ輝石3個を直接入れる方法と、装備を継承元として入れる方法を比べたとき、物理攻撃に＋52と＋22の表示が出た例がありました。ここでは値を個別の投入条件には結び付けません。最終アレンジを鑑定していない比較もあり、表示差の内訳や、条件を変えた場合の挙動は分かりません。
- 愛の結晶3個と、2個＋メッシライトを比べると、吸収率はそれぞれ9%と6%でした。実際に攻撃したときも、平均ダメージ約1,000に対し、回復量は約90と約60になりました。少数回の事前確認で、表示だけでなく回復量にも差が出ることを確かめました。

</details>

## 何を見れば答えになるのか {#indicator}

指標には、初回入手と大量調達のしやすさ、価格、画面に数値が出ること、判定差が明瞭なこと、他の補正と分けられることが必要です。今回の条件では愛の結晶1個につき吸収率3%として、9%と6%で判定できました。毎回NPCに鑑定を依頼する操作を省けます。

<figure class="rf-lesson inheritance-figure" markdown="0">
<figcaption>今回の表示値と成否</figcaption>
<div class="p49-cards">
<div class="inheritance-panel"><h3>9%｜成功</h3><p>目的の愛の結晶が3枠。</p></div>
<div class="inheritance-panel"><h3>6%｜失敗</h3><p>愛の結晶が2枠。目的の3枠を満たしていない。</p></div>
</div><p class="inheritance-note">この判定は本検証の構成に限ります。別の素材・補正を使う場合は指標を確認し直します。</p>
</figure>

## 大量検証の事前準備 {#setup}

<div class="p49-table" role="region" tabindex="0" aria-label="目的の比較表" markdown="1">

| 目的 | 行った準備 |
| --- | --- |
| RF5で最初の1個を入手 | プレイヤーの誕生日にハインツからもらいました。好感度など、プレゼントを受け取る細かな条件までは調べていません。交易品やピクシーのレアドロップも候補です。 |
| RF5で大量調達 | 最初の1個を出荷し、クリスタルショップを1段階強化。店頭に並んだときにまとめ買いしました。購入数は記憶では約500〜600個で、買値は1個2,080Gです。 |
| 継承元を揃える | 愛の結晶3個をアレンジしたクレイモアを50本用意し、余分な同名品を事前に除いて取り違えを防ぎます。大切な装備は区別して保管してから整理します。 |
| 製作後の一覧を揃える | 検証装備・素材を収納に移し、リュックを空にします。製作時に収納の素材を直接参照できるため、完成品を先頭から並べられます。 |
| 準備を再利用する | 製作前の準備完了状態をセーブし、反復時に同じ装備・素材の状態を復元します。 |

</div>

RF4SPでは初回入手が難しく、出荷後にトゥーナの店に並べばまとめて購入できます。記憶では1個2,000G少々で、店に並んだときにまとめて調達できました。店頭候補の整理には[店舗の陳列候補数計算機](shop-inventory-calculator.html)も利用できます。

## 実際の反復工程 {#batch}

<figure class="rf-lesson inheritance-figure mv-diagram" markdown="0">
<figcaption>50本をまとめて作り、ロードで準備状態に戻る</figcaption>
<link rel="stylesheet" href="{{ '/assets/css/rf-mass-validation-diagrams.css' | relative_url }}">
<p>事前準備は一度。素材と継承元のクレイモア50本を揃えてセーブします。</p>
<div class="mv-loop">
  <div class="mv-node"><strong>準備済みセーブ</strong>同じ装備・素材を使う</div>
  <span class="mv-arrow mv-turn" aria-hidden="true">→</span>
  <div class="mv-node"><strong>50本を一括作成</strong>ブロードソード
    <div class="mv-stack" aria-hidden="true"><span>剣</span><span>剣</span><span>剣</span><span>…</span>×50</div>
  </div>
  <span class="mv-arrow mv-down" aria-hidden="true">↓</span>
  <div class="mv-node mv-observe"><strong>順に観測・記録</strong>左から右へ、次の行へ</div>
  <span class="mv-arrow mv-left" aria-hidden="true">←</span>
  <div class="mv-node mv-load"><strong>記録後にロード</strong>準備済みセーブに戻り、次の50本へ</div>
  <span class="mv-arrow mv-back" aria-hidden="true"><span class="mv-up">↑</span><span class="mv-repeat">↻</span></span>
</div>
<p class="mv-total">1条件20セット × 4条件 ＝ 80セット<br>50試行 × 80セット ＝ 4,000試行</p>
</figure>

RF4SP・RF5ともに同じ装備を複数まとめて作成できます。RF5では50本一括にして、1本ごとの製作操作を省きました。ロードは準備状態を戻す操作です。試行同士の乱数の独立性は確認していません。

<div class="p49-table" role="region" tabindex="0" aria-label="条件の比較表" markdown="1">

| 条件 | 継承元の愛の結晶 | 追加する愛の結晶 | 観測結果 |
| --- | ---: | ---: | ---: |
| 3積み | 3個 | 0個 | 250 / 1,000（25.0%） |
| 4積み | 3個 | 1個 | 387 / 1,000（38.7%） |
| 5積み | 3個 | 2個 | 519 / 1,000（51.9%） |
| 6積み | 3個 | 3個 | 571 / 1,000（57.1%） |

</div>

どの条件もメッシライトを投入します。表の積み数は実験条件名です。成功率は[統合CSVの観測値と再集計](rf5-4000-trials.html)に基づき、理論値は示していません。作業時間の目安は50回で1分弱、100回で約2分です。クレイモアの準備は5分もかからなかったと記憶しています。工程ごとに計測した値ではありません。

{% include rf/method-video.html clip="rf5-mass-validation" label="RF5の一括製作と表示確認（約1分48秒）" caption="ブロードソード10本とスピア10本を作った実演です。本検証はブロードソード50本単位で行いました" %}

約1分44秒には、2種類の完成品とスピアの吸収率表示が見えます。この映像は、まとめて作って並び順に表示を読む工程の例です。

## 画面と記録を同期させる {#record}

<figure class="rf-lesson inheritance-figure mv-diagram" markdown="0" data-mv-demo>
<figcaption>ゲーム画面の1行 ＝ 記録シートの5試行</figcaption>
<p>左から右へ進み、次の行へ。番号と5件ごとの実線で、観測位置と入力位置を照合できます。</p>
<div class="mv-sync-head"><strong>ゲーム画面</strong><strong>記録シート</strong></div>
<section class="mv-pair" aria-label="ゲームの1行目とシートの1〜5番">
  <div><strong class="mv-game-label">1行目</strong><div class="mv-inventory"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div></div>
  <span class="mv-arrow" aria-hidden="true">↔</span>
  <table class="mv-sheet" aria-label="第1区画の記録欄">
    <thead><tr><th scope="col">番号</th><th scope="col">吸収率</th><th scope="col">成否</th></tr></thead>
    <tbody><tr><th scope="row">1</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">2</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">3</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">4</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">5</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr></tbody>
  </table>
</section>
<section class="mv-pair" aria-label="ゲームの2行目とシートの6〜10番">
  <div><strong class="mv-game-label">2行目</strong><div class="mv-inventory"><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span></div></div>
  <span class="mv-arrow" aria-hidden="true">↔</span>
  <table class="mv-sheet" aria-label="第2区画の記録欄">
    <thead><tr><th scope="col">番号</th><th scope="col">吸収率</th><th scope="col">成否</th></tr></thead>
    <tbody><tr><th scope="row">6</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">7</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">8</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">9</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">10</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr></tbody>
  </table>
</section>
<section class="mv-pair" aria-label="ゲームの3行目とシートの11〜15番">
  <div><strong class="mv-game-label">3行目</strong><div class="mv-inventory"><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span></div></div>
  <span class="mv-arrow" aria-hidden="true">↔</span>
  <table class="mv-sheet" aria-label="第3区画の記録欄">
    <thead><tr><th scope="col">番号</th><th scope="col">吸収率</th><th scope="col">成否</th></tr></thead>
    <tbody><tr><th scope="row">11</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">12</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">13</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">14</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr><tr><th scope="row">15</th><td><span class="mv-input-choice" aria-label="空欄">—</span></td><td>未検証</td></tr></tbody>
  </table>
</section>
<p class="inheritance-note">15件の模式例。実線は5件の境目、点線は区画内の試行の境目です。操作した値は説明用で、実測データには反映されません。</p>

<p data-mv-static>静的表示です。今回の条件では、空欄は未検証、6%は失敗、9%は成功です。</p>
<div data-mv-controls hidden>
  <p>吸収率を選ぶと成否と集計が更新されます。判定は今回の検証条件に限ります。</p>
  <p class="mv-summary" role="status" aria-atomic="true">
    <span>試行数 <strong data-mv-trials>0</strong></span>
    <span>成功数 <strong data-mv-success>0</strong></span>
    <span>成功率 <strong data-mv-rate>—</strong></span>
  </p>
  <button type="button" data-mv-reset>リセット</button>
</div>
<script src="{{ '/assets/js/rf-mass-validation-demo.js' | relative_url }}" defer></script>
</figure>

RF5のリュックは75枠・5列なので、50本が10行になります。記録シートでも5件ごとに位置を揃え、実線と点線の罫線で区切りました。視線を戻したときに照合しやすくなります。これで誤入力がなくなったとまでは確認していません。

<figure class="rf-lesson inheritance-figure mv-diagram" markdown="0">
<figcaption>人が実機を観測し、判定・集計・統合を機械に任せる</figcaption>
<div class="mv-lanes">
  <section class="mv-stage"><h3>人が担当</h3>
    <strong>実機の吸収率を見る</strong><span class="mv-arrow" aria-hidden="true">↓</span>
    <strong>6 または 9 を選択</strong>
  </section>
  <div class="mv-handoff"><strong>処理の境界</strong><span class="mv-arrow mv-turn" aria-hidden="true">→</span>人が選んだ観測値をシートへ渡す</div>
  <section class="mv-stage"><h3>機械が担当</h3>
    <strong>受け取った値から成否を判定</strong>
    <div class="mv-rule"><span>6 → 失敗</span><span>9 → 成功</span><span>空欄 → 未検証</span></div>
    <span class="mv-arrow" aria-hidden="true">↓</span><strong>試行数・成功数・成功率を集計</strong>
    <span class="mv-arrow" aria-hidden="true">↓</span><strong>複数ブックのデータを統合</strong>
  </section>
</div>
<p class="inheritance-note">6／9で判定できるのは今回の検証条件です。空欄は失敗数・試行数に含めません。</p>
</figure>

### 分けて記録し、参照でつなぐ

100件ずつ記録し、各条件で10か所を参照して1,000件、4条件で4,000件を一つの集計にまとめました。参照先を一覧で管理すると、条件ごとに記録を手で転記する手間を省けます。

<figure class="rf-lesson inheritance-figure mv-diagram" markdown="0">
<figcaption>同じ条件の記録を10か所から集めて縦に結合する</figcaption>
<div class="mv-integration">
  <div class="mv-manage">
    <div><strong>参照先管理｜URL一覧</strong>
      <table class="mv-map" aria-label="管理表の模式例"><thead><tr><th scope="col">管理番号</th><th scope="col">参照URL</th></tr></thead><tbody><tr><td>01</td><td>参照先01</td></tr><tr><td>02</td><td>参照先02</td></tr><tr><td>… 10</td><td>… 参照先10</td></tr></tbody></table>
    </div>
    <div><p><code>XLOOKUP</code>：番号からURLを取得</p><p><code>CELL</code>：現在のシート名を取得し、参照先の同名シートを指定</p></div>
  </div>
  <span class="mv-arrow" aria-hidden="true">↓</span>
  <div class="mv-node"><strong>データ取得｜<code>IMPORTRANGE</code></strong>
    <p>同名シートから各100件×3列を取得</p>
    <div class="mv-blocks" aria-label="10参照先の模式例"><span>ブック01</span><span>ブック02</span><span>…</span><span>ブック10</span></div>
    <svg class="mv-funnel" viewBox="0 0 400 48" preserveAspectRatio="none" focusable="false" aria-hidden="true">
      <path d="M50 0V12H200 M150 0V12H200 M250 0V12H200 M350 0V12H200 M200 12V42 M194 36L200 42L206 36" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
    </svg>
    <strong>統合｜<code>VSTACK</code>で縦結合</strong><p class="mv-total">100件 × 10参照 ＝ 1,000行 × 3列／条件</p>
  </div>
  <span class="mv-arrow" aria-hidden="true">↓</span>
  <div class="mv-conditions"><span>3積み</span><span>4積み</span><span>5積み</span><span>6積み</span></div>
  <p class="mv-total">4条件 × 1,000件 ＝ 合計4,000件</p>
</div>
<p class="inheritance-note">模式図。参照URLは一覧で管理し、同名シートを動的に参照するため、条件ごとの手転記を省けます。</p>
</figure>

## 他の検証に応用する {#transfer}

<div class="p49-table" role="region" tabindex="0" aria-label="条件の比較表" markdown="1">

| 条件 | まとめる本数と記録 |
| --- | --- |
| RF5で実施 | リュック75枠・5列。50本＝10行を製作・観測。 |
| RF4SPで実施 | リュック60枠・3列。手持ちのメッシライト10個が制約で、10本ずつ。少数なので記録書式は変更しなかった。 |
| RF4SPの改善案 | 30本＝10行。100回なら30＋30＋30＋10。未実施で、収納上限まで埋めることが目標ではありません。 |

</div>

素材は数値の読みやすさと調達を合わせて選びます。竜の灰はドロップで狙えるものの価格が高く、鳥の羽は知力＋2でも素材ボーナスが重なると判定しづらくなります。グリッタ輝石も観測負担が大きくなります。いずれも今回の代替手順として検証したものではありません。

素材を選び、目的が成立し得るかを先に試す。次に環境を揃え、一括処理と画面の同期で観測を速め、判定・集計・統合を機械に任せます。例えば1試行を1秒短縮できれば、4,000回で4,000秒（66分40秒）の差になります。これは説明用の計算です。準備・反復・集計のどこに最も時間がかかるかを見て、総作業時間を減らします。
