<template>
  <div class="post-page-component post">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
/**
 * @module components/views/_admin/post/index.vue
 * @desc страница отображения поста с админ панели
 */
export default {
  name: 'PostPage',
};
</script>

<style lang="scss" scoped>
.post {

}
</style>
