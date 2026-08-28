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
        '立体音響の技術は、いま広く行き渡りつつあります。しかし「その技術がなければ成立しない音」に出会うことは、いまも稀です。\n私たちは技術を誇示するためではなく、「この表現には、この空間が必要だ」という必然から出発します。\nだから、方法をひとつに決めていません。ヘッドフォンの中で完結するバイノーラル。頭の動きに音が追いつくアンビソニクス。歩いて巡るVR、ブラウザで遊べるゲーム、そして二本のスピーカーだけで奥行きを立ち上げる設計。作品と場所が求めるかたちを、そのつど選び、組み合わせています。',
      formsTitle: '音の空間、いくつかのかたち',
      forms: [
        { name: 'Binaural / 2ch', body: 'ヘッドフォンや、ふつうのステレオスピーカーで。前後・上下・距離までを描く、いちばん身近な入り口です。' },
        { name: 'Ambisonics + Head Tracking', body: '自作のアンビソニクス・エンジン(最大3次)。あなたが振り向けば、音も振り向きます。' },
        { name: 'VR / Realtime 3D', body: '音の中を、歩く。リアルタイムに生成される三次元空間に、立体音響を統合します。' },
        { name: 'Game Engines', body: 'UnityやUnreal Engineで、体験を持ち帰れるかたちに。Webブラウザで、誰でも、いつでも。' },
      ],
      gameTitle: '遊べる音の空間 ― おとの帆曳船',
      gameBody: '土浦の街でアーカイブされた音たちが、Unity製のゲームになりました。帆曳船を操りながら、音のあいだを進んでいく——展覧会「つちうらサウンド・アーカイブ展 2026」で生まれた空間音響の体験は、いまはブラウザひとつで、どこからでも開くことができます。',
      gamePlayButton: 'ブラウザで遊ぶ',
      gameWorkButton: '展覧会の記録を見る',
      worksTitle: '技術が必然となる作品たち',
      works1Body: '私たちの独自技術をフルに用いた、初のピアノアルバム。非常に立体的な音響が映像と融合し、没入感あふれる世界を描き出します。（2026年リリース予定）',
      works2Title: '音の中を歩く ― Piano Distance 立体音響 VR',
      works2Body: 'アルバム《Piano Distance》を、聴くだけでなく"中に入って体験する"立体音響作品へ。ピアノの一音一音が暗がりに息づく光となり、聴き手が向きを変えると音が頭のまわりを回ります。リアルタイムに生成される三次元空間へ立体音響を統合した、実験途中の試作です。（ヘッドホン推奨）',
      compareTitle: '技術のはなし、もう少し詳しく',
      compareBody: '細かく技術を比べたい場合はこちらのサイトへ。',
      compareLink: '記事を見る',
      beyondTitle: 'スピーカーのある場所で',
      beyondBody:
        'ヘッドフォンの外にも、音の空間はつくれます。ふつうの2chスピーカーだけでも、前後・左右、奥行きや距離感までを丁寧に設計すれば、お寺や展示室、小さな会場が、音に包まれる場所になります。BBMでは、そうした「場」そのものを体現するイベントも行っています。',
      clientTitle: 'ともにつくった仕事',
      clientBody: 'これまでに、アーティストや企業のみなさまと、こんな音をつくってきました。',
      tokojiTestBody: '2026年に実施予定の東光寺での音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築するテストの様子。',
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
      philosophyBody: 'Spatial audio is everywhere now. Yet sounds that truly require it are still rare.\nWe do not start from technology; we start from necessity — "this expression needs this space."\nThat is why we keep more than one way of working: binaural sound complete within headphones; ambisonics that turns when you turn; VR you can walk through; games you can play in a browser; and rooms where two ordinary speakers open up depth. For each work and each place, we choose — and combine.',
      formsTitle: 'Forms of Sound-Space',
      forms: [
        { name: 'Binaural / 2ch', body: 'Through headphones or an ordinary stereo pair — front and back, above and below, near and far. The most familiar doorway.' },
        { name: 'Ambisonics + Head Tracking', body: 'A self-built ambisonic engine (up to 3rd order). When you turn your head, the sound turns with you.' },
        { name: 'VR / Realtime 3D', body: 'Walking inside the sound — spatial audio woven into three-dimensional worlds generated in real time.' },
        { name: 'Game Engines', body: 'With Unity and Unreal Engine, the experience becomes something you can take home — in a web browser, for anyone, anytime.' },
      ],
      gameTitle: 'A Sound-Space You Can Play — Sailing Boat of Sounds',
      gameBody: 'Sounds archived from the town of Tsuchiura became a Unity game. Steering a traditional sail-boat, you drift between the sounds — an experience born at the "Tsuchiura Sound Archive Exhibition 2026," now open to anyone, anywhere, in a single browser tab.',
      gamePlayButton: 'Play in your browser',
      gameWorkButton: 'See the exhibition record',
      worksTitle: 'Works Where Technology Becomes Necessary',
      works1Body: 'Our first piano album fully leveraging our proprietary technology. Highly spatial sound merges with visuals to draw an immersive world. (Planned release in 2026)',
      works2Title: 'Walking Inside the Sound — Piano Distance Spatial Audio VR',
      works2Body: "An immersive reworking of Piano Distance — you don't just listen, you step inside. Each note becomes a breathing light in the dark, and as you turn, the sound turns around you. A work-in-progress experiment that integrates spatial audio into a real-time 3D world. (Headphones recommended.)",
      compareTitle: 'More on the Technical Side',
      compareBody: 'For a detailed technical comparison, please visit this article.',
      compareLink: 'Read the article',
      beyondTitle: 'In Rooms with Speakers',
      beyondBody: 'Sound-space can exist outside headphones, too. With just two ordinary speakers — carefully designing depth, distance and direction — a temple, a gallery, a small venue becomes a place wrapped in sound. BBM also stages events that embody such spaces.',
      clientTitle: 'Works with Partners',
      clientBody: 'Sounds we have made together with artists and companies.',
      tokojiTestBody: 'A 2026 temple acoustic experiment to build a spatial sound field using only two speakers—even in a unique space like a temple.',
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
      formsTitle: '聲音空間的幾種形式',
      forms: [
        { name: 'Binaural / 2ch', body: '透過耳機或一般的立體聲喇叭，描繪前後、上下與距離——最貼近日常的入口。' },
        { name: 'Ambisonics + Head Tracking', body: '自製 Ambisonics 引擎(最高三階)。當你轉頭，聲音也隨之轉向。' },
        { name: 'VR / Realtime 3D', body: '走進聲音之中——將立體音響整合進即時生成的三維空間。' },
        { name: 'Game Engines', body: '以 Unity 與 Unreal Engine，把體驗做成可以帶回家的形式——在瀏覽器中，任何人、任何時候。' },
      ],
      gameTitle: '可以遊玩的聲音空間 ― 聲音帆曳船',
      gameBody: '在土浦街頭封存的聲音，成了一款 Unity 遊戲。操縱帆曳船，在聲音之間前行——誕生於「土浦聲音檔案展 2026」的空間音響體驗，如今只需一個瀏覽器分頁，隨處可及。',
      gamePlayButton: '在瀏覽器中遊玩',
      gameWorkButton: '查看展覽記錄',
      worksTitle: '技術成為必然的作品',
      works1Body: '我們首張完整運用獨家技術的鋼琴專輯。高度立體的聲響與影像融合，描繪出沉浸感十足的世界。（預計 2026 年發行）',
      works2Title: '走進聲音之中 ― Piano Distance 立體音響 VR',
      works2Body: '將專輯《Piano Distance》從「聆聽」延伸為「走進其中體驗」的立體音響作品。鋼琴的每一個音都化為在黑暗中呼吸的光，當聆聽者轉動視角，聲音便環繞於頭部四周。這是一個將立體音響整合進即時生成三維空間的實驗中試作。（建議使用耳機）',
      compareTitle: '關於技術，再多說一點',
      compareBody: '若想更細緻地比較技術，請參考這篇文章。',
      compareLink: '閱讀文章',
      beyondTitle: '在有揚聲器的空間裡',
      beyondBody: '耳機之外，也能建構聲音的空間。即使只有兩顆一般的揚聲器，只要細緻設計前後、左右、縱深與距離感，寺廟、展間、小型場地，都能成為被聲音包裹的所在。BBM 也舉辦體現這種「場」的活動。',
      clientTitle: '一起完成的作品',
      clientBody: '至今與藝術家、企業夥伴一起做出的這些聲音。',
      tokojiTestBody: '預計於 2026 年在東光寺進行的聲學實驗：即使在寺廟這樣特殊的空間，也能僅用 2ch 揚聲器建構具有立體感的音響空間。',
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
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
                  title="Classical Spatial Album (2026 Release)"
                  src="https://www.youtube.com/embed/02uUCenAJ-g"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#C9A66B]">
                Classical Spatial Album (2026 Release)
              </h3>
              <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                {t.works1Body}
              </p>
            </motion.article>

            <motion.article 
              className="space-y-6"
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
                  title="Walking Inside the Sound — Piano Distance Spatial Audio VR"
                  src="https://www.youtube.com/embed/uIFWglR3gBY"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <div className="grid grid-cols-3 gap-3">
                {['/images/pd-vr-1.jpg', '/images/pd-vr-2.jpg', '/images/pd-vr-3.jpg'].map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-video bg-black/50 border border-[#C9A66B]/30 overflow-hidden"
                    whileHover={{ borderColor: 'rgba(201, 166, 107, 0.7)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={src}
                      alt={`Piano Distance Spatial Audio VR still ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#C9A66B]">
                {t.works2Title}
              </h3>
              <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                {t.works2Body}
              </p>
            </motion.article>
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
                className="transform transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <WorkCard
                  work={tsuchiuraGame}
                  onClick={() => navigate('/works/tsap-exhibition-2026')}
                />
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