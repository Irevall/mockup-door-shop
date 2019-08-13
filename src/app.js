import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store'
import i18n from '@/plugins/i18n';
import validation from '@/plugins/validation';

Vue.use(validation);

export const app = new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  store,
  router,
});
