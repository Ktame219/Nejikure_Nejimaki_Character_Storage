function toggleSec(id){const body=document.getElementById(id+'-body');const icon=document.getElementById(id+'-icon');if(!body)return;const isOpen=!body.classList.contains('collapsed');body.classList.toggle('collapsed',isOpen);if(icon)icon.classList.toggle('open',!isOpen);}

const CLANS={
  '第伍特課':[
    {rank:'巡察官',order:1,name:'撤退支援',timing:'登場するシーン中',limit:'何回でも使用可能',effect:'お前は自身が登場するシーンでお前が獲得する【リワード】を任意に選択し、それを獲得しないことができる。お前が選択した【リワード】の分配の処理では、お前はそのシーンに登場していないものとして分配が行われる。'},
    {rank:'執行官',order:2,name:'追跡捜査',timing:'プロッティング中',limit:'3回／ゲームプレイ',effect:'任意のプレイヤー1人を指定する。そのプレイヤーはお前にプロッティングで隠している自分のダイスの出目を確認させなければならない。'},
    {rank:'特務官',order:3,name:'執行特権',timing:'登場するシーン中',limit:'何回でも使用可能',effect:'そのシーンが「対立シーン」である時、シーンの解決判定でお前が最も高い順位となったとしても、お前はそのシーンに登場する任意のキャラクター1人への【敵意】を「1点」獲得できる。'},
  ],
  'N.M.I':[
    {rank:'廃墟士',order:1,name:'枯渇採掘',timing:'登場するシーン中',limit:'何回でも使用可能',effect:'お前がこのシーンの【リワード】の獲得の処理で【スクラップ】を「1点」以上獲得する時、さらに【スクラップ】を「1点」獲得する。'},
    {rank:'主任',order:2,name:'販売網',timing:'【メンテナンス】の処理中',limit:'1回／シーン',effect:'お前は自身の獲得している、リグに配置していないパーツカード1枚を捨て、【スクラップ】を「3点」獲得する。'},
    {rank:'技監',order:3,name:'成果主義',timing:'サイクル終了時',limit:'何回でも使用可能',effect:'お前が他のどのPCよりも多く【スクラップ】を獲得している時に使用できる。【N.M.Iからの絆】を「1点」獲得する。'},
  ],
  'ネームレス':[
    {rank:'野良',order:1,name:'同胞意識',timing:'登場するシーン中',limit:'何回でも使用可能',effect:'そのシーンが「協力シーン」である時、【因縁】の獲得のタイミングでお前は通常の処理の代わりに、シーンに登場するお前以外の全てのPCへの【絆】を「1点」ずつ獲得する。'},
    {rank:'歴戦',order:2,name:'処世術',timing:'登場するシーン中',limit:'何回でも使用可能',effect:'お前が「協力シーン」に登場している時、お前の獲得する【リワード】を、そのシーンの解決判定で代わりに最も順位が高かったPCと同じものに変更する。'},
    {rank:'伝説',order:3,name:'秩序の象徴',timing:'登場するシーン中',limit:'1回／ゲームプレイ',effect:'そのシーンの「スタンスの宣言」で「対立」を宣言したプレイヤーが過半数に満たない時に使用できる。そのシーンを「協力シーン」にすることができる。'},
  ],
  '再興者同盟':[
    {rank:'灰徒',order:1,name:'構造知識',timing:'プロッティング中',limit:'3回／ゲームプレイ',effect:'お前はプロッティングでダイスを2つ使用することができる。ダイスを公開する時、お前は2つのダイスを公開し、その中から任意の1つを選んで自分のダイスの出目とする。'},
    {rank:'拾典',order:2,name:'連鎖反応',timing:'プロッティング中',limit:'1回／ゲームプレイ',effect:'【プロット値】が「1番」と「6番」以外の【区域】を選ぶ。その上に配置されているシーンカードを山札に戻し、山札からシーンカードを1枚引いて指定した【区域】に配置する。'},
    {rank:'戯諜',order:3,name:'抜け道',timing:'プロッティング直後',limit:'1回／ゲームプレイ',effect:'お前がプロッティングで公開した出目が「1」か「6」でない時に使用できる。お前が公開した出目と同じ【プロット値】の【区域】のシーンカードを山札に戻し、山札から1枚引いてその【区域】に配置する。'},
  ],
  'ノアの落とし子':[
    {rank:'斑友',order:1,name:'旅装束',timing:'常時',limit:'なし',effect:'お前はリグに配置していないパーツカードを無制限に所持しておくことができる。'},
    {rank:'斑長',order:2,name:'魔改造',timing:'【メンテナンス】の処理中',limit:'1回／シーン',effect:'お前は自身の獲得している、リグに配置していないパーツカード1枚を捨て、パーツカードを1枚引く。'},
    {rank:'首課格',order:3,name:'現地改修',timing:'登場するシーン中',limit:'1回／ゲームプレイ',effect:'お前はそのシーンの【リワード】の獲得の処理に加えて【メンテナンス】の処理を行うことができる。'},
  ],
  'コルネリア家':[
    {rank:'裏仔',order:1,name:'路地裏の掟',timing:'《ネグラに戻る》のシーン中',limit:'何回でも使用可能',effect:'このシーンの【リワード】の獲得の処理では、お前は設備を2つ宣言し、その特殊効果の適用を受けることができる。'},
    {rank:'契手',order:2,name:'鉄砲玉',timing:'《ネグラに戻る》のシーン中',limit:'1回／ゲームプレイ',effect:'シーンに登場するお前以外のPCは、【リワード】の処理として設備の特殊効果の適用を受けることができない。'},
    {rank:'血盟',order:3,name:'不夜城',timing:'サイクル終了時',limit:'1回／ゲームプレイ',effect:'追加でサイクルの処理を行う。このサイクルでは【不夜城】を修得しているPC以外のプレイヤーはプロッティングを行えず、そうしたPC以外はシーンに参加することができない。'},
  ],
};
const SS=[
  {id:'daitan',name:'大胆不敵',timing:'ショウダウン中',limit:'1回／ゲームプレイ',effect:'【ガッツ】がゼロになった直後に使用できる。そのステップのアクションでお前が宣言したパーツを全て【破損】させて、お前の【ガッツ】を「1点」にする。'},
  {id:'reisei',name:'冷静沈着',timing:'ショウダウン中',limit:'何回でも使用可能',effect:'お前がブレイクを宣言した次のランの開始時、お前は追加で【ガッツ】を「1点」獲得する。'},
  {id:'rouren',name:'狡猾老獪',timing:'ショウダウン中',limit:'3回／ゲームプレイ',effect:'お前のいるエリアを任意のエリアに変更する。「離脱」から復帰して任意のエリアに自身のPCコマを移動させてもいい。'},
  {id:'tensin',name:'天真爛漫',timing:'ショウダウン中',limit:'何回でも使用可能',effect:'お前がショウダウン中に行う応援では、チェックを入れる【絆】の点数にかかわらず任意の数だけ行為判定のダイスを振り直すことができる。'},
  {id:'onkou',name:'温厚篤実',timing:'ショウダウン中',limit:'1回／ゲームプレイ',effect:'お前の獲得している、チェックの入っている【絆】1つのチェックを取り除く。'},
  {id:'akugyaku',name:'悪逆非道',timing:'ショウダウン中',limit:'何回でも使用可能',effect:'お前は自身の持つ【絆】を【敵意】であるものとして扱うことができる。'},
];
const NAMES={
  男子:{11:'イオリ',12:'ヒカル',13:'ユウセイ',14:'トーヤ',15:'コウ',16:'ソータ',22:'ハルト',23:'レツ',24:'シュージ',25:'コウガ',26:'シンヤ',33:'リョウ',34:'キリト',35:'ショーゴ',36:'ダイキ',44:'バン',45:'タイガ',46:'ユージン',55:'ジョージ',56:'カイ',66:'ジン'},
  女子:{11:'カズサ',12:'メイ',13:'シオン',14:'ルリ',15:'アカネ',16:'アリサ',22:'ナオミ',23:'サツキ',24:'レイ',25:'チアキ',26:'チヒロ',33:'アスカ',34:'リナ',35:'ヒナタ',36:'ミサキ',44:'ムツミ',45:'マリカ',46:'アンナ',55:'ミノリ',56:'エマ',66:'ハルカ'},
  お偉方:{11:'カブラギ',12:'スドウ',13:'ナオモト',14:'ヒカワ',15:'ナガセ',16:'スメラギ',22:'ヤガミ',23:'アカツキ',24:'サオトメ',25:'テンドウ',26:'キリュウ',33:'サカキ',34:'ナツメ',35:'イガラシ',36:'ヒジリ',44:'ヒイラギ',45:'タチバナ',46:'カガミ',55:'マキシマ',56:'ナギサ',66:'オニツカ'},
  変わり種:{11:'パンチョー',12:'ショーネン',13:'カントク',14:'ホクロ',15:'ノッポ',16:'チビスケ',22:'サスライ',23:'ブライ',24:'ナナシノ',25:'フーテン',26:'シンイリ',33:'バイセン',34:'アニキ',35:'アネゴ',36:'アネサン',44:'メガネ',45:'オタクワン',46:'ダンナ',55:'ボーズ',56:'ヒメサマ',66:'ボス'},
};
const RW=[
  {label:'単語1（色・天候）',t:{11:'レッド',12:'ブルー',13:'グリーン',14:'イエロー',15:'ホワイト',16:'ブラック',22:'ストーム',23:'フロスト',24:'スカイ',25:'スノウ',26:'テンペスト',33:'サベージ',34:'マッド',35:'ワイルド',36:'ブリティ',44:'グリム',45:'ラスト',46:'シャドウ',55:'フルムーン',56:'クレセント',66:'ノヴァ'}},
  {label:'単語2（生き物・武器）',t:{11:'ビースト',12:'バンサー',13:'キャット',14:'ドッグ',15:'レイヴン',16:'ヴァイパー',22:'ブレイド',23:'エッジ',24:'バレット',25:'キャノン',26:'アームズ',33:'ローズ',34:'リリィ',35:'ブロッサム',36:'ドロップ',44:'ファントム',45:'ドラグーン',46:'コロッサス',55:'ギルティ',56:'バニッシュ',66:'ドレッドノート'}},
  {label:'単語3（動き・職種）',t:{11:'ウォーカー',12:'ランナー',13:'ローバー',14:'ホッパー',15:'ウォッチャー',16:'クロウラー',22:'ジャンカー',23:'レッカー',24:'ドラッガー',25:'ドリフター',26:'ストライダー',33:'シューター',34:'ガンナー',35:'リーパー',36:'ブレイカー',44:'ストーカー',45:'ハンター',46:'スクレイパー',55:'グラインダー',56:'ドーザー',66:'アンサラー'}},
  {label:'単語4（その他）',t:{11:'ノーツ',12:'チェレスト',13:'パラティーソ',14:'フローリア',15:'ヴィラン',16:'クエスト',22:'スチール',23:'アイアン',24:'ラスティ',25:'スチーム',26:'メタル',33:'レクイエム',34:'ゴスペル',35:'カノン',36:'アリア',44:'ノーチラス',45:'ジャッジメント',46:'テスタメント',55:'ミスティック',56:'(1D6-1)式',66:'ジ・'}},
];
const BGT={
  minou:{11:'家族',12:'逃亡者',13:'クラン',14:'ジャンク漁り',15:'不良',16:'貧民',22:'高貴な生まれ',23:'覚えていない',24:'犯罪者',25:'かつての有名人',26:'放浪者',33:'集落',34:'荒事屋',35:'商人',36:'信者/神官',44:'メカニック',45:'孤独',46:'忌み子',55:'愛されるもの',56:'インテリ',66:'一般人'},
  kikkake:{11:'誕生',12:'継承',13:'発見',14:'略奪',15:'偶然',16:'忘却',22:'鍵い',23:'購入',24:'報酬',25:'実験',26:'勧誘',33:'作製',34:'贈与',35:'共謀',36:'ネジクレ',44:'何でも屋',45:'竹馬の友',46:'遺物',55:'応用神',56:'クラン',66:'統制府の犬'},
  negai:{11:'破壊',12:'対向心',13:'喪失',14:'創作者',15:'自由',16:'憧憬',22:'立身',23:'孤高',24:'諦念',25:'不可能',26:'征服',33:'財産',34:'蒐集',35:'復興',36:'治療',44:'旅',45:'力',46:'食材',55:'緑',56:'絆',66:'安全'},
};

