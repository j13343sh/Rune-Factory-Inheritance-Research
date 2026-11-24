/* Basic opt-in: do not load Google until consent is granted. */
(function () {
  'use strict';
  var own = document.currentScript;
  if (!own) return;
  var id = own.dataset.measurementId || '';
  if (!/^G-[A-Z0-9]+$/.test(id)) return;
  var key = own.dataset.storageKey;
  var blocked = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' || window.doNotTrack === '1';
  var choice = null, started = false;
  try { choice = localStorage.getItem(key); } catch (_) {}
  function status() {
    document.querySelectorAll('[data-analytics-status]').forEach(function (node) {
      node.textContent = blocked ? 'ブラウザのプライバシー設定により解析を停止しています。' : choice === 'granted' ? '解析に同意しています。' : '解析を停止しています。';
    });
  }
  function start() {
    if (started || blocked || choice !== 'granted') return;
    started = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    var canonical = new URL(own.dataset.canonical);
    canonical.search = ''; canonical.hash = '';
    var referrer = '';
    try {
      var ref = new URL(document.referrer);
      referrer = ref.origin === location.origin ? ref.origin + ref.pathname : ref.origin + '/';
    } catch (_) {}
    gtag('config', id, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: canonical.href, page_referrer: referrer, cookie_path: canonical.pathname.split('/').slice(0, 2).join('/') || '/', cookie_flags: 'SameSite=Lax;Secure' });
    gtag('event', 'page_view', { page_location: canonical.href, page_title: document.title, page_referrer: referrer });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(script);
  }
  document.querySelectorAll('[data-analytics-choice]').forEach(function (button) {
    button.addEventListener('click', function () {
      choice = button.dataset.analyticsChoice;
      try { localStorage.setItem(key, choice); } catch (_) {}
      if (choice === 'denied') { window['ga-disable-' + id] = true; status(); if (started) location.reload(); }
      else { start(); status(); }
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === key && event.newValue !== 'granted') { window['ga-disable-' + id] = true; location.reload(); }
  });
  start(); status();
}());
