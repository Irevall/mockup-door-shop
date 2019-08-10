import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user';

const modules = {
  user,
};

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  strict: !PRODUCTION,
  actions: {
    init ({ dispatch }) {
      for (const moduleName of Object.keys(modules)) {
        if (modules[moduleName].actions && modules[moduleName].actions.init) {
          dispatch(`${moduleName}/init`)
        }
      }
    },
  }
});

// Automatically run the `init` action for every module, if one exists.
store.dispatch('init');

export default store;
