const words = [
  {word: 'lasting', meaning: '持続可能な'},
  {word: 'all the way', meaning: 'いつでも'},
  {word: 'spring up', meaning: '生じる'},
  {word: 'onward', meaning: 'その後も'},
  {word: 'indigenous', meaning: 'その地域に根差している'},
  {word: 'sedentary', meaning: '定住的な'},
  {word: 'take on', meaning: '捕獲する'},
  {word: 'impressive', meaning: '素晴らしい'},
  {word: 'procure', meaning: 'obtain'},
  {word: 'game', meaning: '獲物'},
  {word: 'cancel out', meaning: 'を打ち消す'},
  {word: 'to some extent', meaning: 'ある程度'},
  {word: 'hospitable', meaning: '快適な'},
  {word: 'proliferation', meaning: '拡散'},
  {word: 'driver', meaning: '要因'},
  {word: 'menagerie', meaning: '動物の集団'},
  {word: 'blast X away', meaning: 'Xを吹き飛ばす'},
  {word: 'strip X from Y', meaning: 'XをYから引き剥がす'},
  {word: 'remnant', meaning: '残存物'},
  {word: 'saturation point', meaning: '飽和点'},
  {word: 'mutate', meaning: '変化する,突然変異'},
  {word: 'spike', meaning: '爆発的に増えること'},
  {word: 'drastic', meaning: '大幅な'},
  
  {word: 'humongus', meaning: '巨大な、extream large'},
  {word: 'masses', meaning: '集団'},
  {word: 'bunch', meaning: '束、房'},
  {word: 'larvae', meaning: '幼虫'},
  {word: 'polyps', meaning: '突起物、イソギンチャク'},
  {word: 'upwards', meaning: '上に、方角'},
  {word: 'exert', meaning: '発揮する、行使する'},
  {word: 'abnormal', meaning: '異常な'},
  {word: 'intimately', meaning: '密接に、親密に'},
  
  {word: 'accomplish', meaning: '成し遂げる'},
  {word: 'stony', meaning: '石の'},
  {word: 'finer', meaning: 'より洗礼された, fine'},
  {word: 'ridge', meaning: 'long narrow hilltop'},
  {word: 'substantial', meaning: '主要な、重大な'},
  {word: 'clay', meaning: '粘土'},
  {word: 'sealing', meaning: '密閉する'},
  {word: 'diminish', meaning: '減らす'},
  {word: 'deterioration', meaning: '劣化'},
  {word: 'subject', meaning: '影響を受けやすい'},
  {word: 'margin', meaning: '周辺、境界'},
  {word: 'graze', meaning: '草を食べる'},
  {word: 'necessitate', meaning: '必要とする'},
  {word: 'sussceptible to', meaning: '影響を受けやすい'},
  {word: 'trampling', meaning: '踏み固める'},
  {word: 'pulverization', meaning: '粉砕'},
  {word: 'be followed by', meaning: 'その後に〜が続く'},
  {word: 'salinization', meaning: '塩類化'},
  {word: 'dissolve', meaning: '溶ける、溶かす'},
  
  {word: 'gill', meaning: 'エラ'},
  {word: 'streamline', meaning: '流線'},
  {word: 'affinities, affinity', meaning: '親和性'},
  {word: 'disguise', meaning: '隠すために変装する（conceal）'},
  {word: 'envision', meaning: '想像する'},
  {word: 'transitional', meaning: '過渡的な、移行期'},
  {word: 'archeocyte', meaning: '原子細胞'},
  {word: 'skull', meaning: '頭蓋骨'},
  {word: 'precious', meaning: '貴重な'},
  {word: 'jawbone', meaning: '顎の骨、顎骨'},
  
  {word: 'phonogragh', meaning: '蓄音機、レコードプレイヤー'},
  {word: 'apiece', meaning: '一つあたり'},
  {word: 'legitimate', meaning: '正当な'},
  {word: 'assemble', meaning: '組み立てる'},
  
  {word: 'distinction', meaning: '差異'},
  {word: 'revolve', meaning: '回転する'},
  
  {word: 'Radiocarbon', meaning: '放射性炭素'},
  {word: 'Dating', meaning: '年代測定'},
  {word: 'Interrelationships', meaning: '相互関係'},
  {word: 'Stone points', meaning: '石器の尖った部分／石の矢じり'},
  {word: 'Abundant', meaning: '豊富な／大量の'},
  {word: 'Beyond that', meaning: 'それ以上に（その他に）'},
  {word: 'Distinctive', meaning: '独特の／特徴的な'},
  {word: 'Correlated', meaning: '相関する／関連付けられた'},
  {word: 'Favored', meaning: '支持された／好まれた'},
  {word: 'Fairly', meaning: 'かなり／比較的'},
  {word: 'Charcoal', meaning: '木炭'},
  {word: 'Held up', meaning: '持ちこたえる／有効である'},
  {word: 'Contaminated', meaning: '汚染された'},
  {word: 'Prompted', meaning: '引き起こした／促した'},
  {word: 'Channel', meaning: '地層の溝／流路'},
  {word: 'Cut into and through', meaning: '切り込んで貫通する'},
  {word: 'Beneath', meaning: '〜の下に'},
  {word: 'Painting a consistent picture', meaning: '首尾一貫した全体像を描く'},
  
  {word: 'Titan', meaning: '土星の最大の衛星（moon）'},
  {word: 'ammonia', meaning: 'アンモニア'},
  {word: 'cryovolcanism', meaning: '氷火山活動'},
  {word: 'icy', meaning: '氷のような、非常に冷たい'},
  {word: 'ethane', meaning: 'エタン'},
  {word: 'methane', meaning: 'メタン'},
  {word: 'craft', meaning: '宇宙船、工芸、技術'},
  {word: 'radar instrument', meaning: 'レーダー装置'},
  {word: 'peer', meaning: 'じっと見る、見通す'},
  {word: 'depressions', meaning: 'くぼみ、低地'},
  {word: 'branched', meaning: '枝分かれした、分岐した'},
  {word: 'elongated', meaning: '細長い'},
  {word: 'association', meaning: '関連、結びつき'},
  {word: 'it is likely...', meaning: '過去にそうであった可能性が高い'},
  {word: 'variant', meaning: '変種、変形'},
  {word: 'potassium', meaning: 'カリウム'},
  {word: 'differentiated', meaning: '分化した、区別された'},
  {word: 'evolve', meaning: '進化する、発展する'},
  {word: 'by which', meaning: 'それによって、～を通じて'},
  
  {word: 'focal', meaning: '焦点'},
  {word: 'hinterland', meaning: '後背地、田舎'},
  {word: 'radiated out to', meaning: '放射状に延びている'},
  {word: 'exert a influence on 〜', meaning: '〜に影響を引き起こす'},
  {word: 'recede', meaning: '後退する'},
  {word: 'calamity', meaning: '大きな不幸'},
  {word: 'vigor', meaning: '活力'},
  {word: 'obsolescent', meaning: '老朽化した'},
  {word: 'striking', meaning: '著しい、顕著な'},
  {word: 'basin', meaning: '盆地'},
  {word: 'dock', meaning: '港'},
  
  {word: 'browse', meaning: '〔比較的高い位置にある若葉・芽などを〕食べる'},
  {word: 'fodder', meaning: '飼料'},
  {word: 'disturbing', meaning: '不穏な'},
  {word: 'extermination', meaning: '絶滅'},
  {word: 'fort', meaning: '要塞、居場所'},
  {word: 'dotted', meaning: '散らばった、'},
  {word: 'dot', meaning: '点在する'},
  {word: 'Prairie', meaning: '大草原'},
  {word: 'understory', meaning: '下層植生'},
  {word: 'shrub', meaning: '低木'},
  {word: 'dormancy', meaning: '休止状態、dormant'},
  {word: 'fair-weather', meaning: '好天気'},
  {word: 'bode', meaning: '予兆となる'},
  {word: 'ill', meaning: '悪い'},
  {word: 'warsening', meaning: '悪化'},
  {word: 'plight', meaning: '苦境'},
  {word: 'encroach', meaning: '侵入する'},
  {word: 'an indefinite period', meaning: '無期限'},
  {word: 'insure', meaning: '保証する'},
  
  {word: 'omit', meaning: '省く'},
  {word: 'magnify', meaning: '拡大する'},
  {word: 'annotation', meaning: '注釈'},
  {word: 'permafrost', meaning: '永久凍土'},
  {word: 'perpendicular', meaning: '垂直に'},
  
  {word: 'whole', meaning: '無傷の'},
  
  {word: 'stream', meaning: '小川'},
  {word: 'gravel', meaning: '小石、瓦礫'},
  {word: 'tribute', meaning: '貢物'},
  {word: 'alternate between A and B', meaning: 'AとBで交互に、変わるがわる'},
  {word: 'boulders', meaning: '巨石'},
  {word: 'current', meaning: '流れ'},
  {word: 'waning', meaning: '弱まっている'},
  {word: 'silt', meaning: '泥'},
  {word: 'choked', meaning: '詰まっている'},
  {word: 'cobbles', meaning: '丸石、中くらいの石'},
  {word: 'tributaries', meaning: '支流、従属している'},
  {word: 'abrasion', meaning: '摩耗'},
  {word: 'wears', meaning: 'すり減る'},
  {word: 'floodplain', meaning: '氾濫原（川が氾濫時に水が広がる平地）'},
  {word: 'Bars', meaning: '砂州、砂堆（川や海にできる砂の堆積）'},
  {word: 'transient', meaning: '一時的な、短期間の'},
  {word: 'recharted', meaning: '再測量された、再び地図に記された'},
  {word: 'inertia', meaning: '慣性（物体が動き続けようとする性質）'},
  {word: 'drives', meaning: '駆動させる、動かす、押し進める'},
  {word: 'dumps', meaning: '投げ捨てる、放出する'},
  {word: 'grind', meaning: 'すりつぶす、砕く'},
  {word: 'excess', meaning: '余分な'},
  
  {word: 'sickle', meaning: '鎌'},
  {word: 'cereal', meaning: '穀物'},
  {word: 'mortars', meaning: '臼（うす）'},
  {word: 'pestles', meaning: '乳棒（にゅうぼう）、杵（きね）'},
  {word: 'limestone', meaning: '石灰岩'},
  {word: 'basalt', meaning: '玄武岩'},
  {word: 'vessels', meaning: '容器、船'},
  {word: 'teeth', meaning: '歯'},
  {word: 'gazelle', meaning: 'ガゼル（カモシカの一種）'},
  {word: 'lush', meaning: '青々とした、豊かな'},
  {word: 'goats', meaning: 'ヤギ'},
  {word: 'equids', meaning: 'ウマ科の動物（馬、ロバ、シマウマなど）'},
  {word: 'obsidian', meaning: '黒曜石'},
  {word: 'on the rise', meaning: '増加中で、上昇して'},
  {word: 'perishables', meaning: '腐りやすいもの（生鮮食品など）'},
  {word: 'on the increase', meaning: '増加している、増えつつある'},
  {word: 'beads', meaning: 'ビーズ（装飾用の小さな玉）'},
  {word: 'pendants', meaning: 'ペンダント（首飾りの飾り部分）'},
  {word: 'gemstones', meaning: '宝石'},
  {word: 'marine shells', meaning: '海の貝殻'},
  
  {word: 'secular', meaning: '世俗の、religionsの逆'},
  {word: 'noble', meaning: '貴族'},
  {word: 'serve as', meaning: '~として使える'},
  {word: 'exemplary', meaning: '模範的な'},
  {word: 'predynastic', meaning: '王朝が誕生する前の'},
  {word: 'terrain', meaning: '地域、地帯、領域'},
  {word: 'predynastic', meaning: '王朝成立以前の'},
  {word: 'dynastic', meaning: '王朝の、王朝時代の'},
  {word: 'Early Dynastic Period', meaning: '初期王朝時代（紀元前3000～2600年頃）'},
  {word: 'state formation', meaning: '国家形成'},
  {word: 'apex', meaning: '頂点、先端'},
  {word: 'wadi', meaning: 'ワジ（乾季に乾くが雨季に水が流れる谷や川床）'},
  {word: 'alluvial', meaning: '沖積の（川が運んだ土砂が堆積してできた）'},
  {word: 'conduit', meaning: '経路、伝達手段'},
  {word: 'monopolize', meaning: '独占する'},
  {word: 'artery', meaning: '主要道路、幹線（動脈という意味もある）'},
  {word: 'survey', meaning: '調査、測量（する）'},
  {word: 'drill core', meaning: '好都合な、適切な'},
  {word: 'opportune', meaning: ''},
  {word: 'prominent', meaning: '目立つ、突出した'},
  {word: 'constriction', meaning: '狭窄、締め付け'},
  {word: 'junction', meaning: '接続点、交差点'},
  {word: 'pasturage', meaning: '牧草地'},
  
  {word: '"No, there is a submission process—yes."', meaning: '「いや、あるよ。つまり、提出手続きはちゃんとあるんだ。」'},
  
  {word: 'droplets', meaning: '雫、小滴'},
  {word: 'wear off', meaning: '（効果などが）なくなる'},
  {word: 'harness', meaning: '活用する'},
  {word: 'Timid', meaning: '臆病な'},
  {word: 'Fearful', meaning: '怖がりな'},
  {word: 'come into existence', meaning: '誕生する'},
  {word: 'speculation', meaning: '予想、見積もり'},
  {word: 'In turn', meaning: '順に'},
  {word: 'supplant', meaning: '取って代わる、地位を奪う'},
  {word: 'few', meaning: '主語になる、few people'},
  {word: 'scrap', meaning: '計画を廃止する'},
  {word: 'convinced that S + V', meaning: '~だと確信して、、'},
  {word: 'amend', meaning: '修正する'},
  {word: 'blast', meaning: '爆破する、激しく非難する'},
  {word: 'take up the slack', meaning: '不足分を補う'},
  {word: 'pass to', meaning: '〜へ引き継ぐ'},
  {word: 'strain', meaning: '負荷をかける'},
  {word: 'from the picture', meaning: 'この状況から'},
  {word: 'internal affairs', meaning: '内部管理'},
  {word: 'in times of trouble', meaning: '困難時に'},
  
  {word: 'primate', meaning: '霊長類'},
  {word: 'ingest', meaning: '摂取する'},
  {word: 'incremental', meaning: '増加している、増加の'},
  {word: 'extent to which', meaning: 'how much'},
  {word: 'sneeringly', meaning: '嘲笑うように'},
  {word: 'Hence', meaning: 'したがって'},
  {word: 'initiative', meaning: '新しい計画、主導権'},
  {word: 'slanted', meaning: '傾いている'},
  
  {word: 'it isn\'t every day that', meaning: 'それは滅多にない'},
  
  {word: 'Isles', meaning: '諸島'},
  {word: 'comprise', meaning: '構成する　comprise of'},
  {word: 'utilitarian', meaning: '実用的な'},
  {word: 'underestimate', meaning: '過小評価する'},
  {word: 'mundane', meaning: '平凡な・日常的な'},
  {word: 'gloss', meaning: '光沢・つや'},
  {word: 'statuettes', meaning: '小さな彫像'},
  {word: 'worship', meaning: '礼拝・崇拝'},
  {word: 'mythology', meaning: '神話'},
  {word: 'province', meaning: '州'},
  {word: 'villa', meaning: '田舎の大豪邸'},
  {word: 'A bound B to C', meaning: 'AがBとCを結びつけた'},
  {word: 'amply', meaning: '十分に'},
  {word: 'pretensions', meaning: '誇示'},
  {word: 'taste', meaning: '趣味、センス'},
  {word: 'mosaics', meaning: '「mosaic（モザイク）」の複数形 で、小さな石やタイルを組み合わせた装飾芸術を指す'},
  {word: 'influx', meaning: '流入'},
  {word: 'spring', meaning: '湧水、sacred-springで神聖な湧水'},
  {word: 'stylistically', meaning: '様式的に'},
  {word: 'owe A to B', meaning: 'AはBのおかげである。'},
  {word: 'likewise', meaning: '同様に'},
  {word: 'realm', meaning: '領域'},
  {word: 'amass', meaning: '集める、蓄積する'},
  {word: 'fortified', meaning: '要塞化された / 防御を強化された'},
  {word: 'forts', meaning: '砦（とりで） / 要塞'},
  {word: 'modest', meaning: '控えめな / それほど大きくない'},
  {word: 'sheer', meaning: '（規模や大きさが）とてつもない / 圧倒的な'},
  {word: 'dominance', meaning: '支配 / 優位性'},
  {word: 'epitomized', meaning: '典型的に表した / 体現した'},
  {word: 'imperial', meaning: '帝国の / 皇帝の'},
  {word: 'supremacy', meaning: '至高の地位 / 最高権力'},
  {word: 'accentuate', meaning: '強調する'},
  {word: 'unyielding', meaning: '頑固な / 屈しない / 断固とした'},
  
  {word: 'castes', meaning: 'カースト、階級'},
  {word: 'mated', meaning: '交尾した / つがいになった'},
  {word: 'consort', meaning: '配偶者 / 付き合う'},
  {word: 'burrows', meaning: '巣'},
  {word: 'desiccated', meaning: '乾燥した'},
  {word: 'optimum', meaning: '最良の'},
  {word: 'subterranean', meaning: '地下の'},
  {word: 'saliva', meaning: '唾液'},
  {word: 'ridges', meaning: '隆起、屋根'},
  {word: 'protrude', meaning: '外へ突き出る'},
  {word: 'cellar', meaning: '地下室'},
  {word: 'attic', meaning: '屋根裏'},
  {word: 'a long shot', meaning: '見込みが低い'},
  
  {word: 'far in excess of', meaning: '~を遥かに超えて、in excess of ~'},
  {word: 'lay the foundation for ～', meaning: '~の基盤を作る'},
  {word: 'clumsy', meaning: '不器用'},
  {word: 'bulky', meaning: 'かさばる'},
  {word: 'dear to ～', meaning: '~にとって大切な'},
  {word: 'set ～ ablaze', meaning: '火をつける'},
  {word: 'millennia', meaning: '-千年'},
  {word: 'lasted down to ～', meaning: '~まで存続する'},
  {word: 'the common era', meaning: '西暦'},
  {word: 'yielding to ～', meaning: '~にとって変わる'},
  {word: 'once and for all', meaning: '完全に・決定的に'},
  {word: 'incised', meaning: '刻み込まれた'},
  {word: 'stylus', meaning: '筆記ペン'},
  {word: 'dub', meaning: '名付ける'},
  {word: 'cuneiform', meaning: '楔形文字'},
  {word: 'hallmark', meaning: '特徴・性質'},
  {word: 'scribes', meaning: '筆記者'},
  {word: 'doubly', meaning: '2倍、'},
  {word: 'multitudinous', meaning: '非常に多い'},
  {word: 'batches', meaning: 'バッチ、in baches でひとまとまりで'},
  {word: 'mines', meaning: '鉱物'},
  {word: 'minting', meaning: '製造、mint'},
  {word: 'multiply', meaning: '増加する'},
  {word: 'correspondence', meaning: '通信、やり取り'},
  {word: 'courier', meaning: '運び屋'},
  {word: 'finished products', meaning: '加工品・製品'},
  {word: 'exempt A from B', meaning: 'BのAを免除数る'},
  {word: 'concessions', meaning: '特権、譲歩'},
  {word: 'quarters', meaning: '住居区'},
  {word: 'add up to ～', meaning: '最終的に~となる'},
  {word: 'aristocratic', meaning: '貴族の'},
  {word: 'Even so', meaning: 'despite that'},
  
  {word: 'altogether', meaning: '完全に、completely'},
  {word: 'terrific', meaning: '素晴らしい！！、ものすごい'},
  {word: 'look over', meaning: '目をとおす'},
  {word: 'culvert', meaning: '暗渠'},
  {word: 'pass up', meaning: '見送る'},
  {word: 'wax', meaning: 'ろう、ツルツル滑る'},
  {word: 'stomates', meaning: '気孔'},
  {word: 'keep ~ from ~', meaning: '～が…するのを防ぐ'},
  {word: 'reinforce a point that ~', meaning: '~という点を強調する'},
  {word: 'be cast as ~', meaning: '~と位置付けられる'},
  {word: 'come to ~', meaning: '~するようになる'},
  {word: 'be destined to ~', meaning: '~する運命にある'},
  {word: 'have to do with ~', meaning: '~と関係がある'},
  {word: 'solitary', meaning: '孤独な'},
  {word: 'the unknown', meaning: '未知な世界'},
  {word: 'faithfully', meaning: '忠実に'},
  {word: 'brainchild', meaning: '発案'},
  {word: 'ballet', meaning: 'バレー'},
  {word: 'there goes', meaning: '失われる'},
  {word: 'singular', meaning: '単数系'},
  
  {word: 'mammalian', meaning: '哺乳類の'},
  {word: 'swept', meaning: '掃く、吹き払う、押し流す'},
  {word: 'somewhat', meaning: '多少、やや'},
  {word: 'peopling', meaning: '人々の移住・定住'},
  {word: 'paleoecologists', meaning: '古生態学者'},
  {word: 'dune', meaning: '砂丘'},
  {word: 'pollen', meaning: '花粉'},
  
  {word: 'gamble', meaning: 'ギャンブル'},
  {word: 'be bound to ~', meaning: '~するのはほぼ確実である'},
  {word: 'petals', meaning: '花びら'},
  {word: 'dispense with', meaning: 'なしで済ませる'},
  {word: 'impediment to ~', meaning: '～への障害'},
  {word: 'deciduous', meaning: '落葉樹（対: 常緑樹）'},
  {word: 'be bare of', meaning: '～を欠いている（一時的）'},
  {word: 'gusty', meaning: '突風的な、突発的な'},
  {word: 'shed', meaning: '放出する'},
  {word: 'snatched', meaning: 'ひったくる、奪い取る'},
  {word: 'vagaries', meaning: '予測不可能な変化、気まぐれ'},
  {word: 'two-edged sword', meaning: '諸刃の剣'},
  {word: 'whisked', meaning: '素早く運ぶ、払いのける'},
  {word: 'trapped', meaning: '閉じ込められる、捕まる'},
  {word: 'turbulence', meaning: '乱気流、激しい動き'},
  {word: 'stigma', meaning: '柱頭'},
  {word: 'whisk', meaning: '素早く運ぶ'}
  ];
  

