import React, { useContext, useState } from 'react';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import WorkModal from '../components/WorkModal';
import { works } from '../data/works';
import { LanguageContext } from '../App';
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
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const content = pillarContent[type];
  // Preserve `data/works.ts` order (especially for Education).
  const filteredWorks = works.filter((w) => w.pillar === type);

  const pageTitle = type.toUpperCase();
  const subtitle = typeof content.title === 'string' ? content.title : content.title[lang];

  const getWork = (id: string) => works.find((w) => w.id === id);
  const tsuchiuraWorks: Work[] = [
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
    getWork('tama-art-univ'),
    getWork('showa-music-univ'),
    getWork('tainan-lecture'),
    getWork('shimamura-music-seminar'),
    getWork('tsuchiura-elementary-special-class')
  ].filter(Boolean) as Work[];

  return (
    <div className="pt-40 pb-40">
      {/* Header */}
      <Section className="mb-32">
        <div className="flex items-center space-x-6 mb-12">
            <div className="w-16 h-[1px]" style={{ backgroundColor: content.color }} />
            <p className="font-bold tracking-[0.5em] uppercase text-[10px]" style={{ color: content.color }}>Pillar / {type}</p>
        </div>
        <h1 className="hero-title text-6xl md:text-9xl text-black mb-12 leading-none">
          {pageTitle}
        </h1>
        <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-gray-400 mb-10 whitespace-pre-line">
          {subtitle}
        </p>
        <p className="text-base md:text-lg text-gray-500 font-serif font-light max-w-3xl leading-loose whitespace-pre-line">
          {typeof content.desc === 'string' ? content.desc : content.desc[lang]}
        </p>
      </Section>

      {/* Relevant Works */}
      <Section className="py-20 border-t border-black/5">
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
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">BBM Projects / 自主企画</h2>
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
                <h2 className="text-3xl md:text-5xl font-display font-bold italic tracking-tighter">Invited Lectures / 招聘・外部講義</h2>
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
            <div className="flex items-baseline justify-between mb-20">
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
              <div className="py-40 text-center border border-dashed border-black/10">
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