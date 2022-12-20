<template>
  <nav>
    <h1>SSR Blog</h1>
  </nav>
</template>

<script>
/**
 * @module components/views/Navigation/Navigation.vue
 * @desc Навигация для сайта
 * @vue-prop {type} name - desc
 * @vue-data {type} name - desc
 * @vue-computed {type} name - desc
 */
export default {
  name: 'VNavigation',
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid #e6e6e6;
}

</style>
