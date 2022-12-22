<template>
  <div>
    <el-container>
      <el-header>
        <TheNavigation/>
      </el-header>
      <el-main>
        <Nuxt/>
      </el-main>
      <el-footer/>
    </el-container>
  </div>
</template>

<script>
import TheNavigation from '@/components/views/layout/default/TheNavigation/index.vue';
/**
 * @module components/views/layout/default/index.vue
 * @desc компонент для стандартной обёртки страницы
 */
export default {
  name: 'defaultLayout',
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss" scoped>

</style>
