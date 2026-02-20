
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { LanguageContext } from '../App';

const Services: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const content = {
    title: { JP: 'SERVICES', EN: 'SERVICES', TW: '服務項目' },
    intro: {
      JP: '2ch再生環境における「立体の極地」を。',
      EN: 'The ultimate spatiality in 2ch listening environments.',
      TW: '在 2ch 播放環境中追求「立體的極致」。'
    },
    desc: {
      JP: '私たちは多チャンネルスピーカーを使わず、汎用的な2chスピーカーやイヤホンのみで、誰よりも圧倒的な立体感と実在感を提示する技術に特化しています。',
      EN: 'We specialize in presenting an overwhelming sense of three-dimensionality and presence using only standard 2ch speakers and earphones.',
      TW: '我們不使用多聲道揚聲器，而是專注於僅透過通用的 2ch 揚聲器或耳機，展現出比任何人都更具壓倒性的立體感與真實感。'
    }
  };

  return (
    <div className="pb-16 md:pb-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right-top sphere */}
        <motion.div
          className="absolute -top-16 -right-24 md:top-12 md:right-20 w-[600px] h-[600px] md:w-[880px] md:h-[880px]"
          initial={{ scale: 0.87, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.25 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-[#C9A66B]/44"
            animate={{
              rotateZ: [0, 360],
              rotateY: [0, 25, 0],
              scale: [1, 1.09, 1]
            }}
            transition={{
              rotateZ: { duration: 22, repeat: Infinity, ease: "linear" },
              rotateY: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4.3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              boxShadow: 'inset 0 0 100px rgba(201, 166, 107, 0.3), 0 0 135px rgba(201, 166, 107, 0.2)',
              transformStyle: 'preserve-3d'
            }}
          />
          <motion.div
            className="absolute inset-[24%] rounded-full border-[2px] border-[#C9A66B]/34"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{
              boxShadow: 'inset 0 0 62px rgba(201, 166, 107, 0.22)'
            }}
          />
        </motion.div>

        {/* Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A66B]/56 to-[#C9A66B]/20"
            style={{
              left: `${12 + i * 10}%`,
              top: `${18 + (i % 3) * 24}%`,
              boxShadow: '0 0 40px rgba(201, 166, 107, 0.44)'
            }}
            animate={{
              y: [0, -72, 0],
              x: [0, (i % 2 === 0 ? 32 : -32), 0],
              opacity: [0.34, 0.78, 0.34],
              scale: [1, 2.2, 1]
            }}
            transition={{
              duration: 4.4 + i * 0.32,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.23
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 107, 0.09) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 107, 0.09) 1px, transparent 1px)
            `,
            backgroundSize: '88px 88px',
            transform: 'perspective(880px) rotateX(63deg)',
            transformOrigin: 'center center',
            opacity: 0.65
          }}
        />
      </div>

      <Section className="py-0 mb-16 md:mb-32 pt-12 md:pt-20 relative z-10">
        <p className="text-[#C9A66B] font-bold tracking-[0.4em] uppercase text-xs mb-6">Our Edge</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display italic tracking-tighter mb-8 md:mb-12 text-black">{content.title[lang]}</h1>
        <p className="text-xl sm:text-2xl md:text-4xl text-black font-serif font-light max-w-4xl leading-tight mb-6 md:mb-8">
            {content.intro[lang]}
        </p>
        <p className="text-base sm:text-lg text-gray-500 font-serif font-light max-w-3xl leading-relaxed italic">
            {content.desc[lang]}
        </p>
      </Section>

      <Section className="py-0 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-16 md:space-y-32">
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-black border-l-2 border-[#C9A66B] pl-6">01. 2ch Spatial Sound</h2>
                <p className="text-gray-500 leading-loose font-serif font-light">
                    公共空間、商業施設における2chスピーカー配置での立体音響設計。独自のアルゴリズムで、最小限の機材で最大の空間演出を可能にします。
                </p>
            </div>
            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-black border-l-2 border-[#C9A66B] pl-6">02. Binaural Experience</h2>
                <p className="text-gray-500 leading-loose font-serif font-light">
                    イヤホンで聴いた際に「そこにいる」と感じさせる、高精細なバイノーラル制作。ポッドキャスト、音楽、VRコンテンツへ。
                </p>
            </div>
        </div>
        <div className="space-y-16 md:space-y-32 md:mt-64">
             <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-black border-l-2 border-[#C9A66B] pl-6">03. Digital Art Engine</h2>
                <p className="text-gray-500 leading-loose font-serif font-light">
                    デジタルアートや光の演出に同期した2ch音響エンジンの提供。Noor RiyadhやSuperMiami等、世界規模の展示で培われた実績があります。
                </p>
            </div>
             <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-black border-l-2 border-[#C9A66B] pl-6">04. Consultation</h2>
                <p className="text-gray-500 leading-loose font-serif font-light">
                    既存の2ch環境をいかにアップグレードするか。技術実装からクリエイティブディレクションまでをサポート。
                </p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
