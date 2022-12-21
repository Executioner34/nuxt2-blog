<template>
  <div>
    <el-container>
      <el-header>
        <LayoutNavigation/>
      </el-header>
      <el-main>
        <Nuxt/>
      </el-main>
      <el-footer/>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'layoutDefault',
};
</script>

<style scoped>

</style>
