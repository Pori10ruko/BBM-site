import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import WorkModal from '../components/WorkModal';
import { works } from '../data/works';
import { Category, Work } from '../types';

const categories: Category[] = ['All', 'Installation', 'Music Video', 'App', 'Client Works', 'Archive', 'Education'];

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = activeCategory === 'All' 
    ? works 
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="pb-16 md:pb-24 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right sphere */}
        <motion.div
          className="absolute top-20 right-0 translate-x-1/3 w-[600px] h-[600px] md:w-[900px] md:h-[900px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-[#C9A66B]/40"
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.08, 1]
            }}
            transition={{
              rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              boxShadow: 'inset 0 0 100px rgba(201, 166, 107, 0.25), 0 0 120px rgba(201, 166, 107, 0.15)'
            }}
          />
          <motion.div
            className="absolute inset-[20%] rounded-full border-[2px] border-[#C9A66B]/30"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              boxShadow: 'inset 0 0 60px rgba(201, 166, 107, 0.2)'
            }}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A66B]/50 to-[#C9A66B]/15"
            style={{
              left: `${8 + i * 7}%`,
              top: `${20 + (i % 4) * 20}%`,
              boxShadow: '0 0 40px rgba(201, 166, 107, 0.4)'
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, (i % 2 === 0 ? 25 : -25), 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201, 166, 107, 0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(201, 166, 107, 0.2) 2px, transparent 2px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <Section className="py-0 mb-16 md:mb-32 relative z-10">
        <div className="flex items-center space-x-6 mb-10">
            <div className="w-16 h-[1px] bg-[#C9A66B]" />
            <p className="text-[#C9A66B] font-bold tracking-[0.5em] uppercase text-[10px]">Archives</p>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-[12rem] font-display italic tracking-tighter mb-10 md:mb-20 leading-none text-black">WORKS</h1>
        
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