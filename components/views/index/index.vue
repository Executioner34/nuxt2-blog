<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10" >
      <ThePost v-for="post in 3" :key="post"/>
    </el-col>
  </el-row>
</template>

<script>
import ThePost from '@/components/views/index/ThePost/index.vue';
/**
 * @module components/views/index/index.vue
 * @desc содержание главной страницы
 */
export default {
  name: 'IndexPage',
  components: {
    ThePost,
  },
};
</script>

<style lang="scss" scoped>

</style>
