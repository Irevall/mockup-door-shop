import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (from, to, savedPosition) => {
    return savedPosition || { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (to.name === 'login') return next();

  const authenticated = await store.getters['user/authenticated'];
  console.log(authenticated);

  if (!authenticated) return next({ name: 'login' });

  return next();
});

router.onError(err => {
  if (err.type !== 'missing') throw err;
  console.log('Router error, reloading', err);
  window.location.reload(true);
});

export default router;
