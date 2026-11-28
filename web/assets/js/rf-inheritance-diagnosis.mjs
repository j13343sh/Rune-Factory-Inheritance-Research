import { applicability, calculateConditions, diagnoseSymptom, methods, selectMethods, symptoms }
  from './rf-inheritance-diagnosis-model.mjs';

const element = (tag, text) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  return node;
};

function field(name, label, choices) {
  const wrapper = element('label', label);
  const select = element('select');
  select.name = name;
  for (const [value, title] of [['', '不明'], ...choices]) {
    const option = element('option', title);
    option.value = value;
    select.append(option);
  }
  wrapper.append(select);
  return wrapper;
}

const tri = [['yes', 'はい'], ['no', 'いいえ']];
const triFields = checks => checks.map(([key, label]) => field(key, label, tri));
const numbered = (first, last) =>
  Array.from({ length: last - first + 1 }, (_, i) => [String(i + first), String(i + first)]);
const workNames = { RF4SP: 'RF4SP', RF5: 'RF5' };
const categoryNames = { shoes: '靴', accessory: 'アクセサリー', other: 'その他通常装備' };
const values = container => Object.fromEntries(
  Array.from(container.querySelectorAll('select'), select => [select.name, select.value])
);

function box(title) {
  const section = element('div');
  section.className = 'rf-diagnosis-box';
  const heading = element('h3', title);
  section.append(heading);
  return section;
}

function grid(...nodes) {
  const container = element('div');
  container.className = 'rf-diagnosis-fields';
  container.append(...nodes);
  return container;
}

function liveResult() {
  const result = element('div');
  result.className = 'rf-diagnosis-result';
  result.setAttribute('aria-live', 'polite');
  result.setAttribute('aria-atomic', 'true');
  return result;
}

function links(references) {
  const list = element('ul');
  for (const reference of references) {
    const item = element('li');
    const anchor = element('a', reference.title);
    anchor.href = './' + reference.slug + '.html';
    item.append(anchor);
    list.append(item);
  }
  return list;
}

function listItems(labels) {
  const list = element('ul');
  list.append(...labels.map(label => element('li', label)));
  return list;
}

function pairs(entries) {
  const list = element('dl');
  for (const [key, value] of entries) list.append(element('dt', key), element('dd', value));
  return list;
}

const shared = box('共通の入力');
const reset = element('button', 'すべての入力をリセット');
reset.type = 'button';
const refreshed = element('p');
refreshed.setAttribute('role', 'status');
const confirmation = element('p');
const modes = element('nav');
modes.setAttribute('aria-label', '診断モード');
for (const [id, title] of [['symptoms', '失敗原因'], ['methods', '製法選択'], ['conditions', '条件確認']]) {
  const anchor = element('a', title);
  anchor.href = '#' + id;
  modes.append(anchor);
}
shared.append(grid(field('work', '作品', Object.entries(workNames)), field('category', '装備カテゴリ', Object.entries(categoryNames)),
  reset), confirmation, refreshed, modes);

const symptom = box('症状を選ぶ');
const symptomResult = liveResult();
symptom.append(grid(field('symptom', '困っていること', Object.entries(symptoms))), symptomResult);

const methodPicker = box('使える製法を確認する');
methodPicker.append(element('p', '確認したい製法を開いて条件を選びます。条件を満たす複数の製法を候補として表示します。'));
const methodsSummary = liveResult();
methodPicker.append(methodsSummary);
const methodInputs = new Map();
for (const method of methods) {
  const details = element('details');
  const summary = element('summary');
  const result = liveResult();
  details.append(summary, grid(...triFields(method.requirements)), result);
  methodInputs.set(method.id, { summary, result });
  methodPicker.append(details);
}

const conditions = box('製作条件を入力する');
const conditionResult = liveResult();
const modelFields = grid(field('recipe', 'レシピの必要素材数', numbered(1, 6)),
  field('internal', '鑑定済みの内部アレンジ数', numbered(0, 3)));
