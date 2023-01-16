<template>
  <el-menu
    router
    :default-active="$route.path"
    class="side-bar-component"
  >
    <el-menu-item index="/admin">
      <app-icon icon="el-icon-menu" />
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <app-icon icon="el-icon-edit-outline" />
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <app-icon icon="el-icon-tickets" />
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <app-icon icon="el-icon-service" />
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <app-icon icon="el-icon-setting" />
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module components/layouts/admin/SideBar/index.vue
 * @desc боковая панель страниц администратора
 */
export default {
  name: 'SideBar',
  components: { AppIcon },
};
</script>

<style lang="scss" scoped>
.side-bar-component {
  height: 100%;
}
</style>
