export const state = () => ({
  posts: [],
});

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },
};

export const actions = {
  async getPosts({ commit }) {
    try {
      const { data } = await this.$axios.get('/mock/posts.json');
      commit('SET_POSTS', data);
    } catch (e) {
      console.log(e);
    }
  },
  async getPost({}, id) {
    try {
      const { data } = await this.$axios.get('/mock/posts.json');
      return data.find((post) => post._id === id);
    } catch (e) {
      console.log(e);
    }
  },
};
