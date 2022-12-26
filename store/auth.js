export const state = () => ({
  token: '',
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = '';
  },
};

export const actions = {
  async login({ dispatch, commit }, dataForm) {
    try {
      const { data } = await this.$axios.get('./mock/auth.json');
      dispatch('setToken', data.token);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
      throw e;
    }
  },

  setToken({ commit }, token) {
    commit('SET_TOKEN', token);
  },

  logout({ commit }) {
    commit('CLEAR_TOKEN');
  },
};

export const getters = {
  isAuthenticated: (state) => !!state.token,
};
