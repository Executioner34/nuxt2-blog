<template>
  <div class="user-page-component user">
    <TheForm
      :label-input="inputsTitle"
      :form-rules="formRules"
      :form-data="formData"
      :is-loading="buttonLoad"
      @onSubmit="submitForm"
      title="Создать пользователя"
      button-text="Создать"
      type="create"
    />
  </div>
</template>

<script>
import TheForm from '@/components/common/TheForm/index.vue';
/**
 * @module components/views/_admin/user/index.vue
 * @desc страница создания администратора сайта
 * @vue-data {Object} formData - данные для импутов
 * @vue-data {Object} formRules - правила для валидации инпутов
 * @vue-data {Array} inputsTitle - названия лэйблов для инпутов
 * @vue-data {Boolean} buttonLoad - состояние кнопки в форме
 */
export default {
  name: 'UserPage',
  components: {
    TheForm,
  },
  data() {
    return {
      formData: {
        first: '',
        second: '',
      },
      formRules: {
        first: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
        ],
        second: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' },
        ],
      },
      inputsTitle: ['Логин', 'Пароль'],
      buttonLoad: false,
    };
  },
  methods: {
    async submitForm({ first, second }) {
      this.buttonLoad = true;
      try {
        const formData = {
          login: first,
          password: second,
        };

        await this.$store.dispatch('auth/createUser', formData);
        this.$message.success('Новый пользователь добавлен');
        this.initialFormData();
        this.buttonLoad = false;
      } catch (e) {
        console.log(e);
        this.buttonLoad = false;
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
.user {
  width: 600px;
}
</style>
