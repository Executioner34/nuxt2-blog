export const actions = {
  async fetchAdminPosts({ commit }) {
    try {
      const { data } = await this.$axios.get('./mock/posts.json');
      return data;
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
};
