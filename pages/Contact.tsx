import React from 'react';
import Section from '../components/Section';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Section className="py-0 mb-20 text-center pt-20">
        <h1 className="text-6xl md:text-8xl font-display italic tracking-tighter mb-8 text-black">CONTACT.</h1>
        <p className="text-gray-400 font-serif font-light max-w-xl mx-auto italic">
            プロジェクトのご相談、お見積り、デモ試聴の依頼など、お気軽にお問い合わせください。
        </p>
      </Section>

      <Section className="max-w-2xl mx-auto py-0">
        <form className="space-y-10 bg-white border border-black/5 p-10 md:p-16 rounded-[4px] shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">Your Name / お名前</label>
                    <input type="text" className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif" placeholder="BBM太郎" />
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">Email / アドレス</label>
                    <input type="email" className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif" placeholder="hello@example.com" />
                </div>
            </div>

            <div className="flex flex-col space-y-3">
                <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">Subject / 項目</label>
                <select className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif appearance-none">
                    <option>制作のご相談・お見積り</option>
                    <option>デモの試聴依頼</option>
                    <option>その他</option>
                </select>
            </div>

            <div className="flex flex-col space-y-3">
                <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">Message / メッセージ</label>
                <textarea rows={6} className="bg-white border border-black/10 p-4 text-black focus:border-[#C9A66B] outline-none transition-colors rounded-sm resize-none font-serif" placeholder="案件概要などをご記入ください。"></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-black text-white font-medium tracking-[0.4em] uppercase hover:bg-[#C9A66B] transition-all active:scale-[0.98]">
                Send Message
            </button>
        </form>
      </Section>
    </div>
  );
};

export default Contact;