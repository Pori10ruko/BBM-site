import React from 'react';
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
    <div className="pb-16 md:pb-20">
      <Section className="py-0 mb-12 md:mb-20 text-center pt-12 md:pt-20">
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