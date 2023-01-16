<template>
  <main class="empty-layout-component">
    <nuxt/>
  </main>
</template>

<script>
/**
 * @module layouts/empty.vue
 * @desc пустая обёртка для логина в систему
 */
export default {
  name: 'EmptyLayout',
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    error(value) {
      this.$message.error((value));
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-layout-component {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 64px;
}
</style>
