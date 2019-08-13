import { getItem, removeItem, setItem } from '@/services/StorageService'
import { Door } from '@/models/Door';

const state = {
  door: null,
};

const mutations = {
  setDoor(state, { door }) {
    state.door = door;

    if (door) setItem('cache:door', door);
    else removeItem('cache:door');
  },
  updateDoor(state, { property, value }) {
    state.door.update(property, value);
    setItem('cache:door', state.door);
  }
};

const actions = {
  async init({ commit, dispatch }) {
    const cachedDoor = getItem('cache:door', null);
    const door = new Door(cachedDoor);
    commit('setDoor', { door });
  },
};

const getters = {
  door(state) {
    return state.door;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
