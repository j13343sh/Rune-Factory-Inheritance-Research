---
layout: rf-guide
title: 日本語攻略・研究ガイド一覧
description: 装備継承・製法・検証・攻略の入口
kind: 案内
lang: ja
---
<p class="scope-note">作品と分野のどちらからも、同じ記事へ進めます。</p><div class="work-links">{% for work in site.data.rf_works %}{% if work.public %}<a href="{{ "/works/" | append: work.slug | append: ".html" | relative_url }}">{{ work.id }}から探す →</a>{% endif %}{% endfor %}</div>{% for section in site.data.rf_sections %}{% if section.kind == "category" and section.public %}<section><h2><a href="{{ "/fields/" | append: section.slug | append: ".html" | relative_url }}">{{ section.category_title }}</a></h2><div class="entry-list">{% for g in site.data.rf_guides %}{% if g.category == section.id and g.public %}{% include rf/article-card.html item=g description=true %}{% endif %}{% endfor %}</div></section>{% endif %}{% endfor %}