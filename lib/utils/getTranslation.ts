import 'server-only';

import type {Locale} from '../i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const translates = {
  en: () => import('./translates/en.json').then((module) => module.default),
  ko: () => import('./translates/ko.json').then((module) => module.default),
};

export const getTranslates = async (
  locale: Locale,
): Promise<ReturnType<(typeof translates)['en']>> => translates[locale]();
