<template>
  <el-tooltip
    effect="dark"
    :content="text"
    placement="top"
    class="the-tooltip-component"
  >
    <el-button
      :icon="buttonIcon"
      :type="buttonType"
      @click="eventClick"
      circle
    />
  </el-tooltip>
</template>

<script>
/**
 * @module components/common/TheTooltip/index.vue
 * @desc компонент кнопки с подсказкой
 * @vue-prop {String} text - текст подсказки
 * @vue-prop {String} buttonType - тип кнопки
 * @vue-computed {String} buttonIcon - иконка кнопки на основе типа кнопки
 * @vue-event {Void} click - событие клика по кнопке
 */
export default {
  name: 'TheTooltip',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    buttonType: {
      type: String,
      required: false,
      default: 'primary',
      validate: (value) => ['primary', 'danger'].includes(value),
    },
  },
  computed: {
    buttonIcon() {
      return this.buttonType === 'primary' ? 'el-icon-edit' : 'el-icon-delete';
    },
  },
  methods: {
    eventClick() {
      this.$emit('click');
    },
  },
};
</script>