function d6(){return Math.ceil(Math.random()*6);}
function d66roll(){const a=d6(),b=d6();return{roll:a*10+b,a,b};}
function lookup(tbl,roll){
  if(tbl[roll])return tbl[roll];
  const keys=Object.keys(tbl).map(Number).sort((a,b)=>a-b);
  for(const k of keys)if(k>=roll)return tbl[k];
  return tbl[keys[keys.length-1]];
}

let rigPicked=[];
let rigRolled=[];

let d66ActivePanel=null;
let d66ActiveBgKey=null;

function updateD66BtnStyles(activePanel,activeBgKey){
  const btnMap={name:'d66-btn-name',rig:'d66-btn-rig',minou:'d66-btn-minou',kikkake:'d66-btn-kikkake',negai:'d66-btn-negai'};
  Object.entries(btnMap).forEach(([k,id])=>{
    const btn=document.getElementById(id);if(!btn)return;
    let isActive=false;
    if(k==='name'&&activePanel==='name')isActive=true;
    else if(k==='rig'&&activePanel==='rig')isActive=true;
    else if((k==='minou'||k==='kikkake'||k==='negai')&&activePanel==='bg'&&activeBgKey===k)isActive=true;
    btn.classList.toggle('ac',isActive);
  });
}

function toggleD66(panelKey,rollFn,bgKey){
  const isSame=d66ActivePanel===panelKey&&(panelKey!=='bg'||d66ActiveBgKey===bgKey);
  ['d66-name','d66-rig','d66-bg'].forEach(i=>document.getElementById(i).className='d66-panel');
  if(isSame){
    d66ActivePanel=null;d66ActiveBgKey=null;
    updateD66BtnStyles(null,null);
    return;
  }
  d66ActivePanel=panelKey;d66ActiveBgKey=bgKey||null;
  updateD66BtnStyles(panelKey,bgKey);
  rollFn();
}

function rollName(){
  const r=d66roll();
  const el=document.getElementById('d66-name');
  el.className='d66-panel show';
  let h=`<div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:8px">🎲 ${r.a} と ${r.b} → ${r.roll}</div>`;
  ['男子','女子','お偉方','変わり種'].forEach(cat=>{
    const v=lookup(NAMES[cat],r.roll);
    h+=`<div class="d66-row"><span class="d66-label">${cat}</span><span class="d66-val">${v}</span><button class="d66-apply" onclick="applyF('f-name','${v}','d66-name')">使う</button></div>`;
  });
  el.innerHTML=h;
}

function rollRig(){
  const el=document.getElementById('d66-rig');
  el.className='d66-panel show';
  rigPicked=[];
  rigRolled=RW.map(cat=>{const r=d66roll();return{r,v:lookup(cat.t,r.roll)};});
  renderRigPanel();
}

