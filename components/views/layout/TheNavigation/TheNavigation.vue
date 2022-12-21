<template>
  <nav class="navigation-layout-component">
    <h1 class="navigation-title">SSR Blog</h1>
  </nav>
</template>

<script>
/**
 * @module components/views/layout/TheNavigation/TheNavigation.vue
 * @desc компонент навигации сайта
 */
export default {
  name: 'NavigationLayout',
};
</script>

<style lang="scss" scoped>
.navigation-layout-component {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid rgb(230, 230, 230);
}

</style>
