const guide = (slug, title) => ({ slug, title });

export const guides = {
  basics: guide('inheritance-basics', '候補の仕組み'),
  effects: guide('rf5-special-effect-inheritance', 'RF5の特殊能力継承'),
  performance: guide('rf5-performance-inheritance', 'RF5の性能継承'),
  arrange: guide('auto-arrange-control', 'オートアレンジ制御'),
  shield: guide('weapon-category-shield', '武器カテゴリと盾の性能'),
  design: guide('advanced-inheritance-design', '高難度装備継承の設計方法'),
  methods: guide('method-comparison', '製法比較'),
  comparison: guide('rf4sp-rf5-comparison', 'RF4SPとRF5の仕様比較'),
  rf4spSpecial: guide('rf4sp-messhilite-trials', 'RF4SP メッシライト検証'),
  rf5Special: guide('rf5-4000-trials', 'RF5 メッシライト検証')
};

export const symptoms = {
  effect: '特殊能力が消えた',
  material: '不要な素材が混ざる',
  stats: '攻撃力・防御力が変わった',
  upgrade: '強化した性能が消えた',
  appraisal: '鑑定と実際の効果が違う',
  shield: '盾の効果が弱い',
  three: '3候補を揃えたい',
  four: '4能力をまとめたい'
};

const wearable = category => category === 'shoes' || category === 'accessory';
const knownWork = work => work === 'RF4SP' || work === 'RF5';

export function diagnoseSymptom({ symptom, work, category }) {
  const tip = (cause, action, reference) => ({ cause, action, reference });
  switch (symptom) {
    case 'effect':
      if (wearable(category) && work === 'RF5') {
        return tip('外見装備の固有能力が性能元の能力に置き換わった可能性があります。',
          '鑑定で外見・性能元・内部3枠を照合し、装備して効果を確認してください。', guides.effects);
      }
      if (wearable(category) && work === 'RF4SP') {
        return tip('目的の候補が生成されなかったか、途中で脱落した可能性があります。',
          '候補の出所、残った候補、装備時の効果発現を別々に確認してください。', guides.basics);
      }
      return tip('数値性能・素材効果・強化を区別すると原因を絞れます。',
        '作品と装備カテゴリを確認してください。ここでは靴・アクセサリーのモデルの適用を保留します。', guides.basics);
    case 'material':
      return tip('必須素材からの補充、または以前の装備にある内部アレンジの参照が候補です。',
        'レシピの必須素材と、追加した装備の鑑定結果を照合してください。', guides.arrange);
    case 'stats':
      if (work === 'RF5') return tip('性能元が変わった可能性があります。旧性能元は再帰的には参照されません。',
        '外見と現在の性能元、装備の投入順を鑑定で照合してください。', guides.performance);
      if (work === 'RF4SP') return tip('通常製作とメッシライトによる特殊継承では確認すべき条件が異なります。',
        'レシピとメッシライト鉱石の有無を確認してください。', guides.basics);
      return tip('作品によって性能継承の条件が異なります。', '作品、装備カテゴリ、投入素材を確認してください。', guides.basics);
    case 'upgrade':
      if (work === 'RF5') return tip('RF5の性能継承では中間装備の強化は引き継がれません。',
        '必要な強化は最終装備に施してください。', guides.performance);
      return tip('製作前後の性能と強化履歴を照合する必要があります。',
        'RF5の観測結果の適用は保留し、作品別に比較してください。', guides.basics);
    case 'appraisal':
      return tip('鑑定表示だけでは効果発現を判断できません。',
        '数値性能・特殊能力・装備状態を分け、実際に装備して確認してください。', guides.basics);
    case 'shield':
      return tip('武器カテゴリによって盾の効果の反映条件が異なります。',
        '使用武器のカテゴリと盾の反映条件を照合してください。', guides.shield);
    case 'three':
      return tip('候補数が揃っても、目的の種類が揃うとは限りません。',
        '候補の種類、数、並び順、効果発現を別々に確認してください。', guides.arrange);
    case 'four':
      if (!wearable(category)) return tip('靴・アクセサリーのモデルの適用範囲を確認できません。',
        '装備カテゴリと、引き継ぎたい効果の種類を確認してください。', guides.basics);
      return tip('靴・アクセサリーの固有能力と通常のアレンジ3枠を区別します。',
        work === 'RF5' ? 'RF5では性能元も鑑定し、目的の効果を確認してください。' :
          '作品に応じて固有能力と内部アレンジを確認してください。', guides.design);
    default:
      return null;
  }
}

export const applicability = [
  ['single', '通常の同カテゴリ装備を1個だけ追加する'],
  ['noAddition', 'その装備以外の追加素材はない'],
  ['noSpecial', '特殊継承（メッシライト鉱石など）は使わない'],
  ['noOther', 'ほかの候補はない'],
  ['reference', '内部アレンジの参照条件が成立している']
];

function count(value, min, max) {
  if (typeof value === 'string' && !/^\d+$/.test(value)) return null;
  if (typeof value !== 'string' && typeof value !== 'number') return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= min && n <= max ? n : null;
}