function renderRigPanel(){
  const el=document.getElementById('d66-rig');
  let h='<div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:10px">各カテゴリからD66で結果を確認し、好きな2つを選んで組み合わせてください</div>';
  RW.forEach((cat,ci)=>{
    const {r,v}=rigRolled[ci];
    const isPicked=rigPicked.includes(ci);
    const isDisabled=!isPicked&&rigPicked.length>=2;
    h+=`<div class="rig-step">
      <div class="rig-step-title">${cat.label}　<span style="font-size:10px;color:var(--color-text-tertiary)">🎲 ${r.a}と${r.b}→${r.roll}</span></div>
      <div class="word-chips">
        <span class="wchip${isPicked?' picked':''}${isDisabled?' disabled':''}" data-ci="${ci}" onclick="toggleRigWord(${ci})">${v}</span>
      </div>
    </div>`;
  });
  const combo=rigPicked.map(ci=>rigRolled[ci]?.v||'').join('');
  h+=`<div class="rig-preview" id="rig-prev">${combo||'単語を2つ選んでください'}</div>`;
  if(combo){
    h+=`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">
      <button class="d66-apply" onclick="applyF('f-rig','${combo}','d66-rig')">「${combo}」を使う</button>
      <button class="btn sm" onclick="rollRigDirect()"><i class="ti ti-refresh" aria-hidden="true"></i> 振り直す</button>
    </div>`;
  } else {
    h+=`<button class="btn sm" onclick="rollRigDirect()" style="margin-top:4px"><i class="ti ti-refresh" aria-hidden="true"></i> 振り直す</button>`;
  }
  el.innerHTML=h;
}

function rollRigDirect(){
  rigPicked=[];
  rigRolled=RW.map(cat=>{const r=d66roll();return{r,v:lookup(cat.t,r.roll)};});
  renderRigPanel();
}

function toggleRigWord(ci){
  const idx=rigPicked.indexOf(ci);
  if(idx>=0){rigPicked.splice(idx,1);}
  else if(rigPicked.length<2){rigPicked.push(ci);}
  else return;
  renderRigPanel();
}

function rollBG(key){
  const r=d66roll();
  const el=document.getElementById('d66-bg');
  el.className='d66-panel show';
  const v=lookup(BGT[key],r.roll);
  const label={minou:'ミノウエ',kikkake:'キッカケ',negai:'ネガイ'}[key];
  el.innerHTML=`<div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:8px">🎲 ${r.a} と ${r.b} → ${r.roll}</div>
    <div class="d66-row"><span class="d66-label">${label}</span><span class="d66-val">${v}</span><button class="d66-apply" onclick="applyF('f-${key}','${v}','d66-bg')">使う</button></div>`;
}

function applyF(id,val,panelId){
  document.getElementById(id).value=val;
  if(cid&&chars[cid]){
    const map={'f-name':'name','f-rig':'rig','f-minou':'minou','f-kikkake':'kikkake','f-negai':'negai'};
    if(map[id])chars[cid][map[id]]=val;
  }
  document.getElementById(panelId).className='d66-panel';
  d66ActivePanel=null;d66ActiveBgKey=null;
  updateD66BtnStyles(null,null);
}

const KEY='nj_v7';
let chars={},cid=null;
async function load(){try{const raw=localStorage.getItem(KEY);if(raw)chars=JSON.parse(raw);}catch(e){}try{const r=await window.storage?.get(KEY);if(r&&r.value)chars=JSON.parse(r.value);}catch(e2){}showScreen('lv');renderList();}
async function store(){try{localStorage.setItem(KEY,JSON.stringify(chars));}catch(e){}try{await window.storage?.set(KEY,JSON.stringify(chars));}catch(e){}}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function ec(){return{name:'',rig:'',player:'',gender:'',age:'',line:'',minou:'',minouDesc:'',kikkake:'',kikkakeDesc:'',negai:'',negaiDesc:'',clan:'',rank:'',order:'',kurogane:new Array(10).fill(false),ko:false,ssId:'',kizuna:[{target:'',type:'絆',points:''}],memo:'',img:'',records:[],rigParts:[],rigLayout:{mainframe:{x:3,y:1},parts:[]}};}

function renderList(){
  const el=document.getElementById('clist');el.innerHTML='';
  Object.keys(chars).forEach(id=>{
    const c=chars[id];
    const cs=c.clan&&c.rank?CLANS[c.clan]?.find(s=>s.rank===c.rank):null;
    const ss=SS.find(s=>s.id===c.ssId);
    const card=document.createElement('div');card.className='ccard';
    const imgW=document.createElement('div');imgW.className='ccard-img';
    if(c.img){const im=document.createElement('img');im.src=c.img;imgW.appendChild(im);}
    else imgW.innerHTML='<i class="ti ti-user" aria-hidden="true"></i>';
    const body=document.createElement('div');body.className='ccard-body';
    body.innerHTML=`<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:4px">
        <div class="ccard-name">${c.name||'名無し'}</div>
        <button class="btn sm" style="flex-shrink:0;padding:2px 7px;font-size:11px" onclick="event.stopPropagation();open_('${id}')"><i class="ti ti-pencil" aria-hidden="true"></i></button>
      </div>
      <div class="ccard-sub">${c.clan||'クラン未設定'}${c.rank?' · '+c.rank:''}</div>
      <div class="ccard-sub">${cs?cs.name:'-'}${ss?' / '+ss.name:''}</div>
      <div class="ccard-sub">クロガネ ${c.kurogane.filter(Boolean).length}/10</div>
      ${c.ko?'<div class="ccard-ko">⚠ 戦闘不能</div>':''}`;
    card.appendChild(imgW);card.appendChild(body);
    card.onclick=()=>openView(id);el.appendChild(card);
  });
  const nc=document.createElement('div');nc.className='new-ccard';
  nc.innerHTML='<i class="ti ti-plus" style="font-size:24px" aria-hidden="true"></i><span>新規作成</span>';
  nc.onclick=newChar;el.appendChild(nc);
}

// 画面切り替えを一元管理（lv:一覧, sv:編集, vv:閲覧）
function showScreen(name){
  const lv=document.getElementById('lv');
  const sv=document.getElementById('sv');
  const vv=document.getElementById('vv');
  lv.style.display=(name==='lv')?'':'none';
  sv.classList.toggle('on',name==='sv');
  vv.classList.toggle('on',name==='vv');
}

function newChar(){const id=uid();chars[id]=ec();open_(id);}
function open_(id){
  cid=id;const c=chars[id];
  showScreen('sv');
  document.getElementById('stitle').textContent=c.name||'キャラクター';
  ['d66-name','d66-rig','d66-bg'].forEach(i=>document.getElementById(i).className='d66-panel');
  d66ActivePanel=null;d66ActiveBgKey=null;
  updateD66BtnStyles(null,null);
  rigPicked=[];
  fill(c);
}
function back(){showScreen('lv');cid=null;}

function fill(c){
  const fv=(id,v)=>{document.getElementById(id).value=v||'';};
  fv('f-name',c.name);fv('f-rig',c.rig);fv('f-player',c.player);
  fv('f-gender',c.gender);fv('f-age',c.age);fv('f-line',c.line);
  fv('f-minou',c.minou);fv('f-minou-desc',c.minouDesc);
  fv('f-kikkake',c.kikkake);fv('f-kikkake-desc',c.kikkakeDesc);
  fv('f-negai',c.negai);fv('f-negai-desc',c.negaiDesc);
  fv('f-memo',c.memo);
  document.getElementById('ko-cb').checked=c.ko||false;
  document.getElementById('kowrap').className='ko-wrap'+(c.ko?' ko':'');
  const ai=document.getElementById('av-img'),ic=document.getElementById('av-ic');
  if(c.img){ai.src=c.img;ai.style.display='block';ic.style.display='none';}
  else{ai.style.display='none';ic.style.display='';}
  renderHex('kgrid',c.kurogane);
  renderClanRadio(c.clan);
  if(c.clan)renderClanSkills(c.clan,c.rank);
  renderSS(c.ssId);
  renderKiz(c.kizuna);
  renderRecords(c.records||[]);
  renderRigParts(c.rigParts||[]);
  renderRigBuild();
}

