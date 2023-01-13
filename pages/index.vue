<template>
  <el-row type="flex" justify="center" class="index-page-component">
    <el-col :xs="24" :sm="18" :md="12" :lg="10" >
      <ul>
        <li v-for="post in posts" :key="post._id" class="card">
          <the-card :post-data="post"
          />
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
import TheCard from '@/components/views/index/TheCard/index.vue';
/**
 * @module pages/index.vue
 * @desc главная страница
 * @vue-data {Array} posts - массив постов с сервера
 */
export default {
  name: 'IndexPage',
  components: {
    TheCard,
  },
  head: {
    title: 'Главная',
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('posts/getPosts');
      return true;
    } catch (e) {
      return error({ message: e.message, statusCode: e.response.status });
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.index-page-component {
  .card:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