const conditionChecks = element('fieldset');
conditionChecks.append(element('legend', 'モデルを適用できるか'));
conditionChecks.append(grid(...triFields(applicability)));
const outcomeChecks = element('fieldset');
outcomeChecks.append(element('legend', '目的候補と並び順'));
outcomeChecks.append(grid(...triFields([['targets', '目的候補がすべて存在する'], ['order', '目的の効果は並び順に依存する']])));
conditions.append(modelFields, conditionChecks, outcomeChecks, conditionResult);

function refresh() {
  const common = values(shared);
  const scope = `確認条件：${workNames[common.work] || '作品不明'} ／ ${categoryNames[common.category] || 'カテゴリ不明'}`;
  confirmation.textContent = scope;
  const symptomData = diagnoseSymptom({ ...values(symptom), ...common });
  symptomResult.replaceChildren(element('p', scope));
  if (symptomData) {
    symptomResult.append(pairs([['原因候補', symptomData.cause], ['次の行動', symptomData.action],
      ['留保', '鑑定と実際の装備効果で確認してください。']]), links([symptomData.reference]));
  } else {
    symptomResult.append(element('p', '困っていることを選んでください。'));
  }

  const labels = { eligible: '条件成立', reference: '参考情報', constraint: '条件外' };
  const eligible = [];
  const methodSelections = selectMethods({ ...values(methodPicker), ...common });
  for (const diagnostic of methodSelections) {
    const { summary, result } = methodInputs.get(diagnostic.id);
    summary.textContent = diagnostic.title + ' · ' + labels[diagnostic.status];
    result.replaceChildren(element('p', scope));
    if (diagnostic.action) {
      eligible.push(diagnostic.title);
      result.append(element('p', diagnostic.action));
    }
    if (diagnostic.failed.length) result.append(element('strong', '制約'), listItems(diagnostic.failed));
    if (diagnostic.unknown.length) result.append(element('strong', '未確認'), listItems(diagnostic.unknown));
    result.append(links([diagnostic.reference]));
  }
  methodsSummary.replaceChildren(element('p', scope), element('p',
    eligible.length ? '条件が成立した候補：' + eligible.join('、') : '条件が成立した製法はありません。各製法の条件を確認してください。'),
  element('p', '候補表示は、製作の成功率や効果発現を保証するものではありません。'));

  const diagnosis = calculateConditions({ ...values(conditions), ...common });
  conditionResult.replaceChildren(element('p', scope));
  if (diagnosis.counts) {
    const { body, before, refill, total, overflow } = diagnosis.counts;
    conditionResult.append(pairs([
      ['本体からの候補数', body], ['補充前の候補数', before], ['モデル上の補充数', refill], ['モデル上の合計候補数', total],
      ['候補の保持', overflow ? '枠超過あり。候補が脱落する可能性があります。' : 'モデル上の枠超過なし。'],
      ['並び順', diagnosis.order], ['目的候補・効果発現', diagnosis.target], ['順序依存', diagnosis.dependency]
    ]), element('p', '補充数は説明モデルの値です。内部で生成される数や成功率は判定しません。'));
  } else {
    conditionResult.append(element('strong', '計算を保留'), listItems(diagnosis.reasons),
      element('p', '次の行動：レシピ・投入素材・鑑定結果を確認してください。'));
  }
  conditionResult.append(links(diagnosis.references));
}

function initialize() {
  const widgets = { common: shared, symptoms: symptom, methods: methodPicker, conditions };
  const mounts = Object.entries(widgets).map(([name, widget]) =>
    [document.querySelector(`[data-rf-diagnosis="${name}"]`), widget]);
  if (mounts.some(([mount]) => !mount)) return;
  for (const [mount, widget] of mounts) {
    mount.append(widget);
    mount.addEventListener('change', () => {
      refreshed.textContent = '';
      refresh();
    });
  }
  reset.addEventListener('click', () => {
    for (const [mount] of mounts) {
      for (const select of mount.querySelectorAll('select')) select.value = '';
      for (const details of mount.querySelectorAll('details')) details.open = false;
    }
    refresh();
    refreshed.textContent = 'すべての入力を初期状態に戻しました。';
  });
  refresh();
  for (const [mount] of mounts) mount.hidden = false;
}

initialize();
