<template>
  <div class="default-layout-component">
      <el-header>
        <h2 class="title">SSR Blog</h2>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer/>
  </div>
</template>

<script>
/**
 * @module components/layouts/index.vue
 * @desc компонент обёртки по умолчанию
 */
export default {
  name: 'defaultLayout',
};
</script>

<style lang="scss" scoped>
.default-layout-component {
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid rgb(230, 230, 230);
  }
}
</style>
