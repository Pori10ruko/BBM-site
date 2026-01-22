import React, { useContext, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import { LanguageContext } from '../App';
import { works } from '../data/works';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const featuredWorks = [
    works.find(w => w.id === 'distant-echo'),
    works.find(w => w.id === 'tsuchiura-archive'),
    works.find(w => w.id === 'tainan-lecture'),
  ].filter(Boolean) as typeof works;
  const seigetsukiWork = works.find(w => w.id === 'seigetsuki');
  const [heroLogoSrc, setHeroLogoSrc] = useState('/images/bbm-logo-mark.jpg');
  const [heroLogoFallbackTried, setHeroLogoFallbackTried] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');
    if (!targetId) return;
    window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView();
    }, 0);
  }, [location.hash]);

  const t = {
    tagline: {
      JP: "この時代に必要な表現を、共に考える。",
      EN: "Thinking together about the expressions needed for our time.",
      TW: "共同思考這個時代所需的表達方式。"
    },
    philosophy: {
      JP: {
        p1: '今現在、日本に限らず世界では政治的な問題、AI技術による問題、貧困による問題と様々な問題に直面しています。その中で私たち音楽家 / 表現者はどのように世界と関わっていくべきなのでしょうか。bbmはこうした問題に対し、共に考えアプローチをしていくコミュニティです。',
        p2: 'アート表現、パブリックな空間での表現、そして教育といった3つの柱で、ボランティア、クライアントワークを隔てなくアプローチを行なっています。'
      },
      EN: {
        p1: 'Currently, the world faces various challenges, including political issues, AI ethics, and poverty. How should we, as artists, engage with this world? BBM is a community that thinks together and approaches these problems through expression.',
        p2: 'We operate through three pillars—Art, Public, and Education—bridging volunteer work and client projects without distinction.'
      },
      TW: {
        p1: '現今，不僅是日本，全世界都面臨著政治、AI 技術倫理、貧困等各式各樣的問題。在這樣的時代，我們身為創作者該如何與世界連結？BBM 是一個共同思考並嘗試解決這些問題的社群。',
        p2: '我們透過「藝術表現」、「公共空間」以及「教育」这三大支柱，不分志工活動或商業專案，致力於對社會提出我們的行動與解答。'
      }
    },
    missions: {
      art: {
        JP: '表現者は常に新しい技術と共に歩んできました。テクノロジーの進化は、そのまま音楽の発展の歴史でもあります。私たちは、未だかつてない独自の立体音響技術を用いることで、音楽体験そのものを全く新しい次元へと引き上げます。',
        EN: 'Artists have always walked hand in hand with new technology. The evolution of technology is the history of music itself. By using our unique spatial audio technology, we elevate the musical experience to a completely new dimension.',
        TW: '創作者總是與新技術並肩前行。科技的進化，即是音樂發展的歷史。我們運用前所未有的獨家立體音響技術，將音樂體驗提升至全新的次元。'
      },
      public: {
        JP: '土浦市での地域プロジェクトや川崎市『Encount』など、自治体と連携しパブリックな空間における音の価値を再定義。地域社会と対話し、その場所ならではの音風景（サウンドスケープ）を創出しています。',
        EN: 'Through projects like those in Tsuchiura City and "Encount" in Kawasaki City, we collaborate with local governments to redefine the value of sound in public spaces. We dialogue with the local community to create unique soundscapes that reflect the identity of the place.',
        TW: '透過土浦市的地域計畫與川崎市的『Encount』等專案，我們與地方政府合作，重新定義公共空間中聲音的價值。我們與在地社群對話，創造出唯有當地才能呈現的獨特音景（Soundscape）。'
      },
      education: {
        JP: '次世代のクリエイターへ、表現の武器を。国内外の大学での専門講義に加え、誰でも参加できる無料オンラインセミナーも定期開催。最先端の音響技術と理論を、より多くの人へ共有しています。',
        EN: 'Empowering the next generation of creators. In addition to specialized lectures at universities in Japan and abroad, we hold regular free online seminars open to everyone. We share cutting-edge audio technology and theory with a wider audience.',
        TW: '為下個世代的創作者提供表現的武器。除了國內外大學的專業講授，我们也定期舉辦任何人皆可參加的免費線上研討會，將最尖端的音響技術與理論分享給更多人。'
      }
    },
    technology: {
      JP: {
        h1: '革新的な没入体験を、標準的な環境で',
        p1: '特別なサラウンドシステムは不要です。私たちが開発した独自の2ch立体音響アルゴリズムは、既存のスピーカーやステレオヘッドフォンだけで、驚異的な音響空間を実現します。',
        h2: 'ビジネスへの実装パートナーとして',
        p2: 'この技術は、VR/ARコンテンツ、アプリ開発、そして空間インスタレーションにおける没入体験の「核」となります。BBMは単なる技術提供にとどまらず、実装パートナーとしてプロジェクトに伴走。御社のコンテンツに、他にはない音響体験という付加価値を創出します。'
      },
      EN: {
        h1: 'Immersive Experience in Standard Environments',
        p1: 'No special surround systems are needed. Our proprietary 2ch spatial audio algorithm realizes a breathtaking sound space using just existing speakers or stereo headphones.',
        h2: 'As Your Implementation Partner',
        p2: 'This technology becomes the "core" of immersive experiences in VR/AR content, app development, and spatial installations. BBM goes beyond mere technology licensing; we walk with you as an implementation partner, creating unique value and auditory experiences for your content.'
      },
      TW: {
        h1: '在標準環境中實現革新性的沉浸體驗',
        p1: '不需要特殊的環繞音響系統。我們開發的獨家雙聲道立體音響演算法，僅需既有的揚聲器或立體聲耳機，即可實現令人驚嘆的音響空間。',
        h2: '作為商業實踐的合作夥伴',
        p2: '此技術將成為 VR/AR 內容、App 開發以及空間裝置藝術中沉浸體驗的「核心」。BBM 不僅提供技術，更作為實踐夥伴參與專案，為您的內容創造獨一無二的聽覺體驗與附加價值。'
      }
    },
    upcoming: {
      title: {
        JP: '音と光の建築 at 東光寺',
        EN: 'Architecture of Sound and Light at Tokoji Temple',
        TW: '音與光的建築 at 東光寺'
      },
      desc: {
        JP: '歴史ある東光寺の本堂を舞台に、市民の皆さんと共につくり上げた“光のまゆ”と、プロジェクトを通して集めた「土浦の音」を組み合わせ、2chスピーカーによるバイノーラル音響で空間全体を包み込む、一日限りの展示・コンサートとなります。',
        EN: 'A one-day exhibition and concert at the historic main hall of Tokoji Temple. Combining "cocoons of light" created with citizens and "sounds of Tsuchiura," we envelop the space in binaural audio using 2ch speakers.',
        TW: '以歷史悠久的東光寺本堂為舞台，結合與市民共同創作的「光之繭」以及透過專案收集的「土浦之音」，透過雙聲道喇叭呈現雙耳立體音響（Binaural Audio），包覆整個空間的一日限定展覽與音樂會。'
      }
    },
    news: {
      yukiTitle: {
        JP: 'YUKI『Share』MV 立体音響制作に参加',
        EN: 'Participated in Spatial Audio Production for YUKI\'s "Share" MV',
        TW: '參與 YUKI『Share』MV 立體音響製作'
      },
      seigetsukiTitle: {
        JP: 'バーチャル霊園 清月記',
        EN: 'Virtual Cemetery Application by Seigetsuki',
        TW: '清月記「虛擬靈園」App'
      }
    },
    selectedArchives: {
      tainan: {
        JP: {
          title: '臺南國立大学 特別講義',
          desc: '台湾・臺南國立大学にて、流行音楽における空間表現の講義とワークショップを実施。'
        },
        EN: {
          title: 'Special Lecture at National University of Tainan',
          desc: 'At the National University of Tainan (Taiwan), we held a lecture and workshop on spatial expression in pop music.'
        },
        TW: {
          title: '國立臺南大學 特別講座',
          desc: '於台灣國立臺南大學舉辦關於流行音樂空間表現的講座與工作坊。'
        }
      }
    }
  };

  const pillars = [
    {
      id: 'art',
      num: '01',
      title: 'ART',
      imageUrl: '/images/art.jpg',
      desc: t.missions.art[lang],
      path: '/art'
    },
    {
      id: 'public',
      num: '02',
      title: 'PUBLIC',
      imageUrl: '/images/public.jpg',
      desc: t.missions.public[lang],
      path: '/public'
    },
    {
      id: 'education',
      num: '03',
      title: 'EDUCATION',
      imageUrl: '/images/edu.jpg',
      desc: t.missions.education[lang],
      path: '/education'
    }
  ] as const;

  const featuredWorksForHome = featuredWorks.map((work) => {
    if (work.id !== 'tainan-lecture') return work;
    const copy = t.selectedArchives.tainan[lang];
    return {
      ...work,
      title: copy.title,
      description: {
        ...work.description,
        [lang]: copy.desc
      }
    };
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Reveal on scroll hook
  const RevealSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'linear-gradient(rgba(201, 166, 107, 0.25) 3px, transparent 3px), linear-gradient(90deg, rgba(201, 166, 107, 0.25) 3px, transparent 3px)',
              backgroundSize: '100px 100px',
              transform: 'perspective(800px) rotateX(65deg) translateY(-40%)',
              transformOrigin: 'center top'
            }}
          />
          
          {/* Central 3D Sphere - Simplified for performance */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer ring - Static with CSS animation */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-[#C9A66B]/40 animate-spin-very-slow" 
              style={{
                boxShadow: 'inset 0 0 80px rgba(201, 166, 107, 0.25), 0 0 100px rgba(201, 166, 107, 0.15)'
              }}
            />
            
            {/* Middle ring */}
            <div 
              className="absolute inset-[15%] rounded-full border-2 border-[#C9A66B]/30 animate-spin-slow-reverse"
              style={{
                boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.2)'
              }}
            />
            
            {/* Core sphere - Static glow */}
            <div 
              className="absolute inset-[35%] rounded-full bg-gradient-to-br from-white/50 via-[#C9A66B]/25 to-[#C9A66B]/15 animate-pulse-slow"
              style={{
                boxShadow: 'inset -15px -15px 60px rgba(201, 166, 107, 0.3), inset 15px 15px 60px rgba(255, 255, 255, 0.3), 0 30px 80px rgba(201, 166, 107, 0.2)'
              }}
            />
          </motion.div>

          {/* Simplified floating particles - reduced for performance */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#C9A66B]/40 to-[#C9A66B]/10 animate-float-slow"
              style={{
                left: `${15 + (i * 20)}%`,
                top: `${20 + (i % 2) * 35}%`,
                animationDelay: `${i * 0.8}s`,
                boxShadow: '0 0 30px rgba(201, 166, 107, 0.3)'
              }}
            />
          ))}

          {/* Pulsing rings - reduced to 2 */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A66B]/25"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{
                width: ['0px', '1200px'],
                height: ['0px', '1200px'],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 3
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-[10px] md:text-[11px] font-bold tracking-[0.6em] text-[#C9A66B] uppercase mb-12"
          >
            Collective / Label / Research
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[12vw] lg:text-[10rem] xl:text-[13rem] font-display italic tracking-tighter leading-[0.9] mb-16"
            style={{
              color: '#000',
              textShadow: '2px 2px 0px rgba(201, 166, 107, 0.3), 4px 4px 0px rgba(0, 0, 0, 0.1), 6px 6px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -30, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Beyond
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Boundary
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              Music
            </motion.span>
          </motion.h1>

          {heroLogoSrc && (
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              src={heroLogoSrc}
              alt="BBM"
              className="mx-auto mb-16 w-32 md:w-48 h-auto"
              loading="eager"
              onError={() => {
                if (!heroLogoFallbackTried && heroLogoSrc.endsWith('.jpg')) {
                  setHeroLogoFallbackTried(true);
                  setHeroLogoSrc('/images/bbm-logo-mark.png');
                  return;
                }
                setHeroLogoSrc('');
              }}
            />
          )}

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl lg:text-4xl text-gray-700 font-serif font-light leading-relaxed max-w-5xl mx-auto"
          >
            {lang === 'JP' ? (
              <>
                この時代に必要な表現を、共に
                <span className="whitespace-nowrap">考える。</span>
              </>
            ) : (
              t.tagline[lang]
            )}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <Section className="py-32 md:py-48 relative overflow-hidden">
        {/* 3D Background - Simplified */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-[#C9A66B]/25 animate-spin-very-slow"
              style={{
                boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.15), 0 0 80px rgba(201, 166, 107, 0.1)'
              }}
            />
            <div
              className="absolute inset-[20%] rounded-full border border-[#C9A66B]/20 animate-spin-slow-reverse"
              style={{
                boxShadow: 'inset 0 0 40px rgba(201, 166, 107, 0.12)'
              }}
            />
          </div>
        </div>
        <RevealSection>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
              <div className="md:col-span-3">
                <div className="w-16 h-[1px] bg-[#C9A66B] mb-6" />
                <h2 className="text-[11px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase">Philosophy</h2>
              </div>
              <div className="md:col-span-9 space-y-10">
                <p className="text-lg md:text-2xl text-gray-800 font-serif leading-relaxed">
                  {t.philosophy[lang].p1}
                </p>
                <p className="text-lg md:text-2xl text-gray-700 font-serif leading-relaxed">
                  {t.philosophy[lang].p2}
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </Section>

      {/* Technology Section */}
      <Section className="py-32 md:py-48 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Static Grid Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(201, 166, 107, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 166, 107, 0.2) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              transform: 'perspective(800px) rotateX(60deg) translateY(-30%)'
            }}
          />
        </div>
        <RevealSection>
          <Link
            id="technology"
            to="/spatial-2ch"
            className="group block relative overflow-hidden z-10"
          >
            {/* Image with Parallax */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden mb-16">
              <motion.img 
                src="/images/tech.jpg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
                <motion.span 
                  className="text-[10px] font-bold text-[#C9A66B] tracking-[0.5em] uppercase block mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  04 Technology
                </motion.span>
                <motion.h3 
                  className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)',
                    letterSpacing: '-0.02em',
                    fontWeight: '800',
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      display: 'inline-block',
                      padding: '0.1em 0.3em',
                      borderRadius: '0.2em',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
                    }}
                  >
                    BBM Spatial
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.95, rotateX: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      display: 'inline-block',
                      padding: '0.1em 0.3em',
                      borderRadius: '0.2em',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
                    }}
                  >
                    Audio Tech
                  </motion.span>
                </motion.h3>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-6 text-black">
                    {t.technology[lang].h1}
                  </h4>
                  <p className="text-gray-700 font-serif leading-loose text-base md:text-lg">
                    {t.technology[lang].p1}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-display font-bold mb-6 text-black">
                    {t.technology[lang].h2}
                  </h4>
                  <p className="text-gray-700 font-serif leading-loose text-base md:text-lg">
                    {t.technology[lang].p2}
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 group-hover:text-[#C9A66B] transition-colors duration-300">
                  Explore Technology 
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </div>
          </Link>
        </RevealSection>
      </Section>

      {/* Four Pillars - Clickable Navigation */}
      <Section className="py-32 md:py-48 relative overflow-hidden">
        {/* 3D Background Elements - Simplified */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px]"
          >
            <div
              className="absolute inset-0 rounded-full border border-[#C9A66B]/12 animate-spin-very-slow"
              style={{
                boxShadow: 'inset 0 0 50px rgba(201, 166, 107, 0.1), 0 0 80px rgba(201, 166, 107, 0.06)'
              }}
            />
            <div
              className="absolute inset-[20%] rounded-full border border-[#C9A66B]/10 animate-spin-slow-reverse"
              style={{
                boxShadow: 'inset 0 0 30px rgba(201, 166, 107, 0.08)'
              }}
            />
          </div>
        </div>
        <RevealSection>
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-[#C9A66B]" />
              <span className="text-[#C9A66B] font-bold tracking-[0.5em] uppercase text-[10px]">Four Missions</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  id={pillar.id}
                  to={pillar.path}
                  className="group block h-full"
                >
                  {/* Image */}
                  <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-8">
                    <motion.img
                      src={pillar.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Overlay Number */}
                    <div className="absolute top-8 left-8">
                      <span className="text-[10px] font-bold text-white/60 tracking-[0.5em] uppercase">
                        {pillar.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6 group-hover:text-[#C9A66B] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 font-serif leading-loose text-base md:text-lg mb-8">
                      {pillar.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 group-hover:text-black transition-colors">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </Section>

      {/* NEWS */}
      <Section className="py-32 md:py-48 bg-gray-50 relative overflow-hidden">
        <RevealSection>
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none">
              NEWS.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.a
              href="https://youtu.be/QSQ4U3pcvzQ?si=TkflGvBwPiF9fKyl"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[50vh] overflow-hidden mb-8">
                <img 
                  src="/images/yuki share .jpg" 
                  alt="" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <p className="text-[10px] font-bold tracking-[0.4em] text-[#C9A66B] uppercase mb-4">
                2025.12.20 Release
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 group-hover:text-[#C9A66B] transition-colors">
                {t.news.yukiTitle[lang]}
              </h3>
              <p className="text-gray-600 font-serif leading-loose text-base">
                平野さん監督のMVにて、カトラリー／レストラン空間の立体音響制作として参加しました。劇場アニメ『この本を盗む者は』主題歌です。ぜひご覧ください。
              </p>
            </motion.a>

            {seigetsukiWork && (
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/works/${seigetsukiWork.id}`}
                  className="group block"
                >
                  <div className="relative h-[50vh] overflow-hidden mb-8">
                    <img 
                      src={seigetsukiWork.imageUrl} 
                      alt="" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.4em] text-[#C9A66B] uppercase mb-4">
                    2025.12.15 Release
                  </p>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 group-hover:text-[#C9A66B] transition-colors">
                    {t.news.seigetsukiTitle[lang]}
                  </h3>
                  <p className="text-gray-600 font-serif leading-loose text-base">
                    {seigetsukiWork.description?.[lang] ?? ''}
                  </p>
                </Link>
              </motion.div>
            )}
          </div>
        </RevealSection>
      </Section>

      {/* Upcoming Event */}
      <Section className="py-32 md:py-48 relative overflow-hidden">
        {/* 3D Sphere Background - Simplified */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]"
          >
            <div
              className="absolute inset-0 rounded-full border border-[#C9A66B]/12 animate-spin-very-slow"
              style={{
                boxShadow: 'inset 0 0 50px rgba(201, 166, 107, 0.1), 0 0 60px rgba(201, 166, 107, 0.06)'
              }}
            />
          </div>
        </div>
        <RevealSection>
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none">
              Upcoming<br />Event
            </h2>
          </div>

          <a
            href="https://tsuchiura-sound-achib.netlify.app/#events"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
                <motion.img
                  src="/images/tokoji1.png"
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
                <p className="text-[10px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase mb-8">
                  2/23(月・祝) 夕刻
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8 group-hover:text-[#C9A66B] transition-colors">
                  {t.upcoming.title[lang]}
                </h3>
                <p className="text-gray-600 font-serif text-lg mb-10">
                  東光寺（茨城県土浦市大手町3-14）
                </p>
                <p className="text-gray-700 font-serif leading-loose text-base md:text-lg">
                  {t.upcoming.desc[lang]}
                </p>
              </div>
            </div>
          </a>
        </RevealSection>
      </Section>

      {/* Selected Works Gallery */}
      <Section className="py-32 md:py-48 bg-gray-50 relative overflow-hidden">
        <RevealSection>
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none">
              Archives.
            </h2>
            <Link 
              to="/works" 
              className="text-[11px] font-bold tracking-[0.4em] uppercase hover:text-[#C9A66B] transition-colors"
            >
              Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {featuredWorksForHome.map((work, idx) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <WorkCard
                  work={work}
                  onClick={() => {
                    if (work.id === 'tainan-lecture') {
                      const url = work.externalLinks?.[0]?.url;
                      if (url) window.open(url, '_blank', 'noopener,noreferrer');
                      return;
                    }
                    navigate(`/works/${work.id}`);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </RevealSection>
      </Section>

      {/* Leads / Community */}
      <Section className="py-32 md:py-48 relative overflow-hidden">
        {/* Final 3D sphere - Simplified */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-1/4 right-0 translate-x-1/3 w-[500px] h-[500px] md:w-[650px] md:h-[650px]"
          >
            <div
              className="absolute inset-0 rounded-full border border-[#C9A66B]/15 animate-spin-very-slow"
              style={{
                boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.12), 0 0 80px rgba(201, 166, 107, 0.08)'
              }}
            />
            <div
              className="absolute inset-[30%] rounded-full bg-gradient-to-br from-white/20 via-[#C9A66B]/10 to-black/5 animate-pulse-slow"
              style={{
                boxShadow: 'inset -8px -8px 40px rgba(201, 166, 107, 0.15), inset 8px 8px 40px rgba(255, 255, 255, 0.2)'
              }}
            />
          </div>
        </div>
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div className="space-y-16">
              <div>
                <div className="w-16 h-[1px] bg-[#C9A66B] mb-6" />
                <h3 className="text-[11px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase mb-16">
                  Collective Leads
                </h3>
              </div>

              <div className="space-y-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <a
                    href="https://www.nakamurahiroyuki.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <h4 className="text-4xl md:text-5xl font-display font-bold mb-3 group-hover:text-[#C9A66B] transition-colors">
                      NAKAMURA Hiroyuki
                    </h4>
                  </a>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                    Composer / Academic
                  </p>
                  <p className="text-gray-700 font-serif text-base md:text-lg leading-relaxed max-w-md">
                    音響学とメディア表現の講師。BBMの芸術的ディレクションと理論構築を担う。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <a
                    href="https://www.instagram.com/utsugikoichi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group"
                  >
                    <h4 className="text-4xl md:text-5xl font-display font-bold mb-3 group-hover:text-[#C9A66B] transition-colors">
                      UTSUGI Koichi
                    </h4>
                  </a>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                    Spatial Audio Engineer
                  </p>
                  <p className="text-gray-700 font-serif text-base md:text-lg leading-relaxed max-w-md">
                    独自の2ch立体音響アルゴリズムの開発者。グローバルな展示へのシステム実装を統括。
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-4xl md:text-5xl font-display font-bold mb-3">
                    TAGUCHI Mayumi
                  </h4>
                  <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-6">
                    Piano Teacher, Eurhythmics, Narrator
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <motion.div 
                className="bg-black text-white p-12 lg:p-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-3xl md:text-4xl font-serif italic mb-8 leading-tight">
                  Dialogue is the<br />starting point.
                </h4>
                <p className="text-gray-400 text-base font-serif leading-loose mb-12">
                  BBMは流動的なコミュニティです。新しいプロジェクトのアイデア、技術的な相談、あらゆる音への興味から対話が始まります。
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block py-5 px-12 bg-white text-black text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
                >
                  Join the Discussion
                </Link>
              </motion.div>
            </div>
          </div>
        </RevealSection>
      </Section>
    </div>
  );
};

export default Home;