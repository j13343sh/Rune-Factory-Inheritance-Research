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
      states.set(key, {stage: 0, ordered: false, targets: new Set(), shipped: new Set()});
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

  function percent(rate) {
    if (rate > 0 && rate < 0.00005) return '0.01%未満';
    return `${decimal.format(rate * 100)}%`;
  }

  function renderResult() {
    const current = context();
    const {config, state, limit} = current;
    const candidates = new Set(config.items.filter(item => itemState(item, current).included).map(item => item.name));
    const count = candidates.size;
    const drawn = Math.min(count, limit);
    const targets = [...state.targets];
    const missing = targets.filter(name => !candidates.has(name));
    const outcomes = combinations(count, drawn);
    const favorable = missing.length || targets.length > drawn ? 0 :
      combinations(count - targets.length, drawn - targets.length);
    const rate = favorable / outcomes;
    const quantities = {count, limit, drawn, empty: limit - drawn, missed: count - drawn,
      combinations: outcomes, 'target-count': targets.length};
    Object.entries(quantities).forEach(([key, value]) => {
      output(key).textContent = integer.format(value);
    });

    output('probability').textContent = targets.length ? percent(rate) : '調査対象未選択';
    output('fraction').textContent = targets.length ?
      `${integer.format(favorable)} / ${integer.format(outcomes)} 通り（選んだ素材がすべて並ぶ組合せ / 全組合せ）` : '—';
    output('expectation').textContent = targets.length && rate > 0 ?
      `平均抽選回数 ${decimal.format(1 / rate)}回` : '平均抽選回数 —';
    output('individual').textContent = count ?
      `候補から選んだ1品が並ぶ確率 ${percent(drawn / count)}（${drawn}/${count}）` :
      '個別陳列率 —（候補なし）';
    const gap = count - limit;
    output('capacity-note').textContent = gap > 0 ?
      `現在の候補数は陳列上限を${integer.format(gap)}種類超えています。` :
      (gap < 0 ? `あと${integer.format(-gap)}種類まで候補を増やしても、陳列上限内です。` :
        '候補数は陳列上限と同じです。');
    const notes = [];
    if (targets.length > drawn) notes.push('調査対象数が陳列数を超えるため同時陳列不可。');
    for (const reason of ['未出荷', '未解禁']) {
      const names = config.items.filter(item => missing.includes(item.name) &&
        targetStatus(itemState(item, current)) === reason).map(item => item.name);
      if (names.length) {
        const hint = reason === '未解禁' ? '（進行条件が必要）' : '';
        notes.push(`${reason}${hint}：${names.join('、')}`);
      }
    }
    output('target-note').hidden = notes.length === 0;
    output('target-note').textContent = notes.join(' ');

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
      if (shop === 'flower') {
        messages.push('花屋は初期から出荷済みの花が候補に入ります。トイハーブは未出荷でも候補に入ります。');
      }
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
    const {config} = current;
    const grouped = new Map();

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

  function targetStatus(status) {
    if (!status.eligible) return '未解禁';
    return status.included ? '' : '未出荷';
  }

  function renderTargets(current) {
    const rows = current.config.items.map(item => {
      const row = node('label');
      row.className = 'shop-item';
      const box = node('input');
      box.type = 'checkbox';
      box.dataset.target = item.name;
      const badge = node('small');
      badge.className = 'shop-item-status';
      row.append(box, node('span', item.name), badge);
      return row;
    });
    output('targets').replaceChildren(...rows);
    syncTargets(current);
  }

  function syncTargets(current) {
    const rows = output('targets').children;
    current.config.items.forEach((item, index) => {
      const row = rows[index];
      const box = row.firstElementChild;
      const badge = row.lastElementChild;
      const status = itemState(item, current);
      box.checked = current.state.targets.has(item.name);
      box.disabled = !status.included;
      badge.textContent = targetStatus(status);
      badge.hidden = status.included;
    });
  }

  function applyRecipe() {
    const current = context();
    const {work, config, state} = current;
    const recipe = inventory.recipes[input('recipe').value]?.[work];
    if (!recipe) return;
    const names = new Set(recipe.main.map(item => item.name));
    state.targets = new Set(config.items.filter(item => names.has(item.name)).map(item => item.name));
    syncTargets(current);
    renderResult();
  }

  function ingredientList(work, shop, ingredients) {
    const list = node('ul');
    list.className = 'shop-ingredients';
    for (const {name, quantity} of ingredients) {
      const stores = Object.entries(inventory.shops[work])
        .filter(([, config]) => config.items.some(item => item.name === name))
        .map(([id]) => id);
      const item = node('li');
      const kind = ['粉・秘薬類', '液体類'].includes(name) ? '（カテゴリから選択）' : '';
      item.append(node('strong', `${name} ×${quantity}${kind}`));
      const availability = node('span');
      availability.className = 'shop-ingredient-location';
      if (!stores.length) {
        availability.textContent = name === 'ワイン' ? '雑貨屋の通常販売（陳列抽選の対象外）' : '別途調達';
      }
      for (const store of stores) {
        if (store === shop) {
          availability.append(node('span', `${shopNames[store]}（表示中）`));
        } else {
          const button = node('button', `${shopNames[store]}の陳列を確認`);
          button.type = 'button';
          button.dataset.recipeShop = store;
          availability.append(button);
        }
      }
      item.append(availability);
      list.append(item);
    }
    return list;
  }

  function renderRecipe() {
    const {work, shop} = context();
    const name = input('recipe').value;
    const recipe = inventory.recipes[name]?.[work];
    const section = output('recipe');
    section.replaceChildren();
    root.querySelector('[data-action=apply-recipe]').hidden = !recipe;
    const names = new Set();
    if (recipe) {
      section.append(ingredientList(work, shop, recipe.main));
      recipe.main.forEach(item => names.add(item.name));
      const extra = node('details');
      const hasIntermediate = recipe.main.some(item => item.name === 'リラックス茶の葉' || inventory.intermediate[item.name]);
      if (recipe.alternate || hasIntermediate) {
        extra.append(node('summary', '代替レシピ・中間素材を見る'));
        if (recipe.alternate) extra.append(node('p', '代替レシピ'), ingredientList(work, shop, recipe.alternate));
        for (const item of recipe.main) {
          const intermediate = inventory.intermediate[item.name] || inventory.recipes[item.name]?.[work]?.main;
          if (intermediate) {
            extra.append(node('p', item.name), ingredientList(work, shop, intermediate));
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
    renderTargets(current);
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
      syncTargets(context());
      renderResult();
      return;
    }
    if (element.dataset.target) {
      if (element.checked) state.targets.add(element.dataset.target);
      else state.targets.delete(element.dataset.target);
      renderResult();
      return;
    }
    switch (element.dataset.input) {
      case 'stage': state.stage = Number(element.value); break;
      case 'order': state.ordered = element.checked; break;
      case 'recipe': renderRecipe(); applyRecipe(); return;
      case 'work':
      case 'shop': break;
      default: return;
    }
    render();
  });

  root.addEventListener('click', event => {
    const store = event.target.dataset.recipeShop;
    if (store) {
      input('shop').value = store;
      render();
      input('shop').focus();
      return;
    }
    const action = event.target.dataset.action;
    if (!action) return;
    if (action === 'apply-recipe') {
      applyRecipe();
      return;
    }
    const current = context();
    const {state} = current;
    if (action === 'targets-all' || action === 'targets-none') {
      if (action === 'targets-none') {
        state.targets.clear();
      } else {
        for (const item of current.config.items) {
          if (itemState(item, current).included) state.targets.add(item.name);
        }
      }
      syncTargets(current);
      renderResult();
      return;
    }
    for (const checkbox of output('items').querySelectorAll('input[data-shipped]:enabled')) {
      checkbox.checked = action === 'all';
      if (checkbox.checked) state.shipped.add(checkbox.dataset.shipped);
      else state.shipped.delete(checkbox.dataset.shipped);
    }
    syncTargets(current);
    renderResult();
  });

  render();
  output('fallback').hidden = true;
  root.querySelector('[data-shop-ui]').hidden = false;
})();
