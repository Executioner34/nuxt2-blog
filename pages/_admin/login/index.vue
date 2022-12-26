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
  mounted() {
    const { message } = this.$route.query;
    switch (message) {
      case 'login':
        this.$message.info('Для начала войдите в систему');
        break;
      case 'logout':
        this.$message.success('Вы успешно вышли из системы');
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
