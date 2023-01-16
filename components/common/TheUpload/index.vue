<template>
    <el-upload
      drag
      action="mock-link"
      :on-change="handleFileChange"
      :auto-upload="false"
      ref="upload"
      class="the-upload-component"
    >
      <app-icon icon="el-icon-upload" />
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </el-upload>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module components/common/TheUpload/index.vue
 * @desc компонент загрузки файла изображения
 * @vue-event {Object} update - событие изменения файла
 */
export default {
  name: 'TheUpload',
  components: {
    AppIcon,
  },
  methods: {
    handleFileChange(file, fileList) {
      this.$emit('update', file.raw);
    },
  },
};
</script>
