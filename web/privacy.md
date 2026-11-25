---
layout: default
title: アクセス解析・プライバシー
description: このサイトのアクセス解析、同意の選択と撤回、送信される情報について。
permalink: /privacy.html
og_type: website
---
# アクセス解析・プライバシー

{% if site.ga4_measurement_id != empty and site.ga4_measurement_id %}
当サイトは記事の利用状況を把握するため、Google LLCが提供するGoogle Analytics 4を利用します。初期状態は解析を行わず、下部の「解析に同意」を選択した後にGoogleのスクリプトを読み込みます。拒否しても記事の利用に影響はありません。

同意後はCookie等を使用し、閲覧ページ、ページタイトル、端末・ブラウザ等の利用情報がGoogleへ送信されます。Googleへの接続に伴いIPアドレス等の通信情報も扱われます。匿名性や個人を特定できないことは保証しません。氏名・メールアドレスの入力やUser-IDの指定は行いません。広告向けシグナル・広告パーソナライズは無効にしています。

ページURLはクエリとフラグメントを除いて送信し、参照元は同じホスト内ではクエリを除いたパス、外部サイトではホストまでに制限します。GA4の拡張計測は運営側で無効にする運用です。

選択はこのブラウザのローカルストレージにこのプロジェクト専用のキーで保存します。拒否・撤回ボタンで今後の計測を止めて再読み込みします。送信済みデータは撤回で削除されません。既存Cookieの削除を希望する場合はブラウザのサイトデータ削除を行ってください。ストレージを利用できない場合、選択は次のページに引き継がれません。

ブラウザのDo Not TrackまたはGlobal Privacy Controlが有効な場合は、同意操作があっても解析を開始しません。
{% else %}
現在、Google Analyticsの測定IDは未設定のため、当サイトのアクセス解析機能からGoogleへの通信は行いません。将来有効化した場合も、利用者が同意するまで読み込みません。
{% endif %}

Google Search ConsoleはGoogle検索での表示回数・クリック等の集計を運営者が確認する用途に使用します。所有権確認のmetaタグ自体は、閲覧者のブラウザからGoogleへ通信するものではありません。

- [Googleのプライバシーポリシー](https://policies.google.com/privacy?hl=ja)
- [Googleによるパートナーサイトの情報利用](https://policies.google.com/technologies/partner-sites?hl=ja)

同意しないアクセスや広告ブロッカーによるアクセスはGA4集計に含まれないため、集計値は全閲覧者数ではありません。
