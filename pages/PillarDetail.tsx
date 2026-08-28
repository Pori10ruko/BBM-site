import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import WorkModal from '../components/WorkModal';
import { works } from '../data/works';
import { LanguageContext } from '../App';
import { useLanguage } from '../hooks/useLanguage';
import { Pillar, Work } from '../types';

interface PillarDetailProps {
  type: Pillar;
}

const pillarContent = {
  Art: {
    title: {
      JP: 'Depths of Expression / 表現の深淵',
      EN: 'Depths of Expression / 表現の深淵',
      TW: 'Depths of Expression / 表現の深淵'
    },
    desc: {
      JP: '音を聴く、という行為を超えて。私たちは、空間そのものを一つの「楽器」として捉え直します。\n緻密な計算と感性が融合した音響設計により、心象風景が目の前に広がるような、かつてない没入体験を創出します。',
      EN: 'Beyond the act of listening. We redefine the space itself as an "instrument."\nThrough sound design that fuses meticulous calculation with sensibility, we create an unprecedented immersive experience where imaginary landscapes unfold before your eyes.',
      TW: '超越「聆聽」的行為。我們將空間本身重新定義為一種「樂器」。\n透過融合精密計算與感性的音響設計，創造前所未有的沉浸式體驗，彷彿心象風景就在眼前展開。'
    },
    color: '#C9A66B'
  },
  Public: {
    title: {
      JP: 'Public Resonance / 共鳴する公共空間',
      EN: 'Public Resonance / 共鳴する公共空間',
      TW: 'Public Resonance / 共鳴する公共空間'
    },
    sub: '社会の響き。',
    desc: {
      JP: '街の声を聴く。私たちは、その場所の喧騒も静寂も、あるがままに受け入れ、そこに暮らす人々との対話を通して新たな「風景」を紡ぎ出します。それは、公共空間そのものを、共鳴する一つの楽器へと変える試みです。',
      EN: 'Listening to the voice of the city. We accept the noise and silence of the place as they are, weaving a new "scenery" through dialogue with the people who live there. It is an attempt to turn the public space itself into a resonant instrument.',
      TW: '傾聽城市的聲音。我們如實接納當地的喧囂與靜寂，透過與生活在那裡的人們對話，編織出全新的「風景」。這是一場將公共空間本身轉化為共鳴樂器的嘗試。'
    },
    color: '#4A5568'
  },
  Education: {
    title: 'Knowledge Cycle / 知の循環。',
    desc: 'コミュニティとしての学びの場。若手への技術継承や、分野を超えた対話を通じて、これからの音響表現の土壌を共に耕します。',
    color: '#2D3748'
  }
};

