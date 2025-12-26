
import React, { useContext } from 'react';
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
    <div className="pb-16 md:pb-20">
      <Section className="py-0 mb-16 md:mb-32 pt-12 md:pt-20">
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
        <div className="space-y-32 md:mt-64">
             <div>
                <h2 className="text-4xl font-serif font-light mb-6 text-black border-l-2 border-[#C9A66B] pl-6">03. Digital Art Engine</h2>
                <p className="text-gray-500 leading-loose font-serif font-light">
                    デジタルアートや光の演出に同期した2ch音響エンジンの提供。Noor RiyadhやSuperMiami等、世界規模の展示で培われた実績があります。
                </p>
            </div>
             <div>
                <h2 className="text-4xl font-serif font-light mb-6 text-black border-l-2 border-[#C9A66B] pl-6">04. Consultation</h2>
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