export function calculateConditions(input) {
  const r = count(input.recipe, 1, 5);
  const h = count(input.internal, 0, 3);
  const missing = applicability.filter(([key]) => input[key] !== 'yes');
  if (!knownWork(input.work) || !(wearable(input.category) || input.category === 'other') ||
      r === null || h === null || missing.length) {
    const reasons = [];
    if (!knownWork(input.work)) reasons.push('作品を確認してください。');
    if (!['shoes', 'accessory', 'other'].includes(input.category)) reasons.push('装備カテゴリを確認してください。');
    if (r === null) reasons.push(String(input.recipe) === '6' ?
      '必要素材だけで投入枠が埋まるため、このモデルの対象外です。' : '必要素材数を確認してください。');
    if (h === null) reasons.push('鑑定済みの内部アレンジ数を確認してください。');
    for (const [key, label] of missing) {
      reasons.push(`${label} — ${input[key] === 'no' ? '条件外' : '未確認'}`);
    }
    const references = [guides.arrange];
    if (input.noSpecial === 'no') {
      if (input.work !== 'RF5') references.push(guides.rf4spSpecial);
      if (input.work !== 'RF4SP') references.push(guides.rf5Special);
    }
    return { counts: null, reasons, references };
  }

  const body = wearable(input.category) ? 1 : 0;
  const before = body + h;
  const refill = Math.min(Math.max(0, r - 3), Math.max(0, 3 - before));
  const total = before + refill;
  const overflow = total > 3;
  const order = input.work === 'RF4SP' && total === 3
    ? 'RF4SPではこの候補数でも並び順が変わり得ます。'
    : input.work === 'RF5'
      ? 'RF5の直接継承の並び順は、公開資料の確認条件に照らしてください。'
      : '今回の入力から並び順は判定しません。';
  const target = input.targets === 'yes' ? '目的候補が揃うとの入力です。保持と効果発現は別に確認してください。'
    : input.targets === 'no' ? '目的候補が不足しています。この候補構成では目的達成を見込めません。'
      : '目的候補の有無が不明です。鑑定で候補の種類を確認してください。';
  const dependency = input.order === 'yes' ? '順序依存の効果は、候補が残る場合も並び順を確認してください。'
    : input.order === 'no' ? '順序に依存しないとの入力です。効果発現は装備して確認してください。'
      : '効果が並び順に依存するかを確認してください。';
  return { counts: { body, before, refill, total, overflow }, order, target, dependency,
    references: [guides.arrange, guides.comparison] };
}

export const methods = [
  {
    id: 'normal', title: '通常製作', reference: guides.basics,
    requirements: [['targets', '目的候補がすべて揃っている'], ['unwantedOkay', '不要候補が問題にならない']],
    action: '鑑定で残った候補と順序を確認し、装備して効果を確かめます。'
  },
  {
    id: 'cushion', title: 'クッション製法', reference: guide('cushion-method', 'クッション製法'),
    requirements: [['later', '後続装備の不要な内部参照が問題'], ['empty', '最初の同カテゴリ装備は鑑定で内部空と確認済み'], ['slots', '必要な追加枠がある']],
    action: '内部が空の装備を先に置きます。本体が候補になる条件も確認してください。'
  },
  {
    id: 'shuffle', title: 'シャッフル製法', reference: guide('shuffle-method', 'シャッフル製法'),
    requirements: [['multiple', '複数の同カテゴリ装備を使い、投入順を変更できる'], ['adjust', '内部参照または性能元を調整したい']],
    action: '投入順を変え、内部参照や性能元を調整します。鑑定で変更点を確認してください。'
  },
  {
    id: 'dummy', title: 'サクラカブダミー製法', reference: guide('dummy-method', 'サクラカブダミー製法'), rf4sp: true,
    requirements: [['unavoidable', '避けにくい不要候補がある'], ['example', '既存実践例の条件を確認した']],
    action: '実践例を参照し、途中工程で候補を鑑定してください。'
  },
  {
    id: 'combined', title: 'クッション・シャッフル複合製法', reference: guide('rf4sp-combined-inheritance-method', 'ゴーストブーツの既存経路'),
    rf4sp: true, shoes: true,
    requirements: [
      ['ghostRoute', '既存のゴーストブーツ経路を確認した'],
      ['smallRecipe', '中間装備の必要素材は3個以下'],
      ['targetCushion', '目的兼クッションを鑑定し、内部が空と確認した（購入品も鑑定）'],
      ['twoExtra', '中間装備に追加枠が2つある'],
      ['twoTargets', '中間装備の内部は目的候補2個'],
      ['oneExtra', '最終装備に追加枠が1つある'],
      ['lastThree', '最終候補は目的候補3個'],
      ['noOther', '最終工程にほかの候補はない'],
      ['orderIndependent', '目的の効果は並び順に依存しない']
    ],
    action: '入力した既存経路の条件下では、最終工程の候補脱落を回避できます。並び順は固定されず、効果発現は別途確認してください。'
  }
];

export function selectMethods(input) {
  return methods.map(method => {
    const checks = method.requirements.map(([key, label]) => [input[key], label]);
    if (method.rf4sp) checks.push([input.work === 'RF4SP' ? 'yes' :
      input.work === 'RF5' ? 'no' : '', 'RF4SPが対象']);
    if (method.shoes) checks.push([input.category === 'shoes' ? 'yes' :
      input.category ? 'no' : '', '靴が対象']);

    const failed = checks.filter(([answer]) => answer === 'no').map(([, label]) => label);
    const unknown = checks.filter(([answer]) => answer !== 'yes' && answer !== 'no').map(([, label]) => label);
    const status = failed.length ? 'constraint' : unknown.length ? 'reference' : 'eligible';
    let action = method.action;
    if (input.work === 'RF5' && ['shuffle', 'cushion'].includes(method.id)) {
      action += ' RF5では性能元も変わり得ます。';
    }
    if (method.id === 'dummy' && input.work === 'RF5') {
      failed.push('RF5で同様の改善は推奨しません。');
    }
    return { id: method.id, title: method.title, reference: method.reference, status, failed, unknown,
      action: status === 'eligible' ? action : null };
  });
}
