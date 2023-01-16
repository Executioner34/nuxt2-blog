<template>
  <div class="logout-page-component"></div>
</template>

<script>
/**
 * @module pages/_admin/logout/index.vue
 * @desc страница по маршруту /admin/logout. Осуществляет выход из системы
 */
export default {
  name: 'LogoutPage',
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout');
    this.$router.push('/admin/login?message=logout');
  },
};
</script>
