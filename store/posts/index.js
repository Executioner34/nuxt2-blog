import posts from '@/mock/posts.json';

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
      const data = posts;
      commit('SET_POSTS', data);
    } catch (e) {
      console.log(e);
    }
  },
  async getPost({ commit }, id) {
    try {
      const post = posts.find((post) => post._id === id);
      commit('SET_POST', post);
    } catch (e) {
      console.log(e);
    }
  },
};