function renderHex(el,arr){
  const e=document.getElementById(el);e.innerHTML='';
  const onCount=arr.lastIndexOf(true)+1; // 現在何番までONか
  arr.forEach((v,i)=>{
    const b=document.createElement('button');
    b.className='hb'+(i<onCount?' on':'');
    b.textContent=i+1;
    b.onclick=()=>{
      const cur=arr.lastIndexOf(true)+1;
      if(i+1===cur){
        // 同じボタンを押したら全部OFF
        arr.fill(false);
      } else {
        // i+1番目まで全部ONにする
        arr.fill(false);
        for(let j=0;j<=i;j++)arr[j]=true;
      }
      renderHex(el,arr);
    };
    e.appendChild(b);
  });
}
function renderClanRadio(sel){
  const el=document.getElementById('clan-radio');el.innerHTML='';
  Object.keys(CLANS).forEach(cn=>{
    const w=document.createElement('div');w.className='clan-opt';
    const rid='cr_'+cn;
    w.innerHTML=`<input type="radio" name="cs" id="${rid}" value="${cn}" ${sel===cn?'checked':''}><label for="${rid}">${cn}</label>`;
    w.querySelector('input').onchange=()=>{chars[cid].clan=cn;chars[cid].rank='';renderClanSkills(cn,'');};
    el.appendChild(w);
  });
}
function renderClanSkills(clan,selRank){
  const area=document.getElementById('rank-area'),el=document.getElementById('clan-skills');
  if(!clan||!CLANS[clan]){area.style.display='none';return;}
  area.style.display='block';el.innerHTML='';
  CLANS[clan].forEach(s=>{
    const card=document.createElement('label');card.className='sk-card'+(selRank===s.rank?' sel':'');
    card.innerHTML=`<input type="radio" name="cr" value="${s.rank}" ${selRank===s.rank?'checked':''}>
      <div class="sk-chk"><i class="ti ti-check" style="font-size:10px;color:#fff" aria-hidden="true"></i></div>
      <div class="sk-tags"><span class="tag ac">序列${s.order} · ${s.rank}</span></div>
      <div class="sk-name">${s.name}</div>
      <div class="sk-tags"><span class="tag">⏱ ${s.timing}</span><span class="tag ac">${s.limit}</span></div>
      <div class="sk-eff">${s.effect}</div>`;
    card.querySelector('input').onchange=()=>{chars[cid].rank=s.rank;chars[cid].order=s.order;renderClanSkills(clan,s.rank);};
    el.appendChild(card);
  });
}
function renderSS(selId){
  const el=document.getElementById('style-skills');el.innerHTML='';
  SS.forEach(s=>{
    const card=document.createElement('label');card.className='sk-card'+(selId===s.id?' sel':'');
    card.innerHTML=`<input type="radio" name="ss" value="${s.id}" ${selId===s.id?'checked':''}>
      <div class="sk-chk"><i class="ti ti-check" style="font-size:10px;color:#fff" aria-hidden="true"></i></div>
      <div class="sk-name">${s.name}</div>
      <div class="sk-tags"><span class="tag">⏱ ${s.timing}</span><span class="tag ac">${s.limit}</span></div>
      <div class="sk-eff">${s.effect}</div>`;
    card.querySelector('input').onchange=()=>{chars[cid].ssId=s.id;renderSS(s.id);};
    el.appendChild(card);
  });
}
function toggleKO(){const c=chars[cid];c.ko=document.getElementById('ko-cb').checked;document.getElementById('kowrap').className='ko-wrap'+(c.ko?' ko':'');}
function renderKiz(arr){
  const el=document.getElementById('kiz-rows');el.innerHTML='';
  arr.forEach((k,i)=>{
    const row=document.createElement('div');row.className='kiz-row';
    const rn='kz'+i+'_'+Date.now();
    row.innerHTML=`<input type="text" value="${k.target||''}" onchange="chars[cid].kizuna[${i}].target=this.value">
      <div class="kiz-t">
        <input type="radio" name="${rn}" id="${rn}k" ${k.type==='絆'?'checked':''} onchange="chars[cid].kizuna[${i}].type='絆'"><label for="${rn}k">絆</label>
        <input type="radio" name="${rn}" id="${rn}t" class="teki" ${k.type==='敵意'?'checked':''} onchange="chars[cid].kizuna[${i}].type='敵意'"><label for="${rn}t">敵意</label>
      </div>
      <input type="number" value="${k.points||''}" onchange="chars[cid].kizuna[${i}].points=this.value" style="width:46px">
      <button class="del-btn" onclick="delKiz(${i})"><i class="ti ti-x" aria-hidden="true"></i></button>`;
    el.appendChild(row);
  });
}
function addKiz(){chars[cid].kizuna.push({target:'',type:'絆',points:''});renderKiz(chars[cid].kizuna);}
function delKiz(i){chars[cid].kizuna.splice(i,1);renderKiz(chars[cid].kizuna);}

function renderRecords(arr){
  const el=document.getElementById('record-rows');el.innerHTML='';
  arr.forEach((r,i)=>{
    const row=document.createElement('div');row.className='record-row';
    const negiId='record-negi-'+i;
    const kizBoxId='record-kizbox-'+i;
    row.innerHTML=`<div class="record-row-head">
        <span class="fl">名称</span>
        <input type="text" value="${(r.title||'').replace(/"/g,'&quot;')}" onchange="chars[cid].records[${i}].title=this.value">
        <button class="del-btn record-del" onclick="delRecord(${i})"><i class="ti ti-x" aria-hidden="true"></i></button>
      </div>
      <span class="fl">メモ</span>
      <textarea rows="4">${esc(r.memo||'')}</textarea>
      <div class="record-sub-row">
        <div class="fg">
          <span class="fl">獲得したクロガネ</span>
          <input type="number" value="${r.kurogane||''}" onchange="chars[cid].records[${i}].kurogane=this.value">
        </div>
      </div>
      <div class="record-negi-row">
        <label>
          <input type="checkbox" id="${negiId}" ${r.negi?'checked':''} onchange="toggleRecordNegi(${i})">
          N.E.G.I.の起動
        </label>
      </div>
      <div class="record-kizuna-box${r.negi?' show':''}" id="${kizBoxId}">
        <div class="fg">
          <span class="fl">獲得した絆 対象</span>
          <input type="text" value="${(r.kizunaTarget||'').replace(/"/g,'&quot;')}" onchange="chars[cid].records[${i}].kizunaTarget=this.value">
        </div>
        <div class="fg" style="max-width:100px">
          <span class="fl">点数</span>
          <input type="number" value="${r.kizunaPoints||''}" onchange="chars[cid].records[${i}].kizunaPoints=this.value">
        </div>
      </div>`;
    row.querySelector('textarea').onchange=function(){chars[cid].records[i].memo=this.value;};
    el.appendChild(row);
  });
}
function toggleRecordNegi(i){
  const negi=document.getElementById('record-negi-'+i).checked;
  chars[cid].records[i].negi=negi;
  const box=document.getElementById('record-kizbox-'+i);
  box.classList.toggle('show',negi);
}
function addRecord(){
  if(!chars[cid].records)chars[cid].records=[];
  chars[cid].records.push({title:'',memo:'',kurogane:'',negi:false,kizunaTarget:'',kizunaPoints:''});
  renderRecords(chars[cid].records);
}
function delRecord(i){chars[cid].records.splice(i,1);renderRecords(chars[cid].records);}

/* ===== リグ装備 ===== */
let rigCurCat='銃砲';
const RIG_CATS=['銃砲','刀剣','衝撃','防御','機動','照準','強化','構成'];

