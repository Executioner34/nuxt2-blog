<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<script>
/**
 * @module layouts/error.vue
 * @desc страница ошибки 404
 */
export default {
  name: 'ErrorPage',
};
</script>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
}

.error-title {
  color: rgb(145, 6, 6);
  margin-bottom: 16px;
}
</style>
