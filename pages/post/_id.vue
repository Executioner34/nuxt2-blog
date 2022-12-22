<template>
  <PostPage/>
</template>

<script>
import PostPage from '@/components/views/_post-page/index.vue';
/**
 * @module pages/post/_id.vue
 * @desc страница по пути /post/:id
 */
export default {
  name: 'PostIdPage',
  components: {
    PostPage,
  },
  validate({ params }) {
    return !!params.id;
  },
};
</script>

<style lang="scss" scoped>

</style>
