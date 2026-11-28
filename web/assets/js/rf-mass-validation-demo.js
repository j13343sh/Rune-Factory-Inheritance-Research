(() => {
  const demo = document.querySelector('[data-mv-demo]');
  if (!demo) return;

  const slots = [...demo.querySelectorAll('.mv-inventory span')];
  const rows = [...demo.querySelectorAll('.mv-sheet tbody tr')];
  const choices = [['', '—'], ['6', '6%'], ['9', '9%']];

  const entries = rows.map((row, index) => {
    const select = document.createElement('select');
    select.setAttribute('aria-label', `試行${row.cells[0].textContent}の吸収率`);
    for (const [value, label] of choices) {
      const option = new Option(label, value);
      if (!value) option.setAttribute('aria-label', '未入力');
      select.add(option);
    }
    row.cells[1].replaceChildren(select);
    return { select, result: row.cells[2], slot: slots[index] };
  });

  const trialsOutput = demo.querySelector('[data-mv-trials]');
  const successOutput = demo.querySelector('[data-mv-success]');
  const rateOutput = demo.querySelector('[data-mv-rate]');
  const percent = new Intl.NumberFormat('ja-JP', { style: 'percent', maximumFractionDigits: 1 });

  function update() {
    let trials = 0;
    let successes = 0;
    for (const { select, result, slot } of entries) {
      const value = select.value;
      const state = value === '9' ? 'success' : value === '6' ? 'failure' : 'empty';
      const label = state === 'success' ? '成功' : state === 'failure' ? '失敗' : '未検証';
      result.textContent = label;
      result.dataset.mvState = state;
      slot.dataset.mvState = state;
      trials += Number(value !== '');
      successes += Number(value === '9');
    }
    trialsOutput.textContent = trials;
    successOutput.textContent = successes;
    rateOutput.textContent = trials ? percent.format(successes / trials) : '—';
  }

  demo.addEventListener('change', update);
  demo.querySelector('[data-mv-reset]').addEventListener('click', () => {
    for (const { select } of entries) select.value = '';
    update();
  });
  update();
  demo.querySelector('[data-mv-static]').hidden = true;
  demo.querySelector('[data-mv-controls]').hidden = false;
})();
