// eslint-disable-next-line import/prefer-default-export
export const actions = {
  async createAdmin({ commit }, dataForm) {
    try {
      console.log(dataForm);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
};
