<template>
  <div class="create-page-component create">
    <el-form
      :model="formData"
      :rules="formRules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h1>Создать новый пост</h1>
      <el-form-item label="Введите название поста" prop="title">
        <el-input v-model.trim="formData.title"/>
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          v-model="formData.text"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-button
        type="success"
        plain
        @click="openPreview"
        class="create-preview-btn"
      >
        Предпросмотр
      </el-button>
      <el-dialog title="Предпросмотр" :visible.sync="isPreviewDialog">
        <div :key="formData.text">
          <vue-markdown>{{ formData.text}}</vue-markdown>
        </div>
      </el-dialog>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Создать пост
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * @module components/views/_admin/create/index.vue
 * @desc страница создания поста
 * @vue-data {Boolean} loading - состояние кнопки
 * @vue-data {Boolean} isPreviewDialog - состояние компонента el-dialog
 * @vue-data {Object} formData -  данные в форме для создания поста
 * @vue-data {Object} formRules - валидация для данных в форме
 */
export default {
  name: 'CreatePage',
  data() {
    return {
      loading: false,
      isPreviewDialog: false,
      formData: {
        title: '',
        text: '',
      },
      formRules: {
        title: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' },
        ],
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const formData = {
            title: this.formData.title,
            text: this.formData.text,
          };
          try {
            await this.$store.dispatch('post/create', formData);
            this.$message.success('Пост создан');
            this.formData.text = '';
            this.formData.title = '';
          } catch (e) { } finally {
            this.loading = false;
          }
        }
      });
    },
    openPreview() {
      this.isPreviewDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.create {
  width: 600px;
}

.create-preview-btn {
  margin-bottom: 32px;
}
</style>
