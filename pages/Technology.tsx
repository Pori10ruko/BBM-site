import React from 'react';
import Section from '../components/Section';
import { Link, useNavigate } from 'react-router-dom';
import WorkCard from '../components/WorkCard';
import { works } from '../data/works';

const Technology: React.FC = () => {
  const navigate = useNavigate();

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
    <div className="pt-32 pb-40">
      <Section className="py-0">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">TECHNOLOGY</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-black mb-6">TECHNOLOGY</h1>
          <p className="text-lg md:text-2xl font-serif text-gray-800">2ch Spatial Audio / 空間を拡張する独自技術</p>
        </div>

        {/* Hero Section (Main Experience) */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="space-y-4 mb-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-black">First, Experience Our Sound.</h2>
            <p className="text-gray-600 font-serif leading-loose md:text-base text-sm max-w-4xl">
              ぜひ、ヘッドフォンで聴いてください。私たちの技術は、単なる左右のステレオではありません。上下、奥行き、そして無限に広がる空間そのものを体感していただけるはずです。これが、私たちが提示する『音』です。
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

        {/* Philosophy Section */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">The Necessity of Spatial Audio / 音響の必然性</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-700 font-serif leading-loose md:text-base text-sm whitespace-pre-line">
                現在、立体音響技術（Spatial Audio）は広く普及しつつあります。しかし、『その技術を使わなければ成立しない音』に出会うことは、未だ稀です。
                {'\n'}
                私たちは単に技術を誇示するのではなく、『この表現には、この空間が必要だ』という必然性に向き合い続けています。
              </p>
            </div>
          </div>
        </div>

        {/* Works Section */}
        <div className="border-t border-black/5 pt-16 mb-24">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">技術が必然となる作品たち</h2>
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
                私たちの独自技術をフルに用いた、初のピアノアルバム。非常に立体的な音響が映像と融合し、没入感あふれる世界を描き出します。（2026年リリース予定）
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
                こちらはまた異なる『Ambisonics（アンビソニックス）』技術を採用した、初のデジタルポップス作品。860トラックもの音源を使用し、特にサビ部分での爆発的な空間の広がりは圧巻です。
              </p>
            </article>
          </div>
        </div>

        {/* Beyond Headphones (Distant Echo) */}
        {distantEcho && (
          <div className="border-t border-black/5 pt-16 mb-24">
            {/* Header */}
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Beyond Headphones / スピーカー環境での拡張</h2>
              <p className="text-gray-600 font-serif leading-loose md:text-base text-sm max-w-4xl">
                私たちの技術はヘッドフォンだけに留まりません。通常の2chスピーカー環境であっても、その物理的な配置を超え、外側に広がる音響空間を創出することが可能です。
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
                    2026年に実施予定の東光寺での音響実験。お寺という特殊な空間においても、わずか2chのスピーカーで立体感のある音響空間を構築するテストの様子。
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
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Client Works</h2>
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
            <p className="text-gray-500 font-serif leading-loose text-xs">従来のDolby AtmosとBBM独自技術の比較。</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-black/5 p-6">
                <div className="scale-[0.6] origin-top-left w-[166.67%]">
                  <iframe
                    title="Standard / Dolby Atmos (Reference)"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay"
                    src={soundcloudCredits.standardPlayerUrl}
                  />
                </div>
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
                <div className="scale-[0.6] origin-top-left w-[166.67%]">
                  <iframe
                    title="BBM Proprietary (Reference)"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay"
                    src={soundcloudCredits.proprietaryPlayerUrl}
                  />
                </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Create with Us / 共創の呼びかけ</h2>
            <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">
              私たちは、この独自技術を用いた新しい表現を、アーティストや企業の皆様と共に作り上げていきたいと強く願っています。
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block py-4 px-10 bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#C9A66B] transition-all"
              >
                CONTACT / お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;