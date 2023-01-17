<template>
  <el-menu
    router
    :default-active="$route.path"
    class="side-bar-component"
  >
    <el-menu-item v-for="item in menuItems" :key="item.name" :index="item.link">
      <app-icon :icon="item.icon" />
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module components/layouts/admin/SideBar/index.vue
 * @desc боковая панель страниц администратора
 * @vue-data {Array} menuItems - массив объектов элементов меню
 */
export default {
  name: 'SideBar',
  components: {
    AppIcon,
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Аналитика',
          icon: 'el-icon-menu',
          link: '/admin',
        },
        {
          name: 'Создать',
          icon: 'el-icon-edit-outline',
          link: '/admin/create',
        },
        {
          name: 'Посты',
          icon: 'el-icon-tickets',
          link: '/admin/list',
        },
        {
          name: 'Пользователи',
          icon: 'el-icon-service',
          link: '/admin/user',
        },
        {
          name: 'Выйти',
          icon: 'el-icon-setting',
          link: '/admin/logout',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.side-bar-component {
  height: 100%;
}
</style>
