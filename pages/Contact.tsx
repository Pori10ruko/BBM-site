import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { useLanguage } from '../hooks/useLanguage';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ja: {
      intro: 'プロジェクトのご相談、お見積り、デモ試聴の依頼など、お気軽にお問い合わせください。',
      nameLabel: 'Your Name / お名前',
      namePlaceholder: 'BBM太郎',
      emailLabel: 'Email / アドレス',
      emailPlaceholder: 'hello@example.com',
      subjectLabel: 'Subject / 項目',
      subjectOptions: ['制作のご相談・お見積り', 'デモの試聴依頼', 'その他'],
      messageLabel: 'Message / メッセージ',
      messagePlaceholder: '案件概要などをご記入ください。',
      submit: 'Send / 送信',
    },
    en: {
      intro: 'Feel free to reach out for project inquiries, quotes, or demo listening requests.',
      nameLabel: 'Your Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@example.com',
      subjectLabel: 'Subject',
      subjectOptions: ['Project inquiry / Quote', 'Request a demo listening', 'Other'],
      messageLabel: 'Message',
      messagePlaceholder: 'Please describe your project briefly.',
      submit: 'Send',
    },
    tw: {
      intro: '歡迎洽詢專案合作、報價或試聽示範等事宜。',
      nameLabel: '姓名',
      namePlaceholder: '您的姓名',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@example.com',
      subjectLabel: '主旨',
      subjectOptions: ['專案洽詢 / 報價', '申請試聽示範', '其他'],
      messageLabel: '訊息',
      messagePlaceholder: '請簡要說明您的需求。',
      submit: '送出',
    },
  } as const;

  const t = content[language];

  return (
    <div className="pb-16 md:pb-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center sphere */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px]"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-[#C9A66B]/40"
            animate={{
              rotateZ: [0, 360],
              rotateX: [0, 20, 0],
              scale: [1, 1.09, 1]
            }}
            transition={{
              rotateZ: { duration: 24, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              boxShadow: 'inset 0 0 100px rgba(201, 166, 107, 0.28), 0 0 130px rgba(201, 166, 107, 0.18)',
              transformStyle: 'preserve-3d'
            }}
          />
          <motion.div
            className="absolute inset-[22%] rounded-full border-[2px] border-[#C9A66B]/32"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
            style={{
              boxShadow: 'inset 0 0 65px rgba(201, 166, 107, 0.2)'
            }}
          />
          <motion.div
            className="absolute inset-[40%] rounded-full bg-gradient-to-br from-white/50 via-[#C9A66B]/25 to-[#C9A66B]/15"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              boxShadow: 'inset -15px -15px 70px rgba(201, 166, 107, 0.35), inset 15px 15px 70px rgba(255, 255, 255, 0.35)'
            }}
          />
        </motion.div>

        {/* Pulsing rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`contact-ring-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#C9A66B]/35"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: ['0px', '1600px'],
              height: ['0px', '1600px'],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.8
            }}
            style={{
              boxShadow: '0 0 55px rgba(201, 166, 107, 0.35)'
            }}
          />
        ))}

        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-[#C9A66B]/50 to-[#C9A66B]/18"
            style={{
              left: `${12 + i * 11}%`,
              top: `${22 + (i % 3) * 23}%`,
              boxShadow: '0 0 38px rgba(201, 166, 107, 0.4)'
            }}
            animate={{
              y: [0, -68, 0],
              opacity: [0.32, 0.78, 0.32],
              scale: [1, 2.1, 1]
            }}
            transition={{
              duration: 4.2 + i * 0.32,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25
            }}
          />
        ))}
      </div>

      <Section className="py-0 mb-12 md:mb-20 text-center pt-12 md:pt-20 relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display italic tracking-tighter mb-6 md:mb-8 text-black">CONTACT.</h1>
        <p className="text-gray-400 font-serif font-light max-w-xl mx-auto italic">
            {t.intro}
        </p>
      </Section>

      <Section className="max-w-2xl mx-auto py-0">
        <form className="space-y-10 bg-white border border-black/5 p-10 md:p-16 rounded-[4px] shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col space-y-3">
                <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">{t.nameLabel}</label>
                <input type="text" className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif" placeholder={t.namePlaceholder} />
                </div>
                <div className="flex flex-col space-y-3">
                <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">{t.emailLabel}</label>
                <input type="email" className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif" placeholder={t.emailPlaceholder} />
                </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">{t.subjectLabel}</label>
                <select className="bg-transparent border-b border-black/10 p-2 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif appearance-none">
                {t.subjectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
                </select>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase">{t.messageLabel}</label>
              <textarea rows={6} className="bg-white border border-black/10 p-4 text-black focus:border-[#C9A66B] outline-none transition-colors rounded-sm resize-none font-serif" placeholder={t.messagePlaceholder}></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-black text-white font-medium tracking-[0.4em] uppercase hover:bg-[#C9A66B] transition-all active:scale-[0.98]">
              {t.submit}
            </button>
        </form>
      </Section>
    </div>
  );
};

export default Contact;