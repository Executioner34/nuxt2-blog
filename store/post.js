export const actions = {
  async fetchAdminPosts({ commit }) {
    try {
      const { data } = await this.$axios.get('./mock/posts.json');
      return data;
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async fetchAdminById({ commit }, id) {
    try {
      const { data } = await this.$axios.get('./mock/posts.json');
      const post = data.find((post) => post._id === id);
      return post;
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async create({ commit }, { title, text, image }) {
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
  async remove({ commit }, id) {
  // Удаляем пост на сервере
    try {
      setTimeout(() => {
        console.log('Пост удален:', id);
      }, 1000);
    } catch (e) {
      commit('SET_ERROR', e, { root: true });
    }
  },
  async update({ commit }, { id, text }) {
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
