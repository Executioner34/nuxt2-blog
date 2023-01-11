<template>
  <el-row type="flex" justify="center" class="index-page-component">
    <el-col :xs="24" :sm="18" :md="12" :lg="10" >
      <the-card v-for="post in posts" :key="post._id" :post-data="post"/>
    </el-col>
  </el-row>
</template>

<script>
import TheCard from '@/components/views/index/TheCard/index.vue';
import { mapState } from 'vuex';
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
    ...mapState('posts', ['posts']),
  },
};
</script>
