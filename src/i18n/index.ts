import { ar } from './ar';
import { en } from './en';

export type Lang = 'ar' | 'en';

export const dictionaries = { ar, en } as const;

export const t = (lang: Lang) => dictionaries[lang];

export const localePath = (lang: Lang, path: string): string => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === 'ar') return `/${clean}`.replace(/\/$/, '') || '/';
  return `/en/${clean}`.replace(/\/$/, '') || '/en';
};

export const otherLang = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');

export const dirFor = (lang: Lang): 'rtl' | 'ltr' => (lang === 'ar' ? 'rtl' : 'ltr');
