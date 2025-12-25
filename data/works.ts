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
      JP: '歴史ある東光寺の本堂を舞台に、市民と作り上げた「光のまゆ」と「土浦の音」を組み合わせた一日限りの展示・コンサート。2ch立体音響による空間演出。',
      EN: 'A one-day exhibition and concert at the historic Tokoji Temple. Combining "cocoons of light" created with citizens and "sounds of Tsuchiura" with binaural spatial audio.',
      TW: '以歷史悠久的東光寺本堂為舞台，結合與市民共同創作的「光之繭」與「土浦之音」，透過雙聲道立體音響呈現的一日限定展覽與音樂會。'
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
      JP: '「距離」と「残響」をテーマにした立体音響インスタレーション。2chでの精密な空間シミュレート。Live Painting: Maria Noto (能登真理亜)',
      EN: 'Spatial audio installation themed "Distance" and "Echo". Precision 2ch simulation. Live Painting: Maria Noto.',
      TW: '以「距離」與「殘響」為主題的立體音響裝置藝術。Live Painting: Maria Noto (能登真理亜)。'
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
    title: 'Alone Together (Riyadh Art 2024)',
    titleLocalized: {
      JP: 'Alone Together (Riyadh Art 2024)',
      EN: 'Alone Together (Riyadh Art 2024)',
      TW: 'Alone Together (Riyadh Art 2024)'
    },
    date: '2024',
    client: 'Riyadh Art',
    category: 'Installation',
    pillar: 'Art',
    description: {
      JP: 'サウジアラビアで開催された芸術祭「Riyadh Art 2024」における没入型インスタレーション。立体音響実装を担当。Live Painting: Maria Noto (能登真理亜)',
      EN: 'An immersive installation at "Riyadh Art 2024" in Saudi Arabia. Responsible for spatial audio implementation. Live Painting: Maria Noto.',
      TW: '於沙烏地阿拉伯「Riyadh Art 2024」藝術節展出的沉浸式裝置藝術。負責立體音響實作。Live Painting: Maria Noto (能登真理亜)。'
    },
    imageUrl: '/images/Random-International-Alone-Together.jpg',
    tags: ['2024', 'Riyadh', 'Installation'],
    role: { JP: '立体音響実装', EN: 'Spatial Audio Implementation', TW: '立體音響實作' },
    approach: {
      JP: '空間と動線に合わせて、体験の質を損なわない音響実装を設計。',
      EN: 'Designing an audio implementation that preserves the experience across space and visitor flow.',
      TW: '依空間與動線設計音響實作，確保體驗品質。'
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
    date: '2023.05.26-27',
    client: 'Beyond Boundary Chamber Orchestra',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: '2023年5月、川崎駅前にて開催されたエレクトリックオペラ。音楽・映像・演出：中村浩之、演奏：Beyond Boundary Chamber Orchestra。コロナ禍を経て、「痛み」と「希望」を共有する現代の祝祭として、かぐや姫や人魚姫など古今の物語をオマージュし再構築しました。',
      EN: 'Held in front of Kawasaki Station in May 2023. Direction, Music, Video: Hiroyuki Nakamura. Performed by Beyond Boundary Chamber Orchestra. An electric opera that reinterprets classic tales like Princess Kaguya to share themes of pain and hope in the post-pandemic era.',
      TW: '2023年5月於川崎站前舉辦的電氣歌劇。音樂、影像、導演：中村浩之，演奏：Beyond Boundary Chamber Orchestra。作為在後疫情時代共享「傷痛」與「希望」的現代慶典，向輝夜姬、人魚公主等古今故事致敬並重新建構。'
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
    id: 'encount-kawasaki',
    title: 'Encount',
    titleLocalized: {
      JP: '川崎市政100周年プレイベント "Encount"',
      EN: 'Kawasaki City 100th Anniversary Pre-event "Encount"',
      TW: '川崎市政100週年暖身活動 "Encount"'
    },
    date: '2024.07.20',
    client: 'Kawasaki City',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: '川崎市政100周年プレイベントとして開催された「Encount」にて音楽監督を担当。',
      EN: 'Served as Music Director for "Encount," a pre-event for the 100th anniversary of Kawasaki City.',
      TW: '擔任川崎市政100週年暖身活動「Encount」的音樂總監。'
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
    title: 'Look Up At The Stars',
    client: 'Live Painting Concert',
    category: 'Performance',
    pillar: 'Art',
    description: {
      JP: 'ピアノとライブペインティングのコンサート。聴衆をピアノの内部にいるような感覚へ誘う。',
      EN: 'Piano & Live Painting Concert. Placing the audience inside the piano.',
      TW: '鋼琴與現場繪畫音樂會。'
    },
    imageUrl: '/images/look up at the stars photo.jpg',
    tags: ['Concert', 'Live Painting', 'Piano', 'Spatial Art'],
    role: { JP: '音響演出', EN: 'Audio Direction', TW: '聲音演出' },
    approach: { JP: '生楽器の響きを損なわず、空間的な奥行きを2chで拡張。', EN: 'Expanding depth via 2ch while preserving acoustic harmonics.', TW: '擴展空間深度。' }
  },
  {
    id: 'tsuchiura-archive',
    title: 'Tsuchiura Sound Archive',
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
    approach: { JP: '音を通じて地域への愛着を育むシビックプライドの形成。', EN: 'Fostering civic pride through the act of listening.', TW: '透過聲音建立自豪感。' }
  },
  {
    id: 'moonlight-concert',
    title: 'Tsuchiura Moonlight Concert',
    client: 'Tsuchiura City',
    category: 'Performance',
    pillar: 'Public',
    description: {
      JP: '月明かりの下で開催された野外コンサート。自然の静寂と音楽を2ch音響で融合。',
      EN: 'Outdoor concert under the moonlight. Merging nature\'s silence with music via 2ch.',
      TW: '在月光下舉辦的戶外音樂會。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    tags: ['Outdoor', 'Event', 'Public Art'],
    role: { JP: '会場音響設計', EN: 'Venue Sound Design', TW: '場地音響設計' },
    approach: { JP: '周囲の環境音を遮断せず、音楽の響きと溶け込ませる音場設計。', EN: 'Blending music with environmental sounds rather than isolating them.', TW: '融合自然環境音的設計。' }
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