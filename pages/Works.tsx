import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import WorkModal from '../components/WorkModal';
import { works } from '../data/works';
import { Category, Work } from '../types';

const categories: Category[] = ['All', 'Installation', 'Music Video', 'App', 'Archive', 'Education'];

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="pt-48 pb-40">
      <Section className="py-0 mb-32">
        <div className="flex items-center space-x-6 mb-10">
            <div className="w-16 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.5em] uppercase text-[10px]">Archives</p>
        </div>
        <h1 className="text-8xl md:text-[12rem] font-display italic tracking-tighter mb-20 leading-none text-black">WORKS</h1>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-8 md:gap-16 border-b border-black/5 pb-10 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-medium tracking-[0.4em] uppercase transition-all relative py-3 ${activeCategory === cat ? 'text-[#C9A66B]' : 'text-gray-300 hover:text-black'}`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="catLine" className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9A66B]" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <WorkCard 
                key={work.id} 
                work={work} 
                onClick={() => setSelectedWork(work)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Case Study Modal */}
      <WorkModal 
        work={selectedWork} 
        onClose={() => setSelectedWork(null)} 
      />
    </div>
  );
};

export default Works;