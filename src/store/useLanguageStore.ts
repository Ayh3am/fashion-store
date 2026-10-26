import { create } from 'zustand';

type Language = 'tr' | 'en';

type LanguageStore = {
  lang: Language;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'tr', // اللغة الافتراضية التركية
  toggleLanguage: () => set((state) => ({ 
    lang: state.lang === 'tr' ? 'en' : 'tr' 
  })),
}));
