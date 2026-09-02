import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '../components/Section';
import { Link, useNavigate } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import { works } from '../data/works';
import { useLanguage } from '../hooks/useLanguage';

const Technology: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();

  const technicalComparisonUrl = 'https://note.com/bbmusic/n/ne00d26d71887';

  const content = {
    ja: {
      eyebrow: 'Spatial Sound, in Many Forms',
      heroDisplay: 'Sound becomes Space.',
      heroDisplaySub: '音は、空間になる。',
      heroLead: 'ヘッドフォンの中に、部屋の中に、ゲームの中に。私たちは、聴くための空間そのものをつくっています。',
      subheading: 'Binaural / Ambisonics / VR / Game — かたちはひとつではありません',
      heroTitle: 'まず、体感してください。',
      hero: 'まず、私たちの音を体感してください。ぜひ、ヘッドフォンで聴いてください...',
      philosophyTitle: '音と空間の必然性',
      philosophyBody:
        '立体音響の技術は、いま広く行き渡りつつあります。しかし「その技術がなければ成立しない音」に出会うことは、いまも稀です。\n私たちは技術を誇示するためではなく、「この表現には、この空間が必要だ」という必然から出発します。\nだから、方法をひとつに決めていません。ヘッドフォンの中で完結するバイノーラル。頭の動きに音が追いつくアンビソニクス。iPadで巡るVR、ブラウザで遊べるゲーム、そして二本のスピーカーだけで奥行きを立ち上げる設計。作品と場所が求めるかたちを、そのつど選び、組み合わせています。',
      maTitle: '「距離」と「間」',
      maBody:
        'アルバム『Piano Distance』の題は、武満徹が1961年に書いたピアノ独奏曲への応答です。武満はひとつの楽器、ひとつの室内に、音と音の「距離」と静寂を置きました。私たちはその距離を、比喩ではなく、三次元の空間として立ち上げます。\nピアノの内部から採取した一音一音は固有の音色を持ち、空間の中で独立した「オブジェクト」として定位する。日本語の「間(ま)」——音と音のあいだにある沈黙と距離——を、装飾としてではなく、空間設計そのものの構造原理として組み込むこと。それが私たちの出発点です。',
      formsTitle: '音の空間、いくつかのかたち',
      formsLead: 'これらすべてを支えているのは、TouchDesigner上に自作した単一のアンビソニクス・エンジンです。市販のスペーシャライザーもプラグインも使いません。ひとつの核が、作品と場所に合わせてかたちを変えます。',
      forms: [
        { name: 'Binaural / 2ch', body: 'ヘッドフォンや、ふつうのステレオスピーカーで。前後・上下・距離までを描く、いちばん身近な入り口です。' },
        { name: 'Ambisonics + Head Tracking', body: '自作のアンビソニクス・エンジン。ひとりの聴き手の頭の向きに音場が追従するバイノーラル構成(Piano Distance、DEEP FAKEではライブで運用)から、iPadで空間を巡る最大3次・最大30オブジェクト同時定位の展示構成(TSAP)まで——同じ核が、かたちを変えます。' },
        { name: 'VR / Realtime 3D', body: '音の中を、巡る。リアルタイムに生成される三次元空間に、立体音響を統合します。' },
        { name: 'Game Engines', body: 'UnityやUnreal Engineで、体験を持ち帰れるかたちに。Webブラウザで、誰でも、いつでも。' },
      ],
      tsapTitle: '巡る人ごとに、違う曲になる',
      tsapBody:
        'Jisō・Aquarium——TSAPの2つのシーンは、Piano Distanceと同じTouchDesignerの核を最大3次アンビソニクスへ拡張したものです。Aquariumだけで28個の音オブジェクトとステレオベッドが同時に定位し、iPadで空間を巡ると、位置に応じて音場が組み変わります。281.6秒の「嵐」のサイクルと、発見の進行に応じて開くゲートによって、体験は自由な徘徊ではなく、作曲された弧を持ちます。音響解析と空間ロジックはすべてTouchDesignerが担い、UE5には位置・レベル・色の値だけを送信——Jisōの発光は、音のエンベロープに直接追従します。巡る経路が違えば、聴こえるシーケンスも違う。二度と同じ体験はありません。',
      gameTitle: '遊べる音の空間 ― おとの帆曳船',
      gameBody: '土浦の街でアーカイブされた音たちが、Unity製のゲームになりました。帆曳船を操りながら、音のあいだを進んでいく——展覧会「つちうらサウンド・アーカイブ展 2026」で生まれた空間音響の体験は、いまはブラウザひとつで、どこからでも開くことができます。',
      gamePlayButton: 'ブラウザで遊ぶ',
      gameWorkButton: '展覧会の記録を見る',
      worksTitle: '技術が必然となる作品たち',
      works1Body: '私たちの独自技術をフルに用いた、初のピアノアルバム。ヘッドフォンでも、わずか2台のスピーカーだけでも、音は背後から、頭上から立ち現れます。英Fluid Audioより手製・署名番号入りの限定盤、配信中（Spotify・Apple Musicほか各サービス）。',
      works2Title: '音の中を歩く ― Piano Distance 立体音響 VR',
      works2Body: 'アルバム《Piano Distance》を、聴くだけでなく"中に入って体験する"立体音響作品へ。ピアノの一音一音が暗がりに息づく光となり、聴き手が向きを変えると音が頭のまわりを回ります。リアルタイムに生成される三次元空間へ立体音響を統合した、実験途中の試作です。（ヘッドホン推奨）',
      compareTitle: '技術のはなし、もう少し詳しく',
      compareBody: '細かく技術を比べたい場合はこちらのサイトへ。',
      compareLink: '記事を見る',
      beyondTitle: 'スピーカーのある場所で',
      beyondBody:
        'ヘッドフォンの外にも、音の空間はつくれます。ふつうの2chスピーカーだけでも、前後・左右、奥行きや距離感までを丁寧に設計すれば、お寺や展示室、小さな会場が、音に包まれる場所になります。BBMでは、そうした「場」そのものを体現するイベントも行っています。東京での《Distant Echo》(2025)では、ヘッドフォンのために磨いてきた同じバイノーラル・エンジンを、2本のスピーカーだけに向けて再チューニング。会場の壁の反響と一体化させ、「スピーカーの存在が消える」音場を設計しました。',
      clientTitle: 'ともにつくった仕事',
      clientBody: 'これまでに、アーティストや企業のみなさまと、こんな音をつくってきました。',
      tokojiTestBody: '東光寺で実施した音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築できるかを検証しました。',
      collabTitle: '次は、みなさまと。',
      collabBody:
        'ヘッドフォンの中の一曲から、会場全体の音響設計、VRやゲームの中の空間まで。会場と目的に合わせて、いちばん合うかたちを一緒に探し、体験として成立する音を形にします。',
      collabButton: 'CONTACT / お問い合わせ',
    },
    en: {
      eyebrow: 'Spatial Sound, in Many Forms',
      heroDisplay: 'Sound becomes Space.',
      heroDisplaySub: '',
      heroLead: 'Inside headphones, inside a room, inside a game — we build the very spaces in which sound is heard.',
      subheading: 'Binaural / Ambisonics / VR / Game — one practice, many forms',
      heroTitle: 'First, Experience Our Sound.',
      hero: 'First, Experience Our Sound. Please listen with headphones. Our technology is not just stereo...',
      philosophyTitle: 'The Necessity of Sound and Space',
      philosophyBody: 'Spatial audio is everywhere now. Yet sounds that truly require it are still rare.\nWe do not start from technology; we start from necessity — "this expression needs this space."\nThat is why we keep more than one way of working: binaural sound complete within headphones; ambisonics that turns when you turn; VR you can travel through; games you can play in a browser; and rooms where two ordinary speakers open up depth. For each work and each place, we choose — and combine.',
      maTitle: 'Distance, and Ma',
      maBody:
        'The title Piano Distance answers a solo piano piece Toru Takemitsu wrote in 1961. Within a single instrument and a single room, Takemitsu placed "distance" and silence between sounds. We raise that distance into literal three-dimensional space.\nEach sound, drawn from inside the piano, carries its own timbral identity and stands in the space as an independent object. The Japanese notion of ma — the charged silence and distance between sounds — is built in not as ornament, but as the structural principle of the spatial design itself. That is where we begin.',
      formsTitle: 'Forms of Sound-Space',
      formsLead: 'Beneath all of these runs a single ambisonic engine we built ourselves in TouchDesigner — no commercial spatializer, no plug-ins. One core, changing its form for each work and each place.',
      forms: [
        { name: 'Binaural / 2ch', body: 'Through headphones or an ordinary stereo pair — front and back, above and below, near and far. The most familiar doorway.' },
        { name: 'Ambisonics + Head Tracking', body: 'Our self-built ambisonic engine. From a head-tracked binaural configuration for a single listener (Piano Distance; run live in DEEP FAKE) to an exhibition configuration scaled to 3rd order, localizing up to 30 objects at once as you travel the space on an iPad (TSAP) — one core, two forms.' },
        { name: 'VR / Realtime 3D', body: 'Travelling inside the sound — spatial audio woven into three-dimensional worlds generated in real time.' },
        { name: 'Game Engines', body: 'With Unity and Unreal Engine, the experience becomes something you can take home — in a web browser, for anyone, anytime.' },
      ],
      tsapTitle: 'A Different Piece for Every Path',
      tsapBody:
        'Jisō and Aquarium — the two scenes of TSAP scale the same TouchDesigner core behind Piano Distance up to 3rd-order ambisonics. In Aquarium alone, 28 sound objects and a stereo bed hold their positions at once; travelling the space on an iPad, the sound field reassembles around you. A 281.6-second "storm" cycle and discovery-progress gates turn wandering into an experience with a composed arc. TouchDesigner carries all the audio analysis and spatial logic, sending only position, level and color to Unreal Engine — the glow of Jisō follows the sound\'s envelope directly. Take a different path, and you hear a different sequence. No two visits are ever the same.',
      gameTitle: 'A Sound-Space You Can Play — Sailing Boat of Sounds',
      gameBody: 'Sounds archived from the town of Tsuchiura became a Unity game. Steering a traditional sail-boat, you drift between the sounds — an experience born at the "Tsuchiura Sound Archive Exhibition 2026," now open to anyone, anywhere, in a single browser tab.',
      gamePlayButton: 'Play in your browser',
      gameWorkButton: 'See the exhibition record',
      worksTitle: 'Works Where Technology Becomes Necessary',
      works1Body: 'Our first piano album fully leveraging our proprietary technology. On ordinary headphones, or on just two speakers alone, sound arrives from behind and overhead. A handmade, signed and numbered limited edition on Fluid Audio (UK) — out now on Spotify, Apple Music and more.',
      works2Title: 'Walking Inside the Sound — Piano Distance Spatial Audio VR',
      works2Body: "An immersive reworking of Piano Distance — you don't just listen, you step inside. Each note becomes a breathing light in the dark, and as you turn, the sound turns around you. A work-in-progress experiment that integrates spatial audio into a real-time 3D world. (Headphones recommended.)",
      compareTitle: 'More on the Technical Side',
      compareBody: 'For a detailed technical comparison, please visit this article.',
      compareLink: 'Read the article',
      beyondTitle: 'In Rooms with Speakers',
      beyondBody: 'Sound-space can exist outside headphones, too. With just two ordinary speakers — carefully designing depth, distance and direction — a temple, a gallery, a small venue becomes a place wrapped in sound. BBM also stages events that embody such spaces. For Distant Echo (Tokyo, 2025), we retuned the very binaural engine refined for headphones toward just two speakers, letting it merge with the venue\'s wall reflections until the speakers themselves seemed to disappear.',
      clientTitle: 'Works with Partners',
      clientBody: 'Sounds we have made together with artists and companies.',
      tokojiTestBody: 'An acoustic experiment carried out at Tokoji Temple — testing whether a spatial sound field can be built with only two speakers, even in a space as particular as a temple.',
      collabTitle: "Let's Collaborate Next.",
      collabBody:
        "From a single piece inside headphones, to the acoustics of a whole venue, to spaces inside VR and games — we look for the form that fits your place and purpose, and shape sound into an experience together.",
      collabButton: 'CONTACT',
    },
    tw: {
      eyebrow: 'Spatial Sound, in Many Forms',
      heroDisplay: 'Sound becomes Space.',
      heroDisplaySub: '聲音，成為空間。',
      heroLead: '在耳機裡、在房間裡、在遊戲裡——我們打造的，是「聆聽」所在的空間本身。',
      subheading: 'Binaural / Ambisonics / VR / Game — 形式不只一種',
      heroTitle: '首先，請體驗我們的聲音。',
      hero: '首先，請體驗我們的聲音。請務必使用耳機聆聽...',
      philosophyTitle: '聲音與空間的必然性',
      philosophyBody: '空間音訊技術正逐漸普及。但真正「非此技術不可」的聲音，至今仍屬罕見。\n我們不從炫技出發，而是從「這個表現，需要這個空間」的必然出發。\n因此，我們不把方法限定為一種：在耳機中完結的雙耳聲；隨頭部轉動的 Ambisonics；可以走進去的 VR；能在瀏覽器中遊玩的遊戲；以及僅憑兩顆揚聲器就撐起縱深的設計。依作品與場地的需要，逐次選擇、組合。',
      maTitle: '「間」與距離',
      maBody:
        '專輯《Piano Distance》的標題，是對武滿徹 1961 年鋼琴獨奏曲的回應。武滿在單一樂器、單一室內，安放了音與音之間的「距離」與靜默。我們則把這個距離立起為真實的三維空間。\n取自鋼琴內部的每一個音都擁有固有的音色身分，在空間中作為獨立的「物件」定位。日語的「間(ma)」——音與音之間的靜默與距離——不是裝飾，而是被寫入空間設計本身的結構原理。這是我們的出發點。',
      formsTitle: '聲音空間的幾種形式',
      formsLead: '支撐這一切的，是我們在 TouchDesigner 上自行打造的單一 Ambisonics 引擎——不使用市售空間音訊工具或外掛。同一個核心，隨作品與場地改變形態。',
      forms: [
        { name: 'Binaural / 2ch', body: '透過耳機或一般的立體聲喇叭，描繪前後、上下與距離——最貼近日常的入口。' },
        { name: 'Ambisonics + Head Tracking', body: '自製的 Ambisonics 引擎。從追隨單一聆聽者頭部轉向的雙耳構成(Piano Distance；於 DEEP FAKE 中現場運行)，到以 iPad 巡遊空間、最高三階、最多 30 個物件同時定位的展覽構成(TSAP)——同一個核心，兩種形態。' },
        { name: 'VR / Realtime 3D', body: '在聲音之中巡遊——將立體音響整合進即時生成的三維空間。' },
        { name: 'Game Engines', body: '以 Unity 與 Unreal Engine，把體驗做成可以帶回家的形式——在瀏覽器中，任何人、任何時候。' },
      ],
      tsapTitle: '每一位巡遊者，聽見不同的樂曲',
      tsapBody:
        'Jisō、Aquarium——TSAP 的兩個場景，把 Piano Distance 背後同一個 TouchDesigner 核心擴充至三階 Ambisonics。僅 Aquarium 一景，就有 28 個聲音物件與立體聲底床同時定位；以 iPad 巡遊空間，音場會隨你的位置重新組合。281.6 秒的「風暴」循環與隨探索進度開啟的閘門，讓體驗不是漫遊，而是一道被作曲過的弧線。聲音解析與空間邏輯全由 TouchDesigner 承擔，只將位置、音量與顏色的數值傳給 Unreal Engine——Jisō 的發光直接追隨聲音的包絡。巡遊不同的路徑，就聽見不同的序列。沒有兩次相同的體驗。',
      gameTitle: '可以遊玩的聲音空間 ― 聲音帆曳船',
      gameBody: '在土浦街頭封存的聲音，成了一款 Unity 遊戲。操縱帆曳船，在聲音之間前行——誕生於「土浦聲音檔案展 2026」的空間音響體驗，如今只需一個瀏覽器分頁，隨處可及。',
      gamePlayButton: '在瀏覽器中遊玩',
      gameWorkButton: '查看展覽記錄',
      worksTitle: '技術成為必然的作品',
      works1Body: '我們首張完整運用獨家技術的鋼琴專輯。無論透過耳機，或僅憑兩支喇叭，聲音都會從背後、從頭頂浮現。英國 Fluid Audio 手工、簽名編號限量發行——現正於 Spotify、Apple Music 等各串流平台上架。',
      works2Title: '走進聲音之中 ― Piano Distance 立體音響 VR',
      works2Body: '將專輯《Piano Distance》從「聆聽」延伸為「走進其中體驗」的立體音響作品。鋼琴的每一個音都化為在黑暗中呼吸的光，當聆聽者轉動視角，聲音便環繞於頭部四周。這是一個將立體音響整合進即時生成三維空間的實驗中試作。（建議使用耳機）',
      compareTitle: '關於技術，再多說一點',
      compareBody: '若想更細緻地比較技術，請參考這篇文章。',
      compareLink: '閱讀文章',
      beyondTitle: '在有揚聲器的空間裡',
      beyondBody: '耳機之外，也能建構聲音的空間。即使只有兩顆一般的揚聲器，只要細緻設計前後、左右、縱深與距離感，寺廟、展間、小型場地，都能成為被聲音包裹的所在。BBM 也舉辦體現這種「場」的活動。在東京的《Distant Echo》(2025)，我們把為耳機打磨的同一個雙耳引擎，重新調校至僅有的兩顆揚聲器，使其與場地牆面的反響融為一體——直到揚聲器的存在彷彿消失。',
      clientTitle: '一起完成的作品',
      clientBody: '至今與藝術家、企業夥伴一起做出的這些聲音。',
      tokojiTestBody: '於東光寺進行的聲學實驗：驗證即使在寺廟這樣特殊的空間，是否也能僅用 2ch 揚聲器建構具有立體感的音響空間。',
      collabTitle: '下一位，想與你合作。',
      collabBody:
        '從耳機中的一首樂曲、到整個場地的音響設計、再到 VR 與遊戲中的空間——我們依場地與目的，一起尋找最合適的形式，把聲音落實為完整的體驗。',
      collabButton: 'CONTACT',
    },
  } as const;

  const t = content[language];

  const distantEcho = works.find(w => w.id === 'distant-echo');
  const forumHallEvent = works.find(w => w.id === 'tokyo-international-forum-hall-event');
  const yukiShare = works.find(w => w.id === 'yuki-share');
  const seigetsuki = works.find(w => w.id === 'seigetsuki');
  const clientWorks = [yukiShare, seigetsuki, forumHallEvent].filter(Boolean);
  const tsuchiuraGame = works.find(w => w.id === 'tsap-exhibition-2026');

  // Simplified parallax - only on desktop
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  // Detect mobile for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="pb-24 md:pb-40 relative overflow-hidden bg-black">
      {/* Hero backdrop — faint Piano Distance Spatial Audio VR still */}
      <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden">
        <img
          src="/images/pd-vr-3.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 55%, #000 100%)'
          }}
        />
      </div>

      {/* Simplified Audio Visualization — wave rings only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Audio wave rings emanating from center - Reduced to 3, lowered opacity */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              border: '1px solid rgba(201, 166, 107, 0.13)',
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', '1800px'],
              height: ['0px', '1800px'],
              opacity: [0.25, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 2.5
            }}
          />
        ))}
      </div>

      <Section className="py-0 relative z-10">
        {/* Revolutionary Hero */}
        <motion.div 
          className="min-h-screen flex flex-col justify-center items-center text-center py-16 md:py-20 px-4"
          style={{ y: isMobile ? 0 : heroY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <p
              className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#C9A66B] mb-6 md:mb-8"
            >
              {t.eyebrow}
            </p>

            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-display italic tracking-tighter leading-none mb-4 md:mb-6 text-white"
            >
              {t.heroDisplay}
            </motion.h1>

            {t.heroDisplaySub && (
              <p className="text-2xl md:text-3xl font-serif text-white/70 mb-8 md:mb-12">
                {t.heroDisplaySub}
              </p>
            )}

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-white/90 max-w-4xl mx-auto leading-relaxed mb-6 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {t.heroLead}
            </motion.p>

            <motion.p
              className="text-sm md:text-base font-serif text-[#C9A66B]/80 tracking-wide mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              {t.subheading}
            </motion.p>

            <div className="text-[#C9A66B]/60 text-lg">↓</div>
          </motion.div>
        </motion.div>

        {/* First Experience Section */}
        <motion.div 
          className="mb-24 md:mb-32 lg:mb-48 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6">
            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t.heroTitle}
              </motion.h2>
              <motion.p 
                className="text-white/70 font-serif leading-loose text-base md:text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t.hero}
              </motion.p>
            </div>

            <motion.div 
              className="relative w-full aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                borderColor: 'rgba(201, 166, 107, 0.7)',
                boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
              }}
            >
              <iframe
                title="First, Experience Our Sound"
                src="https://www.youtube.com/embed/friwNAv_FTU"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-tight">
                {t.philosophyTitle}
              </h2>
            </motion.div>
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-white/80 font-serif leading-loose text-base md:text-xl whitespace-pre-line">
                {t.philosophyBody}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Distance and Ma Section */}
        <motion.div
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-tight">
                {t.maTitle}
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-white/80 font-serif leading-loose text-base md:text-xl whitespace-pre-line">
                {t.maBody}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Forms Section */}
        <motion.div
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6 mb-16 text-center">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.formsTitle}
            </motion.h2>
            <motion.p
              className="text-white/70 font-serif leading-loose text-base md:text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.formsLead}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.forms.map((f, i) => (
              <motion.div
                key={f.name}
                className="border-t border-[#C9A66B]/20 pt-6 space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <h3 className="text-lg md:text-xl font-display font-bold tracking-tight text-[#C9A66B]">
                  {f.name}
                </h3>
                <p className="text-white/70 font-serif leading-relaxed text-sm md:text-base">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Works Section */}
        <motion.div 
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6 mb-16 text-center">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.worksTitle}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-16 md:gap-20 max-w-3xl mx-auto">
            <motion.article 
              className="space-y-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
                whileHover={{
                  borderColor: 'rgba(201, 166, 107, 0.7)',
                  boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Piano Distance — Meltwater Stillness (Music Video)"
                  src="https://www.youtube.com/embed/fP9vLVQJByE"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="relative aspect-video bg-black/50 border border-[#C9A66B]/30 overflow-hidden"
                  whileHover={{ borderColor: 'rgba(201, 166, 107, 0.7)' }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/piano-distance.jpg"
                    alt="Piano Distance — album cover"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="relative aspect-video bg-black/50 border border-[#C9A66B]/30 overflow-hidden"
                  whileHover={{ borderColor: 'rgba(201, 166, 107, 0.7)' }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    title="Piano Distance — White Flash in Still Air (Music Video)"
                    src="https://www.youtube.com/embed/TkRUyirgRgM"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#C9A66B]">
                Piano Distance
              </h3>
              <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                {t.works1Body}
              </p>
            </motion.article>

          </div>
        </motion.div>

        {/* TSAP Section */}
        <motion.div
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6 mb-16 text-center">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.tsapTitle}
            </motion.h2>
            <motion.p
              className="text-white/70 font-serif leading-loose text-base md:text-xl max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.tsapBody}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
                whileHover={{
                  borderColor: 'rgba(201, 166, 107, 0.7)',
                  boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="TSAP — Jisō"
                  src="https://www.youtube.com/embed/84HVNdVfJqg"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#C9A66B]/80">Jisō</p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.div
                className="relative aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
                whileHover={{
                  borderColor: 'rgba(201, 166, 107, 0.7)',
                  boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="TSAP — Aquarium"
                  src="https://www.youtube.com/embed/UTzs9uSEbFY"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#C9A66B]/80">Aquarium</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Game Section */}
        {tsuchiuraGame && (
          <motion.div
            className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
                  {t.gameTitle}
                </h2>
                <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                  {t.gameBody}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://tsap-hobikibune-game.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-4 px-10 border border-[#C9A66B] text-[#C9A66B] hover:bg-[#C9A66B] hover:text-black text-xs font-bold tracking-[0.3em] uppercase transition-all"
                  >
                    {t.gamePlayButton}
                  </a>
                  <button
                    onClick={() => navigate('/works/tsap-exhibition-2026')}
                    className="inline-block py-4 px-10 border border-white/30 text-white/80 hover:border-[#C9A66B] hover:text-[#C9A66B] text-xs font-bold tracking-[0.3em] uppercase transition-all"
                  >
                    {t.gameWorkButton}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <a
                  href="https://tsap-hobikibune-game.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="relative aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
                    whileHover={{
                      borderColor: 'rgba(201, 166, 107, 0.7)',
                      boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/images/tsap-game-screenshot.png"
                      alt="Otono Hobikibune — actual gameplay screenshot"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Technical Comparison */}
        <motion.div 
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
                {t.compareTitle}
              </h2>
            </motion.div>
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-white/80 font-serif leading-loose text-base md:text-xl">
                {t.compareBody}
              </p>
              <motion.a
                href={technicalComparisonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-5 px-12 border border-[#C9A66B] text-[#C9A66B] hover:bg-[#C9A66B] hover:text-black text-xs font-bold tracking-[0.3em] uppercase transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.compareLink}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Beyond Headphones */}
        {distantEcho && (
          <motion.div 
            className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6 mb-16">
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t.beyondTitle}
              </motion.h2>
              <motion.p 
                className="text-white/70 font-serif leading-loose text-base md:text-xl max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t.beyondBody}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs font-bold tracking-[0.4em] uppercase text-[#C9A66B]/80">
                  Case Study: Installation
                </p>
                <div className="transform transition-transform hover:scale-105">
                  <WorkCard
                    work={distantEcho}
                    onClick={() => {
                      navigate(`/works/${distantEcho.id}`);
                    }}
                  />
                </div>
              </motion.div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div 
                  className="relative w-full aspect-video bg-black/50 border-2 border-[#C9A66B]/30 overflow-hidden backdrop-blur-sm"
                  whileHover={{ 
                    borderColor: 'rgba(201, 166, 107, 0.7)',
                    boxShadow: '0 0 100px rgba(201, 166, 107, 0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    title="Tokoji Temple 2ch Speaker Test (2026)"
                    src="https://www.youtube.com/embed/D4dLEi8udTk"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#C9A66B]">
                    Tokoji Temple 2ch Speaker Test (2026)
                  </h3>
                  <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                    {t.tokojiTestBody}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Client Works */}
        {!!clientWorks.length && (
          <motion.div 
            className="border-t border-[#C9A66B]/20 pt-20 md:pt-32 mb-32 md:mb-48"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-6 mb-16 text-center">
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t.clientTitle}
              </motion.h2>
              <motion.p 
                className="text-white/70 font-serif leading-loose text-base md:text-xl max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t.clientBody}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
              {clientWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="transform transition-transform hover:scale-105"
                >
                  <WorkCard
                    work={work}
                    onClick={() => {
                      navigate(`/works/${work.id}`);
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Collaboration CTA */}
        <motion.div 
          className="border-t border-[#C9A66B]/20 pt-20 md:pt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center max-w-5xl mx-auto space-y-10">
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.collabTitle}
            </motion.h2>
            <motion.p 
              className="text-white/80 font-serif leading-loose text-base md:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.collabBody}
            </motion.p>
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block py-6 px-16 bg-[#C9A66B] text-black text-sm font-bold tracking-[0.4em] uppercase hover:shadow-[0_0_100px_rgba(201,166,107,0.8)] transition-all"
              >
                {t.collabButton}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Technology;