<template>
  <div class="empty-layout">
    <Nuxt/>
  </div>
</template>

<script>
/**
 * @module components/views/layout/empty/index.vue
 * @desc component_description
 */
export default {
  name: 'EmptyLayout',
};
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 64px;
}

</style>
