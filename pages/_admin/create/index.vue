<template>
  <CreatePage/>
</template>

<script>
import CreatePage from '@/components/views/_admin/create/index.vue';
/**
 * @module pages/_admin/create/index.vue
 * @desc страница по маршруту /admin/create
 */
export default {
  name: 'AdminCreatePage',
  components: { CreatePage },
  layout: 'admin',
};
</script>

<style lang="scss" scoped>
</style>
