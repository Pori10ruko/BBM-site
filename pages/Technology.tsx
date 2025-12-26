import React from 'react';
import Section from '../components/Section';

const Technology: React.FC = () => {
  const youtubeEmbeds = [
    'https://www.youtube.com/embed/f_KZ37Aatgs',
    'https://www.youtube.com/embed/Q5KNuObeIkI',
    'https://www.youtube.com/embed/71i0_KPyRfQ',
  ] as const;

  const soundcloudCredits = {
    profileUrl: 'https://soundcloud.com/nakamurahiroyuki',
    standardPlayerUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253087%3Fsecret_token%3Ds-axESrXDa0wz&color=%230c6689&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    proprietaryPlayerUrl:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253711%3Fsecret_token%3Ds-ibO2BBPcfw5&color=%2333606a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  } as const;

  return (
    <div className="pt-32 pb-40">
      <Section className="py-0">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6">TECHNOLOGY</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-black mb-6">TECHNOLOGY</h1>
          <p className="text-lg md:text-2xl font-serif text-gray-800">2ch Spatial Audio / 空間を拡張する独自技術</p>
        </div>

        {/* Audio Demonstration */}
        <div className="mb-24 border-t border-black/5 pt-16">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Experience the Difference / 聴覚による体験</h2>
            <p className="text-gray-600 font-serif leading-loose md:text-base text-sm">従来のDolby Atmos技術と、BBM独自のバイノーラル技術による立体感の違いをご体感ください。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-black/5 shadow-sm p-10 space-y-5">
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-gray-400">Standard (Dolby Atmos)</p>
              <div className="overflow-hidden">
                <iframe
                  title="Standard / Dolby Atmos"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253087%3Fsecret_token%3Ds-axESrXDa0wz&color=%230c6689&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
              </div>
              <p className="text-[11px] text-gray-400 font-serif">
                <a href={soundcloudCredits.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  NAKAMURA Hiroyuki
                </a>
                {' · '}
                <a href={soundcloudCredits.standardPlayerUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  SoundCloud Playlist
                </a>
              </p>
            </div>

            <div className="bg-white border border-black/5 shadow-sm p-10 space-y-5">
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-gray-400">BBM Proprietary / 独自技術</p>
              <div className="overflow-hidden">
                <iframe
                  title="BBM Proprietary / Binaural"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2015253711%3Fsecret_token%3Ds-ibO2BBPcfw5&color=%2333606a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
              </div>
              <p className="text-[11px] text-gray-400 font-serif">
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

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 border-t border-black/5 pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">
              Introduction
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-gray-700 font-serif leading-loose md:text-base text-sm whitespace-pre-line">
              BBMが実装する立体音響技術（バイノーラル・空間オーディオ）は、単なるサラウンドではありません。限られたスピーカーやヘッドホンを用い、音の『指向性』と『距離感』を緻密に操ることで、物理的な制約を超えて空間そのものを拡張する技術です。
              {'\n'}
              小規模なミニシアターでは壁の向こう側まで世界が広がるような錯覚を。広大なホールでは上下左右・奥行きを駆使し、客席全体を包み込む濃密な音響空間を創出します。
              {'\n'}
              つまり、『どこから音が鳴っているのか』『どの方向に動いていくのか』という情報を繊細にコントロールすることで、“場”の印象そのものを変容させるのです。
            </p>
          </div>
        </div>

        {/* Visual Demonstration */}
        <div className="border-t border-black/5 pt-16">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Visual Demonstration / 空間実験の記録</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {youtubeEmbeds.map((src) => (
                <div key={src} className="relative aspect-[9/16] bg-gray-50 border border-black/5 overflow-hidden">
                  <iframe
                    title={src}
                    src={src}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="border-t border-black/5 pt-16 mt-24">
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black">Works / 制作事例</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
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
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-gray-400">Piano Spatial Audio Album (2026)</p>
              <h3 className="text-lg font-display font-bold tracking-tight text-black">Classical Spatial Album (2026 Release)</h3>
              <p className="text-gray-600 font-serif leading-loose text-sm">中村による新しい立体音響技術のピアノアルバム。2026年リリース予定。</p>
            </div>

            <div className="space-y-4">
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
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase text-gray-400">Electric Opera "VENUS" (860 Tracks)</p>
              <h3 className="text-lg font-display font-bold tracking-tight text-black">Electric Opera 'VENUS' - 860 Tracks Mix</h3>
              <p className="text-gray-600 font-serif leading-loose text-sm">860トラックもの音源を立体的に配置・制御した、エレクトリックオペラ『VENUS』の音響構成。</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;