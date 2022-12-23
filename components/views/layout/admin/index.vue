<template>
  <div class="admin-page-component">
    <el-container class="admin">
      <el-aside width="250px">
          <SideBar/>
      </el-aside>
      <el-main>
        <Nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/components/views/layout/admin/SideBar/index.vue';
/**
 * @module components/views/layout/admin/index.vue
 * @desc обёртка админ панели
 */
export default {
  name: 'AdminLayout',
  components: { SideBar },
};
</script>

<style lang="scss" scoped>
.admin {
  width: 100%;
  height: 100vh;
}
</style>
