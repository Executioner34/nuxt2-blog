<template>
  <PostPage/>
</template>

<script>
import PostPage from '@/components/views/_admin/post/index.vue';
/**
 * @module pages/_admin/post/_id.vue
 * @desc страница по роуту /admin/:id
 */
export default {
  name: 'AdminPostPage',
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {
    PostPage,
  },
};
</script>

<style lang="scss" scoped>

</style>
