import data from '@/mock/auth.json';

export const state = () => ({
  token: '',
});

export const getters = {
  isAuthenticated: (state) => !!state.token,
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = '';
  },
};

export const actions = {
  async login({ commit }, dataForm) {
    try {
      const { token } = data;
      commit('SET_TOKEN', token);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
      throw e;
    }
  },

  logout({ commit }) {
    commit('CLEAR_TOKEN');
  },

};
