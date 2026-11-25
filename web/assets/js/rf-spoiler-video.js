(function(){'use strict';
function connect(container,doc){
 const toggle=container.querySelector('[data-video-toggle]'),mount=container.querySelector('[data-video-mount]'),status=container.querySelector('[data-video-status]');let video=null;
 function close(){if(video){video.pause();video.removeAttribute('src');for(const source of video.querySelectorAll('source'))source.remove();video.load();video=null;}mount.replaceChildren();mount.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.textContent='警告を理解して動画を表示';status.textContent='動画を閉じ、再生を停止しました。';}
 function open(){const url=container.dataset.mediaSrc;if(!url)return;video=doc.createElement('video');video.controls=true;video.preload='none';video.playsInline=true;video.setAttribute('aria-label','重大なネタバレを含む実演動画');const source=doc.createElement('source');source.type='video/mp4';source.src=url;video.appendChild(source);mount.replaceChildren(video);mount.hidden=false;toggle.setAttribute('aria-expanded','true');toggle.textContent='動画を閉じて再生を停止';status.textContent='動画を表示しました。再生ボタンを押すまで自動再生しません。';}
 toggle.addEventListener('click',()=>{if(video)close();else open();});return {close};
}
if(typeof module!=='undefined')module.exports={connect};
if(typeof document==='undefined')return;
const controls=[...document.querySelectorAll('[data-spoiler-video]')].map(c=>connect(c,document));
window.addEventListener('pagehide',()=>controls.forEach(c=>c.close()));
})();
