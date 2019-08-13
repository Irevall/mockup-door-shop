import {
  getLocalItem, getSessionItem,
  removeLocalItem,
  removeSessionItem,
  setLocalItem,
  setSessionItem
} from '@/services/StorageService';
import { getOrganization, login } from '@/services/ApiService';

const state = {
  token: null,
  organization: null,
  loading: true,
};

const mutations = {
  setToken (state, { token, keepLogged }) {
    state.token = token;

    if (token) {
      if (keepLogged) setLocalItem('cache:token', token);
      else removeLocalItem('cache:token');
      setSessionItem('cache:token', token);
    }
    else {
      removeLocalItem('cache:token');
      removeSessionItem('cache:token');
    }
  },
  setOrganization(state, organization) {
    state.organization = organization;
  },
  setLoadingPromise (state, loadingPromise) {
    state.loading = !!loadingPromise;
    state.loadingPromise = loadingPromise;
  },
};

const actions = {
  async init ({ state, commit, dispatch }) {
    const localToken = getLocalItem('cache:token', null);
    const sessionToken = getSessionItem('cache:token', null);

    if (localToken) commit('setToken', { token: localToken, keepLogged: true });
    else if (sessionToken) commit('setToken', { token: sessionToken, keepLogged: false });

    if (localToken || sessionToken) await dispatch('getOrganization', { token: state.token });
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
    return !!state.token;
  },
  token(state) {
    return state.token;
  },
  organization(state) {
    return state.organization;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
