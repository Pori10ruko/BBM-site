import React from 'react';
import Section from '../components/Section';
import { Link, useNavigate } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import { works } from '../data/works';
import { useLanguage } from '../hooks/useLanguage';

const Technology: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const content = {
    ja: {
      heroTitle: 'まず、体感してください。',
      hero: 'まず、私たちの音を体感してください。ぜひ、ヘッドフォンで聴いてください...',
      subheading: '2ch Spatial Audio / 空間を拡張する独自技術',
      philosophyTitle: 'The Necessity of Spatial Audio / 音響の必然性',
      philosophyBody: '現在、立体音響技術は広く普及しつつあります...',
      worksTitle: '技術が必然となる作品たち',
      works1Body: '私たちの独自技術をフルに用いた、初のピアノアルバム。非常に立体的な音響が映像と融合し、没入感あふれる世界を描き出します。（2026年リリース予定）',
      works2Body: 'こちらはまた異なる『Ambisonics（アンビソニックス）』技術を採用した、初のデジタルポップス作品。860トラックもの音源を使用し、特にサビ部分での爆発的な空間の広がりは圧巻です。',
      beyondTitle: 'Beyond Headphones / スピーカー環境での拡張',
      beyondBody: '私たちの技術はヘッドフォンだけに留まりません...',
      clientTitle: 'Client Works',
      tokojiTestBody: '2026年に実施予定の東光寺での音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築するテストの様子。',
      appendixSubtitle: '従来のDolby AtmosとBBM独自技術の比較。',
      ctaTitle: 'Create with Us / 共創の呼びかけ',
      ctaBody: '私たちは、この独自技術を用いた新しい表現を...',
      ctaButton: 'CONTACT / お問い合わせ',
    },
    en: {
      heroTitle: 'First, Experience Our Sound.',
      hero: 'First, Experience Our Sound. Please listen with headphones. Our technology is not just stereo...',
      subheading: '2ch Spatial Audio / Proprietary Technology that Expands Space',
      philosophyTitle: 'The Necessity of Spatial Audio',
      philosophyBody: 'Spatial audio is becoming common, but sounds that *require* it are still rare...',
      worksTitle: 'Works Where Technology Becomes Necessary',
      works1Body: 'Our first piano album fully leveraging our proprietary technology. Highly spatial sound merges with visuals to draw an immersive world. (Planned release in 2026)',
      works2Body: 'A first digital pop work using a different approach: Ambisonics. With as many as 860 tracks, the explosive expansion of space—especially in the chorus—is striking.',
      beyondTitle: 'Beyond Headphones',
      beyondBody: 'Our technology goes beyond headphones. We can create an expanded acoustic space using standard 2ch speakers...',
      clientTitle: 'Client Works',
      tokojiTestBody: 'A 2026 temple acoustic experiment to build a spatial sound field using only two speakers—even in a unique space like a temple.',
      appendixSubtitle: 'A comparison between conventional Dolby Atmos and BBM’s proprietary technology.',
      ctaTitle: 'Create with Us',
      ctaBody: 'We are eager to create new expressions with artists and companies using this unique technology...',
      ctaButton: 'CONTACT',
    },
    tw: {
      heroTitle: '首先，請體驗我們的聲音。',
      hero: '首先，請體驗我們的聲音。請務必使用耳機聆聽...',
      subheading: '2ch 空間音響 / 擴展空間的獨家技術',
      philosophyTitle: '立體音響的必然性',
      philosophyBody: '雖然空間音訊技術正逐漸普及，但真正『非此不可』的聲音仍屬罕見...',
      worksTitle: '技術成為必然的作品',
      works1Body: '我們首張完整運用獨家技術的鋼琴專輯。高度立體的聲響與影像融合，描繪出沉浸感十足的世界。（預計 2026 年發行）',
      works2Body: '採用另一種「Ambisonics（全景聲）」技術的首部數位流行作品。使用多達 860 軌音源，尤其副歌段落空間爆發性的擴張令人震撼。',
      beyondTitle: '超越耳機的體驗',
      beyondBody: '我們的技術不僅是立體聲，即便是普通的2ch揚聲器也能創造擴展的空間...',
      clientTitle: '客戶案例',
      tokojiTestBody: '預計於 2026 年在東光寺進行的聲學實驗：即使在寺廟這樣特殊的空間，也能僅用 2ch 揚聲器建構具有立體感的音響空間。',
      appendixSubtitle: '比較傳統 Dolby Atmos 與 BBM 的獨家技術。',
      ctaTitle: '與我們共創',
      ctaBody: '我們熱切希望能與藝術家及企業合作，利用這項獨特技術創造全新的表現形式...',
      ctaButton: 'CONTACT',
    },
  } as const;

  const t = content[language];

  const soundcloudCredits = {
    profileUrl: 'https://soundcloud.com/nakamurahiroyuki',
    standardPlayerUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253087%3Fsecret_token%3Ds-axESrXDa0wz&color=%230c6689&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    proprietaryPlayerUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253711%3Fsecret_token%3Ds-ibO2BBPcfw5&color=%2333606a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  } as const;

  const distantEcho = works.find(w => w.id === 'distant-echo');
  const yukiShare = works.find(w => w.id === 'yuki-share');
  const seigetsukiVirtual = works.find(w => w.id === 'seigetsuki-virtual');
  const clientWorks = [yukiShare, seigetsukiVirtual].filter(Boolean);

  return (
    <div className="pb-40">
      <Section className="py-0">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">TECHNOLOGY</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-black mb-6">TECHNOLOGY</h1>
          <p className="text-lg md:text-2xl font-serif text-gray-800">{t.subheading}</p>
        </div>
        {/* Hero Section (Main Experience) */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-black">{t.heroTitle}</h2>
              <p className="text-gray-700 font-serif leading-loose md:text-base text-sm">
                {t.hero}
              </p>
            </div>
            <div className="relative w-full aspect-video bg-gray-50 border border-black/5 overflow-hidden">
              <iframe
                title="First, Experience Our Sound"
                src="https://www.youtube.com/embed/ULXKPccZk50"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.philosophyTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-700 font-serif leading-loose md:text-base text-sm whitespace-pre-line">
                {t.philosophyBody}
              </p>
            </div>
          </div>
        </div>

        {/* Works Section */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.worksTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <article className="space-y-5">
              <div className="relative aspect-video bg-gray-50 border border-black/5 overflow-hidden">
                <iframe
                  title="Classical Spatial Album (2026 Release)"
                  src="https://www.youtube.com/embed/02uUCenAJ-g"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-black">Classical Spatial Album (2026 Release)</h3>
              <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
                {t.works1Body}
              </p>
            </article>

            <article className="space-y-5">
              <div className="relative aspect-video bg-gray-50 border border-black/5 overflow-hidden">
                <iframe
                  title="Electric Opera 'VENUS' - 860 Tracks Mix"
                  src="https://www.youtube.com/embed/lmy-eChYDro"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-black">Electric Opera 'VENUS' - 860 Tracks Mix</h3>
              <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
                {t.works2Body}
              </p>
            </article>
          </div>
        </div>

        {/* Beyond Headphones (Distant Echo) */}
        {distantEcho && (
          <div className="border-t border-black/5 pt-16 mb-24">
            {/* Header */}
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.beyondTitle}</h2>
              <p className="text-gray-600 font-serif leading-loose md:text-base text-sm max-w-4xl">
                {t.beyondBody}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Distant Echo */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">Case Study: Installation</p>
                <WorkCard
                  work={distantEcho}
                  onClick={() => {
                    navigate(`/works/${distantEcho.id}`);
                  }}
                />
              </div>

              {/* Right: Tokoji Temple Test */}
              <div className="space-y-5">
                <div className="relative w-full aspect-video bg-gray-50 border border-black/5 overflow-hidden">
                  <iframe
                    title="Tokoji Temple 2ch Speaker Test (2026)"
                    src="https://www.youtube.com/embed/D4dLEi8udTk"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight text-black">Tokoji Temple 2ch Speaker Test (2026)</h3>
                  <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
                    {t.tokojiTestBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client Works */}
        {!!clientWorks.length && (
          <div className="border-t border-black/5 pt-16 mb-24">
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.clientTitle}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {clientWorks.map((work) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  onClick={() => {
                    navigate(`/works/${work.id}`);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Technical Comparison (Appendix) */}
        <div className="border-t border-black/5 pt-16">
          <div className="space-y-2 mb-6">
            <h2 className="text-lg md:text-xl font-display font-bold tracking-tight text-black">Technical Comparison (Reference)</h2>
            <p className="text-gray-500 font-serif leading-loose text-xs">{t.appendixSubtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-black/5 p-6">
                <iframe
                  title="Standard / Dolby Atmos (Reference)"
                  width="100%"
                  className="w-full h-40 sm:h-56 md:h-72 lg:h-96"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src={soundcloudCredits.standardPlayerUrl}
                />
                <p className="mt-2 text-[10px] text-gray-400 font-serif">
                  <a href={soundcloudCredits.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    NAKAMURA Hiroyuki
                  </a>
                  {' · '}
                  <a href={soundcloudCredits.standardPlayerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    SoundCloud Playlist
                  </a>
                </p>
              </div>

              <div className="bg-white border border-black/5 p-6">
                <iframe
                  title="BBM Proprietary (Reference)"
                  width="100%"
                  className="w-full h-40 sm:h-56 md:h-72 lg:h-96"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src={soundcloudCredits.proprietaryPlayerUrl}
                />
                <p className="mt-2 text-[10px] text-gray-400 font-serif">
                  <a href={soundcloudCredits.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    NAKAMURA Hiroyuki
                  </a>
                  {' · '}
                  <a href={soundcloudCredits.proprietaryPlayerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    SoundCloud Playlist
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-black/5 pt-16 mt-24">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.ctaTitle}</h2>
            <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
              {t.ctaBody}
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block py-4 px-10 bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#C9A66B] transition-all"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;