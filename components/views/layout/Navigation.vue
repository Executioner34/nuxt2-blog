<template>
  <nav class="navigation">
    <h1 class="navigation-title">SSR Blog</h1>
  </nav>
</template>

<script>
/**
 * @module components/views/layout/Navigation.vue
 * @desc компонент навигации сайта
 * @vue-prop {type} name - desc
 * @vue-data {type} name - desc
 * @vue-computed {type} name - desc
 */
export default {
  name: 'NavigationLayout',
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

.navigation-title {

}
</style>
