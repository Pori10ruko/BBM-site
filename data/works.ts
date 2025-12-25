import { Work } from '../types';

export const works: Work[] = [
  {
    id: 'tokoji-light-sound',
    title: 'Architecture of Sound and Light at Tokoji Temple',
    titleLocalized: {
      JP: '音と光の建築 at 東光寺',
      EN: 'Architecture of Sound and Light at Tokoji Temple',
      TW: '音與光的建築 at 東光寺'
    },
    date: '2025.02.23',
    client: 'Tokoji Temple',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: '歴史ある東光寺の本堂を舞台に、過去と未来が交差する一日限りの祝祭。市民と共に紡いだ「光のまゆ」と、土浦の風景から採集した「音」が融合し、聴覚的な伽藍を立ち上げます。',
      EN: 'A one-night festival where past and future intersect at Tokoji Temple. "Cocoons of light" woven with citizens and "sounds" collected from Tsuchiura fuse to erect an auditory cathedral.',
      TW: '在歷史悠久的東光寺本堂，上演一場過去與未來交錯的一日限定慶典。與市民共同編織的「光之繭」融合從土浦採集的「聲音」，建構出聽覺的伽藍。'
    },
    imageUrl: '/images/tokoji1.png',
    tags: ['2025.02.23', 'Tsuchiura', 'Exhibition', 'Concert', '2ch Spatial'],
    role: { JP: '空間音響演出', EN: 'Spatial Audio Direction', TW: '立體音響演出' },
    approach: {
      JP: '展示とコンサートを横断する2ch立体音響の空間演出を設計。',
      EN: 'Designed the 2ch spatial audio direction across both exhibition and concert.',
      TW: '設計橫跨展覽與音樂會的雙聲道立體音響空間演出。'
    },
    externalLinks: [
      { label: 'Link', url: 'https://tsuchiura-sound-achib.netlify.app/#events' }
    ]
  },
  {
    id: 'distant-echo',
    title: 'Distant Echo',
    date: '2025.11.14',
    client: 'BBM Collective',
    category: 'Installation',
    pillar: 'Art',
    featuredInTech: true,
    description: {
      JP: '「距離」と「残響」の美学。ピアノの旋律が空間に描く不可視の軌跡を、独自の音響処理によって聴覚的な建築として再構築します。静寂の中に浮かび上がる音の粒子が、鑑賞者の記憶と共振する没入型ライブインスタレーション。 Live Painting: Maria Noto (能登真理亜)',
      EN: 'The aesthetics of distance and reverberation. Piano melodies trace invisible trajectories, reconstructed as auditory architecture. An immersive live installation where sound particles emerging from silence resonate with memories. Live Painting: Maria Noto.',
      TW: '「距離」與「殘響」的美學。鋼琴旋律在空間中描繪出的隱形軌跡，重建為聽覺的建築。從寂靜中浮現的聲音粒子，與觀賞者記憶共鳴的沉浸式現場裝置。 Live Painting: Maria Noto (能登真理亜)'
    },
    imageUrl: '/images/distant-echo.avif',
    tags: ['Immersive', 'Performance', '2ch Spatial'],
    role: { JP: '音響演出 / システム構築', EN: 'Audio Direction', TW: '聲音演出' },
    approach: { JP: '壁面反射を2chで再現し、スピーカーの存在を消すアプローチ。', EN: 'Eliminating speaker presence by recreating wall reflections.', TW: '消除揚聲器的存在感。' },
    externalLinks: [
      { label: 'Website', url: 'https://www.nakamurahiroyuki.info/distant-echo' },
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=Am1jq5AXBS4' }
    ]
  },
  {
    id: 'alone-together',
    title: 'Alone Together (Random International)',
    titleLocalized: {
      JP: 'Alone Together (Random International)',
      EN: 'Alone Together (Random International)',
      TW: 'Alone Together (Random International)'
    },
    date: '2024-25',
    client: 'Random International',
    category: 'Installation',
    pillar: 'Art',
    description: {
      JP: '物理的な身体とデジタルな存在。その境界線上で揺れ動く人間の振る舞いを探求する、Random Internationalの代表作。私たちはその不可視な「気配」や「関係性」を音響によって具現化し、視覚を超えた没入体験を実装しました。(Riyadh Art 2024 / Superblue Miami)',
      EN: 'Physical bodies versus digital existence. A signature work by Random International exploring human behavior on this boundary. We materialized the invisible "presence" through sound, implementing an immersive experience beyond vision.',
      TW: '物理的身體與數位的存在。Random International 探索人類在此邊界上行為模式的代表作。我們透過音響具現化那些不可視的「氣息」，實作超越視覺的沉浸式體驗。'
    },
    imageUrl: '/images/Random-International-Alone-Together.jpg',
    tags: ['2024-25', 'Riyadh', 'Miami', 'Installation'],
    role: { JP: '立体音響実装', EN: 'Spatial Audio Implementation', TW: '立體音響實作' },
    approach: {
      JP: '空間と動線に合わせて、体験の質を損なわない音響実装を設計。',
      EN: 'Designing an audio implementation that preserves the experience across space and visitor flow.',
      TW: '依空間與動線設計音響實作，確保體驗品質。'
    },
    externalLinks: [
      { label: 'Riyadh Art', url: 'https://riyadhart.sa/en/artworks/alone-together-2024/' }
    ]
  },
  {
    id: 'encount-kawasaki',
    title: 'Encount',
    titleLocalized: {
      JP: '川崎市政100周年プレイベント "Encount"',
      EN: 'Kawasaki City 100th Anniversary Pre-event "Encount"',
      TW: '川崎市政100週年暖身活動 "Encount"'
    },
    date: '2024.07',
    client: 'Kawasaki City',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: '都市の祝祭を彩る音のランドスケープ。川崎市政100周年の節目において、街の喧騒と音楽が調和する空間を演出。音楽監督として、都市空間そのものを一つの楽器として鳴らす試みを行いました。',
      EN: 'A sound landscape coloring the city\'s celebration. For Kawasaki\'s 100th anniversary, we created a space where city bustle and music harmonize, attempting to play the urban space itself as an instrument.',
      TW: '點綴都市慶典的聲音景觀。在川崎市政 100 週年的里程碑，演出一場城市的喧囂與音樂調和的空間。作為音樂總監，嘗試將都市空間本身作為一件樂器來演奏。'
    },
    imageUrl: '/images/encount.JPG',
    tags: ['2024.07', 'Kawasaki', 'Event'],
    role: { JP: '音楽監督', EN: 'Music Director', TW: '音樂總監' },
    approach: {
      JP: '都市の祝祭性を拡張するための音楽設計と、会場体験全体の統括。',
      EN: 'Music design and overall direction to expand the city\'s celebratory experience.',
      TW: '以音樂設計與整體統籌，拓展城市慶典的體驗。'
    },
    externalLinks: [
      { label: 'Link', url: 'https://prtimes.jp/main/html/rd/p/000000002.000144544.html' }
    ]
  },
  {
    id: 'look-up-at-the-stars',
    title: 'Look Up at the Stars',
    titleLocalized: {
      JP: 'Look Up at the Stars',
      EN: 'Look Up at the Stars',
      TW: 'Look Up at the Stars'
    },
    date: '2023.12',
    client: 'Live Painting Concert',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: '星を見上げる行為—その根源的な感覚を、音と色彩の対話によって表現します。能登真理亜の描く生命力溢れる色彩と、全方位から包み込む音響空間がリアルタイムに交錯し、鑑賞者を無限の広がりへと誘います。',
      EN: 'The act of looking up at the stars—expressing this primal sensation through a dialogue of sound and color. The vital colors by Maria Noto and the enveloping spatial audio intertwine, inviting viewers into an infinite expanse.',
      TW: '仰望星空的行為——透過聲音與色彩的對話來表現這種根源性的感覺。能登真理亞充滿生命力的色彩與包覆的音響空間交錯，引領觀賞者進入無限的廣闊之中。'
    },
    imageUrl: '/images/look-up.jpg',
    tags: ['2023.12', 'Live Painting', '2ch Spatial'],
    role: { JP: '立体音響演出', EN: 'Spatial Audio Direction', TW: '立體音響演出' },
    approach: {
      JP: 'ライブペインティングと同期する空間音響体験を2chで設計。',
      EN: 'Designed a 2ch spatial audio experience synchronized with live painting.',
      TW: '以雙聲道設計與現場繪畫同步的立體音響體驗。'
    },
    externalLinks: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=lI7Rq58b2Ys' }
    ]
  },
  {
    id: 'venus-festival',
    title: 'VENUSの祝祭',
    titleLocalized: {
      JP: 'エレクトリックオペラ "VENUSの祝祭"',
      EN: 'Electric Opera "Festival of VENUS"',
      TW: '電氣歌劇 "VENUS的祝祭"'
    },
    date: '2023.05',
    client: 'Beyond Boundary Chamber Orchestra',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: 'コロナ禍を経て、「痛み」と「希望」を共有するための現代の神話。かぐや姫や人魚姫など古今の物語をオマージュし、エレクトロニクスとオーケストラが融合した「エレクトリックオペラ」として再構築された祝祭の記録。',
      EN: 'A modern myth to share "pain" and "hope" after the pandemic. A record of a festival reconstructed as an "Electric Opera" fusing electronics and orchestra, paying homage to classic tales like Princess Kaguya.',
      TW: '經歷疫情過後，為了共享「傷痛」與「希望」而生的現代神話。向輝夜姬、人魚公主等古今故事致敬，融合電子音樂與管弦樂團，重新建構為「電氣歌劇」的慶典紀錄。'
    },
    imageUrl: '/images/art.jpg',
    tags: ['2023.05', 'Opera', 'Kawasaki', 'Electric Opera'],
    role: { JP: '音楽・映像・演出', EN: 'Direction / Music / Video', TW: '導演／音樂／影像' },
    approach: {
      JP: '古典的な物語のモチーフを現代の祝祭へ再構成し、都市空間で共有される体験として提示。',
      EN: 'Reconstructing classic story motifs into a contemporary festival shared in the urban space.',
      TW: '將經典故事母題重構為當代慶典，作為在城市空間中共享的體驗呈現。'
    },
    externalLinks: [
      { label: 'YouTube', url: 'https://www.youtube.com/watch?v=TWYuiozIxps' }
    ]
  },
  {
    id: 'tsuchiura-archive',
    title: '土浦Soundアーカイブプロジェクト',
    client: 'Public Project',
    category: 'Archive',
    pillar: 'Public',
    description: {
      JP: '土浦市の歴史的背景と環境音をアーカイブ。都市の記憶を音で次世代へ継承。',
      EN: 'Archiving environmental sounds and history of Tsuchiura for the future.',
      TW: '將土浦市的環境音存檔的公共項目。'
    },
    imageUrl: '/images/TSAP.png',
    tags: ['Public', 'Archive', 'Community'],
    role: { JP: 'サウンドディレクション', EN: 'Sound Direction', TW: '聲音指導' },
    approach: { JP: '音を通じて地域への愛着を育むシビックプライドの形成。', EN: 'Fostering civic pride through the act of listening.', TW: '透過聲音建立自豪感。' },
    externalLinks: [
      { label: 'Website', url: 'https://tsuchiura-sound-achib.netlify.app/' }
    ]
  },
  {
    id: 'moonlight-concert',
    title: 'Sound Kura Tsuchiura Moonlight Concert',
    titleLocalized: {
      JP: 'サウンド蔵つちうらムーンライトコンサート',
      EN: 'Sound Kura Tsuchiura Moonlight Concert',
      TW: 'Sound Kura Tsuchiura Moonlight Concert'
    },
    date: '2023 - Present',
    client: 'Tsuchiura City',
    category: 'Performance',
    pillar: 'Public',
    description: {
      JP: '土浦市の商店会と市民の手で作り上げる野外コンサート。BBMは企画・運営および演奏で参加し、街の賑わいと文化の醸成に貢献しています。',
      EN: 'An outdoor concert shaped by Tsuchiura\'s shopping district association and citizens. BBM participates in planning, operations, and performance—contributing to the city\'s vibrancy and cultural growth.',
      TW: '由土浦市商店街與市民共同打造的戶外音樂會。BBM 參與企劃、營運與演出，為城市的活力與文化養成帶來貢獻。'
    },
    imageUrl: '/images/moon_concert.jpg',
    tags: ['Tsuchiura', 'Outdoor', 'Concert', 'Community'],
    role: { JP: '企画・運営 / 演奏', EN: 'Planning / Operations / Performance', TW: '企劃／營運／演出' },
    approach: {
      JP: '市民と共に場を育て、街の空気と音楽が交差する一夜をデザイン。',
      EN: 'Co-creating the event with citizens, designing a night where the city\'s atmosphere meets music.',
      TW: '與市民共創活動，設計城市氛圍與音樂交會的一夜。'
    },
    externalLinks: [
      { label: 'Facebook', url: 'https://www.facebook.com/groups/174464965653837/' },
      { label: 'Instagram', url: 'https://www.instagram.com/tsuchiura_moon/?hl=ja' }
    ]
  },
  {
    id: 'oiwata-elementary-special-class',
    title: 'Oiwata Elementary School Special Class',
    titleLocalized: {
      JP: '土浦市立大岩田小学校 特別授業',
      EN: 'Oiwata Elementary School Special Class',
      TW: '大岩田小學 特別課程'
    },
    date: '2024',
    client: 'Tsuchiura Oiwata Elementary School',
    category: 'Education',
    pillar: 'Public',
    description: {
      JP: '昨年に続き「キャリア講演会」として体育館で特別授業を実施。金管バンド部との共演に加え、全児童が足踏みや手拍子、文房具の音でアンサンブルに参加するワークショップを開催。「楽器以外の音」で奏でる喜びを共有し、終了後は即席サイン会が開かれるほどの熱狂に包まれました。',
      EN: 'Following last year, we held a special class in the gym as a “career lecture.” Beyond performing with the brass band, every student joined an ensemble workshop using footsteps, claps, and the sounds of everyday stationery—sharing the joy of making music with “sounds beyond instruments.” The event ended in such excitement that an impromptu autograph session even took place.',
      TW: '延續去年的「職涯講演會」，我們在體育館舉辦特別課程。除了與金管樂團共演，也透過工作坊讓全體學生用踏步、拍手與文具聲加入合奏，共享以「非樂器之聲」演奏的喜悅。活動熱烈到結束後甚至自發形成即席簽名會。'
    },
    imageUrl: '/images/school tsuchiura.JPG',
    tags: ['Tsuchiura', 'School', 'Workshop', 'Community'],
    role: { JP: '特別授業 / ワークショップ', EN: 'Special Class / Workshop', TW: '特別課程／工作坊' },
    approach: {
      JP: '身近な音を「表現」へ変換し、全員参加のアンサンブル体験を設計。',
      EN: 'Turning everyday sounds into expression, designing an inclusive ensemble experience.',
      TW: '將日常聲音轉化為表達，設計人人可參與的合奏體驗。'
    }
  },
  {
    id: 'net-radio-spatial',
    title: 'Spatial Net Radio',
    client: 'Media Project',
    category: 'Archive',
    pillar: 'Public',
    description: {
      JP: 'トーク番組に「場所の気配」を付与。リスナーと同じ空間にいる体験。',
      EN: 'Adding "sense of place" to talk shows, placing listeners in the same room.',
      TW: '網路廣播中的全新空間表達。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2fccd27ee086?auto=format&fit=crop&q=80&w=1200',
    tags: ['Radio', 'Public', 'UX'],
    role: { JP: '空間音響設計', EN: 'Spatial Design', TW: '空間設計' },
    approach: { JP: '声の定位を2chで最適化し、長時間の視聴でも疲れない自然な立体感。', EN: 'Optimizing voice localization for long-term comfort in 2ch.', TW: '優化聲音定位。' }
  },
  {
    id: 'bbm-seminar',
    title: 'BBM Seminar',
    client: 'Education / Community',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '立体音響の思想と技術を分かち合うナレッジ共有プラットフォーム。',
      EN: 'Knowledge-sharing platform for spatial audio philosophy and tech.',
      TW: '分享立體音響知識的平台。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200',
    tags: ['Education', 'Tech Share'],
    role: { JP: '講師 / プログラム設計', EN: 'Lecturer', TW: '講師' },
    approach: { JP: '技術を分かち合うことで、文化全体の質を向上させる精神。', EN: 'Improving cultural quality through sharing technology.', TW: '透過分享提升品質。' }
  },
  {
    id: 'oiwada-career',
    title: 'Career Lecture at Oiwada',
    client: 'Oiwada Elementary School',
    category: 'Lecture',
    pillar: 'Education',
    description: {
      JP: '土浦市立大岩田小学校でのキャリア講演。宇津木が音の未来を語る。',
      EN: 'Career talk at Oiwada Elementary, discussing the future of sound.',
      TW: '大岩田小學的職涯講座。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Career', 'Kids', 'Community'],
    role: { JP: '講師（宇津木）', EN: 'Speaker (Utsugi)', TW: '講師（宇津木）' },
    approach: { JP: '目に見えない「音」の重要性とクリエイティブの楽しさを伝達。', EN: 'Conveying the importance of invisible "sound" and creative joy.', TW: '向孩子們傳達聲音的重要性。' }
  },
  {
    id: 'tainan-lecture',
    title: 'Tainan University Lecture',
    client: 'National University of Tainan',
    category: 'Lecture',
    pillar: 'Education',
    description: {
      JP: '台湾・國立臺南大学にて流行音楽の特別講義を実施。NAKAMURA Hiroyukiは2025年9月より同大学の講師に就任しています。',
      EN: 'Special lecture on pop music at the National University of Tainan. NAKAMURA Hiroyuki has been appointed as a lecturer at the university starting September 2025.',
      TW: '於國立臺南大學舉辦流行音樂特別講座。NAKAMURA Hiroyuki 自 2025 年 9 月起擔任該校講師。'
    },
    imageUrl: '/images/tainan lecture.jpg',
    tags: ['Taiwan', 'Academic', 'Global'],
    role: { JP: '特別講師', EN: 'Guest Lecturer', TW: '客座講師' },
    approach: { JP: '学術的視点と実務的スキルの橋渡しを行う教育的アプローチ。', EN: 'Bridging academic theory and practical engineering skills.', TW: '學術與實作的橋樑。' },
    externalLinks: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/photo?fbid=122221039964062649&set=a.122112593654062649'
      }
    ]
  },
  {
    id: 'seigetsuki',
    title: 'バーチャル霊園 清月記',
    client: '株式会社清月記',
    category: 'App',
    pillar: 'Technology',
    featuredInTech: true,
    description: {
      JP: '株式会社清月記の「バーチャル霊園」アプリ。立体音響の音楽デザインを担当。',
      EN: 'Virtual cemetery app by Seigetsuki Co., Ltd. Spatial audio music design.',
      TW: '清月記的虛擬靈園 App。負責立體音響音樂設計。'
    },
    imageUrl: '/images/reien_photo.webp',
    tags: ['Mobile', 'App', 'Spatial Audio'],
    role: { JP: '立体音響の音楽デザイン', EN: 'Spatial Audio Music Design', TW: '立體音響音樂設計' },
    approach: { JP: 'スマートフォン/イヤホン環境で、祈りの空間の静謐さを損なわない立体的な音楽設計。', EN: 'Designing spatial music that preserves a quiet prayer space on phone + headphones.', TW: '在手機與耳機環境中維持靜謐氛圍的立體音樂設計。' },
    externalLinks: [
      { label: 'App Store', url: 'https://apps.apple.com/jp/app/%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AB%E9%9C%8A%E5%9C%92/id6744600215' },
      { label: 'YouTube', url: 'https://www.youtube.com/shorts/5uV29nsJU7k' }
    ]
  },
  {
    id: 'yuki-share',
    title: "YUKI 'Share' MV",
    client: 'Epic Records Japan',
    category: 'Music Video',
    pillar: 'Technology',
    featuredInTech: true,
    description: {
      JP: '日常の音を「立体」として配置し、楽曲の実在感を2chで強調。',
      EN: 'Emphasizing reality via spatial 2ch foley in YUKI\'s music video.',
      TW: 'YUKI MV 的 2ch 立體音響化。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
    tags: ['MV', 'Foley', '2ch'],
    role: { JP: '立体音響デザイン', EN: 'Spatial Design', TW: '立體音響設計' },
    approach: { JP: '映像の質感に同期した繊細な音の配置。', EN: 'Delicate sound placement synchronized with visual textures.', TW: '強調樂曲的真實感。' }
  },
  {
    id: 'random-together-riyadh',
    title: 'Random Together (Riyadh Art)',
    client: 'Random Together',
    category: 'Installation',
    pillar: 'Technology',
    featuredInTech: true,
    description: {
      JP: 'Noor Riyadhでの巨大展示。視覚的スケールを凌駕する2ch音響。',
      EN: 'Massive exhibition at Noor Riyadh using our unique 2ch spatial system.',
      TW: '為巨大裝置提供 2ch 系統。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    tags: ['Art', 'Global', '2ch'],
    role: { JP: '立体音響システム設計', EN: 'System Design', TW: '系統設計' },
    approach: { JP: '2chのみで砂漠の広大さに匹敵する音響空間を構築。', EN: 'Building a space rivaling desert scales via 2ch alone.', TW: '構建宏大的 2ch 空間。' }
  },
];