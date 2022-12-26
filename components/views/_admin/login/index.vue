<template>
  <el-card
    shadow="always"
    class="login-page-component login"
  >
    <TheForm
      :form-data="formData"
      :form-rules="formRules"
      :label-input="inputsTitle"
      :isLoading="buttonLoad"
      @onSubmit="submitForm"
      buttonText="Войти"
      title="Авторизация"
      type="login"
    />
  </el-card>
</template>

<script>
import TheForm from '@/components/common/TheForm/index.vue';
/**
 * @module components/views/_admin/login/index.vue
 * @desc страница авторизации администратора
 * @vue-data {Object} formData - данные для импутов
 * @vue-data {Object} formRules - правила для валидации инпутов
 * @vue-data {Array} inputsTitle - названия лэйблов для инпутов
 * @vue-data {Boolean} buttonLoad - состояние кнопки в форме
 */
export default {
  name: 'LoginPage',
  components: { TheForm },
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

        await this.$store.dispatch('auth/login', formData);
        this.$router.push('/admin');
        this.buttonLoad = false;
      } catch (e) {
        console.log(e);
        this.buttonLoad = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
}
</style>