function renderRigParts(selected){
  // カテゴリタブ
  const tabs=document.getElementById('rig-cat-tabs');
  tabs.innerHTML='';
  RIG_CATS.forEach(cat=>{
    const btn=document.createElement('button');
    btn.className='rig-cat-btn'+(cat===rigCurCat?' ac':'');
    btn.textContent=cat;
    btn.onclick=()=>{rigCurCat=cat;renderRigParts(chars[cid].rigParts||[]);};
    tabs.appendChild(btn);
  });

  // パーツ一覧（現在のカテゴリに該当するもの）
  const list=document.getElementById('rig-part-list');
  list.innerHTML='';
  const parts=RIG_PARTS_WEAPON.filter(p=>p.tags.includes(rigCurCat));
  parts.forEach(p=>{
    const isSelected=selected.some(s=>s.name===p.name);
    const card=document.createElement('div');
    card.className='rig-part-card'+(isSelected?' selected':'');
    const diceStr=(p.dice===null)?'-':p.dice;
    const diffStr=(p.difficulty===null)?'-':p.difficulty;
    card.innerHTML=`<div class="rig-part-card-head">
        <span class="name">${esc(p.name)}</span>
        <span class="tag ac">判定${diceStr} / 難易度${diffStr}</span>
      </div>
      <div class="rig-part-card-stats">
        <span class="tag">${esc(p.type)}</span>
        <span class="tag">${p.range.join('・')}</span>
        ${p.effects.slice(0,2).map(e=>`<span class="tag">${esc(e.split('：')[0].split('。')[0])}</span>`).join('')}
      </div>
      <div class="rig-part-card-flavor">${esc(p.flavor)}</div>`;
    card.onclick=()=>toggleRigPart(p.name);
    list.appendChild(card);
  });

  // 選択中リスト
  const selList=document.getElementById('rig-selected-list');
  selList.innerHTML='';
  if(selected.length===0){
    selList.innerHTML='<div style="font-size:12px;color:var(--color-text-tertiary)">未選択</div>';
  }
  selected.forEach(s=>{
    const item=document.createElement('div');item.className='rig-selected-item';
    item.innerHTML=`<span class="name">${esc(s.name)}</span><button class="del-btn" onclick="toggleRigPart('${s.name.replace(/'/g,"\\'")}');event.stopPropagation()"><i class="ti ti-x" aria-hidden="true"></i></button>`;
    selList.appendChild(item);
  });
}

function toggleRigPart(name){
  if(!chars[cid].rigParts)chars[cid].rigParts=[];
  const idx=chars[cid].rigParts.findIndex(s=>s.name===name);
  if(idx>=0){
    chars[cid].rigParts.splice(idx,1);
    // リグ構築からも削除
    if(chars[cid].rigLayout&&chars[cid].rigLayout.parts){
      chars[cid].rigLayout.parts=chars[cid].rigLayout.parts.filter(p=>p.name!==name);
    }
  } else {
    if(chars[cid].rigParts.length>=3){
      toast('リグ装備はメインフレーム以外に最大3つまでです');
      return;
    }
    const part=RIG_PARTS_WEAPON.find(p=>p.name===name);
    if(part)chars[cid].rigParts.push({name:part.name});
  }
  renderRigParts(chars[cid].rigParts);
  renderRigBuild();
}

/* ===== リグ構築（グリッド配置） ===== */
const RIG_GRID_W=8, RIG_GRID_H=4;
const OPPOSITE={'上':'下','下':'上','左':'右','右':'左'};
let rigDraggingName=null;

function getRigPartData(name){
  if(name==='メインフレーム')return RIG_MAINFRAME;
  return RIG_PARTS_WEAPON.find(p=>p.name===name);
}

// 現在の配置一覧（メインフレーム含む）を取得
function getRigPlacements(c){
  const layout=c.rigLayout||{mainframe:{x:3,y:1},parts:[]};
  const placements=[{name:'メインフレーム',x:layout.mainframe.x,y:layout.mainframe.y}];
  (layout.parts||[]).forEach(p=>placements.push({name:p.name,x:p.x,y:p.y}));
  return placements;
}

// 指定座標(x,y)に指定パーツを置けるかチェック（既存配置との整合性）
function canPlaceAt(name,x,y,placements,excludeName){
  if(x<0||x>=RIG_GRID_W||y<0||y>=RIG_GRID_H)return false;
  const part=getRigPartData(name);
  if(!part)return false;
  // 既に他のパーツがそのマスにいるか
  const occupied=placements.find(p=>p.x===x&&p.y===y&&p.name!==excludeName);
  if(occupied)return false;

  // 隣接マスとのジョイント整合性チェック
  const dirs=[['上',0,-1],['下',0,1],['左',-1,0],['右',1,0]];
  for(const[dir,dx,dy]of dirs){
    const nx=x+dx, ny=y+dy;
    if(nx<0||nx>=RIG_GRID_W||ny<0||ny>=RIG_GRID_H)continue;
    const neighbor=placements.find(p=>p.x===nx&&p.y===ny&&p.name!==excludeName);
    if(!neighbor)continue; // 隣に何もなければチェック不要
    const neighborPart=getRigPartData(neighbor.name);
    if(!neighborPart)continue;
    // メカニカルジョイント絡みは無条件でOK
    if(name==='メカニカルジョイント'||neighbor.name==='メカニカルジョイント')continue;
    // このパーツのdir方向にジョイントがあるか／隣のパーツの反対方向にジョイントがあるか
    const thisHas=part.joint.includes(dir);
    const neighborHas=neighborPart.joint.includes(OPPOSITE[dir]);
    if(thisHas!==neighborHas){
      // 一方だけジョイントがある＝不一致
      return false;
    }
  }
  return true;
}

function renderRigBuild(){
  const c=chars[cid];
  if(!c.rigLayout)c.rigLayout={mainframe:{x:3,y:1},parts:[]};
  const placements=getRigPlacements(c);

  // パレット（未配置のパーツ）
  const palette=document.getElementById('rig-palette');
  palette.innerHTML='';
  const unplaced=(c.rigParts||[]).filter(s=>!placements.some(p=>p.name===s.name));
  if(unplaced.length===0){
    palette.innerHTML='<div style="font-size:12px;color:var(--color-text-tertiary)">全てのパーツが配置済みです</div>';
  }
  unplaced.forEach(s=>{
    const item=document.createElement('div');
    item.className='rig-palette-item';
    item.draggable=true;
    item.textContent=s.name;
    item.dataset.name=s.name;
    item.addEventListener('dragstart',e=>{
      e.dataTransfer.setData('text/plain',s.name);
      rigDraggingName=s.name;
      updateRigDragPreview();
    });
    item.addEventListener('dragend',()=>{rigDraggingName=null;clearRigDragPreview();});
    palette.appendChild(item);
  });

  // パレットへドロップ＝配置解除（メインフレームは解除不可）
  palette.addEventListener('dragover',e=>e.preventDefault());
  palette.addEventListener('drop',e=>{
    e.preventDefault();
    const name=e.dataTransfer.getData('text/plain');
    rigDraggingName=null;
    if(!name||name==='メインフレーム')return;
    chars[cid].rigLayout.parts=(chars[cid].rigLayout.parts||[]).filter(p=>p.name!==name);
    renderRigBuild();
  });

  // グリッド
  const grid=document.getElementById('rig-grid');
  grid.innerHTML='';
  for(let y=0;y<RIG_GRID_H;y++){
    for(let x=0;x<RIG_GRID_W;x++){
      const cell=document.createElement('div');
      cell.className='rig-cell';
      cell.dataset.x=x;cell.dataset.y=y;
      const placed=placements.find(p=>p.x===x&&p.y===y);
      if(placed){
        const part=getRigPartData(placed.name);
        const piece=document.createElement('div');
        piece.className='rig-piece '+(placed.name==='メインフレーム'?'mainframe':'part');
        piece.draggable=true;
        piece.textContent=placed.name;
        piece.dataset.name=placed.name;
        if(part){
          part.joint.forEach(dir=>{
            const mark=document.createElement('div');
            const dirClass={'上':'joint-up','下':'joint-down','左':'joint-left','右':'joint-right'}[dir];
            mark.className='joint-mark '+dirClass;
            piece.appendChild(mark);
          });
        }
        piece.addEventListener('dragstart',e=>{
          e.dataTransfer.setData('text/plain',placed.name);
          rigDraggingName=placed.name;
          updateRigDragPreview();
        });
        piece.addEventListener('dragend',()=>{rigDraggingName=null;clearRigDragPreview();});
        cell.appendChild(piece);
      }
      // ドロップ処理
      cell.addEventListener('dragover',e=>{
        e.preventDefault();
      });
      cell.addEventListener('drop',e=>{
        e.preventDefault();
        cell.classList.remove('dragover','invalid');
        const name=e.dataTransfer.getData('text/plain');
        if(!name)return;
        const tx=parseInt(cell.dataset.x), ty=parseInt(cell.dataset.y);
        const curPlacements=getRigPlacements(chars[cid]);
        if(!canPlaceAt(name,tx,ty,curPlacements,name)){
          toast('ジョイントが一致しないため配置できません');
          return;
        }
        // 配置を更新
        if(name==='メインフレーム'){
          chars[cid].rigLayout.mainframe={x:tx,y:ty};
        } else {
          if(!chars[cid].rigLayout.parts)chars[cid].rigLayout.parts=[];
          const existing=chars[cid].rigLayout.parts.find(p=>p.name===name);
          if(existing){existing.x=tx;existing.y=ty;}
          else chars[cid].rigLayout.parts.push({name,x:tx,y:ty});
        }
        renderRigBuild();
      });
      grid.appendChild(cell);
    }
  }
}

