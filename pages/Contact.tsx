import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { useLanguage } from '../hooks/useLanguage';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

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
      thanks: '送信ありがとうございます。折り返しご連絡いたします。',
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
      thanks: 'Thank you for your message. We will get back to you shortly.',
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
      thanks: '感謝您的來信，我們會盡快回覆。',
    },
  } as const;

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div className="pb-16 md:pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px] rounded-full border border-[#C9A66B]/15 animate-spin-very-slow"
          style={{
            boxShadow: 'inset 0 0 100px rgba(201, 166, 107, 0.12), 0 0 130px rgba(201, 166, 107, 0.08)'
          }}
        />
      </div>

      <Section className="py-0 mb-12 md:mb-20 text-center pt-12 md:pt-20 relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display italic tracking-tighter mb-6 md:mb-8 text-black">CONTACT.</h1>
        <p className="text-gray-500 font-serif font-light max-w-xl mx-auto">
          {t.intro}
        </p>
      </Section>

      <Section className="max-w-2xl mx-auto py-0">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white border border-black/5 p-10 md:p-16"
          >
            <p className="text-2xl font-serif text-gray-800 mb-4">{t.thanks}</p>
          </motion.div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-10 bg-white border border-black/5 p-10 md:p-16 shadow-sm"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col space-y-3">
                <label htmlFor="contact-name" className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{t.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="bg-transparent border-b border-black/10 p-3 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif"
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label htmlFor="contact-email" className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{t.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border-b border-black/10 p-3 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif"
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <label htmlFor="contact-subject" className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{t.subjectLabel}</label>
              <select
                id="contact-subject"
                name="subject"
                className="bg-transparent border-b border-black/10 p-3 text-black focus:border-[#C9A66B] outline-none transition-colors font-serif appearance-none cursor-pointer"
              >
                {t.subjectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-3">
              <label htmlFor="contact-message" className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{t.messageLabel}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                className="bg-white border border-black/10 p-4 text-black focus:border-[#C9A66B] outline-none transition-colors resize-none font-serif"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-black text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#C9A66B] transition-colors duration-300 active:scale-[0.98]"
            >
              {t.submit}
            </button>
          </form>
        )}
      </Section>
    </div>
  );
};

export default Contact;
