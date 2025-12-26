import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'TECHNOLOGY', to: '/technology' },
  { label: 'ART', to: '/art' },
  { label: 'PUBLIC', to: '/public' },
  { label: 'EDUCATION', to: '/education' },
  { label: 'CONTACT', to: '/contact' },
] as const;

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 py-20 px-6 border-t border-black/5 mt-20 bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
        <div className="md:flex-1 md:max-w-xl">
          <Link to="/" className="inline-flex items-center mb-6">
            <img
              src="/images/bbm_logo.jpg"
              alt="BBM"
              className="w-28 h-auto"
              loading="lazy"
            />
          </Link>
          <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed font-serif">
            Beyond Boundary Musicは、立体音響の社会実装と芸術表現を追求するクリエイティブ・コレクティブです。
          </p>
          <div className="flex space-x-6">
             <a href="https://x.com/boundary_music" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">X</a>
             <a href="https://www.instagram.com/b.b.music_/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">Instagram</a>
             <a href="https://www.youtube.com/@beyondboundarymusic" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">YouTube</a>
          </div>
        </div>
        
        <div className="space-y-6 md:w-[280px]">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">Navigation</h4>
            <ul className="space-y-3 font-serif">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-gray-500 hover:text-black">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold text-gray-300 tracking-[0.3em] uppercase">
        <p>&copy; 2025 BBM / BEYOND BOUNDARY MUSIC. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">MADE IN TOKYO</p>
      </div>
    </footer>
  );
};

export default Footer;