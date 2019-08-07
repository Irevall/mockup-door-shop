import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/plugins/i18n';
import icons from '@/plugins/icons';

Vue.use(icons);

export const app = new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  router
});
