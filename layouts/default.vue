<template>
  <div>
    <el-container>
      <el-header>
        <LayoutTheNavigation/>
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
  name: 'DefaultLayout',
};
</script>

<style scoped>

</style>
