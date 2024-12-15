"use client";

import { useRouter } from 'next/navigation';
import { Header, CookingNavBar } from "../../../components/index";


// レシピデータ
const recipes = [
  {
    recipeId: 1,
    title: "ふわっととろける！牛肉と玉ねぎのオムレツ炒め",
    genre: "和食",
    img: "/images/dishes/dish1.jpg",
    description: "とろり卵が牛肉とたまねぎを包み込み、まるでオムレツのような満足感。仕上げに醤油をひとたらしで香ばしさアップ！",
    ingredients: [
      { name: "キャベツ", quantity: "1/4玉" },
      { name: "牛肉 (薄切り)", quantity: "200g" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "ピーマン", quantity: "2個" },
      { name: "卵", quantity: "2個" },
      { name: "醤油", quantity: "大さじ2" },
      { name: "サラダ油", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" }
    ],
    steps: [
      "キャベツはざく切り、玉ねぎは薄切りにする。",
      "フライパンにサラダ油を熱し、牛肉を炒める。",
      "野菜を加え、調味料で味付けする。",
      "卵を溶いて加え、炒め合わせる。",
      "仕上げにごま油を少量加える。"
    ],
    points: "卵を入れることで、オムレツのような触感が楽しめます。醤油ベースの味付けが、野菜と牛肉のうまみを引き出します。"
  },
  {
    recipeId: 2,
    title: "シャキシャキ食感！香ばしいきんぴらごぼう",
    genre: "和食",
    img: "/images/dishes/dish2.jpg",
    description: "シャキシャキしたごぼうと甘辛い味付けが絶品！お弁当や副菜にもぴったりです。",
    ingredients: [
      { name: "ごぼう", quantity: "1本" },
      { name: "にんじん", quantity: "1/2本" },
      { name: "醤油", quantity: "大さじ2" },
      { name: "みりん", quantity: "大さじ1" },
      { name: "砂糖", quantity: "大さじ1" },
      { name: "ごま油", quantity: "大さじ1" },
      { name: "いりごま", quantity: "適量" }
    ],
    steps: [
      "ごぼうとにんじんを千切りにする。",
      "フライパンにごま油を熱し、ごぼうとにんじんを炒める。",
      "醤油、みりん、砂糖を加え、汁気がなくなるまで炒める。",
      "仕上げにいりごまを振る。"
    ],
    points: "ごぼうのアクを抜くため、切ったらすぐに水にさらしましょう。"
  },
  {
    recipeId: 3,
    title: "ほっこり幸せ！おふくろの味・肉じゃが",
    genre: "和食",
    img: "/images/dishes/dish3.jpg",
    description: "ほっこり甘辛い味付けで、ごはんが進む家庭の定番料理。",
    ingredients: [
      { name: "牛肉", quantity: "200g" },
      { name: "じゃがいも", quantity: "3個" },
      { name: "にんじん", quantity: "1本" },
      { name: "玉ねぎ", quantity: "1個" },
      { name: "醤油", quantity: "大さじ3" },
      { name: "みりん", quantity: "大さじ2" },
      { name: "砂糖", quantity: "大さじ2" },
      { name: "だし汁", quantity: "300ml" }
    ],
    steps: [
      "材料を一口大に切る。",
      "鍋で牛肉と玉ねぎを炒める。",
      "じゃがいもとにんじんを加え、だし汁を入れて煮る。",
      "醤油、みりん、砂糖で味付けし、煮汁が少なくなるまで煮る。"
    ],
    points: "煮る際に落し蓋をすると、味が均一に染み込みます。"
  },
  {
    recipeId: 4,
    title: "とろふわ卵がたまらない！絶品親子丼",
    genre: "和食",
    img: "/images/dishes/dish4.jpg",
    description: "ふわふわの卵と鶏肉の組み合わせが絶妙な丼ぶり。",
    ingredients: [
      { name: "鶏肉", quantity: "150g" },
      { name: "卵", quantity: "2個" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "醤油", quantity: "大さじ2" },
      { name: "みりん", quantity: "大さじ2" },
      { name: "砂糖", quantity: "大さじ1" },
      { name: "だし汁", quantity: "100ml" },
      { name: "ごはん", quantity: "2膳" }
    ],
    steps: [
      "鶏肉と玉ねぎを一口大に切る。",
      "鍋にだし汁、醤油、みりん、砂糖を入れて煮立てる。",
      "鶏肉と玉ねぎを煮て、卵でとじる。",
      "ごはんに乗せて完成。"
    ],
    points: "卵を2回に分けて入れると、ふんわり仕上がります。"
  },
  {
    recipeId: 5,
    title: "寒い12月でも体ポカポカビーフシチュー",
    genre: "洋食",
    img: "/images/dishes/dish5.jpg",
    description: "牛肉がほろほろになるまで煮込んだ、濃厚なデミグラスソースのビーフシチュー。",
    ingredients: [
      { name: "牛肉 (シチュー用)", quantity: "300g" },
      { name: "じゃがいも", quantity: "2個" },
      { name: "にんじん", quantity: "1本" },
      { name: "玉ねぎ", quantity: "1個" },
      { name: "デミグラスソース", quantity: "300ml" },
      { name: "赤ワイン", quantity: "100ml" },
      { name: "バター", quantity: "大さじ2" },
      { name: "小麦粉", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" }
    ],
    steps: [
      "牛肉に塩・胡椒をし、小麦粉をまぶす。",
      "鍋でバターを溶かし、牛肉を焼き色がつくまで焼く。",
      "玉ねぎ、にんじん、じゃがいもを加えて炒める。",
      "赤ワインを加え、アルコールを飛ばしたらデミグラスソースを加え、弱火で煮込む。",
      "牛肉が柔らかくなったら完成。"
    ],
    points: "赤ワインで煮込むことで、コクが深まります。"
  },
  {
    recipeId: 6,
    title: "ふわとろ卵の魔法！絶品オムライス",
    genre: "洋食",
    img: "/images/dishes/dish6.jpg",
    description: "ふわふわ卵で包んだケチャップライスが絶品！大人も子供も大好きな一品。",
    ingredients: [
      { name: "ごはん", quantity: "2膳分" },
      { name: "鶏肉", quantity: "100g" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "ケチャップ", quantity: "大さじ4" },
      { name: "卵", quantity: "2個" },
      { name: "バター", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" }
    ],
    steps: [
      "鶏肉と玉ねぎを一口大に切る。",
      "フライパンでバターを溶かし、鶏肉と玉ねぎを炒める。",
      "ごはんとケチャップを加え、炒め合わせる。",
      "別のフライパンで卵を焼き、ごはんを包む。",
      "お好みでケチャップをかける。"
    ],
    points: "卵は半熟に仕上げるとふんわり感がアップします。"
  },
  {
    recipeId: 7,
    title: "ジュワッと肉汁あふれる！王道ハンバーグ",
    genre: "洋食",
    img: "/images/dishes/dish7.jpg",
    description: "ジューシーでふっくらとした定番ハンバーグ。特製ソースでさらに美味しく！",
    ingredients: [
      { name: "合い挽き肉", quantity: "300g" },
      { name: "玉ねぎ", quantity: "1個" },
      { name: "卵", quantity: "1個" },
      { name: "パン粉", quantity: "大さじ4" },
      { name: "牛乳", quantity: "大さじ2" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" },
      { name: "ナツメグ", quantity: "少々" },
      { name: "サラダ油", quantity: "大さじ1" }
    ],
    steps: [
      "玉ねぎをみじん切りにし、炒めて冷ます。",
      "合い挽き肉、玉ねぎ、卵、パン粉、牛乳、調味料を混ぜる。",
      "小判型に成形し、真ん中をくぼませる。",
      "フライパンで両面を焼き、中まで火を通す。",
      "お好みのソースで仕上げる。"
    ],
    points: "肉ダネは冷蔵庫で少し寝かせると、味が馴染みます。"
  },
  {
    recipeId: 8,
    title: "濃厚クリーミー！本格カルボナーラ",
    genre: "洋食",
    img: "/images/dishes/dish8.jpg",
    description: "濃厚なチーズとベーコンの旨味が絡む、クリーミーなパスタ。",
    ingredients: [
      { name: "パスタ", quantity: "200g" },
      { name: "ベーコン", quantity: "100g" },
      { name: "卵", quantity: "2個" },
      { name: "生クリーム", quantity: "100ml" },
      { name: "粉チーズ", quantity: "大さじ4" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" },
      { name: "オリーブオイル", quantity: "大さじ1" }
    ],
    steps: [
      "ベーコンを細切りにし、オリーブオイルで炒める。",
      "パスタを茹でる。",
      "ボウルで卵、生クリーム、粉チーズ、塩・胡椒を混ぜる。",
      "茹で上がったパスタをベーコンと和え、卵液を加える。",
      "手早く混ぜ、余熱でとろりと仕上げる。"
    ],
    points: "余熱で卵液を固めることで、クリーミーに仕上がります。"
  },
  {
    recipeId: 9,
    title: "しびれる辛さ！本格四川麻婆豆腐",
    genre: "中華",
    img: "/images/dishes/dish9.jpg",
    description: "ピリッと辛くてごはんが進む定番中華料理。豆腐とひき肉の旨味がたっぷり！",
    ingredients: [
      { name: "木綿豆腐", quantity: "1丁" },
      { name: "豚ひき肉", quantity: "150g" },
      { name: "長ねぎ", quantity: "1/2本" },
      { name: "豆板醤", quantity: "大さじ1" },
      { name: "甜麺醤", quantity: "大さじ1" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "酒", quantity: "大さじ1" },
      { name: "水", quantity: "150ml" },
      { name: "鶏がらスープの素", quantity: "小さじ1" },
      { name: "片栗粉", quantity: "大さじ1" },
      { name: "ごま油", quantity: "大さじ1" },
      { name: "花椒", quantity: "適量" }
    ],
    steps: [
      "豆腐を一口大に切り、熱湯で軽く茹でて水気を切る。",
      "フライパンにごま油を熱し、豚ひき肉を炒める。",
      "豆板醤と甜麺醤を加えてさらに炒める。",
      "水、しょうゆ、酒、鶏がらスープの素を加え、豆腐を入れる。",
      "水溶き片栗粉でとろみをつけ、花椒を振る。"
    ],
    points: "花椒を加えることで本格的な痺れる辛さが楽しめます。"
  },
  {
    recipeId: 10,
    title: "シャキッと旨い！ピーマンたっぷり青椒肉絲",
    genre: "中華",
    img: "/images/dishes/dish10.jpg",
    description: "シャキシャキのピーマンと細切り豚肉の絶妙な組み合わせ。ごはんにぴったりの炒め物。",
    ingredients: [
      { name: "豚肉 (細切り)", quantity: "200g" },
      { name: "ピーマン", quantity: "3個" },
      { name: "たけのこ (細切り)", quantity: "100g" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "酒", quantity: "大さじ1" },
      { name: "オイスターソース", quantity: "大さじ1" },
      { name: "片栗粉", quantity: "大さじ1" },
      { name: "サラダ油", quantity: "大さじ2" },
      { name: "塩", quantity: "少々" },
      { name: "胡椒", quantity: "少々" }
    ],
    steps: [
      "豚肉に塩、胡椒、片栗粉をまぶす。",
      "ピーマンとたけのこを細切りにする。",
      "フライパンにサラダ油を熱し、豚肉を炒める。",
      "ピーマンとたけのこを加え、しょうゆ、酒、オイスターソースで味付けする。",
      "全体に味がなじんだら完成。"
    ],
    points: "具材は手早く炒めてシャキシャキ感を残しましょう。"
  }
  {
    recipeId: 11,
    title: "甘酸っぱさがやみつき！彩り酢豚",
    genre: "中華",
    img: "/images/dishes/dish11.jpg",
    description: "甘酸っぱいタレが絡む、ジューシーな豚肉と野菜の炒め物。",
    ingredients: [
      { name: "豚肩ロース肉", quantity: "200g" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "ピーマン", quantity: "2個" },
      { name: "にんじん", quantity: "1/2本" },
      { name: "パイナップル", quantity: "50g" },
      { name: "片栗粉", quantity: "大さじ2" },
      { name: "酢", quantity: "大さじ2" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "砂糖", quantity: "大さじ3" },
      { name: "ケチャップ", quantity: "大さじ2" },
      { name: "サラダ油", quantity: "大さじ2" }
    ],
    steps: [
      "豚肉を一口大に切り、片栗粉をまぶす。",
      "野菜とパイナップルを食べやすい大きさに切る。",
      "フライパンで豚肉を揚げ焼きにする。",
      "野菜を加えて炒め、酢、しょうゆ、砂糖、ケチャップを混ぜたタレを加える。",
      "全体を炒め合わせて完成。"
    ],
    points: "パイナップルを入れると甘みと酸味が引き立ちます。"
  },
  {
    recipeId: 12,
    title: "コク旨ピリ辛！クセになる担々麺",
    genre: "中華",
    img: "/images/dishes/dish12.jpg",
    description: "ピリ辛ごまスープが癖になる本格的な担々麺。",
    ingredients: [
      { name: "中華麺", quantity: "1玉" },
      { name: "豚ひき肉", quantity: "100g" },
      { name: "長ねぎ", quantity: "1/2本" },
      { name: "にんにく", quantity: "1片" },
      { name: "しょうが", quantity: "1片" },
      { name: "豆板醤", quantity: "小さじ1" },
      { name: "練りごま", quantity: "大さじ2" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "鶏がらスープ", quantity: "300ml" },
      { name: "ラー油", quantity: "適量" },
      { name: "ごま油", quantity: "大さじ1" }
    ],
    steps: [
      "にんにく、しょうが、長ねぎをみじん切りにする。",
      "フライパンでごま油を熱し、豚ひき肉、にんにく、しょうがを炒める。",
      "豆板醤、しょうゆ、練りごまを加えて炒める。",
      "鶏がらスープを加え、ひと煮立ちさせる。",
      "茹でた中華麺にスープを注ぎ、長ねぎとラー油を加える。"
    ],
    points: "仕上げにラー油をたっぷり加えると、辛さと香りが際立ちます。"
  },
  {
    recipeId: 13,
    title: "香り立つバジル！本格ガパオライス",
    genre: "その他",
    img: "/images/dishes/dish13.jpg",
    description: "香り高いバジルとピリ辛味が食欲をそそるタイ料理の定番。",
    ingredients: [
      { name: "鶏ひき肉", quantity: "200g" },
      { name: "バジル", quantity: "1束" },
      { name: "パプリカ", quantity: "1個" },
      { name: "にんにく", quantity: "1片" },
      { name: "唐辛子", quantity: "1本" },
      { name: "ナンプラー", quantity: "大さじ2" },
      { name: "オイスターソース", quantity: "大さじ1" },
      { name: "砂糖", quantity: "小さじ1" },
      { name: "ごはん", quantity: "2膳" },
      { name: "卵", quantity: "1個" }
    ],
    steps: [
      "にんにくと唐辛子をみじん切りにし、フライパンで炒める。",
      "鶏ひき肉を加え、火が通るまで炒める。",
      "パプリカと調味料を加えてさらに炒める。",
      "最後にバジルを加え、さっと炒める。",
      "目玉焼きを作り、ごはんと共に盛り付ける。"
    ],
    points: "バジルは最後に加えることで香りが引き立ちます。"
  },
  {
    recipeId: 14,
    title: "スパイス香る！ジューシータンドリーチキン",
    genre: "その他",
    img: "/images/dishes/dish14.jpg",
    description: "スパイスに漬け込んだ鶏肉を焼き上げた、本格インド料理。",
    ingredients: [
      { name: "鶏もも肉", quantity: "2枚" },
      { name: "ヨーグルト", quantity: "100ml" },
      { name: "カレー粉", quantity: "大さじ2" },
      { name: "にんにく", quantity: "1片" },
      { name: "しょうが", quantity: "1片" },
      { name: "レモン汁", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" }
    ],
    steps: [
      "鶏肉にフォークで穴を開け、下味をつける。",
      "ヨーグルト、カレー粉、にんにく、しょうが、レモン汁を混ぜた漬け込みダレに鶏肉を漬ける。",
      "冷蔵庫で1時間以上寝かせる。",
      "オーブンで焼き色がつくまで焼く。"
    ],
    points: "漬け込み時間を長くすると、より味がしみ込みます。"
  },
  {
    recipeId: 15,
    title: "香り豊か！あっさり鶏だしフォー",
    genre: "その他",
    img: "/images/dishes/dish15.jpg",
    description: "あっさりとした鶏だしスープが特徴のベトナムの国民食。",
    ingredients: [
      { name: "フォー", quantity: "100g" },
      { name: "鶏むね肉", quantity: "150g" },
      { name: "もやし", quantity: "50g" },
      { name: "香菜", quantity: "適量" },
      { name: "鶏がらスープの素", quantity: "小さじ1" },
      { name: "ナンプラー", quantity: "大さじ1" },
      { name: "レモン", quantity: "1/4個" }
    ],
    steps: [
      "鶏むね肉を茹で、スライスしておく。",
      "フォーを茹で、もやしと共に器に盛る。",
      "スープを作り、フォーに注ぐ。",
      "香菜とレモンを添えて完成。"
    ],
    points: "香菜の香りが苦手な場合は控えめにするか、別添えにしましょう。"
  },
  {
    recipeId: 16,
    title: "カリッとあなたも包み込む！メキシカン風タコス",
    genre: "その他",
    img: "/images/dishes/dish16.jpg",
    description: "香ばしいトルティーヤで具材を包む、本格メキシカンタコス。",
    ingredients: [
      { name: "トルティーヤ", quantity: "4枚" },
      { name: "牛ひき肉", quantity: "200g" },
      { name: "レタス", quantity: "適量" },
      { name: "トマト", quantity: "1個" },
      { name: "チーズ", quantity: "適量" },
      { name: "サルサソース", quantity: "適量" }
    ],
    steps: [
      "牛ひき肉をフライパンで炒め、塩胡椒で味を調える。",
      "トマトを角切り、レタスを適当な大きさにちぎる。",
      "トルティーヤに具材を乗せ、サルサソースをかける。",
      "包み込んで完成。"
    ],
    points: "具材はお好みでアレンジ可能。サルサソースで味を引き立てましょう。"
  },
  {
    recipeId: 17,
    title: "ごはんが進む！サバ味噌煮",
    genre: "和食",
    img: "/images/dishes/dish17.jpg",
    description: "甘辛い味噌だれがしっかり染み込んだ、家庭の定番魚料理。",
    ingredients: [
      { name: "サバ", quantity: "2切れ" },
      { name: "味噌", quantity: "大さじ2" },
      { name: "砂糖", quantity: "大さじ2" },
      { name: "みりん", quantity: "大さじ1" },
      { name: "しょうゆ", quantity: "小さじ1" },
      { name: "水", quantity: "200ml" }
    ],
    steps: [
      "サバに切り込みを入れ、熱湯をかけて臭みを取る。",
      "鍋に水、味噌、砂糖、みりん、しょうゆを入れて煮立てる。",
      "サバを入れ、中火で煮込む。",
      "煮汁をかけながら味を染み込ませる。"
    ],
    points: "煮汁をしっかり煮詰めることで、濃厚な味わいになります。"
  },
  {
    recipeId: 18,
    title: "香り豊か！きのこの炊き込みご飯",
    genre: "和食",
    img: "/images/dishes/dish18.jpg",
    description: "秋の味覚を存分に楽しめる、香り豊かな炊き込みご飯。",
    ingredients: [
      { name: "米", quantity: "2合" },
      { name: "しいたけ", quantity: "4枚" },
      { name: "しめじ", quantity: "1/2株" },
      { name: "にんじん", quantity: "1/4本" },
      { name: "だし汁", quantity: "400ml" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "みりん", quantity: "大さじ1" }
    ],
    steps: [
      "米を研ぎ、30分浸水させる。",
      "しいたけ、しめじ、にんじんを食べやすい大きさに切る。",
      "炊飯器に米、だし汁、調味料を入れ、具材を乗せて炊く。",
      "炊き上がったら混ぜて完成。"
    ],
    points: "きのこの種類を増やすと、より深い味わいが楽しめます。"
  },
  {
    recipeId: 19,
    title: "だしが決め手！コク旨肉うどん",
    genre: "和食",
    img: "/images/dishes/dish19.jpg",
    description: "だしの香りと肉の旨味が絶妙に絡み合う、満足感たっぷりの一杯。",
    ingredients: [
      { name: "うどん", quantity: "2玉" },
      { name: "牛肉 (薄切り)", quantity: "150g" },
      { name: "ねぎ", quantity: "適量" },
      { name: "だし汁", quantity: "500ml" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "みりん", quantity: "大さじ1" },
      { name: "砂糖", quantity: "小さじ1" }
    ],
    steps: [
      "鍋にだし汁、しょうゆ、みりん、砂糖を入れて煮立てる。",
      "牛肉を加え、色が変わるまで煮る。",
      "うどんを加え、温まるまで煮る。",
      "器に盛り、ねぎを散らして完成。"
    ],
    points: "仕上げに七味唐辛子をかけると風味が増します。"
  },
  {
    recipeId: 20,
    title: "なめらか食感！定番茶碗蒸し",
    genre: "和食",
    img: "/images/dishes/dish20.jpg",
    description: "なめらかな口当たりと出汁の香りが楽しめる、日本の伝統料理。",
    ingredients: [
      { name: "卵", quantity: "2個" },
      { name: "だし汁", quantity: "300ml" },
      { name: "しょうゆ", quantity: "小さじ1" },
      { name: "みりん", quantity: "小さじ1" },
      { name: "鶏肉", quantity: "50g" },
      { name: "しいたけ", quantity: "1枚" },
      { name: "かまぼこ", quantity: "適量" }
    ],
    steps: [
      "卵を溶き、だし汁、しょうゆ、みりんを加えて混ぜる。",
      "鶏肉、しいたけ、かまぼこを器に入れる。",
      "卵液を注ぎ、蒸し器で15分蒸す。",
      "竹串を刺して、透明な液が出たら完成。"
    ],
    points: "蒸す際の火加減を弱火にすると、なめらかな仕上がりになります。"
  },  
  {
    recipeId: 21,
    title: "懐かしの味！喫茶店風ナポリタン",
    genre: "洋食",
    img: "/images/dishes/dish21.jpg",
    description: "ケチャップの甘みとパスタの絶妙なハーモニー。懐かしい喫茶店の味。",
    ingredients: [
      { name: "スパゲッティ", quantity: "200g" },
      { name: "ウインナー", quantity: "4本" },
      { name: "ピーマン", quantity: "1個" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "ケチャップ", quantity: "大さじ4" },
      { name: "バター", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" }
    ],
    steps: [
      "スパゲッティを茹でる。",
      "ウインナー、ピーマン、玉ねぎを薄切りにする。",
      "フライパンにバターを熱し、野菜とウインナーを炒める。",
      "茹でたスパゲッティを加え、ケチャップで味付けする。",
      "塩・胡椒で調味して完成。"
    ],
    points: "最後にケチャップを少し焦がすと、香ばしさがアップします。"
  },
  {
    recipeId: 22,
    title: "とろけるチーズ！ジューシーハンバーグ",
    genre: "洋食",
    img: "/images/dishes/dish22.jpg",
    description: "ジューシーなハンバーグの中からチーズがとろけ出す贅沢な一品。",
    ingredients: [
      { name: "合い挽き肉", quantity: "300g" },
      { name: "玉ねぎ", quantity: "1個" },
      { name: "卵", quantity: "1個" },
      { name: "パン粉", quantity: "大さじ4" },
      { name: "牛乳", quantity: "大さじ2" },
      { name: "チーズ", quantity: "適量" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" },
      { name: "サラダ油", quantity: "大さじ1" }
    ],
    steps: [
      "玉ねぎをみじん切りにして炒め、冷ます。",
      "合い挽き肉、玉ねぎ、卵、パン粉、牛乳、調味料を混ぜる。",
      "肉だねを作り、中にチーズを包み込む。",
      "フライパンで焼き、中まで火を通す。",
      "お好みのソースをかけて完成。"
    ],
    points: "中のチーズは溶けやすいタイプを選ぶと良いです。"
  },
  {
    recipeId: 23,
    title: "おうちで簡単！ミートソースパスタ",
    genre: "洋食",
    img: "/images/dishes/dish23.jpg",
    description: "トマトの甘酸っぱさとひき肉の旨味が絶妙な、おうちで楽しめるミートソースパスタ。",
    ingredients: [
      { name: "スパゲッティ", quantity: "200g" },
      { name: "豚ひき肉", quantity: "150g" },
      { name: "玉ねぎ", quantity: "1/2個" },
      { name: "にんにく", quantity: "1片" },
      { name: "トマト缶", quantity: "1缶" },
      { name: "オリーブオイル", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" },
      { name: "胡椒", quantity: "適量" }
    ],
    steps: [
      "スパゲッティを茹でる。",
      "フライパンでオリーブオイルを熱し、にんにくを炒める。",
      "玉ねぎ、ひき肉を加えて炒める。",
      "トマト缶を加え、煮込みながら塩胡椒で調味する。",
      "茹でたスパゲッティにソースをかけて完成。"
    ],
    points: "煮込む時間を長くすると、味がより深まります。"
  },
  {
    recipeId: 24,
    title: "プリプリ海老のエビチリ",
    genre: "中華",
    img: "/images/dishes/dish24.jpg",
    description: "海老のプリプリ感とピリ辛のチリソースが絶妙な人気中華料理。",
    ingredients: [
      { name: "むきえび", quantity: "200g" },
      { name: "にんにく", quantity: "1片" },
      { name: "しょうが", quantity: "1片" },
      { name: "ケチャップ", quantity: "大さじ3" },
      { name: "豆板醤", quantity: "小さじ1" },
      { name: "片栗粉", quantity: "大さじ1" },
      { name: "水", quantity: "100ml" },
      { name: "ごま油", quantity: "大さじ1" }
    ],
    steps: [
      "えびに片栗粉をまぶし、熱湯でさっと茹でる。",
      "フライパンでごま油を熱し、にんにく、しょうが、豆板醤を炒める。",
      "ケチャップと水を加えて煮立てる。",
      "えびを加え、ソースを絡めて完成。"
    ],
    points: "えびは茹で過ぎないように注意すると、プリプリ感が保てます。"
  },
  {
    recipeId: 25,
    title: "ふわとろ卵の天津飯",
    genre: "中華",
    img: "/images/dishes/dish25.jpg",
    description: "ふわふわ卵と甘酢あんが絶妙に絡む、ごはんにぴったりの一品。",
    ingredients: [
      { name: "卵", quantity: "2個" },
      { name: "カニカマ", quantity: "50g" },
      { name: "ごはん", quantity: "1膳" },
      { name: "しょうゆ", quantity: "大さじ1" },
      { name: "酢", quantity: "大さじ1" },
      { name: "砂糖", quantity: "大さじ1" },
      { name: "水", quantity: "100ml" },
      { name: "片栗粉", quantity: "小さじ1" }
    ],
    steps: [
      "卵を溶き、カニカマを混ぜる。",
      "フライパンで卵を焼き、ふわふわに仕上げる。",
      "鍋でしょうゆ、酢、砂糖、水を煮立て、片栗粉でとろみをつける。",
      "ごはんに卵を乗せ、あんをかけて完成。"
    ],
    points: "卵は半熟のタイミングで火を止めると、ふわとろに仕上がります。"
  },  
  {
    recipeId: 26,
    title: "香ばしさ満点！鶏肉とカシューナッツ炒め",
    genre: "中華",
    img: "/images/dishes/dish26.jpg",
    description: "カシューナッツの香ばしさと鶏肉の旨味が絶妙な一品。",
    ingredients: [
      { name: "鶏もも肉", quantity: "200g" },
      { name: "カシューナッツ", quantity: "50g" },
      { name: "ピーマン", quantity: "2個" },
      { name: "しょうゆ", quantity: "大さじ2" },
      { name: "砂糖", quantity: "小さじ1" },
      { name: "酒", quantity: "大さじ1" },
      { name: "片栗粉", quantity: "大さじ1" },
      { name: "サラダ油", quantity: "大さじ2" }
    ],
    steps: [
      "鶏肉に片栗粉をまぶし、一口大に切る。",
      "フライパンにサラダ油を熱し、鶏肉を炒める。",
      "カシューナッツ、ピーマンを加えてさらに炒める。",
      "しょうゆ、砂糖、酒で味付けして完成。"
    ],
    points: "カシューナッツは焦がさないように軽く炒めるのがポイントです。"
  },
  {
    recipeId: 27,
    title: "パリッとジューシー！春巻き",
    genre: "中華",
    img: "/images/dishes/dish27.jpg",
    description: "パリッとした皮とジューシーな具材が絶品の春巻き。",
    ingredients: [
      { name: "春巻きの皮", quantity: "10枚" },
      { name: "豚ひき肉", quantity: "150g" },
      { name: "もやし", quantity: "100g" },
      { name: "たけのこ", quantity: "50g" },
      { name: "しょうゆ", quantity: "大さじ1" },
      { name: "オイスターソース", quantity: "小さじ1" },
      { name: "片栗粉", quantity: "小さじ1" },
      { name: "揚げ油", quantity: "適量" }
    ],
    steps: [
      "具材を全て細切りにし、豚ひき肉と炒める。",
      "しょうゆ、オイスターソースで味付けし、水溶き片栗粉でとろみをつける。",
      "春巻きの皮に具材を包む。",
      "揚げ油でカリッと揚げて完成。"
    ],
    points: "皮が破れないように丁寧に包みましょう。"
  },
  {
    recipeId: 28,
    title: "スパイス香る！簡単キーマカレー",
    genre: "その他",
    img: "/images/dishes/dish28.jpg",
    description: "スパイスが香る、簡単で美味しいキーマカレー。",
    ingredients: [
      { name: "豚ひき肉", quantity: "200g" },
      { name: "玉ねぎ", quantity: "1個" },
      { name: "にんじん", quantity: "1/2本" },
      { name: "トマト缶", quantity: "1缶" },
      { name: "カレー粉", quantity: "大さじ2" },
      { name: "ガラムマサラ", quantity: "小さじ1" },
      { name: "サラダ油", quantity: "大さじ1" },
      { name: "塩", quantity: "適量" }
    ],
    steps: [
      "玉ねぎとにんじんをみじん切りにする。",
      "フライパンにサラダ油を熱し、玉ねぎを炒める。",
      "豚ひき肉を加え、さらに炒める。",
      "トマト缶、カレー粉、ガラムマサラを加えて煮込む。",
      "塩で味を調えて完成。"
    ],
    points: "ガラムマサラを最後に加えると、香りが引き立ちます。"
  },
  {
    recipeId: 29,
    title: "ココナッツ香る！タイ風グリーンカレー",
    genre: "その他",
    img: "/images/dishes/dish29.jpg",
    description: "ココナッツミルクとグリーンカレーペーストで作る本格タイ風カレー。",
    ingredients: [
      { name: "鶏肉", quantity: "200g" },
      { name: "ココナッツミルク", quantity: "200ml" },
      { name: "グリーンカレーペースト", quantity: "大さじ2" },
      { name: "ナス", quantity: "2本" },
      { name: "パプリカ", quantity: "1個" },
      { name: "ナンプラー", quantity: "大さじ1" },
      { name: "サラダ油", quantity: "大さじ1" }
    ],
    steps: [
      "鶏肉を一口大に切り、ナスとパプリカをスライスする。",
      "フライパンにサラダ油を熱し、グリーンカレーペーストを炒める。",
      "鶏肉を加え、さらに炒める。",
      "ココナッツミルクを加え、ナスとパプリカを入れて煮込む。",
      "ナンプラーで味を調えて完成。"
    ],
    points: "煮込みすぎないことで、野菜の食感を残せます。"
  },
  {
    recipeId: 30,
    title: "野菜たっぷり！彩りビビンバ",
    genre: "その他",
    img: "/images/dishes/dish30.jpg",
    description: "色とりどりの野菜が映える、ヘルシーで美味しいビビンバ。",
    ingredients: [
      { name: "ごはん", quantity: "2膳" },
      { name: "ほうれん草", quantity: "1束" },
      { name: "にんじん", quantity: "1/2本" },
      { name: "もやし", quantity: "100g" },
      { name: "牛肉", quantity: "100g" },
      { name: "焼肉のたれ", quantity: "大さじ2" },
      { name: "卵", quantity: "1個" },
      { name: "ごま油", quantity: "適量" }
    ],
    steps: [
      "ほうれん草、にんじん、もやしを茹でてナムルにする。",
      "牛肉を焼肉のたれで炒める。",
      "ごはんにナムル、牛肉を盛り付け、卵を乗せる。",
      "ごま油をかけて完成。"
    ],
    points: "ナムルにはごま油と塩をしっかりなじませましょう。"
  },
  {
    recipeId: 31,
    title: "トシさん激推し!絶品納豆ご飯",
    genre: "和食",
    description: "シンプルながらも深い味わい。納豆のネバネバと卵黄が絡み合う究極のご飯。",
    ingredients: [
        { name: "ごはん", quantity: "1膳分" },
        { name: "納豆", quantity: "1パック" },
        { name: "卵黄", quantity: "1個" },
        { name: "醤油", quantity: "小さじ1" },
        { name: "青ねぎ", quantity: "適量" }
    ],
    steps: [
        "ごはんを茶碗に盛る。",
        "納豆に醤油を混ぜてよくかき混ぜる。",
        "ごはんに納豆をかけ、中央に卵黄をのせる。",
        "青ねぎを散らして完成。"
    ],
    points: "卵黄を加えることで、まろやかさがアップします。",
    img: "/images/dishes/dish31.jpg",
    onCalendar: true,
    calendarDate: 21,
    onCandidate: false,
    onFavorite: true,
    onSuggestion: true
},
{
    recipeId: 32,
    title: "さけさんおすすめトマトのさっぱりサラダ",
    genre: "その他",
    description: "みずみずしいトマトと香味野菜が引き立つ、さっぱりとしたサラダ。",
    ingredients: [
        { name: "トマト", quantity: "2個" },
        { name: "玉ねぎ", quantity: "1/4個" },
        { name: "バジル", quantity: "適量" },
        { name: "醤油", quantity: "小さじ2" },
        { name: "ごま油", quantity: "小さじ1" }
    ],
    steps: [
        "トマトを食べやすい大きさに切る。",
        "玉ねぎを薄切りにし、水にさらして辛味を抜く。",
        "トマトと玉ねぎを皿に盛り、バジルを添える。",
        "醤油とごま油をかけて完成。"
    ],
    points: "冷蔵庫で冷やしてから食べるとさらに美味しいです。",
    img: "/images/dishes/dish32.jpg",
    onCalendar: true,
    calendarDate: 18,
    onCandidate: false,
    onFavorite: true,
    onSuggestion: true
},
{
    recipeId: 33,
    title: "こーきさんの定番!熱々羽付き紫蘇餃子",
    genre: "中華",
    description: "パリッとした羽と紫蘇の香りが広がるジューシーな餃子。",
    ingredients: [
        { name: "豚ひき肉", quantity: "200g" },
        { name: "紫蘇の葉", quantity: "10枚" },
        { name: "餃子の皮", quantity: "20枚" },
        { name: "にんにく", quantity: "1片" },
        { name: "しょうが", quantity: "1片" },
        { name: "片栗粉", quantity: "小さじ1" },
        { name: "しょうゆ", quantity: "大さじ1" },
        { name: "ごま油", quantity: "小さじ1" },
        { name: "サラダ油", quantity: "適量" }
    ],
    steps: [
        "豚ひき肉に刻んだ紫蘇、にんにく、しょうが、調味料を加えて混ぜる。",
        "餃子の皮に具を包む。",
        "フライパンに油を熱し、餃子を並べて焼く。",
        "水を加え蓋をし、蒸し焼きにする。",
        "水がなくなったら羽ができるまで焼き上げる。"
    ],
    points: "紫蘇の香りがアクセント。羽をしっかり焼くとパリッと仕上がります。",
    img: "/images/dishes/dish33.jpg",
    onCalendar: true,
    calendarDate: 23,
    onCandidate: false,
    onFavorite: true,
    onSuggestion: true
},
{
    recipeId: 34,
    title: "ぐっさん秘伝の濃厚辛口カレー!",
    genre: "和食",
    description: "濃厚な旨味とスパイスの辛さが絶妙に絡み合う秘伝のカレー。",
    ingredients: [
        { name: "牛肉", quantity: "300g" },
        { name: "玉ねぎ", quantity: "2個" },
        { name: "じゃがいも", quantity: "2個" },
        { name: "にんじん", quantity: "1本" },
        { name: "カレールー", quantity: "1箱" },
        { name: "赤唐辛子", quantity: "2本" },
        { name: "にんにく", quantity: "1片" },
        { name: "しょうが", quantity: "1片" },
        { name: "水", quantity: "800ml" }
    ],
    steps: [
        "牛肉を一口大に切り、塩胡椒で下味をつける。",
        "玉ねぎ、じゃがいも、にんじんを食べやすい大きさに切る。",
        "鍋に油を熱し、にんにくとしょうがを炒め、牛肉を加えて焼き色をつける。",
        "野菜を加えて炒め、水を加えて煮込む。",
        "カレールーと赤唐辛子を加えてさらに煮込む。"
    ],
    points: "煮込む時間が長いほど、牛肉が柔らかくなり旨味が増します。",
    img: "/images/dishes/dish34.jpg",
    onCalendar: true,
    calendarDate: 31,
    onCandidate: false,
    onFavorite: true,
    onSuggestion: true
}  
];

export default function RecipeDetailPage({ params }) {
  const recipeId = Number(params["recipe-id"]); // paramsからURLパラメータを取得し数値に変換
  const recipe = recipes.find((r) => r.recipeId === recipeId);

  const router = useRouter();

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <CookingNavBar />
        <main className="main-container">
          <p>指定されたレシピが見つかりませんでした。</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <CookingNavBar />

      {/* Main Content */}
      <main className="main-container">
        <div className="white-container">
          {/* タイトル */}
          <h1 className="text-lg font-bold mb-4">{recipe.title}</h1>

          {/* 画像と説明 */}
          <div className="mb-6 grid grid-cols-2 gap-8">
            <img
              src={recipe.img}
              alt={recipe.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">{recipe.description}</p>
          </div>

          {/* 材料 */}
          <h2 className="text-md font-semibold mb-2">【材料】</h2>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500" />
                <span className="text-gray-700">{ingredient}</span>
              </li>
            ))}
          </ul>

          {/* 発注ボタン */}
          <div className="flex justify-center items-center w-full mb-12">
            <button 
              className="orange-btn w-1/3"
              onClick={() => router.push('/under-construction')}
            >
              発注
            </button>
          </div>

          {/* 作り方 */}
          <h2 className="text-md font-semibold mb-2">作り方</h2>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* ポイント */}
          <h2 className="text-md font-semibold mb-2">ポイント</h2>
          <p className="text-gray-700 mb-12">{recipe.points}</p>

          {/* ボタン */}
          <div className="flex flex-col space-y-3">
            <button
              className="orange-btn"
              onClick={() => router.push('/cooking/suggestion')}
            >
              候補に追加して戻る
            </button>
            <button
              className="orange-btn"
              onClick={() => router.push('/cooking/calendar')}
            >
              候補に追加してカレンダーへ
            </button>
            <button
              className="gray-btn"
              onClick={() => router.push('/cooking/suggestion')}
            >
              戻る
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}