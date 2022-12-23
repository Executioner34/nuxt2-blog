<template>
  <ListPage/>
</template>

<script>
import ListPage from '@/components/views/_admin/list/index.vue';
/**
 * @module pages/_admin/list/index.vue
 * @desc страница по маршруту /admin/list
 */
export default {
  name: 'AdminListPage',
  components: { ListPage },
  layout: 'admin',
};
</script>

<style lang="scss" scoped>

</style>
