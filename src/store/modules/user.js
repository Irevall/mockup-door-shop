import { getItem, removeItem, setItem } from '@/services/StorageService'
import { getOrganization, login } from '@/services/ApiService';

const state = {
  token: null,
  organization: null,
  loading: true,
};

const mutations = {
  setToken (state, { token, keepLogged }) {
    state.token = token;

    if (token && keepLogged) setItem('cache:token', token);
    else removeItem('cache:token');
  },
  setOrganization(state, organization) {
    state.organization = organization;
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
    if (token) {
      await dispatch('getOrganization', { token });
    }
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

  },
  async getOrganization ({ state, commit, dispatch }, { token }) {
    const organization = await getOrganization({ token });
    commit('setOrganization', organization);
  },
};

const getters = {
  authenticated(state) {
    console.log('blyat');
    console.log(state.token);
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
