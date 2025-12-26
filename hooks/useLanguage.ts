import { useContext, useMemo } from 'react';
import { LanguageContext } from '../App';

export type UiLanguage = 'ja' | 'en' | 'tw';

export const useLanguage = (): { language: UiLanguage } => {
  const { lang } = useContext(LanguageContext);

  const language = useMemo<UiLanguage>(() => {
    switch (lang) {
      case 'EN':
        return 'en';
      case 'TW':
        return 'tw';
      case 'JP':
      default:
        return 'ja';
    }
  }, [lang]);

  return { language };
};
