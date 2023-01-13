<template>
  <i :class="icon" class="app-icon-component"></i>
</template>

<script>
/**
 * @module components/general/AppIcon.vue
 * @desc компонент иконки сделан через тег i в ElementUI
 * @vue-prop {String} icon - класс иконки из ElementUI
 */
export default {
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
