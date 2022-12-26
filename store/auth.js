export const state = () => ({
  token: '',
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export const actions = {
  async login({ dispatch }, dataForm) {
    try {
      const { data } = await this.$axios.get('./mock/auth.json');
      dispatch('setToken', data.token);
    } catch (e) {
      console.log(e);
    }
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token);
  },
};

export const getters = {
  isAuthenticated: (state) => !!state.token,
};
