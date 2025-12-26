import React, { useContext, useState } from 'react';
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
    <div className="pt-28 sm:pt-32 md:pt-40 pb-24 md:pb-40">
      <Section className="mb-16 md:mb-32 text-center md:text-left">
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

      <Section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start border-t border-black/5">
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
      <Section className="py-32 border-t border-black/5">
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

      <Section className="py-20 md:py-40 text-center">
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