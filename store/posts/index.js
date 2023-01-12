export const state = () => ({
  posts: [],
  currentPost: {},
});

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },
  SET_POST(state, payload) {
    state.currentPost = payload;
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
  async getPost({ commit }, id) {
    try {
      const { data } = await this.$axios.get('/mock/posts.json');
      const post = data.find((post) => post._id === id);
      commit('SET_POST', post);
    } catch (e) {
      console.log(e);
    }
  },
};
