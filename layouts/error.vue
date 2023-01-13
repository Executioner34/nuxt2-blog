<template>
  <div class="error-page-component">
    <div class="content">
      <h2 class="title">Ошибка 404</h2>
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
.error-page-component {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
  }

  .title {
    color: rgb(145, 6, 6);
    margin-bottom: 16px;
  }
}
</style>
