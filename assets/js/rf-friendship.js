(function(){'use strict';
function normalize(s){return String(s||'').normalize('NFKC').toLocaleLowerCase('ja').replace(/\s+/g,' ').trim();}
function matches(search,materials,query,material){const words=normalize(query).split(' ').filter(Boolean);return words.every(word=>normalize(search).includes(word))&&(!material||String(materials).split('|').includes(material));}
function connect(browser){
 const query=browser.querySelector('[data-gift-query]'),select=browser.querySelector('[data-gift-material]'),status=browser.querySelector('[data-gift-status]');
 const rows=[...browser.querySelectorAll('[data-resident-row]')],entries=[...browser.querySelectorAll('[data-gift-entry]')],materialRows=[...browser.querySelectorAll('[data-material-row]')];
 function apply(){let count=0;for(const row of rows){row.hidden=![...row.querySelectorAll('[data-resident-gift]')].some(g=>matches(g.dataset.search,g.dataset.materials,query.value,select.value));if(!row.hidden)count++;}for(const entry of entries)entry.hidden=!matches(entry.dataset.search,entry.dataset.materials,query.value,select.value);for(const row of materialRows)row.hidden=![...row.querySelectorAll('[data-gift-entry]')].some(e=>!e.hidden);status.textContent=`住民 ${count} / ${rows.length}人を表示。`+(count?'':'該当するギフトがありません。');}
 query.addEventListener('input',apply);select.addEventListener('change',apply);browser.querySelector('[data-gift-reset]').addEventListener('click',()=>{query.value='';select.value='';apply();query.focus();});apply();return {apply};
}
if(typeof module!=='undefined')module.exports={normalize,matches,connect};
if(typeof document!=='undefined')for(const browser of document.querySelectorAll('[data-gift-browser]'))connect(browser);
})();
