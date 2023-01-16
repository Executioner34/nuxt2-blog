<template>
  <div class="admin-layout-component">
    <el-container class="container">
      <el-aside width="250px">
        <side-bar/>
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/components/layouts/admin/SideBar/index.vue';
/**
 * @module layouts/admin.vue
 * @desc обёртка админ панели
 */
export default {
  name: 'AdminLayout',
  components: { SideBar },
};
</script>

<style lang="scss" scoped>
.admin-layout-component {
  .container {
    width: 100%;
    height: 100vh;
  }
}

</style>
