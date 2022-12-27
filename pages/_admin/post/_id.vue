<template>
  <PostPage :data="post"/>
</template>

<script>
import PostPage from '@/components/views/_admin/post/index.vue';
/**
 * @module pages/_admin/post/_id.vue
 * @desc страница по роуту /admin/:id
 * @vue-data {Object} post - объект редактируемого поста
 */
export default {
  name: 'AdminPostPage',
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.post.title}`,
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  components: {
    PostPage,
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id);
    return { post };
  },
};
</script>

<style lang="scss" scoped>

</style>
