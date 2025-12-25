import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import { LanguageContext } from '../App';
import { works } from '../data/works';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const featuredWorks = [
    works.find(w => w.id === 'distant-echo'),
    works.find(w => w.id === 'tsuchiura-archive'),
    works.find(w => w.id === 'seigetsuki'),
  ].filter(Boolean) as typeof works;
  const [heroLogoSrc, setHeroLogoSrc] = useState('/images/bbm-logo-mark.jpg');
  const [heroLogoFallbackTried, setHeroLogoFallbackTried] = useState(false);

  const t = {
    tagline: {
      JP: "この時代に必要な表現を、共に考える。",
      EN: "Thinking together about the expressions needed for our time.",
      TW: "共同思考這個時代所需的表達方式。"
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section className="min-h-[75vh] flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl"
        >
          <span className="text-[11px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase mb-8 block">Collective / Label / Research</span>
          <h1 className="hero-title text-6xl md:text-[10rem] text-black mb-12">
            Beyond<br />Boundary Music
          </h1>
          {heroLogoSrc && (
            <img
              src={heroLogoSrc}
              alt="BBM"
              className="mx-auto mb-12 w-40 md:w-56 h-auto"
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
          <p className="text-xl md:text-3xl text-gray-800 font-serif font-light leading-relaxed mb-16 max-w-4xl mx-auto">
            {t.tagline[lang]}
          </p>

          <div className="max-w-4xl mx-auto text-left text-base md:text-lg text-gray-700 font-serif leading-loose space-y-6 mb-16">
            <p>
              今現在、日本に限らず世界では政治的な問題、AI技術による問題、貧困による問題と様々な問題に直面しています。
              その中で私たち表現者はどのように世界と関わっていくべきなのでしょうか。
              bbmはこうした問題に対し、共に考えアプローチをしていくコミュニティです。
            </p>
            <p>
              アート表現、パブリックな空間での表現、そして教育といった3つの柱で、ボランティア、クライアントワークを隔てなくアプローチを行なっています。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            <Link to="/works" className="group flex items-center space-x-4">
              <span className="text-[12px] font-bold tracking-widest border-b-2 border-black/5 pb-1 group-hover:border-[#C9A66B] transition-all">厳選されたアーカイブ：</span>
            </Link>
            <Link to="/spatial-2ch" className="group flex items-center space-x-4">
              <span className="text-[12px] font-bold tracking-widest border-b-2 border-black/5 pb-1 group-hover:border-[#C9A66B] transition-all">2ch / 立体音響技術</span>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Four Pillars - Clickable Navigation */}
      <Section className="py-40 bg-gray-50/50">
        <div className="flex items-center space-x-4 mb-16">
            <div className="w-12 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.4em] uppercase text-[10px]">Four Missions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              id: 'art', 
              title: '01 Art', 
              head: '表現の本質。', 
              desc: '技術は手段であり、目的は体験を創ること。2chという環境で、かつてない没入感を実現します。作品リリースやアルバム制作を軸に。', 
              path: '/pillar/art' 
            },
            { 
              id: 'public', 
              title: '02 Public', 
              head: '都市の記憶。', 
              desc: '公共空間における音の価値を再定義。地域社会と対話し、アーカイブやコンサートを通じて場所のアイデンティティを繋ぎます。', 
              path: '/pillar/public' 
            },
            { 
              id: 'education', 
              title: '03 Education', 
              head: '知の共有。', 
              desc: 'コミュニティとしての学びの場。国内外の大学や学校での講義、若手への継承を通じて表現の土壌を耕します。', 
              path: '/pillar/education' 
            },
            { 
              id: 'tech', 
              title: '04 Tech', 
              head: '2ch立体音響。', 
              desc: '汎用的な2ch環境における「立体の極地」を。独自のアルゴリズムによる空間の彫刻を、各プラットフォームへ。', 
              path: '/spatial-2ch' 
            }
          ].map((pillar) => (
            <Link key={pillar.id} to={pillar.path} className="group bg-white p-10 border border-black/5 hover:border-[#C9A66B] transition-all duration-500">
               <span className="text-[10px] font-bold text-[#C9A66B] tracking-[0.4em] uppercase mb-8 block">{pillar.title}</span>
               <h3 className="text-2xl font-display font-bold mb-6 group-hover:translate-x-1 transition-transform duration-500">{pillar.head}</h3>
               <p className="text-gray-500 font-serif leading-loose text-xs mb-10">
                 {pillar.desc}
               </p>
               <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-300 group-hover:text-black transition-colors">Learn More →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Selected Works Gallery */}
      <Section className="py-32 border-t border-black/5">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Archives.</h2>
          <Link to="/works" className="text-[11px] font-bold tracking-[0.3em] uppercase hover:text-[#C9A66B] transition-colors">Full Gallery →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} onClick={() => {}} />
          ))}
        </div>
      </Section>

      {/* Leads / Community */}
      <Section className="py-40 bg-black text-white rounded-sm mx-6 md:mx-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-12">
          <div className="space-y-12">
            <h3 className="text-[11px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase">Collective Leads</h3>
            <div className="space-y-16">
              <div>
                <h4 className="text-3xl font-display font-bold mb-2">Hiroyuki Nakamura</h4>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Composer / Academic</p>
                <p className="text-gray-400 font-serif text-sm leading-relaxed max-w-sm">
                  音響学とメディア表現の講師。BBMの芸術的ディレクションと理論構築を担う。
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold mb-2">Koichi Utsugi</h4>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Spatial Audio Engineer</p>
                <p className="text-gray-400 font-serif text-sm leading-relaxed max-w-sm">
                  独自の2ch立体音響アルゴリズムの開発者。グローバルな展示へのシステム実装を統括。
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border border-white/10 p-10 bg-white/5 backdrop-blur-md">
              <h4 className="text-2xl font-serif mb-6 italic">Dialogue is the starting point.</h4>
              <p className="text-gray-400 text-sm font-serif leading-loose mb-10">
                BBMは流動的なコミュニティです。新しいプロジェクトのアイデア、技術的な相談、あらゆる音への興味から対話が始まります。
              </p>
              <Link to="/contact" className="inline-block py-4 px-10 bg-white text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#C9A66B] hover:text-white transition-all">
                Join the Discussion
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;