import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import WorkModal from '../components/WorkModal';
import { works } from '../data/works';
import { LanguageContext } from '../App';
import { Work } from '../types';
import { Link } from 'react-router-dom';

const Spatial2ch: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  
  // 技術ページに表示する特定の実績を抽出
  const techWorks = works.filter(w => w.featuredInTech);

  return (
    <div className="pb-16 md:pb-24 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center large sphere */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] md:w-[1050px] md:h-[1050px]"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-[#C9A66B]/48"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 25, 0],
              scale: [1, 1.12, 1]
            }}
            transition={{
              rotateY: { duration: 23, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              boxShadow: 'inset 0 0 110px rgba(201, 166, 107, 0.32), 0 0 150px rgba(201, 166, 107, 0.22)',
              transformStyle: 'preserve-3d'
            }}
          />
          <motion.div
            className="absolute inset-[20%] rounded-full border-[2px] border-[#C9A66B]/38"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            style={{
              boxShadow: 'inset 0 0 70px rgba(201, 166, 107, 0.24)'
            }}
          />
          <motion.div
            className="absolute inset-[38%] rounded-full bg-gradient-to-br from-white/55 via-[#C9A66B]/28 to-[#C9A66B]/18"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              boxShadow: 'inset -18px -18px 75px rgba(201, 166, 107, 0.38), inset 18px 18px 75px rgba(255, 255, 255, 0.38)'
            }}
          />
        </motion.div>

        {/* Animated grid */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '0px 95px']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 107, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 107, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '95px 95px',
            transform: 'perspective(900px) rotateX(64deg)',
            transformOrigin: 'center center',
            opacity: 0.8
          }}
        />

        {/* Particles */}
        {[...Array(11)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A66B]/58 to-[#C9A66B]/22"
            style={{
              left: `${8 + i * 8.5}%`,
              top: `${18 + (i % 4) * 20}%`,
              boxShadow: '0 0 45px rgba(201, 166, 107, 0.48)'
            }}
            animate={{
              y: [0, -78, 0],
              x: [0, (i % 2 === 0 ? 35 : -35), 0],
              opacity: [0.38, 0.82, 0.38],
              scale: [1, 2.4, 1]
            }}
            transition={{
              duration: 4.8 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.24
            }}
          />
        ))}
      </div>

      <Section className="mb-16 md:mb-32 text-center md:text-left relative z-10">
        <div className="flex items-center justify-center md:justify-start space-x-6 mb-12">
            <div className="w-12 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.5em] uppercase text-[10px]">Acoustic Specialization</p>
        </div>
        <h1 className="hero-title text-4xl sm:text-6xl md:text-9xl text-black mb-10 md:mb-16 leading-tight">
          Spatial Audio<br />via 2ch.
        </h1>
        <p className="text-base sm:text-xl md:text-3xl text-gray-800 font-serif font-light max-w-4xl leading-relaxed">
          {lang === 'JP' ? '汎用性を犠牲にせず、最も深い没入感を。2つのスピーカーで「空間を彫刻する」技術。' : 
           'Achieving deep immersion without sacrificing versatility. Sculpting space through just two speakers.'}
        </p>
      </Section>

      <Section className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start border-t border-black/5">
        <div className="space-y-12">
          <h2 className="text-3xl font-display font-bold border-b border-black/10 pb-6 italic underline decoration-[#C9A66B]">Why 2ch?</h2>
          <div className="space-y-8 text-gray-600 font-serif text-base leading-loose">
            <p>
              私たちの挑戦は、特別な多チャンネル環境を必要とせず、誰の手元にもあるステレオ（2ch）環境で「音の場所」を完璧に制御することにあります。
            </p>
            <p>
              人間の聴覚心理と精密な位相演算を組み合わせることで、音は左右の境界を越え、上下、前後、そしてリスナーを包み込む「空間」へと昇華します。これは技術による空間の彫刻であり、最もユニバーサルな没入体験の提供です。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-black/5 p-12 space-y-10">
           <h3 className="text-[11px] font-bold tracking-[0.4em] text-[#C9A66B] uppercase">Implementation Strength</h3>
           <div className="space-y-6">
              <h4 className="text-2xl font-serif font-bold italic">Universal Immersive Engine</h4>
              <p className="text-sm text-gray-500 font-serif leading-loose">
                イヤホン、家庭用スピーカー、公共空間の2ch配置。あらゆる再生環境を「スペーシャル・シアター」へと変貌させます。
              </p>
           </div>
           <div className="flex flex-wrap gap-3">
              {['Phase Control', 'HRTF Optimized', 'Stereo Compatibility', 'Zero Speaker Add-on'].map(tag => (
                <span key={tag} className="text-[9px] font-bold text-gray-400 uppercase border border-black/10 px-3 py-1 bg-white">{tag}</span>
              ))}
           </div>
        </div>
      </Section>

      {/* Technical Archives */}
      <Section className="py-20 md:py-32 border-t border-black/5">
        <div className="flex items-baseline justify-between mb-10 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">Technology Archives.</h2>
            <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{techWorks.length} Core Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {techWorks.map((work) => (
            <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-32 text-center">
         <h3 className="text-[11px] font-bold tracking-[0.6em] text-gray-400 uppercase mb-12">Dialogue</h3>
         <Link to="/contact" className="group inline-flex flex-col items-center">
            <span className="text-2xl sm:text-4xl md:text-7xl font-display font-bold mb-6 transition-transform group-hover:-translate-y-2">Discuss your Vision.</span>
            <div className="w-24 h-[1px] bg-[#C9A66B] group-hover:w-48 transition-all duration-700"></div>
         </Link>
      </Section>

      <WorkModal 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
      />
    </div>
  );
};

export default Spatial2ch;