import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-black/5 mt-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-display italic tracking-tighter mb-4 block text-black">BBM</Link>
          <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed font-serif">
            Beyond Boundary Musicは、立体音響の社会実装と芸術表現を追求するクリエイティブ・コレクティブです。
          </p>
          <div className="flex space-x-6">
             <a href="#" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">Twitter</a>
             <a href="#" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">Instagram</a>
             <a href="#" className="text-[10px] font-bold tracking-widest text-gray-300 hover:text-black uppercase transition-colors">Vimeo</a>
          </div>
        </div>
        
        <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">Navigation</h4>
            <ul className="space-y-3 font-serif">
                <li><Link to="/works" className="text-sm text-gray-500 hover:text-black">Works</Link></li>
                <li><Link to="/services" className="text-sm text-gray-500 hover:text-black">Services</Link></li>
                <li><Link to="/technology" className="text-sm text-gray-500 hover:text-black">Technology</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-500 hover:text-black">Contact</Link></li>
            </ul>
        </div>

        <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">Resources</h4>
            <ul className="space-y-3 font-serif">
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">Press Kit</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">Sound Archive</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-black">Privacy Policy</a></li>
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