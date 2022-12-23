<template>
  <UserPage/>
</template>

<script>
import UserPage from '@/components/views/_admin/user/index.vue';
/**
 * @module pages/_admin/user/index.vue
 * @desc страница по маршруту /admin/user
 */
export default {
  name: 'AdminUserPage',
  components: { UserPage },
  layout: 'admin',
};
</script>

<style lang="scss" scoped>

</style>
