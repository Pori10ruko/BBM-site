
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Work } from '../types';
import { LanguageContext } from '../App';

interface WorkModalProps {
  work: Work | null;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  const { lang } = useContext(LanguageContext);
  if (!work) return null;

  const title = work.titleLocalized?.[lang] ?? work.title;

  const links = (work.externalLinks?.length ? work.externalLinks : work.externalUrl ? [{
    label: work.externalUrl.includes('youtube') ? 'YouTubeを見る' : '外部リンク',
    url: work.externalUrl
  }] : []).slice(0, 2);

  const labels = {
    narrative: { JP: '物語の背景', EN: 'The Narrative', TW: '故事背景' },
    role: { JP: '役割', EN: 'Role', TW: '角色' },
    logic: { JP: '音響的論理', EN: 'Acoustic Logic', TW: '音響邏輯' },
    tech: { JP: '技術', EN: 'Technology', TW: '技術' }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 lg:p-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-white/60 backdrop-blur-2xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 30 }}
          className="relative w-full max-w-7xl max-h-full overflow-y-auto bg-white border border-black/5 rounded-[4px] shadow-2xl no-scrollbar text-black"
        >
          <button onClick={onClose} className="absolute top-8 right-8 z-20 w-16 h-16 flex items-center justify-center rounded-full bg-black/5 hover:bg-black hover:text-white transition-all">
            <span className="text-xl font-light">✕</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            <div className="lg:col-span-5 relative bg-gray-50">
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
              <div className="absolute bottom-16 left-12 right-12">
                <span className="text-[#C9A66B] font-bold tracking-[0.6em] text-[10px] uppercase mb-6 block">{work.category}</span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-display italic tracking-tighter leading-none">{title}</h2>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 md:p-24 space-y-10 md:space-y-20 flex flex-col justify-center">
              <section>
                <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-8 border-b border-black/5 pb-4 italic">{labels.narrative[lang]}</h3>
                <p className="text-base sm:text-xl md:text-2xl font-serif font-light leading-relaxed text-gray-800">{work.description[lang]}</p>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <section>
                  <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-6 border-b border-black/5 pb-4">{labels.role[lang]}</h3>
                  <p className="text-lg font-serif font-light text-[#C9A66B] italic">{work.role[lang]}</p>
                </section>
                <section>
                  <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-6 border-b border-black/5 pb-4">{labels.tech[lang]}</h3>
                  <div className="flex flex-wrap gap-2">
                    {work.techStack?.map(tech => <span key={tech} className="text-[9px] font-bold tracking-widest text-gray-400 uppercase border border-black/5 px-2 py-1">{tech}</span>)}
                  </div>
                </section>
              </div>
              <section>
                <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/10 uppercase mb-8 border-b border-black/5 pb-4 italic">{labels.logic[lang]}</h3>
                <p className="text-base text-gray-500 font-serif font-light leading-relaxed">{work.approach[lang]}</p>
                {!!links.length && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {links.map(link => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-[#C9A66B] text-white font-bold rounded hover:bg-[#b18c4e] transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WorkModal;
