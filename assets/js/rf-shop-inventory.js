(() => {
  'use strict';

  const root = document.querySelector('[data-shop-inventory]');
  if (!root) return;
  const {inventory, ranks, rankLimits} = JSON.parse(root.querySelector('[data-shop-data]').textContent);
  const input = name => root.querySelector(`[data-input="${name}"]`);
  const output = name => root.querySelector(`[data-output="${name}"]`);
  const states = new Map();
  const shopNames = {vegetable: '雑貨屋', flower: '花屋', clinic: '病院・診療所'};
  const integer = new Intl.NumberFormat('ja-JP');
  const decimal = new Intl.NumberFormat('ja-JP', {maximumFractionDigits: 2});

  function node(tag, text) {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function setOptions(select, options, selected) {
    select.replaceChildren(...options.map(([value, label]) => new Option(label, value)));
    select.value = selected;
  }

  function storeState() {
    const key = `${input('work').value}/${input('shop').value}`;
    if (!states.has(key)) {
      states.set(key, {stage: 0, ordered: false, target: '', shipped: new Set()});
    }
    return states.get(key);
  }

  function context() {
    const work = input('work').value;
    const shop = input('shop').value;
    const config = inventory.shops[work][shop];
    const state = storeState();
    const rank = ranks[state.stage];
    const canOrder = Boolean(config.order) && state.stage >= 2;
    const acceptsShipments = !config.order || (canOrder && state.ordered);
    const limit = config.rank ? rankLimits[shop][rank.id] : config.limits[state.stage];
    return {work, shop, config, state, canOrder, acceptsShipments, limit};
  }

  function itemState(item, current) {
    const stage = current.state.stage;
    const fixed = item.fixedFrom !== undefined && stage >= item.fixedFrom;
    const eligible = fixed || (stage >= item.unlock && current.acceptsShipments);
    const automatic = eligible && !item.shipment;
    const shipped = current.state.shipped.has(item.name);
    return {fixed, eligible, automatic, included: eligible && (fixed || automatic || shipped)};
  }

  function combinations(n, k) {
    let result = 1;
    for (let i = 1; i <= Math.min(k, n - k); i += 1) {
      result = result * (n - i + 1) / i;
    }
    return Math.round(result);
  }

  function renderResult() {
    const current = context();
    const {config, state, limit} = current;
    const candidates = new Set(config.items.filter(item => itemState(item, current).included).map(item => item.name));
    const count = candidates.size;
    const drawn = Math.min(count, limit);
    const target = config.items.find(item => item.name === state.target);
    const quantities = {count, limit, drawn, empty: limit - drawn, missed: count - drawn,
      combinations: combinations(count, drawn)};
    Object.entries(quantities).forEach(([key, value]) => {
      output(key).textContent = integer.format(value);
    });

    let probability;
    let expectation;
    if (target && !itemState(target, current).eligible) {
      probability = '未解禁・販売条件未達';
      expectation = '現在の進行条件では候補に入りません。';
    } else if (target && !candidates.has(target.name)) {
      probability = '候補未登録';
      expectation = '該当する素材を出荷済みとして選ぶと計算できます。';
    } else if (count === 0) {
      probability = '—　候補なし';
      expectation = '期待抽選回数 —';
    } else {
      const rate = drawn / count;
      probability = `${decimal.format(rate * 100)}%（${drawn}/${count}）`;
      expectation = drawn > 0 ? `期待抽選回数 ${decimal.format(1 / rate)}回` : '期待抽選回数 —（陳列枠なし）';
      if (!target) expectation += ' ・候補に含まれる任意の1品';
    }
    output('probability').textContent = probability;
    output('expectation').textContent = expectation;
  }

  function renderContext(current) {
    const {work, shop, config, state, canOrder} = current;
    const stages = config.rank ? ranks.map(rank => rank.title) : (config.stages || inventory.expansions);
    setOptions(input('stage'), stages.map((label, index) => [index, label]), state.stage);
    output('stage-label').textContent = config.rank ? '王子・姫ランク' :
      (work === 'RF4SP' ? '草類の販売解禁段階' : '拡張段階');
    output('order-row').hidden = !config.order;
    input('order').checked = Boolean(config.order && state.ordered && canOrder);
    input('order').disabled = !canOrder;
    output('order-label').textContent = config.order || '';

    const messages = [];
    if (work === 'RF4SP') {
      messages.push('RF4無印の上限をRF4SPへ暫定適用。個別の販売条件と候補の網羅性は未確認です。');
      if (config.order && !current.acceptsShipments) {
        messages.push('出荷品の販売は立派な王子・姫以降のオーダー後に有効です。');
      }
    } else if (shop !== 'clinic') {
      messages.push('陳列上限はHQの実機観測・記憶を含むモデル値です。');
      if (shop === 'vegetable') messages.push('最大拡張時の16種類の観測例は発生条件が未確定です。この計算では18枠を使います。');
    }
    if (config.fixedMedicines) {
      const fixed = config.fixedMedicines[state.stage];
      messages.push(`固定薬品 ${fixed}種類（${work === 'RF4SP' ? 'RF4資料から暫定適用' : '抽選対象外'}）。草類等の枠を足した上限は${fixed + current.limit}種類です。`);
    }
    output('context').textContent = messages.join(' ');
    const clinic = shop === 'clinic' && work === 'RF5';
    output('item-note').textContent = clinic ?
      '第2段階から出荷不要の12種類が候補に入ります。草類と白水晶の一覧は変更できません。' :
      '出荷した品を選びます。「固定」は未出荷でも候補に加わる品です。';
    output('bulk').hidden = clinic;
    for (const button of output('bulk').querySelectorAll('button')) {
      button.disabled = !config.items.some(item => {
        const status = itemState(item, current);
        return status.eligible && !status.fixed && item.shipment;
      });
    }
  }

  function renderItems(current) {
    const {config, state} = current;
    const grouped = new Map();
    setOptions(input('target'), [['', '候補に含まれる任意の1品'],
      ...config.items.map(item => [item.name, item.name])], state.target);

    for (const item of config.items) {
      if (!grouped.has(item.group)) {
        const group = node('fieldset');
        group.className = 'shop-item-group';
        group.append(node('legend', item.group));
        const list = node('div');
        list.className = 'shop-item-list';
        group.append(list);
        grouped.set(item.group, group);
      }
      const status = itemState(item, current);
      const list = grouped.get(item.group).lastElementChild;
      const row = node(item.shipment ? 'label' : 'div');
      row.className = 'shop-item';
      row.dataset.item = item.name;
      if (item.shipment) {
        const box = node('input');
        box.type = 'checkbox';
        box.dataset.shipped = item.name;
        box.checked = status.included;
        box.disabled = !status.eligible || status.fixed;
        row.append(box);
      }
      row.append(node('span', item.name));
      const badge = status.fixed ? '固定' : (!status.eligible ? '未解禁' : (status.automatic ? '出荷不要' : ''));
      if (badge) {
        const tag = node('small', badge);
        tag.className = 'shop-item-status';
        row.append(tag);
      }
      list.append(row);
    }
    output('items').replaceChildren(...grouped.values());
  }

  function locations(work, ingredient) {
    const shops = inventory.shops[work];
    return Object.entries(shops).filter(([, config]) => config.items.some(item => item.name === ingredient))
      .map(([shop]) => shopNames[shop]);
  }

  function ingredientList(work, ingredients) {
    const list = node('ul');
    list.className = 'shop-ingredients';
    for (const {name, quantity} of ingredients) {
      const shops = locations(work, name);
      const description = shops.length ? shops.join('・') :
        (name === 'ワイン' ? '別途調達（雑貨屋の通常販売品）' : '別途調達');
      const item = node('li');
      const kind = ['粉・秘薬類', '液体類'].includes(name) ? '（カテゴリから選択）' : '';
      item.append(node('strong', `${name} ×${quantity}${kind}`), node('span', description));
      list.append(item);
    }
    return list;
  }

  function renderRecipe() {
    const {work} = context();
    const name = input('recipe').value;
    const recipe = inventory.recipes[name]?.[work];
    const section = output('recipe');
    section.replaceChildren();
    const names = new Set();
    if (recipe) {
      section.append(ingredientList(work, recipe.main));
      recipe.main.forEach(item => names.add(item.name));
      const extra = node('details');
      const hasIntermediate = recipe.main.some(item => item.name === 'リラックス茶の葉' || inventory.intermediate[item.name]);
      if (recipe.alternate || hasIntermediate) {
        extra.append(node('summary', '代替レシピ・中間素材を見る'));
        if (recipe.alternate) extra.append(node('p', '代替レシピ'), ingredientList(work, recipe.alternate));
        for (const item of recipe.main) {
          const intermediate = inventory.intermediate[item.name] || inventory.recipes[item.name]?.[work]?.main;
          if (intermediate) {
            extra.append(node('p', item.name), ingredientList(work, intermediate));
            intermediate.forEach(part => names.add(part.name));
          }
        }
        section.append(extra);
      }
      const prepared = work === 'RF5' && inventory.directMedicine.find(item => item.name === name);
      if (prepared) {
        section.append(node('p', `完成品はRF5花屋の拡張第${prepared.stage}段階から ${integer.format(prepared.price)}G で購入できます。`));
      }
      section.append(node('p', '店舗名はこの台帳での調達先です。各店の進行条件と出荷状態を確認してください。'));
    }
    for (const row of output('items').querySelectorAll('[data-item]')) {
      row.classList.toggle('shop-recipe-match', names.has(row.dataset.item));
    }
  }

  function render() {
    const current = context();
    renderContext(current);
    renderItems(current);
    renderResult();
    renderRecipe();
    output('medicine').hidden = current.work !== 'RF5' || current.shop !== 'flower';
    if (!output('medicine').hidden) {
      output('medicine-list').replaceChildren(...inventory.directMedicine.map(item =>
        node('li', `${item.name}　${integer.format(item.price)}G（第${item.stage}段階から${current.state.stage < item.stage ? '・未解禁' : ''}）`)
      ));
    }
  }

  setOptions(input('recipe'), [['', 'レシピを選ぶ'], ...Object.keys(inventory.recipes).map(name => [name, name])], '');
  root.addEventListener('change', event => {
    const element = event.target;
    const state = storeState();
    if (element.dataset.shipped) {
      if (element.checked) state.shipped.add(element.dataset.shipped);
      else state.shipped.delete(element.dataset.shipped);
      renderResult();
      return;
    }
    switch (element.dataset.input) {
      case 'stage': state.stage = Number(element.value); break;
      case 'order': state.ordered = element.checked; break;
      case 'target': state.target = element.value; renderResult(); return;
      case 'recipe': renderRecipe(); return;
      case 'work':
      case 'shop': break;
      default: return;
    }
    render();
  });

  output('bulk').addEventListener('click', event => {
    const action = event.target.dataset.action;
    if (!action) return;
    const {state} = context();
    for (const checkbox of output('items').querySelectorAll('input[data-shipped]:enabled')) {
      checkbox.checked = action === 'all';
      if (checkbox.checked) state.shipped.add(checkbox.dataset.shipped);
      else state.shipped.delete(checkbox.dataset.shipped);
    }
    renderResult();
  });

  render();
  output('fallback').hidden = true;
  root.querySelector('[data-shop-ui]').hidden = false;
})();
