<template>
<LogoutPage/>
</template>

<script>
import LogoutPage from '@/components/views/_admin/logout/index.vue';
/**
 * @module pages/_admin/logout/index.vue
 * @desc страница по маршруту /admin/logout
 */
export default {
  name: 'AdminLogoutPage',
  components: { LogoutPage },
  layout: 'admin',
  middleware: ['admin-auth'],
};
</script>

<style lang="scss" scoped>

</style>