let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let missedWords = []; // 間違えた単語を保存する配列
let selectedWordCount = 0;
let timer = null;
const TIME_PER_QUESTION = 5000; // 5秒

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomChoices(correctMeaning) {
    const otherMeanings = words
        .filter(w => w.meaning !== correctMeaning)
        .map(w => w.meaning);
    const randomMeanings = shuffleArray(otherMeanings).slice(0, 3);
    return shuffleArray([...randomMeanings, correctMeaning]);
}

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function displayWord() {
    const currentWord = shuffledWords[currentWordIndex];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('question-count').textContent = 
        `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // 既存のタイムバーを削除
    const existingTimerBar = document.querySelector('.timer-bar-container');
    if (existingTimerBar) {
        existingTimerBar.remove();
    }
    
    const choices = getRandomChoices(currentWord.meaning);
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    // 新しいタイムバーを追加
    const timerBarHTML = `
        <div class="timer-bar-container">
            <div class="timer-bar" id="timer-bar"></div>
        </div>
    `;
    choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, button));
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    
    startTimer();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const accuracy = Math.round((score / shuffledWords.length) * 100);
    
    // 一旦HTMLを更新
    container.innerHTML = `
        <h2>テスト結果</h2>
        <div class="result-summary">
            <p>スコア: ${score}/${shuffledWords.length} (${accuracy}%)</p>
        </div>
        ${missedWords.length > 0 ? `
            <div class="missed-words">
                <h3>間違えた単語</h3>
                <div class="missed-words-list">
                    ${missedWords.map(word => `
                        <div class="missed-word-item">
                            <span class="word">${word.word}</span>
                            <span class="meaning">${word.meaning}</span>
                        </div>
                    `).join('')}
                </div>
                <button id="retry-missed" class="retry-btn">
                    間違えた単語でもう一度テストする
                </button>
            </div>
        ` : `
            <div class="perfect-score">
                <p>完璧です！全問正解おめでとうございます！</p>
            </div>
        `}
        <button id="retry-all" class="retry-btn">最初からやり直す</button>
    `;

    // HTMLの更新後にイベントリスナーを設定
    const retryMissedBtn = document.getElementById('retry-missed');
    if (retryMissedBtn) {
        retryMissedBtn.addEventListener('click', () => {
            // quiz-containerを元の状態に戻す
            container.innerHTML = `
                <div class="word-display">
                    <p id="word"></p>
                </div>
                <div class="choices-container" id="choices">
                </div>
                <div class="result" id="result"></div>
                <div class="progress">
                    <span id="score">スコア: 0</span>
                    <span id="question-count">問題: 0/0</span>
                </div>
            `;
            
            shuffledWords = shuffleArray([...missedWords]);
            missedWords = [];
            currentWordIndex = 0;
            score = 0;
            displayWord();
        });
    }

    const retryAllBtn = document.getElementById('retry-all');
    if (retryAllBtn) {
        retryAllBtn.addEventListener('click', () => {
            showHomeScreen(); // 最初からやり直すときはホーム画面に戻る
        });
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    // タイマーとタイマー関連の要素をクリア
    clearTimeout(timer);
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '0';
    }
    
    const correctAnswer = shuffledWords[currentWordIndex].meaning;
    const allButtons = document.querySelectorAll('.choice-btn');
    
    allButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').textContent = '正解！';
        document.getElementById('result').className = 'result correct';
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        document.getElementById('result').textContent = '不正解...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);
    }
    
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    setTimeout(() => {
        currentWordIndex++;
        if (currentWordIndex >= shuffledWords.length) {
            showResults();
        } else {
            displayWord();
        }
    }, 1000);
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    if (!timerBar) return;
    
    timerBar.classList.remove('warning', 'danger');
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    if (timer) {
        clearTimeout(timer);
    }
    
    setTimeout(() => {
        if (timerBar) timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        if (timerBar) timerBar.classList.add('warning');
    }, TIME_PER_QUESTION * 0.6);
    
    setTimeout(() => {
        if (timerBar) timerBar.classList.add('danger');
    }, TIME_PER_QUESTION * 0.8);

    timer = setTimeout(() => {
        const correctAnswer = shuffledWords[currentWordIndex].meaning;
        const allButtons = document.querySelectorAll('.choice-btn');
        
        // 時間切れの場合、すべてのボタンを無効化し、正解を赤色で表示
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('incorrect'); // 正解を赤色で表示
            }
        });

        document.getElementById('result').textContent = '時間切れ...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    }, TIME_PER_QUESTION);
}

// ホーム画面の表示関数を追加
function showHomeScreen() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="home-screen">
            <h2>テストする単語数を選んでください</h2>
            <div class="word-count-options">
                <button class="word-count-btn" data-count="10">10単語</button>
                <button class="word-count-btn" data-count="30">30単語</button>
                <button class="word-count-btn" data-count="100">100単語</button>
                <button class="word-count-btn" data-count="0">全部</button>
            </div>
            <p class="total-words">総単語数: ${words.length}語</p>
        </div>
    `;

    // 単語数選択ボタンのイベントリスナーを設定
    const buttons = document.querySelectorAll('.word-count-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedWordCount = parseInt(button.dataset.count);
            startQuiz();
        });
    });
}

// クイズ開始関数を追加
function startQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="word-display">
            <p id="word"></p>
        </div>
        <div class="choices-container" id="choices">
        </div>
        <div class="result" id="result"></div>
        <div class="progress">
            <span id="score">スコア: 0</span>
            <span id="question-count">問題: 0/0</span>
        </div>
    `;
    
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    shuffleWords();
    displayWord();
}

// window.onloadを修正
window.onload = () => {
    showHomeScreen();
}; 
