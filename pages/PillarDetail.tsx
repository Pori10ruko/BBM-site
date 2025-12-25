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
    sub: '表現の深淵。',
    desc: {
      JP: '音は、物理的な振動を超えて記憶を呼び覚ます「鍵」となる。私たちは、緻密に計算された音響設計を「不可視な筆」として使い、空間そのものを変容させます。そこに立ち現れるのは、誰もが体験したことのない、静謐で濃密な没入の世界です。',
      EN: 'Sound becomes a "key" that transcends physical vibration to awaken memories. Using meticulously calculated sound design as an "invisible brush," we transform space itself. What emerges is a serene and dense world of immersion unlike anything experienced before.',
      TW: '聲音，是超越物理震動、喚醒記憶的「鑰匙」。我們將精密計算的音響設計化為「不可視之筆」，讓空間本身產生質變。由此浮現的，是前所未有、靜謐而濃密的沉浸世界。'
    },
    color: '#C9A66B'
  },
  Public: {
    title: 'Public Resonance',
    sub: '社会の響き。',
    desc: '公共空間における音の価値を再定義。都市の記憶や環境音をアーカイブし、地域社会と対話することで、場所のアイデンティティを次世代へ繋ぎます。',
    color: '#4A5568'
  },
  Education: {
    title: 'Knowledge Cycle',
    sub: '知の循環。',
    desc: 'コミュニティとしての学びの場。若手への技術継承や、分野を超えた対話を通じて、これからの音響表現の土壌を共に耕します。',
    color: '#2D3748'
  }
};

const PillarDetail: React.FC<PillarDetailProps> = ({ type }) => {
  const { lang } = useContext(LanguageContext);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const content = pillarContent[type];
  const filteredWorks = works.filter(w => w.pillar === type);

  return (
    <div className="pt-40 pb-40">
      {/* Header */}
      <Section className="mb-32">
        <div className="flex items-center space-x-6 mb-12">
            <div className="w-16 h-[1px]" style={{ backgroundColor: content.color }} />
            <p className="font-bold tracking-[0.5em] uppercase text-[10px]" style={{ color: content.color }}>Pillar / {type}</p>
        </div>
        <h1 className="hero-title text-6xl md:text-9xl text-black mb-12 leading-none">
          {typeof content.title === 'string' ? content.title : content.title[lang]}
        </h1>
        <p className="text-2xl md:text-4xl text-gray-800 font-serif font-light mb-8 italic">
          {content.sub}
        </p>
        <p className="text-base md:text-lg text-gray-500 font-serif font-light max-w-3xl leading-loose">
          {typeof content.desc === 'string' ? content.desc : content.desc[lang]}
        </p>
      </Section>

      {/* Relevant Works */}
      <Section className="py-20 border-t border-black/5">
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
      </Section>

      <WorkModal 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
      />
    </div>
  );
};

export default PillarDetail;