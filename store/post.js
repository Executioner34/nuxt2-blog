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
  async remove({}, id) {
  // Удаляем пост на сервере
    setTimeout(() => {
      console.log('Пост удален:', id);
    }, 1000);
  },
  async update({}, { id, text }) {
    // Обновляем пост на сервере
    setTimeout(() => {
      console.log('Пост обновлен:', id, text);
    }, 1000);
  },
};
