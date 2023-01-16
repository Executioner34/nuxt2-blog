<template>
  <div class="create-page-component">
    <the-form
      :label-input="['Введите название поста', 'Текст в формате .md или .html']"
      :form-rules="formRules"
      :form-data="formData"
      :is-loading="loading"
      @onSubmit="onSubmitForm"
      title="Создать новый пост"
      button-text="Создать пост"
      type="createPost"
    />
  </div>
</template>

<script>
import TheForm from '@/components/common/TheForm/index.vue';
/**
 * @module pages/_admin/create/index.vue
 * @desc страница по маршруту /admin/create. Страница создания поста
 * @vue-data {Boolean} loading - состояние кнопки загрузки
 * @vue-data {Object} formData -  данные в форме для создания поста
 * @vue-data {Object} formRules - валидация для данных в форме
 */
export default {
  name: 'CreatePage',
  components: { TheForm },
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      formData: {
        first: '',
        second: '',
      },
      formRules: {
        first: [
          { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' },
        ],
        second: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    async onSubmitForm({ first, second, file }) {
      this.loading = true;
      const formData = {
        title: first,
        text: second,
        image: file,
      };
      try {
        await this.$store.dispatch('posts/createPost', formData);
        this.$message.success('Пост создан');
        this.initialFormData();
      } catch (e) {
        this.$store.commit('SET_ERROR', e);
      } finally {
        this.loading = false;
      }
    },
    initialFormData() {
      this.formData.first = '';
      this.formData.second = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.create-page-component {
  width: 600px;
}

</style>
