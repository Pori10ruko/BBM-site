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
    titleLocalized: {
      JP: 'Distant Echo',
      EN: "Installation 'Distant Echo'",
      TW: "裝置藝術 'Distant Echo'"
    },
    date: '2025.11.14',
    client: 'BBM Collective',
    category: 'Installation',
    pillar: 'Art',
    featuredInTech: true,
    description: {
      JP: '「距離」と「残響」の美学。ピアノの旋律が空間に描く不可視の軌跡を、独自の音響処理によって聴覚的な建築として再構築します。静寂の中に浮かび上がる音の粒子が、鑑賞者の記憶と共振する没入型ライブインスタレーション。 Live Painting: Maria Noto (能登真理亜)',
      EN: 'Achieved a vast sound field wrapping the entire venue with only two speakers.',
      TW: '僅使用兩支揚聲器，便實現了包覆整個會場的廣闊音場。'
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
    id: 'tainan-lecture',
    title: 'Special Lecture at Tainan University of Technology',
    titleLocalized: {
      JP: '臺南國立大学 特別講義',
      EN: 'Special Lecture at Tainan University of Technology',
      TW: '台南應用科技大學 特別講座'
    },
    date: '2024',
    client: 'National University of Tainan',
    category: 'Lecture',
    pillar: 'Education',
    description: {
      JP: '台湾・臺南國立大学にて、流行音楽における空間表現の講義とワークショップを実施。',
      EN: 'Lecture on binaural audio technology and artistic expression for the next generation of creators.',
      TW: '針對次世代創作者，講授關於雙耳立體聲技術與藝術表現的特別課程。'
    },
    imageUrl: '/images/tainan lecture.jpg',
    tags: ['2024', 'Taiwan', 'Lecture', 'Education'],
    role: { JP: '特別講義', EN: 'Guest Lecture', TW: '特別講座' },
    approach: {
      JP: '立体音響の基礎と表現実践を接続し、学びを制作へと落とし込む。',
      EN: 'Connecting spatial-audio fundamentals with practice, turning learning into making.',
      TW: '連結立體音響基礎與實作，將學習落地到創作。'
    }
  },
  {
    id: 'tama-art-univ',
    title: 'Special Lecture at Tama Art University (Graduate School)',
    titleLocalized: {
      JP: '多摩美術大学大学院 特別講義 (Apichatpong Weerasethakul Workshop)',
      EN: 'Special Lecture at Tama Art University (Graduate School)',
      TW: '多摩美術大學研究所 特別講座'
    },
    date: '2024.11',
    client: 'Tama Art University',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '映画監督アピチャッポン・ウィーラセタクン氏本人の招聘により、多摩美術大学大学院で実施された同監督のワークショップにて特別講義を担当。専門とするバイノーラル音響技術と芸術表現への応用について、学生やアーティストに向けて解説と実演を行いました。',
      EN: 'A special lecture delivered during a workshop by film director Apichatpong Weerasethakul at Tama Art University (Graduate School). We presented and demonstrated binaural audio techniques and their applications to artistic expression for students and artists.',
      TW: '在多摩美術大學研究所舉辦、由電影導演阿彼察邦・韋拉斯塔古本人受邀主持的工作坊中，負責特別講座。面向學生與藝術家解說並示範雙耳（binaural）音響技術及其在藝術表現上的應用。'
    },
    imageUrl: '/images/tamabi.avif',
    tags: ['2024.11', 'Lecture', 'Workshop', 'Education'],
    role: { JP: '特別講義', EN: 'Guest Lecture', TW: '特別講座' },
    approach: {
      JP: '音響技術を表現へ接続し、実演を通して理解を深める。',
      EN: 'Connecting audio techniques to expression and deepening understanding through demonstration.',
      TW: '將音響技術連結到表現，透過示範加深理解。'
    }
  },
  {
    id: 'showa-music-univ',
    title: 'Showa Music University Research Presentation',
    titleLocalized: {
      JP: '昭和音楽大学 教員・研究員研究発表',
      EN: 'Showa University of Music Research Presentation',
      TW: '昭和音樂大學 教員研究發表'
    },
    date: '2024.11.14',
    client: 'Showa Music University',
    category: 'Education',
    pillar: 'Education',
    link: 'https://www.tosei-showa-music.ac.jp/calendar/20241114_002572.html?fbclid=IwY2xjawLnG-FleHRuA2FlbQIxMABicmlkETFzdU9uVUNrR2xmUk01T2s2AR6sQHh1yR4vtsR2grZBBwlAeTL5hdL0NjQEuibHZQBtH8ARYpfwoEuJp31ufw_aem__QWZpxTr8XXn3Gr2m2ucBg',
    description: {
      JP: '昭和音楽大学ユリホールにて行われた教員・研究員研究発表に出演。「Voices in the Void」において電子音響と映像を担当し、学術的な場での実践研究を発表しました。',
      EN: "Performed electronic acoustics and visuals for 'Voices in the Void' at the academic research presentation.",
      TW: '在學術研究發表會上，擔任『Voices in the Void』的電子音響與影像演出。'
    },
    imageUrl: '/images/showa.avif',
    tags: ['2024.11.14', 'Research', 'Performance', 'Education'],
    role: { JP: '電子音響 / 映像', EN: 'Electroacoustics / Visuals', TW: '電子音響／影像' },
    approach: {
      JP: '電子音響と映像を統合し、研究発表として成立する表現形式を設計。',
      EN: 'Integrating electroacoustics and visuals into a form suitable for research presentation.',
      TW: '整合電子音響與影像，設計可作為研究發表成立的表現形式。'
    }
  },
  {
    id: 'bbm-workshop',
    title: 'BBM Workshop',
    titleLocalized: {
      JP: 'BBM Workshop',
      EN: 'BBM Workshop',
      TW: 'BBM 工作坊'
    },
    date: '2024 - Present',
    client: 'BBM',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '「音」を扱うすべての人のための実践的ワークショップ。プロフェッショナルな制作環境やスタジオにて、立体音響の基礎から応用、そして表現の可能性をハンズオン形式で探求します。',
      EN: 'Practical workshop for exploring spatial audio from basics to advanced expression.',
      TW: '針對立體音響從基礎到應用，探索表現可能性的實踐型工作坊。'
    },
    imageUrl: '/images/workshop.webp',
    tags: ['2024 - Present', 'Workshop', 'Hands-on', 'Spatial Audio'],
    role: { JP: '講師 / 進行', EN: 'Facilitation / Instruction', TW: '講師／帶領' },
    approach: {
      JP: '基礎→応用→表現を一続きの体験として設計し、現場で学ぶ。',
      EN: 'Designing fundamentals→applications→expression as one continuous studio experience.',
      TW: '將基礎→應用→表現設計為連續體驗，在現場學習。'
    },
    externalLinks: [
      {
        label: 'Link',
        url: 'https://note.com/bbmusic/n/n6ab3abd6043d?fbclid=IwY2xjawO6sktleHRuA2FlbQIxMABicmlkETE0TEFPemxoeGJuMFVSVVljc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiZtz9mAN8da7X7asHFtyLMquwCz8IU5JYajqnR20E8Afy3AZoI8m5MThGFi_aem_IAQgkkZJB7LL3REWjuI_hA'
      }
    ]
  },
  {
    id: 'bbm-online-seminar',
    title: 'BBM Online Seminar',
    titleLocalized: {
      JP: 'BBM Online Seminar',
      EN: 'BBM Online Seminar',
      TW: 'BBM Online Seminar'
    },
    date: '2023 - Present',
    client: 'BBM',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: 'オンラインで学ぶ、音響表現の現在地。場所を問わず参加できるセミナー形式で、最新の技術動向や制作プロセスを共有し、知のオープン化を推進しています。',
      EN: 'Learning online—where audio expression stands today. In an accessible seminar format, we share current technical trends and production processes, promoting open knowledge.',
      TW: '在線學習音響表現的現在地。以不受地點限制的研討會形式分享最新技術動向與製作流程，推動知識的開放。'
    },
    imageUrl: '/images/seminor.webp',
    tags: ['2023 - Present', 'Online', 'Seminar', 'Knowledge'],
    role: { JP: '講師 / 共有', EN: 'Lecturing / Sharing', TW: '講師／分享' },
    approach: {
      JP: '最新動向と制作の実例を共有し、参加者の実践へつなぐ。',
      EN: 'Sharing up-to-date practice and real examples to support participants’ work.',
      TW: '分享最新動向與實例，連結到參與者的實踐。'
    }
  },
  {
    id: 'bbm-note',
    title: 'BBM Note',
    titleLocalized: {
      JP: 'BBM Note',
      EN: 'BBM Note',
      TW: 'BBM Note'
    },
    date: '2023 - Present',
    client: 'BBM',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: 'プロジェクトの裏側や技術的な知見、日々の思考を綴る公式テキストメディア。作品が生まれるまでのプロセスや思想をより深く共有するためのアーカイブです。',
      EN: 'An official text medium documenting behind-the-scenes processes, technical insights, and daily thoughts. An archive to share the ideas and steps behind each work in greater depth.',
      TW: '官方文字媒體，記錄專案幕後、技術見解與日常思考。作為更深入分享作品誕生過程與思想的檔案庫。'
    },
    imageUrl: '/images/note.avif',
    tags: ['2023 - Present', 'Writing', 'Archive', 'Process'],
    role: { JP: '編集 / 執筆', EN: 'Editing / Writing', TW: '編輯／撰寫' },
    approach: {
      JP: '技術と思想を言葉にし、共有可能な知として蓄積する。',
      EN: 'Turning technique and thought into words and accumulating shareable knowledge.',
      TW: '將技術與思想化為文字，累積為可共享的知識。'
    },
    externalLinks: [
      { label: 'Link', url: 'https://note.com/bbmusic' }
    ]
  },
  {
    id: 'bbm-net-radio',
    title: 'BBM Net Radio',
    titleLocalized: {
      JP: 'BBM Net Radio',
      EN: 'BBM Net Radio',
      TW: 'BBM Net Radio'
    },
    date: '2023 - Present',
    client: 'BBM',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '音声による思考の共有。ゲストを招いた対談や、制作の中で生まれた気づきを、ラジオ形式でカジュアルに発信。聴覚を通じた「学び」と「対話」の場です。',
      EN: 'Sharing thoughts through voice. We casually broadcast guest dialogues and insights born from making—creating a place for learning and dialogue through listening.',
      TW: '以聲音分享思考。以廣播形式輕鬆發送來賓對談與製作中的發現，作為透過聆聽而展開的「學習」與「對話」場域。'
    },
    imageUrl: '/images/radio.jpg',
    tags: ['2023 - Present', 'Radio', 'Dialogue', 'Learning'],
    role: { JP: 'パーソナリティ', EN: 'Host', TW: '主持' },
    approach: {
      JP: '制作の気づきを言葉にし、聴くことから学びを立ち上げる。',
      EN: 'Putting making into words and letting learning emerge from listening.',
      TW: '把製作中的覺察化為語言，讓學習從聆聽中生成。'
    },
    externalLinks: [
      { label: 'Link', url: 'https://stand.fm/channels/6857f11ebe67144ad58a3f6a' }
    ]
  },
  {
    id: 'shimamura-music-seminar',
    title: 'Shimamura Music Seminar',
    titleLocalized: {
      JP: '島村楽器 特別セミナー',
      EN: 'Shimamura Music Seminar',
      TW: '島村樂器 特別研討會'
    },
    date: '2024',
    client: 'Shimamura Music',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '島村楽器とのコラボレーションによる特別セミナー。最新の機材や技術を用いた音楽制作のノウハウを、実演を交えて解説。楽器店という身近な場所から、音の楽しみ方を広げます。',
      EN: 'A special seminar in collaboration with Shimamura Music. We explain music production know-how using the latest gear and techniques, with live demonstrations—expanding ways to enjoy sound from a familiar place: the music store.',
      TW: '與島村樂器合作的特別研討會。結合實演，解說使用最新器材與技術的音樂製作訣竅，從熟悉的樂器店出發，拓展享受聲音的方式。'
    },
    imageUrl: '/images/simamura.webp',
    tags: ['2024', 'Seminar', 'Gear', 'Production'],
    role: { JP: '講師', EN: 'Lecturer', TW: '講師' },
    approach: {
      JP: '実演を通して、制作の手触りをその場で共有する。',
      EN: 'Sharing the tactile feel of production through live demos.',
      TW: '透過實演即時分享製作的手感。'
    },
    externalLinks: [
      { label: 'Link', url: 'https://note.com/bbmusic/n/n934a4790feb2' }
    ]
  },
  {
    id: 'tsuchiura-elementary-special-class',
    title: 'Tsuchiura Elementary School Special Class',
    titleLocalized: {
      JP: '土浦市立大岩田小学校 特別授業',
      EN: 'Tsuchiura Elementary School Special Class',
      TW: '土浦市立小學 特別課程'
    },
    date: '2024',
    client: 'Tsuchiura City',
    category: 'Education',
    pillar: 'Education',
    description: {
      JP: '「キャリア講演会」として体育館で特別授業を実施。金管バンド部との共演に加え、全児童が足踏みや文房具の音でアンサンブルに参加するワークショップを開催。「楽器以外の音」で奏でる喜びを共有しました。',
      EN: 'A special class held in the gym as a “career lecture.” Alongside a performance with the brass band, all students joined an ensemble workshop using footsteps and the sounds of stationery—sharing the joy of making music with “sounds beyond instruments.”',
      TW: '以「職涯講演會」形式在體育館舉辦特別課程。除了與金管樂團共演，也透過工作坊讓全體學生用踏步與文具聲加入合奏，共享以「非樂器之聲」演奏的喜悅。'
    },
    imageUrl: '/images/school_tsuchiura.jpg',
    tags: ['2024', 'School', 'Workshop', 'Community'],
    role: { JP: '特別授業 / ワークショップ', EN: 'Special Class / Workshop', TW: '特別課程／工作坊' },
    approach: {
      JP: '身近な音をアンサンブルへ接続し、全員参加の表現体験を設計。',
      EN: 'Connecting everyday sounds to ensemble-making, designing an inclusive experience.',
      TW: '把日常聲音連結到合奏，設計人人可參與的表達體驗。'
    }
  },
  {
    id: 'seigetsuki',
    title: 'バーチャル霊園 清月記',
    titleLocalized: {
      JP: 'バーチャル霊園 清月記',
      EN: 'Seigetsuki Virtual Cemetery',
      TW: '清月記 虛擬墓園'
    },
    client: '株式会社清月記',
    category: 'App',
    pillar: 'Technology',
    featuredInTech: true,
    description: {
      JP: '株式会社清月記の「バーチャル霊園」アプリ。立体音響の音楽デザインを担当。',
      EN: 'Construction of a serene acoustic space in a virtual environment.',
      TW: '在虛擬空間中建構寧靜的音響空間。'
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
    id: 'tokoji-speaker-test-2026',
    title: 'Tokoji Temple 2ch Speaker Test (2026)',
    titleLocalized: {
      JP: '東光寺 2ch スピーカーテスト (2026)',
      EN: 'Tokoji Temple 2ch Speaker Test (2026)',
      TW: '東光寺 2ch 揚聲器測試 (2026)'
    },
    date: '2026',
    client: 'Tokoji Temple',
    category: 'Archive',
    pillar: 'Technology',
    description: {
      JP: '2026年に実施予定の東光寺での音響実験。寺院空間で2chスピーカーのみを用いて立体感のある音響空間を構築するテスト。',
      EN: 'Spatial audio experiment in a temple environment using only 2 speakers.',
      TW: '在寺廟環境中僅使用兩支揚聲器進行的空間音響實驗。'
    },
    imageUrl: '/images/tokoji1.png',
    tags: ['2026', 'Tokoji', '2ch', 'Test', 'Spatial Audio'],
    role: { JP: '音響実験', EN: 'Audio Experiment', TW: '音響實驗' },
    approach: {
      JP: '通常の2ch環境でも成立する空間設計を検証し、実装へつなぐ。',
      EN: 'Validating spatial design that works in standard 2ch setups and translating it into implementation.',
      TW: '驗證可在標準 2ch 環境成立的空間設計，並連結到實作。'
    },
    link: 'https://youtu.be/D4dLEi8udTk'
  },
  {
    id: 'yuki-share',
    title: 'Yuki Share',
    titleLocalized: {
      JP: 'Yuki Share',
      EN: 'Yuki Share',
      TW: 'Yuki Share'
    },
    date: '2024',
    client: 'Yuki Share',
    category: 'Client Works',
    pillar: 'Technology',
    description: {
      JP: '空間音響技術を用いたシェアリングサービスへの技術提供。',
      EN: 'Technical support for a sharing service using spatial audio technology.',
      TW: '以立體音響技術為共享服務提供技術支援。'
    },
    imageUrl: '/images/yuki%20share%20.jpg',
    link: 'https://youtu.be/QSQ4U3pcvzQ?si=TkflGvBwPiF9fKyl',
    tags: ['2024', 'Client Work', 'Spatial Audio'],
    role: { JP: '技術提供', EN: 'Technical Support', TW: '技術支援' },
    approach: {
      JP: 'サービス体験に寄与する音響表現を設計し、実装へ落とし込む。',
      EN: 'Designing an audio experience that supports the service and translating it into implementation.',
      TW: '設計可支援服務體驗的音響表現，並落地到實作。'
    }
  },
  {
    id: 'yuki-parade-tsuzuku-nara',
    title: 'パレードが続くなら / YUKI',
    titleLocalized: {
      JP: 'パレードが続くなら / YUKI',
      EN: 'Parade ga Tsuzuku Nara / YUKI',
      TW: '如果遊行持續下去 / YUKI'
    },
    date: '2023.02.01',
    client: 'YUKI (SONY MUSIC)',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'アルバム『パレードが続くなら』における、ジャケットCGI参加。',
      EN: "Jacket CGI participation for the album 'Parade ga Tsuzuku Nara'.",
      TW: '專輯《如果遊行持續下去》的封面 CGI 參與。'
    },
    imageUrl: '/images/parade.jpg',
    tags: ['2022–2024', 'SONY MUSIC', 'Album', 'Jacket CGI', 'Music'],
    role: {
      JP: 'ジャケットCGI参加（BBM 中村）',
      EN: 'Jacket CGI (BBM Nakamura)',
      TW: '封面 CGI（BBM 中村）'
    },
    approach: {
      JP: '作品の世界観に合わせて、アルバムの顔となるジャケットCGI表現を設計。',
      EN: 'Designed the jacket CGI expression to match the work’s worldview.',
      TW: '依作品世界觀設計作為專輯門面的封面 CGI 表現。'
    },
    externalLinks: [
      { label: 'YUKIweb', url: 'https://www.yukiweb.net/disco/archive/?ESCL-5752' },
      { label: 'Sony Music', url: 'https://www.sonymusic.co.jp/artist/YUKI/discography/ESCL-5752' }
    ]
  },
  {
    id: 'yuki-super-slits-2024-intermission',
    title: 'Intermission Video Music / YUKI concert tour “SUPER SLITS” 2024',
    titleLocalized: {
      JP: '幕間映像 音楽 / YUKI concert tour “SUPER SLITS” 2024',
      EN: 'Intermission Video Music / YUKI concert tour “SUPER SLITS” 2024',
      TW: '幕間影像 音樂 / YUKI concert tour “SUPER SLITS” 2024'
    },
    date: '2024',
    client: 'YUKI (SONY MUSIC)',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: '全国ホールツアー「YUKI concert tour “SUPER SLITS” 2024」における、幕間映像（会場スクリーン映像）の音楽を担当。',
      EN: 'Composed music for the intermission screen projection videos for the nationwide hall tour “YUKI concert tour “SUPER SLITS” 2024”.',
      TW: '負責全國巡迴「YUKI concert tour “SUPER SLITS” 2024」幕間（會場螢幕投影影像）的音樂。'
    },
    imageUrl: 'https://www.yukiweb.net/super-slits-2024/img/og.png',
    tags: ['2024', 'SONY MUSIC', 'Live', 'Intermission', 'Projection', 'Music'],
    role: {
      JP: '幕間映像 音楽（BBM 中村）',
      EN: 'Intermission Video Music (BBM Nakamura)',
      TW: '幕間影像 音樂（BBM 中村）'
    },
    approach: {
      JP: 'ライブの流れを途切れさせず、会場体験の温度を保つための音楽設計。',
      EN: 'Music design that maintains the venue’s energy without breaking the live flow.',
      TW: '在不打斷演出節奏的前提下，維持會場體驗溫度的音樂設計。'
    },
    externalLinks: [{ label: 'YUKIweb', url: 'https://www.yukiweb.net/super-slits-2024/' }]
  },
  {
    id: 'xiden-day-opener',
    title: 'Day Opener / XIDEN (Official MV)',
    titleLocalized: {
      JP: 'Day Opener / XIDEN【Official MV】',
      EN: 'Day Opener / XIDEN (Official MV)',
      TW: 'Day Opener / XIDEN（Official MV）'
    },
    date: '2024-25',
    client: 'RK Music',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'VSinger「XIDEN」の楽曲。クールで情熱的な世界観を、先鋭的なサウンドデザインとメロディで表現。',
      EN: 'A song for the VSinger XIDEN, expressing his cool and passionate worldview through cutting-edge sound design and melody.',
      TW: '為歌手 XIDEN 製作的作品，以前衛的聲音設計與旋律展現他冷酷卻充滿熱情的世界觀。'
    },
    imageUrl: 'https://i.ytimg.com/vi/kqqkPzZV8b4/maxresdefault.jpg',
    tags: ['2024-25', 'Client Work', 'Pop', 'VSinger', 'Composition', 'Arrangement', 'Mix'],
    role: {
      JP: '作曲・編曲（中村） / ミックス（宇津木）',
      EN: 'Composition & Arrangement (Nakamura) / Mix (Utsugi)',
      TW: '作曲・編曲（中村）／混音（宇津木）'
    },
    approach: {
      JP: 'アーティストの世界観と歌声の輪郭を優先し、立ち上がりと質感の設計で“強さ”を作る。',
      EN: 'Prioritizing the artist’s worldview and vocal clarity, shaping impact through transient and texture design.',
      TW: '以歌聲輪廓與世界觀為優先，透過瞬態與質感設計建立「力量感」。'
    },
    externalLinks: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=kqqkPzZV8b4' }]
  },
  {
    id: 'xiden-accompany',
    title: 'accompany / XIDEN (Official MV)',
    titleLocalized: {
      JP: 'accompany / XIDEN【Official MV】',
      EN: 'accompany / XIDEN (Official MV)',
      TW: 'accompany / XIDEN（Official MV）'
    },
    date: '2024-25',
    client: 'RK Music',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'VSinger「XIDEN」の楽曲。クールで情熱的な世界観を、先鋭的なサウンドデザインとメロディで表現。',
      EN: 'A song for the VSinger XIDEN, expressing his cool and passionate worldview through cutting-edge sound design and melody.',
      TW: '為歌手 XIDEN 的作品，以前衛的聲音設計與旋律展現他冷酷卻充滿熱情的世界觀。'
    },
    imageUrl: 'https://i.ytimg.com/vi/yrwF8EyLOcA/maxresdefault.jpg',
    tags: ['2024-25', 'Client Work', 'Pop', 'VSinger', 'Composition', 'Arrangement', 'Mix'],
    role: {
      JP: '作曲・編曲（中村） / ミックス（宇津木）',
      EN: 'Composition & Arrangement (Nakamura) / Mix (Utsugi)',
      TW: '作曲・編曲（中村）／混音（宇津木）'
    },
    approach: {
      JP: '歌の情緒を支える空間設計と、低域の解像度を両立するミックスバランスを構築。',
      EN: 'Building a mix balance that supports emotion through space while maintaining low-end definition.',
      TW: '兼顧空間感與低頻解析度，建立支撐情緒的混音平衡。'
    },
    externalLinks: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=yrwF8EyLOcA' }]
  },
  {
    id: 'xiden-shukumei',
    title: '宿命 / XIDEN (Official MV)',
    titleLocalized: {
      JP: '宿命 / XIDEN【Official MV】',
      EN: 'Shukumei / XIDEN (Official MV)',
      TW: '宿命 / XIDEN（Official MV）'
    },
    date: '2024-25',
    client: 'RK Music',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'VSinger「XIDEN」の楽曲。クールで情熱的な世界観を、先鋭的なサウンドデザインとメロディで表現。',
      EN: 'A song for the VSinger XIDEN, expressing his cool and passionate worldview through cutting-edge sound design and melody.',
      TW: '為歌手 XIDEN 的作品，以前衛的聲音設計與旋律展現他冷酷卻充滿熱情的世界觀。'
    },
    imageUrl: 'https://i.ytimg.com/vi/jWGWFkILgS4/maxresdefault.jpg',
    tags: ['2024-25', 'Client Work', 'Pop', 'VSinger', 'Composition', 'Arrangement', 'Mix'],
    role: {
      JP: '作曲・編曲（中村） / ミックス（宇津木）',
      EN: 'Composition & Arrangement (Nakamura) / Mix (Utsugi)',
      TW: '作曲・編曲（中村）／混音（宇津木）'
    },
    approach: {
      JP: 'メロディの推進力と音色のエッジを両立させ、サビで“抜ける”レンジ設計に最適化。',
      EN: 'Balancing melodic drive with edgy timbres, optimizing the chorus for a clear, forward presence.',
      TW: '兼顧旋律推進力與音色銳度，並在副歌做出更「穿透」的頻段設計。'
    },
    externalLinks: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=jWGWFkILgS4' }]
  },
  {
    id: 'xiden-closer',
    title: 'closer / XIDEN (Official MV)',
    titleLocalized: {
      JP: 'closer / XIDEN【Official MV】',
      EN: 'closer / XIDEN (Official MV)',
      TW: 'closer / XIDEN（Official MV）'
    },
    date: '2024-25',
    client: 'RK Music',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'VSinger「XIDEN」の楽曲。クールで情熱的な世界観を、先鋭的なサウンドデザインとメロディで表現。',
      EN: 'A song for the VSinger XIDEN, expressing his cool and passionate worldview through cutting-edge sound design and melody.',
      TW: '為歌手 XIDEN 的作品，以前衛的聲音設計與旋律展現他冷酷卻充滿熱情的世界觀。'
    },
    imageUrl: 'https://i.ytimg.com/vi/lQ0atrk7IgA/maxresdefault.jpg',
    tags: ['2024-25', 'Client Work', 'Pop', 'VSinger', 'Composition', 'Arrangement', 'Mix'],
    role: {
      JP: '作曲・編曲（中村） / ミックス（宇津木）',
      EN: 'Composition & Arrangement (Nakamura) / Mix (Utsugi)',
      TW: '作曲・編曲（中村）／混音（宇津木）'
    },
    approach: {
      JP: '情緒のグラデーションを支えるため、音の密度と余白をセクションごとに再設計。',
      EN: 'Redesigning density and negative space per section to support an emotional gradient.',
      TW: '為了支撐情緒層次，在各段落重新設計聲音密度與留白。'
    },
    externalLinks: [{ label: 'YouTube', url: 'https://www.youtube.com/watch?v=lQ0atrk7IgA' }]
  },
  {
    id: 'reverberation-higher',
    title: 'higher / REVERBERATION',
    titleLocalized: {
      JP: 'higher / REVERBERATION',
      EN: 'higher / REVERBERATION',
      TW: 'higher / REVERBERATION'
    },
    date: '2024',
    client: 'Re:AcT',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'アーティスト「REVERBERATION」のデビューシングルにおいて作編曲を担当。未来への飛躍を感じさせる、疾走感のあるエレクトロニック・ポップサウンドを構築。',
      EN: 'Composition and arrangement for REVERBERATION’s debut single, featuring a driving electronic pop sound that evokes soaring into the future.',
      TW: '為新銳藝人 REVERBERATION 出道單曲擔任作曲與編曲，以充滿推進力的電子流行音色營造飛向未來的感受。'
    },
    imageUrl: 'https://booth.pximg.net/654d0689-7c3a-4776-a30b-9bd7b6be7efa/i/6874855/4e803a46-3c87-42c2-8916-77bc1dd4b516_base_resized.jpg',
    tags: ['2024', 'Client Work', 'Pop', 'Composition', 'Mix', 'Mastering'],
    role: {
      JP: '作曲（中村） / ミックス・マスタリング（宇津木）',
      EN: 'Composition (Nakamura) / Mix & Mastering (Utsugi)',
      TW: '作曲（中村）／混音與母帶（宇津木）'
    },
    approach: {
      JP: '推進力のあるビート設計と、浮遊感のあるハーモニーを両立させ、未来感のあるドライブを形成。',
      EN: 'Balancing driving beat design with airy harmony to create forward momentum.',
      TW: '兼顧推進力節奏與漂浮和聲，塑造面向未來的驅動感。'
    },
    externalLinks: [{ label: 'BOOTH', url: 'https://react.booth.pm/items/6874855' }]
  },
  {
    id: 'yumekawa-kanau-jelly-selfish',
    title: 'Jelly-selfish / Yumekawa Kanau',
    titleLocalized: {
      JP: 'Jelly-selfish / 夢川かなう',
      EN: 'Jelly-selfish / Yumekawa Kanau',
      TW: 'Jelly-selfish / 夢川叶'
    },
    date: '2024',
    client: 'Re:AcT',
    category: 'Client Works',
    pillar: 'Art',
    description: {
      JP: 'アーティスト「夢川かなう」の3rdシングルにおいて作編曲を担当。独特の浮遊感と内に秘めた強い意志を、テクニカルかつキャッチーな楽曲で表現。',
      EN: 'Composition and arrangement for Yumekawa Kanau’s 3rd single, expressing her floating sensibility and inner strength through a technical yet catchy track.',
      TW: '為藝人 夢川叶 第三張單曲擔任作曲與編曲，以精緻卻朗朗上口的編曲展現飄浮感受性與內在力量。'
    },
    imageUrl: 'https://booth.pximg.net/654d0689-7c3a-4776-a30b-9bd7b6be7efa/i/5647485/7c877fd5-8320-4235-9f6d-c6bb65246ac3_base_resized.jpg',
    tags: ['2024', 'Client Work', 'Pop', 'Composition', 'Arrangement'],
    role: {
      JP: '作詞・作曲・編曲（BBM）',
      EN: 'Lyrics, Music & Arrangement (BBM)',
      TW: '作詞・作曲・編曲（BBM）'
    },
    approach: {
      JP: '浮遊感を保ちながら、フックの明瞭さを確保する音色選定とアレンジメントで“強さ”を可視化。',
      EN: 'Selecting timbres and arranging for hook clarity while preserving a floating feel.',
      TW: '在保留漂浮感的同時，透過音色與編曲確保副歌鉤子的清晰度。'
    },
    externalLinks: [{ label: 'BOOTH', url: 'https://react.booth.pm/items/5647485' }]
  },
  {
    id: 'tokyo-international-forum-hall-event',
    title: 'Tokyo International Forum Hall Event',
    titleLocalized: {
      JP: '東京国際フォーラム ホール（企業イベント）',
      EN: 'Corporate Event at Tokyo International Forum Hall',
      TW: '東京國際論壇 大廳（企業活動）'
    },
    date: '2024',
    client: 'Confidential Corporate Client',
    category: 'Client Works',
    pillar: 'Technology',
    description: {
      JP: '東京国際フォーラムのホールで行われた企業イベントにて、「音の拡がり」を意識した演出に関わる機会を得ました。',
      EN: 'At a corporate event held in the hall of Tokyo International Forum, we contributed to a direction focused on perceived sound expansion.',
      TW: '在東京國際論壇的大廳舉辦的企業活動中，我們參與了著重「聲音延展感」的演出設計。'
    },
    imageUrl: '/images/forum.webp',
    tags: ['2024', 'Client Work', 'Event', 'Spatial Audio'],
    role: {
      JP: '音響演出（拡がり設計）',
      EN: 'Audio Direction (Perceived Expansion)',
      TW: '音響演出（延展感設計）'
    },
    approach: {
      JP: 'ホール空間に合わせて、音像の広がりと距離感を設計し、観客体験全体の没入感を支える。',
      EN: 'Designed width and depth cues for the hall to support immersion across the audience experience.',
      TW: '依場館特性設計聲像的延展與距離感，支撐整體觀眾體驗的沉浸感。'
    }
  },
];