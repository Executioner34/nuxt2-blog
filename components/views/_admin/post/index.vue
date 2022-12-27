<template>
  <div class="post-page-component post">
    <el-breadcrumb separator="/" class="post-breadcrumb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ data.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="formData"
      :rules="formRules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          v-model.trim="formData.text"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <div class="post-subtext">
        <small class="subtext--first">
          <i class="el-icon-time"></i>
          <span>
            {{ formatDate(data.date) }}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>{{ data.views }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * @module components/views/_admin/post/index.vue
 * @desc страница отображения поста с админ панели
 * @vue-prop {Object} data - данные поста
 */
export default {
  name: 'PostPage',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      formData: {
        text: '',
      },
      formRules: {
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
            text: this.formData.text,
            id: this.data._id,
          };
          try {
            await this.$store.dispatch('post/update', formData);
            this.$message.success('Пост обновлен');
            this.formData.text = '';
          } catch (e) {} finally {
            this.loading = false;
          }
        }
      });
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  width: 600px;
}

.post-breadcrumb {
  margin-bottom: 32px;
}

.post-subtext {
  margin-bottom: 32px;
}

.subtext {
  &--first {
    margin-right: 32px;
  }
}
</style>