// ドラッグ中のパーツが置けるマスをハイライト
function updateRigDragPreview(){
  if(!rigDraggingName)return;
  const curPlacements=getRigPlacements(chars[cid]);
  const grid=document.getElementById('rig-grid');
  const cells=grid.querySelectorAll('.rig-cell');
  cells.forEach(cell=>{
    const x=parseInt(cell.dataset.x), y=parseInt(cell.dataset.y);
    const ok=canPlaceAt(rigDraggingName,x,y,curPlacements,rigDraggingName);
    cell.classList.toggle('dragover',ok);
    cell.classList.toggle('invalid',!ok);
  });
}
function clearRigDragPreview(){
  const grid=document.getElementById('rig-grid');
  if(!grid)return;
  grid.querySelectorAll('.rig-cell').forEach(cell=>{
    cell.classList.remove('dragover','invalid');
  });
}
function pickImg(){document.getElementById('img-in').click();}
function onImg(e){
  const f=e.target.files[0];if(!f)return;
  const reader=new FileReader();
  reader.onload=ev=>{
    chars[cid].img=ev.target.result;
    const ai=document.getElementById('av-img'),ic=document.getElementById('av-ic');
    ai.src=ev.target.result;ai.style.display='block';ic.style.display='none';
  };
  reader.readAsDataURL(f);
}
function collect(){
  const c=chars[cid];
  ['name','rig','player','gender','age','line','minou','kikkake','negai','memo'].forEach(k=>{c[k]=document.getElementById('f-'+k).value;});
  c.minouDesc=document.getElementById('f-minou-desc').value;
  c.kikkakeDesc=document.getElementById('f-kikkake-desc').value;
  c.negaiDesc=document.getElementById('f-negai-desc').value;
}
async function savec(){
  collect();await store();
  renderList();
  // 閲覧モードから来た場合は閲覧モードへ戻す、そうでなければタイトル更新のみ
  document.getElementById('stitle').textContent=chars[cid].name||'キャラクター';
  const btn=document.querySelector('#sv .ac');const o=btn.innerHTML;
  btn.innerHTML='<i class="ti ti-check" aria-hidden="true"></i> 保存済み';
  setTimeout(()=>{
    btn.innerHTML=o;
    // 保存後に閲覧モードへ遷移
    const id=cid;
    showScreen('vv');
    cid=id;
    document.getElementById('vtitle').textContent=chars[id].name||'キャラクター';
    fillView(chars[id]);
  },900);
}
async function delc(){
  if(!confirm('このキャラクターを削除しますか？'))return;
  delete chars[cid];await store();back();renderList();
}
load();

/* ===== 閲覧モード ===== */
function openView(id){
  cid=id;
  const c=chars[id];
  showScreen('vv');
  document.getElementById('vtitle').textContent=c.name||'キャラクター';
  fillView(c);
}

function backFromView(){
  showScreen('lv');
  cid=null;
}

function openEdit(){
  open_(cid);
}

