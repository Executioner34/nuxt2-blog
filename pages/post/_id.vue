<template>
  <PostDetails/>
</template>

<script>
/**
 * @module pages/post/_id.vue
 * @desc страница по пути /post/:id
 */
export default {
  name: 'PostIdPage',
  validate({ params }) {
    return !!params.id;
  },
};
</script>

<style lang="scss" scoped>

</style>
