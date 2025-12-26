import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Work } from '../types';
import { LanguageContext } from '../App';

interface WorkCardProps {
  work: Work;
  onClick: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, onClick }) => {
  const { lang } = useContext(LanguageContext);
  const title = work.titleLocalized?.[lang] ?? work.title;
  const primaryLink = work.externalLinks?.[0] ?? (work.externalUrl ? { label: work.externalUrl.includes('youtube') ? 'YouTube' : 'Link', url: work.externalUrl } : null);

  const handleCardClick = () => {
    if (work.link) {
      window.open(work.link, '_blank', 'noopener,noreferrer');
      return;
    }
    onClick();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleCardClick}
      className="group relative cursor-pointer flex flex-col space-y-6"
    >
      <div className="relative aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-gray-100">
        {work.imageUrl ? (
          <motion.img
            src={work.imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-300">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-baseline border-b border-black/5 pb-3">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A66B] uppercase">{work.category}</span>
          <span className="text-[9px] font-medium text-gray-400 tracking-wider uppercase">{work.client}</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-black group-hover:text-[#C9A66B] transition-colors leading-tight">{title}</h3>
        <p className="text-xs text-gray-500 font-serif leading-relaxed line-clamp-2">
          {work.description[lang]}
        </p>
      </div>
      
      <div className="pt-2 flex gap-2 items-center">
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-300 group-hover:text-black transition-all">Details →</span>
        {primaryLink && (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1 bg-[#C9A66B] text-white text-xs font-bold rounded hover:bg-[#b18c4e] transition-colors"
            onClick={e => e.stopPropagation()}
          >
            {primaryLink.label}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default WorkCard;