function fillView(c){
  // KOバナー
  const kob=document.getElementById('vw-ko-banner');
  kob.style.display=c.ko?'':'none';

  // アバター
  const ai=document.getElementById('vw-av-img'),ic=document.getElementById('vw-av-ic');
  if(c.img){ai.src=c.img;ai.style.display='block';ic.style.display='none';}
  else{ai.style.display='none';ic.style.display='';}

  // 名前・リグ
  document.getElementById('vw-name').textContent=c.name||'名無し';
  const rigEl=document.getElementById('vw-rig');
  rigEl.textContent=c.rig?'リグ：'+c.rig:'';

  // バッジ（性別・年齢・クラン・序列）
  const badges=document.getElementById('vw-badges');
  badges.innerHTML='';
  const addBadge=(t,dng=false)=>{const s=document.createElement('span');s.className='vw-badge'+(dng?' dng':'');s.textContent=t;badges.appendChild(s);};
  if(c.gender)addBadge(c.gender);
  if(c.age)addBadge(c.age+'歳');
  if(c.clan)addBadge(c.clan);
  if(c.rank)addBadge(c.rank);
  if(c.order)addBadge('序列 '+c.order);
  if(c.ko)addBadge('⚠ 戦闘不能',true);

  // クロガネ
  const pips=document.getElementById('vw-kuro-pips');
  pips.innerHTML='';
  (c.kurogane||[]).forEach((v,i)=>{
    const d=document.createElement('div');
    d.className='vw-pip'+(v?' on':'');
    d.textContent=i+1;
    pips.appendChild(d);
  });

  // 基本情報グリッド
  const ig=document.getElementById('vw-info-grid');
  ig.innerHTML='';
  const infoItems=[
    ['性別',c.gender],['年齢',c.age?c.age+'歳':''],['プレイヤー',c.player],
  ].filter(([,v])=>v);
  // 決めセリフは幅広く別行で
  if(c.line){
    ig.style.gridTemplateColumns='1fr 1fr 1fr';
    infoItems.forEach(([k,v])=>{
      ig.innerHTML+=`<div class="vw-info-item"><div class="vw-info-key">${k}</div><div class="vw-info-val">${v}</div></div>`;
    });
    const lineDiv=document.createElement('div');
    lineDiv.style.cssText='grid-column:1/-1;border-top:0.5px solid var(--color-border-tertiary);padding-top:8px;margin-top:4px';
    lineDiv.innerHTML=`<div class="vw-info-key">決めセリフ</div><div style="font-size:14px;font-weight:500;color:var(--ac);margin-top:2px">${esc(c.line)}</div>`;
    ig.appendChild(lineDiv);
  } else {
    infoItems.forEach(([k,v])=>{
      ig.innerHTML+=`<div class="vw-info-item"><div class="vw-info-key">${k}</div><div class="vw-info-val">${esc(v)}</div></div>`;
    });
  }
  if(!infoItems.length&&!c.line){ig.innerHTML='<span style="font-size:12px;color:var(--color-text-tertiary)">未入力</span>';}

  // バックグラウンド
  const bg=document.getElementById('vw-bg-grid');
  bg.innerHTML='';
  const bgSec=document.getElementById('vw-sec-bg');
  const bgItems=[
    ['ミノウエ',c.minou,c.minouDesc],
    ['キッカケ',c.kikkake,c.kikkakeDesc],
    ['ネガイ',c.negai,c.negaiDesc],
  ];
  const hasBG=bgItems.some(([,v,d])=>v||d);
  bgSec.style.display=hasBG?'':'none';
  bgItems.forEach(([k,v,d])=>{
    bg.innerHTML+=`<div class="vw-bg-item">
      <div class="vw-bg-key">${k}</div>
      <div class="vw-bg-val">${esc(v)||'—'}</div>
      ${d?`<div class="vw-bg-desc">${esc(d)}</div>`:''}
    </div>`;
  });

  // クランスキル
  const clanSec=document.getElementById('vw-sec-clan');
  const clanRow=document.getElementById('vw-clan-row');
  const clanSkillEl=document.getElementById('vw-clan-skill');
  clanRow.innerHTML='';
  clanSkillEl.innerHTML='';
  if(c.clan){
    clanSec.style.display='';
    clanRow.innerHTML=`<span class="vw-clan-chip">${esc(c.clan)}</span>`;
    if(c.rank)clanRow.innerHTML+=`<span class="vw-clan-rank">${esc(c.rank)}</span>`;
    if(c.order)clanRow.innerHTML+=`<span class="vw-clan-rank">序列 ${esc(c.order)}</span>`;
    const clanData=CLANS[c.clan];
    if(clanData&&c.rank){
      const sk=clanData.find(s=>s.rank===c.rank);
      if(sk){
        clanSkillEl.innerHTML=`<div class="vw-skill-card">
          <div class="vw-skill-type">クランスキル</div>
          <div class="vw-skill-name">${esc(sk.name)}</div>
          <div class="vw-skill-tags">
            <span class="tag">⏱ ${esc(sk.timing)}</span>
            <span class="tag ac">${esc(sk.limit)}</span>
          </div>
          <div class="vw-skill-eff">${esc(sk.effect)}</div>
        </div>`;
      }
    }
  } else {
    clanSec.style.display='none';
  }

  // スタイルスキル
  const ssSec=document.getElementById('vw-sec-ss');
  const ssBody=document.getElementById('vw-ss-body');
  ssBody.innerHTML='';
  if(c.ssId){
    const sk=SS.find(s=>s.id===c.ssId);
    if(sk){
      ssSec.style.display='';
      ssBody.innerHTML=`<div class="vw-skill-card">
        <div class="vw-skill-type">スタイルスキル</div>
        <div class="vw-skill-name">${esc(sk.name)}</div>
        <div class="vw-skill-tags">
          <span class="tag">⏱ ${esc(sk.timing)}</span>
          <span class="tag ac">${esc(sk.limit)}</span>
        </div>
        <div class="vw-skill-eff">${esc(sk.effect)}</div>
      </div>`;
    }
  } else {
    ssSec.style.display='none';
  }

  // リグ装備
  const rigSec=document.getElementById('vw-sec-rig');
  const rigBody=document.getElementById('vw-rig-body');
  rigBody.innerHTML='';
  const rigList=[RIG_MAINFRAME, ...(c.rigParts||[]).map(s=>RIG_PARTS_WEAPON.find(p=>p.name===s.name)).filter(Boolean)];
  rigSec.style.display='';
  rigList.forEach(p=>{
    const diceStr=(p.dice===null)?'-':p.dice;
    const diffStr=(p.difficulty===null)?'-':p.difficulty;
    const card=document.createElement('div');card.className='vw-rig-card'+(p.name==='メインフレーム'?' mainframe':'');
    card.innerHTML=`<div class="vw-rig-card-head">
        <span class="name">${esc(p.name)}</span>
        <span class="tag ac">判定${diceStr} / 難易度${diffStr}</span>
      </div>
      <div class="vw-rig-card-stats">
        <span class="tag">${esc(p.tags.join('・'))}</span>
        <span class="tag">${esc(p.type)}</span>
        <span class="tag">${p.range.join('・')}</span>
        <span class="tag">ジョイント:${p.joint.join('')}</span>
      </div>
      ${p.effects.length?`<div class="vw-rig-card-effects">${p.effects.map(esc).join('<br>')}</div>`:''}`;
    rigBody.appendChild(card);
  });

  // リグ構築（グリッド）
  const buildSec=document.getElementById('vw-sec-rigbuild');
  const buildGrid=document.getElementById('vw-rig-grid');
  buildGrid.innerHTML='';
  buildSec.style.display=rigList.length?'':'none';
  const placements=getRigPlacements(c);
  for(let y=0;y<RIG_GRID_H;y++){
    for(let x=0;x<RIG_GRID_W;x++){
      const cell=document.createElement('div');
      cell.className='vw-rig-cell';
      const placed=placements.find(p=>p.x===x&&p.y===y);
      if(placed){
        cell.classList.add('filled',placed.name==='メインフレーム'?'mainframe':'part');
        cell.textContent=placed.name;
      }
      buildGrid.appendChild(cell);
    }
  }

  // 因縁
  const kizSec=document.getElementById('vw-sec-kiz');
  const kizBody=document.getElementById('vw-kiz-body');
  kizBody.innerHTML='';
  const kizList=(c.kizuna||[]).filter(k=>k.target||k.points);
  kizSec.style.display=kizList.length?'':'none';
  kizList.forEach(k=>{
    const typeClass=k.type==='絆'?'kizuna':'teki';
    kizBody.innerHTML+=`<tr>
      <td>${esc(k.target||'')}</td>
      <td><span class="vw-kiz-type ${typeClass}">${esc(k.type||'絆')}</span></td>
      <td class="vw-kiz-pts">${k.points||'—'}</td>
    </tr>`;
  });

  // メモ
  const memoSec=document.getElementById('vw-sec-memo');
  const memoEl=document.getElementById('vw-memo');
  memoSec.style.display=c.memo?'':'none';
  memoEl.textContent=c.memo||'';

  // レコード
  const recordSec=document.getElementById('vw-sec-record');
  const recordBody=document.getElementById('vw-record-body');
  recordBody.innerHTML='';
  const records=(c.records||[]).filter(r=>r.title||r.memo||r.kurogane||r.negi);
  recordSec.style.display=records.length?'':'none';
  records.forEach((r,i)=>{
    const item=document.createElement('div');item.className='vw-record-item';
    const bodyId='vw-record-body-'+i;
    let meta='';
    if(r.kurogane)meta+=`<span class="tag ac">獲得クロガネ ${esc(r.kurogane)}</span>`;
    if(r.negi)meta+=`<span class="tag ac">N.E.G.I.起動</span>`;
    if(r.negi&&(r.kizunaTarget||r.kizunaPoints))meta+=`<span class="tag">獲得した絆: ${esc(r.kizunaTarget||'')} ${r.kizunaPoints?r.kizunaPoints+'点':''}</span>`;
    item.innerHTML=`<div class="vw-record-head" onclick="toggleRecord('${bodyId}')">
        <span>${esc(r.title||'(無題)')}</span>
        <i class="ti ti-chevron-down" id="${bodyId}-icon" aria-hidden="true"></i>
      </div>
      <div class="vw-record-body" id="${bodyId}">
        ${meta?`<div class="vw-record-meta">${meta}</div>`:''}
        ${esc(r.memo||'')}
      </div>`;
    recordBody.appendChild(item);
  });
}

function toggleRecord(id){
  const body=document.getElementById(id);
  const icon=document.getElementById(id+'-icon');
  const isOpen=body.classList.contains('open');
  body.classList.toggle('open',!isOpen);
  if(icon)icon.classList.toggle('open',!isOpen);
}

function esc(s){
  if(!s&&s!==0)return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ===== GitHub OAuth / Gist連携 ===== */
const GH_CLIENT_ID='Ov23lisEudc0abg7t2ik';
const GH_SCOPE='gist';
const GH_REDIRECT=location.origin+'/callback';

let ghToken=localStorage.getItem('gh_token')||null;
let ghUser=null;
let pendingGistId=null; // URLから読み込んだGist ID

// トースト通知
function toast(msg,ms=2200){
  let el=document.getElementById('_toast');
  if(!el){el=document.createElement('div');el.id='_toast';el.className='toast';document.body.appendChild(el);}
  el.textContent=msg;el.classList.add('show');
  clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),ms);
}

// GitHubログイン開始
function ghLogin(){
  const state=Math.random().toString(36).slice(2);
  sessionStorage.setItem('gh_state',state);
  location.href=`https://github.com/login/oauth/authorize?client_id=${GH_CLIENT_ID}&scope=${GH_SCOPE}&state=${state}&redirect_uri=${encodeURIComponent(GH_REDIRECT)}`;
}

