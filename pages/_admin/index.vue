<template>
<AdminPage/>
</template>

<script>
import AdminPage from '@/components/views/_admin/index.vue';
/**
 * @module pages/_admin/index.vue
 * @desc страница по маршруту /admin
 */
export default {
  name: 'IndexAdminPage',
  layout: 'admin',
  components: { AdminPage },
};
</script>

<style lang="scss" scoped>

</style>
