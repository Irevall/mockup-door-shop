import { getItem, removeItem, setItem } from '@/services/StorageService'
import { login } from '@/services/ApiService';

const state = {
  token: null,
  loading: true,
  loadingPromise: null
};

const mutations = {
  setToken (state, { token, keepLogged }) {
    state.token = token;

    if (token && keepLogged) setItem('cache:token', token);
    else removeItem('cache:token');
  },
  setLoadingPromise (state, loadingPromise) {
    state.loading = !!loadingPromise;
    state.loadingPromise = loadingPromise;
  },
  updateUser (state, updatePayload) {
    state.user.update(updatePayload);
    setItem('cache:user', state.user);
  }
};

const actions = {
  async init ({ commit, dispatch }) {
    const token = getItem('cache:token', null);
    commit('setToken', { token, keepLogged: true });
  },
  async login ({ commit }, { email, password, keepLogged }) {
    try {
      const { token } = await login({ email, password });
      commit('setToken', { token, keepLogged });
    } catch (err) {
      throw err.response.status;
    }
  },
  async logout ({ commit }) {
    await logout();
    commit('setUser', null);
  },
  async verify ({ state, commit, dispatch }) {

  },
};

const getters = {
  authenticated(state) {
    return !!state.token;
  },
  token(state) {
    return state.token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
