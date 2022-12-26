<template>
  <EmptyLayout/>
</template>

<script>
import EmptyLayout from '@/components/views/layout/empty/index.vue';
import { mapState } from 'vuex';
/**
 * @module layouts/empty.vue
 * @desc пустая обёртка для логина в систему
 */
export default {
  name: 'AdminPage',
  components: { EmptyLayout },
  computed: {
    ...mapState({
      error: 'error',
    }),
  },
  watch: {
    error(value) {
      this.$message.error((value));
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
