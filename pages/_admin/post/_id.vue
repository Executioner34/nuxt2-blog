<template>
  <div class="post-page-component">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title}}</el-breadcrumb-item>
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
      <div class="subtext">
        <small>
          <app-icon icon="el-icon-time" />
          <span>
            {{ formatDate }}
          </span>
        </small>
        <small>
          <app-icon icon="el-icon-view" />
          <span>{{ post.views }}</span>
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
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module pages/_admin/post/_id.vue
 * @desc страница отображения поста с админ панели по роуту /admin/:id
 * @vue-data {Object} post - объект редактируемого поста
 * @vue-data {Boolean} loading - состояние кнопки
 * @vue-data {Object} formData - введенный текст для поста
 * @vue-data {Object} formRules - валидация для введенного текста
 */
export default {
  name: 'PostPage',
  components: {
    AppIcon,
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.post.title}`,
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('posts/getPost', params.id);
      if (!store.state.posts.currentPost) return error({ message: 'post not found', statusCode: 404 });
      return true;
    } catch (e) {
      return error({ message: e.message, statusCode: e.response.status });
    }
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
  computed: {
    post() {
      return this.$store.state.posts.currentPost;
    },
    formatDate() {
      return new Date(this.post.date).toLocaleString();
    },
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const formData = {
            text: this.formData.text,
            // eslint-disable-next-line no-underscore-dangle
            id: this.post._id,
          };
          try {
            await this.$store.dispatch('posts/updatePost', formData);
            this.$message.success('Пост обновлен');
            this.formData.text = '';
          } catch (e) {
            console.log(e);
          } finally {
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-page-component {
  width: 600px;

  .breadcrumb {
    margin-bottom: 32px;
  }

  .subtext {
    margin-bottom: 32px;
  }

  .subtext small:not(:last-child) {
    margin-right: 32px;
  }
}

</style>
