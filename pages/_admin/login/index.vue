<template>
  <el-card
    shadow="always"
    class="login-page-component"
  >
    <the-form
      :form-data="formData"
      :form-rules="formRules"
      :label-input="inputsTitle"
      :isLoading="buttonLoad"
      buttonText="Войти"
      title="Авторизация"
      type="login"
      @onSubmit="submitForm"
    />
  </el-card>
</template>

<script>
import TheForm from '@/components/common/TheForm/index.vue';
/**
 * @module pages/_admin/login/index.vue
 * @desc страница по маршруту /admin/login
 * @vue-data {Object} formData - данные для импутов
 * @vue-data {Object} formRules - правила для валидации инпутов
 * @vue-data {Array} inputsTitle - названия лэйблов для инпутов
 * @vue-data {Boolean} buttonLoad - состояние кнопки в форме
 */
export default {
  name: 'LoginPage',
  layout: 'empty',
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

        await this.$store.dispatch('auth/login', formData);
        await this.$router.push('/admin');
      } catch (e) {
        console.log(e);
      } finally {
        this.buttonLoad = false;
      }
    },
  },
  mounted() {
    const { message } = this.$route.query;
    switch (message) {
      case 'login':
        this.$message.info('Для начала войдите в систему');
        break;
      case 'logout':
        this.$message.success('Вы успешно вышли из системы');
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
.login-page-component {
  width: 500px;
}
</style>