const PillarDetail: React.FC<PillarDetailProps> = ({ type }) => {
  const { lang } = useContext(LanguageContext);
  const { language } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const pillar = pillarContent[type];

  const content = {
    ja: {
      subtitle: 'Knowledge Cycle / 知の循環。',
      desc: 'コミュニティとしての学びの場。若手への技術継承や、分野を超えた対話を通じて、これからの音響表現の土壌を共に耕します。',
      section1: 'BBM Projects',
      section2: 'Invited Lectures / 招聘・外部講義',
    },
    en: {
      subtitle: 'Knowledge Cycle.',
      desc: 'A community for learning. Through passing skills to the next generation and cross-disciplinary dialogue, we cultivate the soil for future acoustic expression together.',
      section1: 'BBM Projects',
      section2: 'Invited Lectures',
    },
    tw: {
      subtitle: '知識的循環。',
      desc: '作為社群的學習場域。透過將技術傳承給年輕一代以及跨領域的對話，我們共同耕耘未來音響表現的土壤。',
      section1: 'BBM 專案',
      section2: '受邀講座',
    },
  } as const;
  // Preserve `data/works.ts` order (especially for Education).
  const filteredWorks = works.filter((w) => w.pillar === type);

  const pageTitle = type.toUpperCase();
  const subtitle =
    type === 'Education'
      ? content[language].subtitle
      : typeof pillar.title === 'string'
        ? pillar.title
        : pillar.title[lang];

  const getWork = (id: string) => works.find((w) => w.id === id);
  const tsuchiuraWorks: Work[] = [
    getWork('tsap-exhibition-2026'),
    getWork('tsuchiura-archive'),
    getWork('moonlight-concert'),
    getWork('oiwata-elementary-special-class')
  ].filter(Boolean) as Work[];
  const kawasakiWorks: Work[] = [
    getWork('encount-kawasaki'),
    getWork('venus-festival')
  ].filter(Boolean) as Work[];

  const educationBbmProjects: Work[] = [
    getWork('bbm-workshop'),
    getWork('bbm-online-seminar'),
    getWork('bbm-note'),
    getWork('bbm-net-radio')
  ].filter(Boolean) as Work[];

  const educationInvitedLectures: Work[] = [
    getWork('deep-fake-showa-lecture'),
    getWork('tainan-yugaku-2026'),
    getWork('yakou-elementary-special-class'),
    getWork('tama-art-univ'),
    getWork('showa-music-univ'),
    getWork('tainan-lecture'),
    getWork('shimamura-music-seminar'),
    getWork('tsuchiura-elementary-special-class')
  ].filter(Boolean) as Work[];

  return (
    <div className="pb-16 md:pb-24 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left sphere */}
        <motion.div
          className="absolute top-1/4 -left-32 md:left-12 w-[600px] h-[600px] md:w-[850px] md:h-[850px]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-[#C9A66B]/45"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              boxShadow: 'inset 0 0 95px rgba(201, 166, 107, 0.3), 0 0 140px rgba(201, 166, 107, 0.2)',
              transformStyle: 'preserve-3d'
            }}
          />
          <motion.div
            className="absolute inset-[25%] rounded-full border-[2px] border-[#C9A66B]/35"
            animate={{ rotateY: [360, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{
              boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.22)'
            }}
          />
        </motion.div>

        {/* Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A66B]/60 to-[#C9A66B]/20"
            style={{
              left: `${10 + i * 9}%`,
              top: `${15 + (i % 4) * 22}%`,
              boxShadow: '0 0 42px rgba(201, 166, 107, 0.45)'
            }}
            animate={{
              y: [0, -75, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0.35, 0.8, 0.35],
              scale: [1, 2.2, 1]
            }}
            transition={{
              duration: 4.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.22
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 166, 107, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 166, 107, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '85px 85px',
            transform: 'perspective(850px) rotateX(62deg)',
            transformOrigin: 'center center',
            opacity: 0.7
          }}
        />
      </div>

      {/* Header */}
      <Section className="mb-16 md:mb-32 relative z-10">
        <div className="flex items-center space-x-6 mb-12">
            <div className="w-16 h-[1px]" style={{ backgroundColor: pillar.color }} />
            <p className="font-bold tracking-[0.5em] uppercase text-[10px]" style={{ color: pillar.color }}>Pillar / {type}</p>
        </div>
        <h1 className="hero-title text-4xl sm:text-6xl md:text-9xl text-black mb-8 md:mb-12 leading-none">
          {pageTitle}
        </h1>
        <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-gray-400 mb-10 whitespace-pre-line">
          {subtitle}
        </p>
        <p className="text-base md:text-lg text-gray-500 font-serif font-light max-w-3xl leading-loose whitespace-pre-line">
          {type === 'Education' ? content[language].desc : typeof pillar.desc === 'string' ? pillar.desc : pillar.desc[lang]}
        </p>
      </Section>

      {/* Relevant Works */}
      <Section className="border-t border-black/5">
        {type === 'Public' ? (
          <div className="space-y-24">
            <div>
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">Tsuchiura City / 土浦市</h2>
                <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{tsuchiuraWorks.length} Projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {tsuchiuraWorks.map((work) => (
                  <WorkCard
                    key={work.id}
                    work={work}
                    onClick={() => {
                      if (work.id === 'tsuchiura-archive') {
                        window.open('https://tsuchiura-sound-achib.netlify.app/', '_blank', 'noopener,noreferrer');
                        return;
                      }
                      setSelectedWork(work);
                    }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">Kawasaki City / 川崎市</h2>
                <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{kawasakiWorks.length} Projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {kawasakiWorks.map((work) => (
                  <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
                ))}
              </div>
            </div>
          </div>
        ) : type === 'Education' ? (
          <div className="space-y-24">
            <div>
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">{content[language].section1}</h2>
                <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{educationBbmProjects.length} Projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {educationBbmProjects.map((work) => (
                  <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">{content[language].section2}</h2>
                <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{educationInvitedLectures.length} Projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {educationInvitedLectures.map((work) => (
                  <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-between mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">Selected Archives in {type}.</h2>
              <span className="text-[10px] font-bold text-gray-300 tracking-widest uppercase">{filteredWorks.length} Projects</span>
            </div>

            {filteredWorks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredWorks.map((work) => (
                  <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
                ))}
              </div>
            ) : (
              <div className="py-16 md:py-32 text-center border border-dashed border-black/10">
                <p className="text-gray-400 font-serif italic text-sm">Now building archives...</p>
              </div>
            )}
          </>
        )}
      </Section>

      <WorkModal 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
      />
    </div>
  );
};

export default PillarDetail;