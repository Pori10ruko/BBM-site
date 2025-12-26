import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import { LanguageContext } from '../App';
import { works } from '../data/works';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const featuredWorks = [
    works.find(w => w.id === 'distant-echo'),
    works.find(w => w.id === 'tsuchiura-archive'),
    works.find(w => w.id === 'tainan-lecture'),
  ].filter(Boolean) as typeof works;
  const seigetsukiWork = works.find(w => w.id === 'seigetsuki');
  const [heroLogoSrc, setHeroLogoSrc] = useState('/images/bbm-logo-mark.jpg');
  const [heroLogoFallbackTried, setHeroLogoFallbackTried] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');
    if (!targetId) return;
    window.setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView();
    }, 0);
  }, [location.hash]);

  const t = {
    tagline: {
      JP: "この時代に必要な表現を、共に考える。",
      EN: "Thinking together about the expressions needed for our time.",
      TW: "共同思考這個時代所需的表達方式。"
    },
    philosophy: {
      JP: {
        p1: '今現在、日本に限らず世界では政治的な問題、AI技術による問題、貧困による問題と様々な問題に直面しています。その中で私たち音楽家 / 表現者はどのように世界と関わっていくべきなのでしょうか。bbmはこうした問題に対し、共に考えアプローチをしていくコミュニティです。',
        p2: 'アート表現、パブリックな空間での表現、そして教育といった3つの柱で、ボランティア、クライアントワークを隔てなくアプローチを行なっています。'
      },
      EN: {
        p1: 'Currently, the world faces various challenges, including political issues, AI ethics, and poverty. How should we, as artists, engage with this world? BBM is a community that thinks together and approaches these problems through expression.',
        p2: 'We operate through three pillars—Art, Public, and Education—bridging volunteer work and client projects without distinction.'
      },
      TW: {
        p1: '現今，不僅是日本，全世界都面臨著政治、AI 技術倫理、貧困等各式各樣的問題。在這樣的時代，我們身為創作者該如何與世界連結？BBM 是一個共同思考並嘗試解決這些問題的社群。',
        p2: '我們透過「藝術表現」、「公共空間」以及「教育」这三大支柱，不分志工活動或商業專案，致力於對社會提出我們的行動與解答。'
      }
    },
    missions: {
      art: {
        JP: '表現者は常に新しい技術と共に歩んできました。テクノロジーの進化は、そのまま音楽の発展の歴史でもあります。私たちは、未だかつてない独自の立体音響技術を用いることで、音楽体験そのものを全く新しい次元へと引き上げます。',
        EN: 'Artists have always walked hand in hand with new technology. The evolution of technology is the history of music itself. By using our unique spatial audio technology, we elevate the musical experience to a completely new dimension.',
        TW: '創作者總是與新技術並肩前行。科技的進化，即是音樂發展的歷史。我們運用前所未有的獨家立體音響技術，將音樂體驗提升至全新的次元。'
      },
      public: {
        JP: '土浦市での地域プロジェクトや川崎市『Encount』など、自治体と連携しパブリックな空間における音の価値を再定義。地域社会と対話し、その場所ならではの音風景（サウンドスケープ）を創出しています。',
        EN: 'Through projects like those in Tsuchiura City and "Encount" in Kawasaki City, we collaborate with local governments to redefine the value of sound in public spaces. We dialogue with the local community to create unique soundscapes that reflect the identity of the place.',
        TW: '透過土浦市的地域計畫與川崎市的『Encount』等專案，我們與地方政府合作，重新定義公共空間中聲音的價值。我們與在地社群對話，創造出唯有當地才能呈現的獨特音景（Soundscape）。'
      },
      education: {
        JP: '次世代のクリエイターへ、表現の武器を。国内外の大学での専門講義に加え、誰でも参加できる無料オンラインセミナーも定期開催。最先端の音響技術と理論を、より多くの人へ共有しています。',
        EN: 'Empowering the next generation of creators. In addition to specialized lectures at universities in Japan and abroad, we hold regular free online seminars open to everyone. We share cutting-edge audio technology and theory with a wider audience.',
        TW: '為下個世代的創作者提供表現的武器。除了國內外大學的專業講授，我们也定期舉辦任何人皆可參加的免費線上研討會，將最尖端的音響技術與理論分享給更多人。'
      }
    },
    technology: {
      JP: {
        h1: '革新的な没入体験を、標準的な環境で',
        p1: '特別なサラウンドシステムは不要です。私たちが開発した独自の2ch立体音響アルゴリズムは、既存のスピーカーやステレオヘッドフォンだけで、驚異的な音響空間を実現します。',
        h2: 'ビジネスへの実装パートナーとして',
        p2: 'この技術は、VR/ARコンテンツ、アプリ開発、そして空間インスタレーションにおける没入体験の「核」となります。BBMは単なる技術提供にとどまらず、実装パートナーとしてプロジェクトに伴走。御社のコンテンツに、他にはない音響体験という付加価値を創出します。'
      },
      EN: {
        h1: 'Immersive Experience in Standard Environments',
        p1: 'No special surround systems are needed. Our proprietary 2ch spatial audio algorithm realizes a breathtaking sound space using just existing speakers or stereo headphones.',
        h2: 'As Your Implementation Partner',
        p2: 'This technology becomes the "core" of immersive experiences in VR/AR content, app development, and spatial installations. BBM goes beyond mere technology licensing; we walk with you as an implementation partner, creating unique value and auditory experiences for your content.'
      },
      TW: {
        h1: '在標準環境中實現革新性的沉浸體驗',
        p1: '不需要特殊的環繞音響系統。我們開發的獨家雙聲道立體音響演算法，僅需既有的揚聲器或立體聲耳機，即可實現令人驚嘆的音響空間。',
        h2: '作為商業實踐的合作夥伴',
        p2: '此技術將成為 VR/AR 內容、App 開發以及空間裝置藝術中沉浸體驗的「核心」。BBM 不僅提供技術，更作為實踐夥伴參與專案，為您的內容創造獨一無二的聽覺體驗與附加價值。'
      }
    },
    upcoming: {
      title: {
        JP: '音と光の建築 at 東光寺',
        EN: 'Architecture of Sound and Light at Tokoji Temple',
        TW: '音與光的建築 at 東光寺'
      },
      desc: {
        JP: '歴史ある東光寺の本堂を舞台に、市民の皆さんと共につくり上げた“光のまゆ”と、プロジェクトを通して集めた「土浦の音」を組み合わせ、2chスピーカーによるバイノーラル音響で空間全体を包み込む、一日限りの展示・コンサートとなります。',
        EN: 'A one-day exhibition and concert at the historic main hall of Tokoji Temple. Combining "cocoons of light" created with citizens and "sounds of Tsuchiura," we envelop the space in binaural audio using 2ch speakers.',
        TW: '以歷史悠久的東光寺本堂為舞台，結合與市民共同創作的「光之繭」以及透過專案收集的「土浦之音」，透過雙聲道喇叭呈現雙耳立體音響（Binaural Audio），包覆整個空間的一日限定展覽與音樂會。'
      }
    },
    news: {
      yukiTitle: {
        JP: 'YUKI『Share』MV 立体音響制作に参加',
        EN: 'Participated in Spatial Audio Production for YUKI\'s "Share" MV',
        TW: '參與 YUKI『Share』MV 立體音響製作'
      },
      seigetsukiTitle: {
        JP: 'バーチャル霊園 清月記',
        EN: 'Virtual Cemetery Application by Seigetsuki',
        TW: '清月記「虛擬靈園」App'
      }
    },
    selectedArchives: {
      tainan: {
        JP: {
          title: '臺南國立大学 特別講義',
          desc: '台湾・臺南國立大学にて、流行音楽における空間表現の講義とワークショップを実施。'
        },
        EN: {
          title: 'Special Lecture at National University of Tainan',
          desc: 'At the National University of Tainan (Taiwan), we held a lecture and workshop on spatial expression in pop music.'
        },
        TW: {
          title: '國立臺南大學 特別講座',
          desc: '於台灣國立臺南大學舉辦關於流行音樂空間表現的講座與工作坊。'
        }
      }
    }
  };

  const pillars = [
    {
      id: 'art',
      num: '01',
      title: 'ART',
      imageUrl: '/images/art.jpg',
      desc: t.missions.art[lang],
      path: '/art'
    },
    {
      id: 'public',
      num: '02',
      title: 'PUBLIC',
      imageUrl: '/images/public.jpg',
      desc: t.missions.public[lang],
      path: '/public'
    },
    {
      id: 'education',
      num: '03',
      title: 'EDUCATION',
      imageUrl: '/images/edu.jpg',
      desc: t.missions.education[lang],
      path: '/education'
    }
  ] as const;

  const featuredWorksForHome = featuredWorks.map((work) => {
    if (work.id !== 'tainan-lecture') return work;
    const copy = t.selectedArchives.tainan[lang];
    return {
      ...work,
      title: copy.title,
      description: {
        ...work.description,
        [lang]: copy.desc
      }
    };
  });

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
          <h1 className="hero-title text-3xl sm:text-5xl md:text-[10rem] text-black mb-12">
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
            {lang === 'JP' ? (
              <>
                この時代に必要な表現を、共に
                <span className="whitespace-nowrap">考える。</span>
              </>
            ) : (
              t.tagline[lang]
            )}
          </p>

          <div className="max-w-3xl mx-auto text-left text-sm md:text-lg text-gray-700 font-serif leading-relaxed md:leading-loose space-y-6 md:space-y-8 mb-16">
            <p>
              {t.philosophy[lang].p1}
            </p>
            <p>
              {t.philosophy[lang].p2}
            </p>
          </div>
          

        </motion.div>
      </Section>

      {/* Technology Section */}
      <Section className="py-32">
        <Link
          id="technology"
          to="/spatial-2ch"
          className="group block bg-gray-950 text-white border border-white/10 hover:border-[#C9A66B] transition-all duration-500 p-10 md:p-14"
        >
          <div className="flex items-center justify-between gap-6 mb-8">
            <span className="text-[10px] font-bold text-[#C9A66B] tracking-[0.4em] uppercase">04 Technology</span>
          </div>

          <div className="h-[220px] bg-white/5 border border-white/10 overflow-hidden mb-10">
            <img src="/images/tech.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
            BBM Spatial Audio Tech
          </h3>

          <div className="max-w-4xl space-y-8">
            <div>
              <p className="text-white/70 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">{t.technology[lang].h1}</p>
              <p className="text-white/80 font-serif leading-loose md:text-base text-sm">{t.technology[lang].p1}</p>
            </div>
            <div>
              <p className="text-white/70 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">{t.technology[lang].h2}</p>
              <p className="text-white/80 font-serif leading-loose md:text-base text-sm">{t.technology[lang].p2}</p>
            </div>
          </div>
          <div className="mt-10">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
              Explore Technology →
            </span>
          </div>
        </Link>
      </Section>

      {/* Four Pillars - Clickable Navigation */}
      <Section className="py-20 md:py-40 bg-gray-50/50">
        <div className="flex items-center space-x-4 mb-16">
            <div className="w-12 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.4em] uppercase text-[10px]">Four Missions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              id={pillar.id}
              to={pillar.path}
              className="group bg-white border border-black/5 shadow-sm hover:shadow-md hover:border-[#C9A66B] transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-[220px] bg-gray-100 overflow-hidden">
                <img
                  src={pillar.imageUrl}
                  alt=""
                  className="w-full h-full object-cover grayscale-0 [@media(hover:hover)and(pointer:fine)]:grayscale [@media(hover:hover)and(pointer:fine)]:group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 md:p-10 text-center">
                <div className="mb-10">
                  <span className="text-[10px] font-bold text-[#C9A66B] tracking-[0.4em] uppercase block">{pillar.num}</span>
                  <h3 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-serif leading-loose text-sm md:text-base max-w-[26rem] mx-auto mb-10">
                  {pillar.desc}
                </p>
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-300 group-hover:text-black transition-colors">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* NEWS */}
      <Section className="pt-10 pb-20 md:pb-32">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter">NEWS.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://youtu.be/QSQ4U3pcvzQ?si=TkflGvBwPiF9fKyl"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-black/5 shadow-sm overflow-hidden hover:border-[#C9A66B] hover:shadow-md transition-all duration-500"
          >
            <div className="relative h-[220px] bg-gray-100 overflow-hidden grayscale-0 [@media(hover:hover)and(pointer:fine)]:grayscale [@media(hover:hover)and(pointer:fine)]:hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img src="/images/yuki share .jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            <div className="p-6 md:p-10">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#C9A66B] uppercase mb-4">2025.12.20 Release</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-5">{t.news.yukiTitle[lang]}</h3>
              <p className="text-gray-600 font-serif leading-loose text-sm">
                平野さん監督のMVにて、カトラリー／レストラン空間の立体音響制作として参加しました。劇場アニメ『この本を盗む者は』主題歌です。ぜひご覧ください。
              </p>
            </div>
          </a>

          {seigetsukiWork && (
            <Link
              to={`/works/${seigetsukiWork.id}`}
              className="group bg-white border border-black/5 shadow-sm overflow-hidden hover:border-[#C9A66B] hover:shadow-md transition-all duration-500"
            >
              <div className="relative h-[220px] bg-gray-100 overflow-hidden grayscale-0 [@media(hover:hover)and(pointer:fine)]:grayscale [@media(hover:hover)and(pointer:fine)]:hover:grayscale-0 transition-all duration-700 ease-in-out">
                <img src={seigetsukiWork.imageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="p-6 md:p-10">
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#C9A66B] uppercase mb-4">2025.12.15 Release</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-5">{t.news.seigetsukiTitle[lang]}</h3>
                <p className="text-gray-600 font-serif leading-loose text-sm">{seigetsukiWork.description?.[lang] ?? ''}</p>
              </div>
            </Link>
          )}
        </div>
      </Section>

      {/* Upcoming Event */}
      <Section className="py-20 md:py-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Upcoming Event</h2>
        </div>
        <a
          href="https://tsuchiura-sound-achib.netlify.app/#events"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white border border-black/5 shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 relative h-[250px] md:h-auto bg-gray-100 overflow-hidden grayscale-0 [@media(hover:hover)and(pointer:fine)]:grayscale [@media(hover:hover)and(pointer:fine)]:hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img
                src="/images/tokoji1.png"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
            <div className="md:col-span-3 p-10 md:p-14">
              <p className="text-[10px] font-bold tracking-[0.3em] text-[#C9A66B] uppercase mb-5">2/23(月・祝) 夕刻</p>
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">{t.upcoming.title[lang]}</h3>
              <p className="text-gray-600 font-serif leading-loose text-sm md:text-base mb-8">
                東光寺（茨城県土浦市大手町3-14）
              </p>
              <p className="text-gray-700 font-serif leading-loose md:text-base text-sm">
                {t.upcoming.desc[lang]}
              </p>
            </div>
          </div>
        </a>
      </Section>

      {/* Selected Works Gallery */}
      <Section className="py-32 border-t border-black/5">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Archives.</h2>
          <Link to="/works" className="text-[11px] font-bold tracking-[0.3em] uppercase hover:text-[#C9A66B] transition-colors">Full Gallery →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredWorksForHome.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={() => {
                if (work.id === 'tainan-lecture') {
                  const url = work.externalLinks?.[0]?.url;
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                  return;
                }
                navigate(`/works/${work.id}`);
              }}
            />
          ))}
        </div>
      </Section>

      {/* Leads / Community */}
      <Section className="py-20 md:py-40 bg-black text-white rounded-sm mx-6 md:mx-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-12">
          <div className="space-y-12">
            <h3 className="text-[11px] font-bold tracking-[0.5em] text-[#C9A66B] uppercase">Collective Leads</h3>
            <div className="space-y-16">
              <div>
                <a
                  href="https://www.nakamurahiroyuki.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h4 className="text-3xl font-display font-bold mb-2 hover:text-[#C9A66B] transition-colors">NAKAMURA Hiroyuki</h4>
                </a>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Composer / Academic</p>
                <p className="text-gray-400 font-serif text-sm leading-relaxed max-w-sm">
                  音響学とメディア表現の講師。BBMの芸術的ディレクションと理論構築を担う。
                </p>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/utsugikoichi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h4 className="text-3xl font-display font-bold mb-2 hover:text-[#C9A66B] transition-colors">UTSUGI Koichi</h4>
                </a>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Spatial Audio Engineer</p>
                <p className="text-gray-400 font-serif text-sm leading-relaxed max-w-sm">
                  独自の2ch立体音響アルゴリズムの開発者。グローバルな展示へのシステム実装を統括。
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-display font-bold mb-2">TAGUCHI Mayumi</h4>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Piano Teacher, Eurhythmics, Narrator</p>
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