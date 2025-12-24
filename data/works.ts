import { Work } from '../types';

export const works: Work[] = [
  {
    id: 'distant-echo',
    title: 'Distant Echo',
    client: 'BBM Collective',
    category: 'Installation',
    pillar: 'Art',
    featuredInTech: true,
    description: {
      JP: '「距離」と「残響」をテーマにした立体音響インスタレーション。2chでの精密な空間シミュレート。',
      EN: 'Spatial audio installation themed "Distance" and "Echo". Precision 2ch simulation.',
      TW: '以「距離」與「殘響」為主題的立體音響裝置藝術。'
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
    id: 'una-venus',
    title: "un,a 'venus' (TR-860)",
    client: 'un,a',
    category: 'Archive',
    pillar: 'Art',
    featuredInTech: true,
    description: {
      JP: 'TR-860を使用した緻密な音響構成を、BBM独自の2chエンジンで再構築。',
      EN: "Reconstructing TR-860 tracks with BBM's unique 2ch engine.",
      TW: '重新構建 TR-860 音軌。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Music', '2ch Spatial'],
    role: { JP: 'スペーシャルミキシング', EN: 'Spatial Mixing', TW: '空間混音' },
    approach: { JP: '電子音の鋭い定位と広がりを2chで両立させたアーカイブ表現。', EN: 'Balancing sharp localization and width in a 2ch archive.', TW: '兼顧定位感與空間展延。' }
  },
  {
    id: 'release-page',
    title: 'BBM Release Archives',
    client: 'BBM Collective',
    category: 'Release',
    pillar: 'Art',
    description: {
      JP: 'BBMが手がける音源リリースのポータル。最新の立体音響作品の配信情報を集約。',
      EN: 'Portal for BBM sound releases, aggregating latest spatial audio works.',
      TW: 'BBM 音源發行入口網站。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1200',
    tags: ['Label', 'Digital Release'],
    role: { JP: 'キュレーション / マスタリング', EN: 'Curation / Mastering', TW: '策劃 / 母帶處理' },
    approach: { JP: '配信プラットフォームに最適化された2ch立体音響マスタリングの提示。', EN: 'Presenting 2ch spatial mastering optimized for streaming.', TW: '針對串流平台優化的立體音響。' }
  },
  {
    id: 'classical-album',
    title: 'Classical Spatial Album',
    client: 'Classical Label',
    category: 'Album',
    pillar: 'Art',
    description: {
      JP: 'クラシックの名曲を立体音響で再解釈。ホールの空気感をそのまま2chパッケージ化。',
      EN: 'Reinterpreting classical masterpieces in spatial audio, capturing hall ambience in 2ch.',
      TW: '以立體音響重新詮釋古典名曲。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=1200',
    tags: ['Classical', 'Album', 'Binaural'],
    role: { JP: '立体音響録音 / 編集', EN: 'Spatial Recording / Editing', TW: '立體音響錄音' },
    approach: { JP: '伝統的な楽器の配置を尊重しつつ、現代的な空間制御で臨場感を付与。', EN: 'Respecting traditional placement while adding modern spatial control.', TW: '賦予現代化的空間感。' }
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
    imageUrl: 'https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?auto=format&fit=crop&q=80&w=1200',
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
      JP: '台湾の国立台南大学での特別講義。最新の立体音響理論を学生たちへ。',
      EN: 'Special lecture at National University of Tainan on spatial audio theory.',
      TW: '國立臺南大學特別講座。'
    },
    imageUrl: 'https://images.unsplash.com/photo-1523050353055-f11235302848?auto=format&fit=crop&q=80&w=1200',
    tags: ['Taiwan', 'Academic', 'Global'],
    role: { JP: '特別講師', EN: 'Guest Lecturer', TW: '客座講師' },
    approach: { JP: '学術的視点と実務的スキルの橋渡しを行う教育的アプローチ。', EN: 'Bridging academic theory and practical engineering skills.', TW: '學術與實作的橋樑。' }
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
  // --- Added from attachments ---
  {
    id: 'alone-together',
    title: 'Alone Together',
    client: 'Riyadh Art',
    category: 'Installation',
    pillar: 'Art',
    description: {
      JP: 'Riyadh Artでのインスタレーション作品。',
      EN: 'Installation work for Riyadh Art.',
      TW: 'Riyadh Art 的裝置藝術作品。'
    },
    imageUrl: '/images/Random-International-Alone-Together.jpg',
    tags: ['Installation', 'Art'],
    role: { JP: 'サウンドデザイン', EN: 'Sound Design', TW: '聲音設計' },
    approach: { JP: '詳細はリンク参照。', EN: 'See link for details.', TW: '詳情請參考連結。' },
    techStack: [],
    featuredInTech: false
  },

  {
    id: 'venus-no-shukusai',
    title: 'venusの祝祭',
    client: '川崎市市制100周年',
    category: 'Archive',
    pillar: 'Art',
    description: {
      JP: '川崎市100周年記念イベントでの音響演出。',
      EN: 'Sound direction for Kawasaki City 100th Anniversary event.',
      TW: '川崎市100週年活動的聲音演出。'
    },
    imageUrl: '/images/venus-no-shukusai.jpg',
    tags: ['Event', 'Anniversary'],
    role: { JP: '音響演出', EN: 'Sound Direction', TW: '聲音演出' },
    approach: { JP: '詳細はリンク参照。', EN: 'See link for details.', TW: '詳情請參考連結。' },
    techStack: [],
    featuredInTech: false
  },
  {
    id: 'bbm-logo',
    title: 'BBM Logo',
    client: 'BBM Collective',
    category: 'Archive',
    pillar: 'Art',
    description: {
      JP: 'BBMのロゴデザイン。',
      EN: 'Logo design for BBM.',
      TW: 'BBM 標誌設計。'
    },
    imageUrl: '/images/bbm-logo-mark.jpg',
    tags: ['Logo', 'Design'],
    role: { JP: 'デザイン', EN: 'Design', TW: '設計' },
    approach: { JP: 'ブランドイメージを象徴するロゴ。', EN: 'Logo symbolizing brand image.', TW: '象徵品牌形象的標誌。' },
    techStack: [],
    featuredInTech: false
  },
];