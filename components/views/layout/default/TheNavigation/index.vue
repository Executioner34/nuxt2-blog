<template>
  <nav class="default-layout-component navigation">
    <h1 class="navigation-title">SSR Blog</h1>
  </nav>
</template>

<script>
/**
 * @module components/views/layout/default/TheNavigation/index.vue
 * @desc компонент навигации сайта
 */
export default {
  name: 'defaultLayout',
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid rgb(230, 230, 230);
}

</style>
