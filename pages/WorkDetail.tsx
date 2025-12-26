import React, { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Section from '../components/Section';
import { works } from '../data/works';
import { LanguageContext } from '../App';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useContext(LanguageContext);

  const work = useMemo(() => works.find(w => w.id === id), [id]);

  if (!work) {
    return (
      <div className="pt-28 sm:pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-40">
        <Section className="py-0">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-300 mb-8">Not Found</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">Work not found.</h1>
          <Link to="/works" className="text-[11px] font-bold tracking-[0.3em] uppercase hover:text-[#C9A66B] transition-colors">Back to Works →</Link>
        </Section>
      </div>
    );
  }

  const title = work.titleLocalized?.[lang] ?? work.title;

  const links = (work.externalLinks?.length
    ? work.externalLinks
    : work.externalUrl
      ? [{
          label: work.externalUrl.includes('youtube') ? 'YouTubeを見る' : '外部リンク',
          url: work.externalUrl,
        }]
      : []).slice(0, 3);

  const labels = {
    narrative: { JP: '物語の背景', EN: 'The Narrative', TW: '故事背景' },
    role: { JP: '役割', EN: 'Role', TW: '角色' },
    logic: { JP: '音響的論理', EN: 'Acoustic Logic', TW: '音響邏輯' },
    tech: { JP: '技術', EN: 'Technology', TW: '技術' },
  };

  return (
    <div className="pt-28 sm:pt-32 md:pt-40 pb-24 md:pb-40">
      <Section className="py-0">
        <div className="mb-10">
          <Link to="/works" className="text-[11px] font-bold tracking-[0.3em] uppercase hover:text-[#C9A66B] transition-colors">← Back to Works</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/5 bg-white rounded-[4px] shadow-2xl overflow-hidden">
          <div className="lg:col-span-5 relative bg-gray-50 min-h-[320px] lg:min-h-[720px]">
            {work.imageUrl ? (
              <img
                src={work.imageUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover grayscale-0 [@media(hover:hover)and(pointer:fine)]:grayscale [@media(hover:hover)and(pointer:fine)]:hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
            ) : (
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-black/20">{title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            <div className="absolute bottom-12 left-10 right-10">
              <span className="text-[#C9A66B] font-bold tracking-[0.6em] text-[10px] uppercase mb-6 block">{work.category}</span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display italic tracking-tighter leading-none">{title}</h1>
            </div>
          </div>

          <div className="lg:col-span-7 p-10 md:p-16 space-y-16">
            <section>
              <h2 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-8 border-b border-black/5 pb-4 italic">{labels.narrative[lang]}</h2>
              <p className="text-base sm:text-xl md:text-2xl font-serif font-light leading-relaxed text-gray-800">{work.description[lang]}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <h2 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-6 border-b border-black/5 pb-4">{labels.role[lang]}</h2>
                <p className="text-lg font-serif font-light text-[#C9A66B] italic">{work.role[lang]}</p>
              </section>
              <section>
                <h2 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-6 border-b border-black/5 pb-4">{labels.tech[lang]}</h2>
                <div className="flex flex-wrap gap-2">
                  {work.techStack?.map(tech => (
                    <span key={tech} className="text-[9px] font-bold tracking-widest text-gray-400 uppercase border border-black/5 px-2 py-1">{tech}</span>
                  ))}
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-8 border-b border-black/5 pb-4 italic">{labels.logic[lang]}</h2>
              <p className="text-base text-gray-500 font-serif font-light leading-relaxed">{work.approach[lang]}</p>
              {!!links.length && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#C9A66B] text-white font-bold rounded hover:bg-[#b18c4e] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WorkDetail;
