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
  DELETE_POST(state, id) {
    state.posts = state.posts.filter((post) => post._id !== id);
  },
};

export const actions = {
  async getPosts({ commit }) {
    try {
      const data = posts;
      commit('SET_POSTS', data);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async getPost({ commit }, id) {
    try {
      const post = posts.find((post) => post._id === id);
      commit('SET_POST', post);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async createPost({ commit }, { title, text, image }) {
    // Создаем пост на сервере
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);
      setTimeout(() => {
        console.log('Пост создан:', title);
      }, 1000);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async removePost({ commit }, id) {
    // Удаляем пост на сервере
    try {
      commit('DELETE_POST', id);
      setTimeout(() => {
        console.log('Пост удален:', id);
      }, 1000);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async updatePost({ commit }, { id, text }) {
    // Обновляем пост на сервере
    try {
      setTimeout(() => {
        console.log('Пост обновлен:', id, text);
      }, 1000);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
};
