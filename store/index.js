export const state = () => ({
  error: '',
});

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },
  CLEAR_ERROR(state) {
    state.error = '';
  },
};
