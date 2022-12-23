<template>
<LoginPage/>
</template>

<script>
import LoginPage from '@/components/views/_admin/login/index.vue';
/**
 * @module pages/_admin/login/index.vue
 * @desc страница по маршруту /admin/login
 */
export default {
  name: 'AdminLoginPage',
  components: { LoginPage },
  layout: 'empty',
};
</script>

<style lang="scss" scoped>

</style>
