import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
// import LanguageDetector from './language-detector';

import locales from '@/assets/locales';

Vue.use(VueI18Next);

i18next
  // .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'pl'],
    load: 'languageOnly',
    debug: !PRODUCTION,
    resources: locales,
  });

export default new VueI18Next(i18next);
