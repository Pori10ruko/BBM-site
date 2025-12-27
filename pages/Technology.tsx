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
      philosophyBody:
        '現在、立体音響技術（Spatial Audio）は広く普及しつつあります。しかし、『その技術を使わなければ成立しない音』に出会うことは、未だ稀です。\n私たちは単に技術を誇示するのではなく、『この表現には、この空間が必要だ』という必然性に向き合い続けています。',
      worksTitle: '技術が必然となる作品たち',
      works1Body: '私たちの独自技術をフルに用いた、初のピアノアルバム。非常に立体的な音響が映像と融合し、没入感あふれる世界を描き出します。（2026年リリース予定）',
      works2Body: 'こちらはまた異なる『Ambisonics（アンビソニックス）』技術を採用した、初のデジタルポップス作品。860トラックもの音源を使用し、特にサビ部分での爆発的な空間の広がりは圧巻です。',
      beyondTitle: 'Beyond Headphones / スピーカー環境での拡張',
      beyondBody:
        '私たちの技術はヘッドフォンだけに留まりません。一般的な2chスピーカー環境でも、音像の前後・左右だけでなく、空間の奥行きや距離感までを精密にデザインし、展示・舞台・小規模イベントなど「場」に合わせた没入体験を構築できます。BBMでは、そうした空間を体現するイベントも実施しています。',
      clientTitle: 'Client Works',
      clientBody: '本技術は2024年に完成し、すでに下記のアーティスト／企業の皆さまとコラボレーションを行っています。',
      tokojiTestBody: '2026年に実施予定の東光寺での音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築するテストの様子。',
      collabTitle: '次は、みなさまと。',
      collabBody:
        '次はぜひ、みなさまとコラボレーションを行いたいと考えています。会場や目的に合わせて、音の拡がり・距離感・没入感を設計し、体験として成立するサウンドを一緒に形にします。',
      collabButton: 'CONTACT / お問い合わせ',
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
      clientBody: 'Completed in 2024, this technology has already been used in collaborations with the following artists and companies.',
      tokojiTestBody: 'A 2026 temple acoustic experiment to build a spatial sound field using only two speakers—even in a unique space like a temple.',
      collabTitle: "Let's Collaborate Next.",
      collabBody:
        "We’d love to collaborate with you next. We design perceived expansion, distance, and immersion for the venue and objective—and shape sound into a cohesive experience.",
      collabButton: 'CONTACT',
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
      clientBody: '這項技術於 2024 年完成，並已與下列藝術家／企業展開合作。',
      tokojiTestBody: '預計於 2026 年在東光寺進行的聲學實驗：即使在寺廟這樣特殊的空間，也能僅用 2ch 揚聲器建構具有立體感的音響空間。',
      collabTitle: '下一位，想與你合作。',
      collabBody:
        '我們希望下一次能與你一起合作。依據場地與目標，設計聲音的延展感、距離感與沉浸感，把聲音作為「體驗」完整落地。',
      collabButton: 'CONTACT',
    },
  } as const;

  const t = content[language];

  const distantEcho = works.find(w => w.id === 'distant-echo');
  const forumHallEvent = works.find(w => w.id === 'tokyo-international-forum-hall-event');
  const yukiShare = works.find(w => w.id === 'yuki-share');
  const seigetsukiVirtual = works.find(w => w.id === 'seigetsuki-virtual');
  const clientWorks = [forumHallEvent, yukiShare, seigetsukiVirtual].filter(Boolean);

  return (
    <div className="pb-24 md:pb-40">
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
              <p className="text-gray-600 font-serif leading-loose md:text-base text-sm max-w-4xl">
                {t.clientBody}
              </p>
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

        {/* Collaboration CTA */}
        <div className="border-t border-black/5 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">{t.collabTitle}</h2>
            <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
              {t.collabBody}
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block py-4 px-10 bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#C9A66B] transition-all"
              >
                {t.collabButton}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;