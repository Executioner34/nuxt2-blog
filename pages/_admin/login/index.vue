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
    const infoMessages = {
      login: 'Для начала войдите в систему',
      logout: 'Вы успешно вышли из системы',
    };
    this.$message.info(infoMessages?.[message]);
  },
};
</script>

<style lang="scss" scoped>

</style>
