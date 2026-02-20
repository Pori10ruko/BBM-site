
import React, { useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Work } from '../types';
import { LanguageContext } from '../App';

interface WorkModalProps {
  work: Work | null;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ work, onClose }) => {
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    if (!work) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  const labels = {
    narrative: { JP: '物語の背景', EN: 'The Narrative', TW: '故事背景' },
    role: { JP: '役割', EN: 'Role', TW: '角色' },
    logic: { JP: '音響的論理', EN: 'Acoustic Logic', TW: '音響邏輯' },
    tech: { JP: '技術', EN: 'Technology', TW: '技術' }
  };

  return (
    <AnimatePresence>
      {work && (() => {
        const title = work.titleLocalized?.[lang] ?? work.title;
        const links = (work.externalLinks?.length ? work.externalLinks : work.externalUrl ? [{
          label: work.externalUrl.includes('youtube') ? 'YouTubeを見る' : '外部リンク',
          url: work.externalUrl
        }] : []).slice(0, 2);

        return (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 lg:p-24" role="dialog" aria-modal="true" aria-label={title}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white border border-black/5 shadow-2xl text-black"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-black/5 hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Close"
              >
                <span className="text-lg font-light leading-none">&times;</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative bg-gray-50 min-h-[300px] lg:min-h-[720px]">
                  {work.imageUrl ? (
                    <img
                      src={work.imageUrl}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-black/20">{title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-10 right-10">
                    <span className="text-[#C9A66B] font-bold tracking-[0.6em] text-[10px] uppercase mb-4 block">{work.category}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic tracking-tighter leading-none">{title}</h2>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-12 md:p-20 space-y-10 md:space-y-16 flex flex-col justify-center">
                  <section>
                    <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/20 uppercase mb-6 border-b border-black/5 pb-4">{labels.narrative[lang]}</h3>
                    <p className="text-base sm:text-lg md:text-xl font-serif font-light leading-relaxed text-gray-800">{work.description[lang]}</p>
                  </section>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <section>
                      <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/20 uppercase mb-4 border-b border-black/5 pb-4">{labels.role[lang]}</h3>
                      <p className="text-base font-serif font-light text-[#C9A66B]">{work.role[lang]}</p>
                    </section>
                    <section>
                      <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/20 uppercase mb-4 border-b border-black/5 pb-4">{labels.tech[lang]}</h3>
                      <div className="flex flex-wrap gap-2">
                        {work.techStack?.map(tech => <span key={tech} className="text-[9px] font-bold tracking-widest text-gray-500 uppercase border border-black/10 px-3 py-1">{tech}</span>)}
                      </div>
                    </section>
                  </div>
                  <section>
                    <h3 className="text-[10px] font-bold tracking-[0.6em] text-black/20 uppercase mb-6 border-b border-black/5 pb-4">{labels.logic[lang]}</h3>
                    <p className="text-base text-gray-600 font-serif font-light leading-relaxed">{work.approach[lang]}</p>
                    {!!links.length && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {links.map(link => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C9A66B] transition-colors duration-300"
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
        );
      })()}
    </AnimatePresence>
  );
};

export default WorkModal;
