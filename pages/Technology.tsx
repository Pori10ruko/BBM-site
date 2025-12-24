import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Technology: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Section className="py-0 mb-32 pt-20">
        <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.4em] uppercase text-xs">The Engine</p>
        </div>
        <h1 className="text-7xl md:text-[10rem] font-display italic tracking-tighter mb-16 leading-none text-black">TECH.</h1>
        <p className="text-xl md:text-3xl text-gray-500 font-serif font-light max-w-4xl leading-relaxed italic">
            最先端の音響エンジニアリングを、確かな品質で。
            BBMは制作から実装まで、あらゆるプラットフォームに対応可能な技術基盤を備えています。
        </p>
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
        <div className="bg-white/50 backdrop-blur-xl border border-black/5 p-12 rounded-[4px] lg:col-span-2">
          <h2 className="text-2xl font-serif font-light mb-10 tracking-widest text-[#C9A66B] uppercase">Delivery Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-[9px] tracking-[0.3em] text-black/20 uppercase mb-4">Linear Audio</h3>
              <ul className="space-y-4 text-base font-serif font-light text-gray-500">
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Binaural (2ch)</span> <span className="text-[9px] font-bold text-gray-300">WAV / ADM</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Ambisonics (1-7th)</span> <span className="text-[9px] font-bold text-gray-300">AmbiX / FuMa</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Dolby Atmos</span> <span className="text-[9px] font-bold text-gray-300">ADM BWF</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Surround</span> <span className="text-[9px] font-bold text-gray-300">Discrete</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[9px] tracking-[0.3em] text-black/20 uppercase mb-4">Interactive</h3>
              <ul className="space-y-4 text-base font-serif font-light text-gray-500">
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Unity / Wwise</span> <span className="text-[9px] font-bold text-gray-300">Integration</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Unreal 5</span> <span className="text-[9px] font-bold text-gray-300">Metasounds</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>MaxMSP</span> <span className="text-[9px] font-bold text-gray-300">Standalone</span></li>
                <li className="flex justify-between border-b border-black/5 pb-2"><span>Web Audio</span> <span className="text-[9px] font-bold text-gray-300">Three.js</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl border border-black/5 p-12 rounded-[4px] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-serif font-light mb-6 tracking-widest text-[#C9A66B] uppercase">QA</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-serif">
                専用の視聴ルームと、高精度なHMDを使用した実機検証体制を整えています。聴感上の「正しさ」と「快楽」を追求します。
            </p>
          </div>
          <div className="pt-8 border-t border-black/5">
            <span className="text-[9px] font-bold text-gray-300 tracking-widest uppercase">Certified Tools</span>
            <div className="flex flex-wrap gap-2 mt-4">
                {['Avid S6', 'Genelec', 'Sennheiser', 'Sound Devices'].map(tool => (
                    <span key={tool} className="text-[9px] text-gray-400 border border-black/5 px-3 py-1">{tool}</span>
                ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-0">
        <h2 className="text-4xl md:text-7xl font-display italic tracking-tighter mb-16 text-center text-black">PRODUCTION FLOW</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
                { step: '01', title: 'Hearing', desc: '目的、体験環境、予算、納期を詳しくヒアリングします。' },
                { step: '02', title: 'Drafting', desc: 'コンセプトに基づいたデモ制作を行い方向性を確定させます。' },
                { step: '03', title: 'Recording', desc: 'スタジオまたはフィールドにて、高精度な素材を収録します。' },
                { step: '04', title: 'Mixing', desc: '立体音響ミキシング。空間、質感を緻密に調整します。' },
                { step: '05', title: 'Checking', desc: '実地または実機での最終確認。環境に合わせ微調整します。' }
            ].map((item, i) => (
                <div key={item.step} className="bg-white border border-black/5 p-8 rounded-[2px] flex flex-col hover:border-[#C9A66B] transition-colors group">
                    <span className="text-4xl font-serif italic text-black/5 group-hover:text-[#C9A66B] transition-colors mb-4">{item.step}</span>
                    <h3 className="text-lg font-serif font-light mb-2 tracking-tight text-black">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-serif">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Technology;