// GitHubログアウト
function ghLogout(){
  if(!confirm(ghUser?.login+' からログアウトしますか？'))return;
  ghToken=null;ghUser=null;
  localStorage.removeItem('gh_token');
  renderGhBar();
  toast('ログアウトしました');
}

// コールバック処理（?code=...が付いているとき）
async function handleOAuthCallback(){
  const params=new URLSearchParams(location.search);
  const code=params.get('code');
  const state=params.get('state');
  if(!code)return false;
  // stateチェック
  if(state&&state!==sessionStorage.getItem('gh_state')){
    toast('認証エラー（state不一致）');
    history.replaceState({},'',location.pathname);
    return true;
  }
  sessionStorage.removeItem('gh_state');
  toast('ログイン中…',4000);
  try{
    const res=await fetch('https://nejikure-token.kaitototamenobu.workers.dev',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({code}),
    });
    const data=await res.json();
    if(data.access_token){
      ghToken=data.access_token;
      localStorage.setItem('gh_token',ghToken);
      toast('ログインしました！');
    } else {
      toast('ログインに失敗しました');
    }
  } catch(e){
    toast('通信エラー: '+e.message);
  }
  history.replaceState({},'',location.pathname+(pendingGistId?'?gist='+pendingGistId:''));
  return true;
}

// GitHubユーザー情報を取得
async function fetchGhUser(){
  if(!ghToken)return null;
  try{
    const res=await fetch('https://api.github.com/user',{headers:{Authorization:'token '+ghToken}});
    if(res.status===401){ghToken=null;localStorage.removeItem('gh_token');return null;}
    return await res.json();
  } catch{return null;}
}

// ログインバーの描画
function renderGhBar(){
  const loginBtn=document.getElementById('gh-login-btn');
  const accountEl=document.getElementById('gh-account');
  const ghBar=document.getElementById('gh-bar');
  const shareBtn=document.getElementById('vw-share-btn');

  if(ghUser){
    // ログイン時：アカウント表示、ログイン促進バー非表示
    loginBtn.style.display='none';
    accountEl.style.display='flex';
    document.getElementById('gh-account-avatar').src=ghUser.avatar_url;
    document.getElementById('gh-account-name').textContent=ghUser.login;
    ghBar.style.display='none';
    if(shareBtn)shareBtn.style.display='';
  } else {
    // 非ログイン時：ログインボタン表示、ログイン促進バー表示
    loginBtn.style.display='';
    accountEl.style.display='none';
    ghBar.style.display='';
    if(shareBtn)shareBtn.style.display='none';
  }
}

// Gistにキャラを共有
async function shareToGist(){
  if(!ghToken){toast('先にGitHubでログインしてください');return;}
  const c=chars[cid];
  if(!c){return;}
  const btn=document.getElementById('vw-share-btn');
  btn.disabled=true;btn.innerHTML='<i class="ti ti-loader" aria-hidden="true"></i> 共有中…';

  // 既存GistIDがあれば更新、なければ新規作成
  const existingGistId=c._gistId||null;
  const {img:_img, _gistId:_g, ...charData} = c;
  const payload={
    description:`ネジクレネジマキ キャラクター: ${c.name||'名無し'}`,
    public:false,
    files:{
      'character.json':{content:JSON.stringify(charData,null,2)},
      'meta.json':{content:JSON.stringify({appVersion:'v10',createdBy:ghUser?.login,updatedAt:new Date().toISOString()},null,2)},
    },
  };

  try{
    let res,data;
    if(existingGistId){
      res=await fetch(`https://api.github.com/gists/${existingGistId}`,{
        method:'PATCH',
        headers:{Authorization:'token '+ghToken,'Content-Type':'application/json'},
        body:JSON.stringify(payload),
      });
    } else {
      res=await fetch('https://api.github.com/gists',{
        method:'POST',
        headers:{Authorization:'token '+ghToken,'Content-Type':'application/json'},
        body:JSON.stringify(payload),
      });
    }
    data=await res.json();
    if(data.id){
      // GistIDをキャラデータに保存
      chars[cid]._gistId=data.id;
      await store();
      const shareUrl=`${location.origin}?gist=${data.id}`;
      // 共有URLをクリップボードにコピー
      try{await navigator.clipboard.writeText(shareUrl);}catch{}
      // 共有URLを閲覧モードに表示
      showShareUrl(shareUrl,data.id);
      toast('共有URLをコピーしました！');
    } else {
      toast('共有に失敗しました: '+(data.message||'不明なエラー'));
    }
  } catch(e){
    toast('通信エラー: '+e.message);
  }
  btn.disabled=false;btn.innerHTML='<i class="ti ti-share" aria-hidden="true"></i> 共有';
}

// 共有URL表示ボックス
function showShareUrl(url,gistId){
  // 既存ボックスがあれば削除
  const old=document.getElementById('vw-share-box');if(old)old.remove();
  const box=document.createElement('div');
  box.id='vw-share-box';box.className='gist-share-box';
  box.innerHTML=`<div style="font-size:12px;color:var(--color-text-secondary);margin-bottom:4px"><i class="ti ti-link" aria-hidden="true"></i> 共有URL（Secret Gist）</div>
    <div class="gist-url-row">
      <input type="text" class="field" value="${url}" readonly onclick="this.select()">
      <button class="btn sm ac" onclick="navigator.clipboard.writeText('${url}').then(()=>toast('コピーしました'))"><i class="ti ti-copy" aria-hidden="true"></i></button>
    </div>
    <div style="font-size:11px;color:var(--color-text-tertiary);margin-top:5px">URLを知っている人だけが閲覧できます</div>`;
  // 閲覧モードのKOバナーの前に挿入
  const vv=document.getElementById('vv');
  const banner=document.getElementById('vw-ko-banner');
  vv.insertBefore(box,banner);
}

// GistからキャラをインポートURL読み込み
async function loadGistFromUrl(){
  const params=new URLSearchParams(location.search);
  const gistId=params.get('gist');
  if(!gistId)return;
  pendingGistId=gistId;
  try{
    const res=await fetch(`https://api.github.com/gists/${gistId}`);
    if(!res.ok){toast('Gistの読み込みに失敗しました');return;}
    const data=await res.json();
    const fileContent=data.files?.['character.json']?.content;
    if(!fileContent){toast('キャラデータが見つかりませんでした');return;}
    const charData=JSON.parse(fileContent);
    charData._gistId=gistId; // GistIDを保持
    // インポートバナーを表示
    const banner=document.getElementById('import-banner');
    const info=document.getElementById('import-banner-info');
    info.innerHTML=`<strong>${esc(charData.name||'名無し')}</strong> が共有されています`;
    banner.classList.add('show');
    // プレビュー用に一時的に閲覧モードで表示
    const tempId='_preview_'+gistId;
    chars[tempId]=charData;
    openView(tempId);
    window._previewId=tempId;
    window._previewData=charData;
  } catch(e){
    toast('読み込みエラー: '+e.message);
  }
}

// インポート確定
async function importFromGist(){
  const data=window._previewData;
  if(!data)return;
  const id=uid();
  chars[id]={...data};
  delete chars[window._previewId];
  window._previewId=null;window._previewData=null;
  await store();
  renderList();
  dismissImport();
  openView(id);
  toast(data.name+'をリストに追加しました！');
}

// インポートバナーを閉じる
function dismissImport(){
  document.getElementById('import-banner').classList.remove('show');
  if(window._previewId){
    delete chars[window._previewId];
    window._previewId=null;window._previewData=null;
  }
  // URLからgistパラメータを除去
  history.replaceState({},'',location.pathname);
  backFromView();
}

// 起動時処理
(async()=>{
  // OAuthコールバック処理
  const wasCallback=await handleOAuthCallback();
  // GistURLからの読み込み
  await loadGistFromUrl();
  // ログイン済みならユーザー情報取得
  if(ghToken){
    ghUser=await fetchGhUser();
  }
  renderGhBar();
})();
