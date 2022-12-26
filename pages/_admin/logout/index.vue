<template>
<div class=""></div>
</template>

<script>
/**
 * @module pages/_admin/logout/index.vue
 * @desc страница по маршруту /admin/logout
 */
export default {
  name: 'AdminLogoutPage',
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout');
    this.$router.push('/admin/login?message=logout');
  },
};
</script>

<style lang="scss" scoped>

</style>
