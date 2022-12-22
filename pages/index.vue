<template>
  <IndexPage/>
</template>

<script>
import IndexPage from '@/components/views/index/index.vue';

export default {
  name: 'HomePage',
  components: {
    IndexPage,
  },
  head: {
    title: 'Главная',
  },
};
</script>
