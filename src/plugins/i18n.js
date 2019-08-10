import Vue from 'vue';
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import locales from '@/assets/locales';

Vue.use(VueI18Next);

i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    whitelist: ['en', 'pl'],
    load: 'languageOnly',
    debug: !PRODUCTION,
    resources: locales,
    interpolation: { escapeValue: false }
  });

export default new VueI18Next(i18next);
