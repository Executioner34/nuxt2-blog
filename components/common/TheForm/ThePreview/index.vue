<template>
  <div class="the-preview-component">
    <el-button
      type="success"
      plain
      class="btn"
      @click="openPreview"
    >
      Предпросмотр
    </el-button>
    <el-dialog title="Предпросмотр" :visible.sync="isPreviewDialog">
      <div :key="text">
        <vue-markdown>{{ text }}</vue-markdown>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/**
 * @module components/common/TheForm/ThePreview/index.vue
 * @desc модальное окно просмотра введенного текста
 * @vue-prop {String} text - текст для предпросмотра
 * @vue-data {Boolean} isPreviewDialog - переключатель для модального окна
 */
export default {
  name: 'ThePreview',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      isPreviewDialog: false,
    };
  },
  methods: {
    openPreview() {
      this.isPreviewDialog = true;
    },
  },
};
</script>
