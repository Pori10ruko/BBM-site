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
      heroTitle: 'まず、体感してください。',
      hero: 'まず、私たちの音を体感してください。ぜひ、ヘッドフォンで聴いてください...',
      subheading: '2ch Spatial Audio / 空間を拡張する独自技術',
      philosophyTitle: 'The Necessity of Spatial Audio / 音響の必然性',
      philosophyBody:
        '現在、立体音響技術（Spatial Audio）は広く普及しつつあります。しかし、『その技術を使わなければ成立しない音』に出会うことは、未だ稀です。\n私たちは単に技術を誇示するのではなく、『この表現には、この空間が必要だ』という必然性に向き合い続けています。',
      worksTitle: '技術が必然となる作品たち',
      works1Body: '私たちの独自技術をフルに用いた、初のピアノアルバム。非常に立体的な音響が映像と融合し、没入感あふれる世界を描き出します。（2026年リリース予定）',
      works2Body: 'こちらはまた異なる『Ambisonics（アンビソニックス）』技術を採用した、初のデジタルポップス作品。860トラックもの音源を使用し、特にサビ部分での爆発的な空間の広がりは圧巻です。',
      compareTitle: 'Technical Comparison / 技術比較',
      compareBody: '細かく技術を比べたい場合はこちらのサイトへ。',
      compareLink: '記事を見る',
      beyondTitle: 'Beyond Headphones / スピーカー環境での拡張',
      beyondBody:
        '私たちの技術はヘッドフォンだけに留まりません。一般的な2chスピーカー環境でも、音像の前後・左右だけでなく、空間の奥行きや距離感までを精密にデザインし、展示・舞台・小規模イベントなど「場」に合わせた没入体験を構築できます。BBMでは、そうした空間を体現するイベントも実施しています。',
      clientTitle: 'Client Works',
      clientBody: '本技術は2024年に完成し、すでに下記のアーティスト／企業の皆さまとコラボレーションを行っています。',
      tokojiTestBody: '2026年に実施予定の東光寺での音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築するテストの様子。',
      collabTitle: '次は、みなさまと。',
      collabBody:
        '次はぜひ、みなさまとコラボレーションを行いたいと考えています。会場や目的に合わせて、音の拡がり・距離感・没入感を設計し、体験として成立するサウンドを一緒に形にします。',
      collabButton: 'CONTACT / お問い合わせ',
    },
    en: {
      heroTitle: 'First, Experience Our Sound.',
      hero: 'First, Experience Our Sound. Please listen with headphones. Our technology is not just stereo...',
      subheading: '2ch Spatial Audio / Proprietary Technology that Expands Space',
      philosophyTitle: 'The Necessity of Spatial Audio',
      philosophyBody: 'Spatial audio is becoming common, but sounds that *require* it are still rare...',
      worksTitle: 'Works Where Technology Becomes Necessary',
      works1Body: 'Our first piano album fully leveraging our proprietary technology. Highly spatial sound merges with visuals to draw an immersive world. (Planned release in 2026)',
      works2Body: 'A first digital pop work using a different approach: Ambisonics. With as many as 860 tracks, the explosive expansion of space—especially in the chorus—is striking.',
      compareTitle: 'Technical Comparison',
      compareBody: 'For a detailed technical comparison, please visit this article.',
      compareLink: 'Read the article',
      beyondTitle: 'Beyond Headphones',
      beyondBody: 'Our technology goes beyond headphones. We can create an expanded acoustic space using standard 2ch speakers...',
      clientTitle: 'Client Works',
      clientBody: 'Completed in 2024, this technology has already been used in collaborations with the following artists and companies.',
      tokojiTestBody: 'A 2026 temple acoustic experiment to build a spatial sound field using only two speakers—even in a unique space like a temple.',
      collabTitle: "Let's Collaborate Next.",
      collabBody:
        "We’d love to collaborate with you next. We design perceived expansion, distance, and immersion for the venue and objective—and shape sound into a cohesive experience.",
      collabButton: 'CONTACT',
    },
    tw: {
      heroTitle: '首先，請體驗我們的聲音。',
      hero: '首先，請體驗我們的聲音。請務必使用耳機聆聽...',
      subheading: '2ch 空間音響 / 擴展空間的獨家技術',
      philosophyTitle: '立體音響的必然性',
      philosophyBody: '雖然空間音訊技術正逐漸普及，但真正『非此不可』的聲音仍屬罕見...',
      worksTitle: '技術成為必然的作品',
      works1Body: '我們首張完整運用獨家技術的鋼琴專輯。高度立體的聲響與影像融合，描繪出沉浸感十足的世界。（預計 2026 年發行）',
      works2Body: '採用另一種「Ambisonics（全景聲）」技術的首部數位流行作品。使用多達 860 軌音源，尤其副歌段落空間爆發性的擴張令人震撼。',
      compareTitle: '技術比較',
      compareBody: '若想更細緻地比較技術，請參考這篇文章。',
      compareLink: '閱讀文章',
      beyondTitle: '超越耳機的體驗',
      beyondBody: '我們的技術不僅是立體聲，即便是普通的2ch揚聲器也能創造擴展的空間...',
      clientTitle: '客戶案例',
      clientBody: '這項技術於 2024 年完成，並已與下列藝術家／企業展開合作。',
      tokojiTestBody: '預計於 2026 年在東光寺進行的聲學實驗：即使在寺廟這樣特殊的空間，也能僅用 2ch 揚聲器建構具有立體感的音響空間。',
      collabTitle: '下一位，想與你合作。',
      collabBody:
        '我們希望下一次能與你一起合作。依據場地與目標，設計聲音的延展感、距離感與沉浸感，把聲音作為「體驗」完整落地。',
      collabButton: 'CONTACT',
    },
  } as const;

  const t = content[language];

  const distantEcho = works.find(w => w.id === 'distant-echo');
  const forumHallEvent = works.find(w => w.id === 'tokyo-international-forum-hall-event');
  const yukiShare = works.find(w => w.id === 'yuki-share');
  const seigetsuki = works.find(w => w.id === 'seigetsuki');
  const clientWorks = [yukiShare, seigetsuki, forumHallEvent].filter(Boolean);

  // Parallax transforms - reduce on mobile for performance
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const sphereRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const particleFloat = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Detect mobile/tablet for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;

  return (
    <div className="pb-24 md:pb-40 relative overflow-hidden bg-black">
      {/* Revolutionary 3D Audio Visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Massive multi-layered sphere system - Optimized for mobile */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: isMobile ? 0 : heroY }}
        >
          {/* Outer ring - largest */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1400px] md:h-[1400px] lg:w-[1800px] lg:h-[1800px]"
            animate={isMobile ? {
              rotateY: [0, 360],
            } : {
              rotateX: [0, 360],
              rotateY: [0, -360],
            }}
            transition={isMobile ? {
              rotateY: { duration: 50, repeat: Infinity, ease: "linear" }
            } : {
              rotateX: { duration: 40, repeat: Infinity, ease: "linear" },
              rotateY: { duration: 35, repeat: Infinity, ease: "linear" }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: isMobile ? '2px solid rgba(201, 166, 107, 0.5)' : '4px solid rgba(201, 166, 107, 0.6)',
                boxShadow: isMobile 
                  ? 'inset 0 0 80px rgba(201, 166, 107, 0.4), 0 0 100px rgba(201, 166, 107, 0.3)'
                  : `inset 0 0 150px rgba(201, 166, 107, 0.5),
                     0 0 200px rgba(201, 166, 107, 0.4),
                     0 0 300px rgba(201, 166, 107, 0.2)`
              }}
            />
          </motion.div>

          {/* Mid ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] lg:w-[1300px] lg:h-[1300px]"
            animate={isMobile ? {
              rotateZ: [0, 360],
            } : {
              rotateY: [360, 0],
              rotateZ: [0, 360],
              scale: [1, 1.15, 1]
            }}
            transition={isMobile ? {
              rotateZ: { duration: 35, repeat: Infinity, ease: "linear" }
            } : {
              rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
              rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: isMobile ? '2px solid rgba(201, 166, 107, 0.6)' : '3px solid rgba(201, 166, 107, 0.7)',
                boxShadow: isMobile
                  ? 'inset 0 0 70px rgba(201, 166, 107, 0.45), 0 0 90px rgba(201, 166, 107, 0.35)'
                  : `inset 0 0 130px rgba(201, 166, 107, 0.55),
                     0 0 180px rgba(201, 166, 107, 0.45)`
              }}
            />
          </motion.div>

          {/* Inner ring */}
          {!isMobile && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
              animate={{
                rotateX: [360, 0],
                rotateZ: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateZ: { duration: 18, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '3px solid rgba(201, 166, 107, 0.85)',
                  boxShadow: `
                    inset 0 0 100px rgba(201, 166, 107, 0.7),
                    0 0 150px rgba(201, 166, 107, 0.55)
                  `
                }}
              />
            </motion.div>
          )}

          {/* Core sphere */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.25, 1]
            }}
            transition={{
              rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div
              className="absolute inset-0 rounded-full bg-gradient-radial from-[#C9A66B]/80 via-[#C9A66B]/40 to-transparent"
              style={{
                boxShadow: `
                  inset -30px -30px 120px rgba(0, 0, 0, 0.6),
                  inset 30px 30px 120px rgba(255, 255, 255, 0.3),
                  0 0 200px rgba(201, 166, 107, 0.8)
                `
              }}
            />
          </motion.div>
        </motion.div>

        {/* Audio wave rings emanating from center - Reduced on mobile */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              border: isMobile ? '1px solid rgba(201, 166, 107, 0.3)' : '2px solid rgba(201, 166, 107, 0.4)',
              boxShadow: isMobile ? '0 0 50px rgba(201, 166, 107, 0.3)' : '0 0 80px rgba(201, 166, 107, 0.4)'
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', isMobile ? '1400px' : '2400px'],
              height: ['0px', isMobile ? '1400px' : '2400px'],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: isMobile ? 6 : 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * (isMobile ? 1.5 : 1)
            }}
          />
        ))}

        {/* Floating frequency particles - Reduced on mobile */}
        {[...Array(isMobile ? 8 : isTablet ? 15 : 25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 md:w-6 md:h-6"
            style={{
              left: `${5 + (i * 3.8)}%`,
              top: `${10 + (i % 5) * 18}%`,
              y: particleFloat
            }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-[#C9A66B] to-[#C9A66B]/30"
              animate={{
                y: [0, -120, 0],
                x: [0, Math.sin(i) * 60, 0],
                scale: [1, 3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 5 + (i % 5) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
              style={{
                boxShadow: isMobile 
                  ? '0 0 40px rgba(201, 166, 107, 0.6)' 
                  : '0 0 60px rgba(201, 166, 107, 0.8), 0 0 100px rgba(201, 166, 107, 0.4)'
              }}
            />
          </motion.div>
        ))}

        {/* 3D Grid floor - Simplified on mobile */}
        <div
          className={`absolute inset-0 ${isMobile ? 'opacity-10' : 'opacity-20'}`}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 107, 0.8) ${isMobile ? '1px' : '2px'}, transparent ${isMobile ? '1px' : '2px'}),
              linear-gradient(to bottom, rgba(201, 166, 107, 0.8) ${isMobile ? '1px' : '2px'}, transparent ${isMobile ? '1px' : '2px'})
            `,
            backgroundSize: isMobile ? '80px 80px' : '100px 100px',
            transform: isMobile ? 'perspective(800px) rotateX(65deg) translateY(-30%)' : 'perspective(1200px) rotateX(70deg) translateY(-40%)',
            transformOrigin: 'center bottom'
          }}
        />

        {/* Vertical light beams - Desktop only */}
        {!isMobile && [...Array(5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute top-0 w-1 h-full"
            style={{
              left: `${20 + i * 15}%`,
              background: `linear-gradient(to bottom, 
                transparent, 
                rgba(201, 166, 107, ${0.3 + i * 0.1}) 50%, 
                transparent)`
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
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
            <motion.p 
              className="text-[10px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#C9A66B] mb-6 md:mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Core Technology
            </motion.p>
            
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-display italic tracking-tighter leading-none mb-8 md:mb-12"
              style={{
                background: 'linear-gradient(135deg, #C9A66B 0%, #ffffff 50%, #C9A66B 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: isMobile ? '0 0 50px rgba(201, 166, 107, 0.4)' : '0 0 100px rgba(201, 166, 107, 0.5)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              2ch<br/>SPATIAL
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-white/90 max-w-5xl mx-auto leading-relaxed mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {language === 'ja' 
                ? '2つのスピーカーで、誰も到達したことのない立体音響の極地へ。'
                : 'Reaching unprecedented spatial audio heights with just two speakers.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#C9A66B] text-xs md:text-sm tracking-widest"
              >
                ↓ SCROLL TO EXPERIENCE
              </motion.div>
            </motion.div>
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
                  title="Electric Opera 'VENUS' - 860 Tracks Mix"
                  src="https://www.youtube.com/embed/lmy-eChYDro"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-[#C9A66B]">
                Electric Opera 'VENUS' - 860 Tracks Mix
              </h3>
              <p className="text-white/70 font-serif leading-loose text-base md:text-lg">
                {t.works2Body}
              </p>
            </motion.article>
          </div>
        </motion.div>

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
                className="inline-block py-5 px-12 bg-[#C9A66B] text-black text-xs font-bold tracking-[0.3em] uppercase transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 80px rgba(201, 166, 107, 0.6)'
                }}
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