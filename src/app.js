import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/plugins/i18n';

export const app = new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  router
});
