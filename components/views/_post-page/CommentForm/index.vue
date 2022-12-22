<template>
    <el-form
      :model="formData"
      :rules="formRules"
      ref="form"
      @submit.native.prevent="onSubmit"
      class="post-page-component">
      <h1>Добавить комментраий</h1>
      <el-form-item label="Ваше имя" prop="name">
        <el-input v-model.trim="formData.name" />
      </el-form-item>
      <el-form-item label="Текст комментария" prop="text">
        <el-input
          v-model.trim="formData.text"
          type="textarea"
          resize="none"
          :rows="2"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :loading="isLoading"
          round
        >Добавить комментарий</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
/**
 * @module components/views/post/_PostDetails/CommentForm/CommentForm.vue
 * @desc компонент формы создания комментария для поста
 * @vue-data {Boolean} isLoading - ход загрузки на сервер
 * @vue-data {Object} formData - данные полей формы
 * @vue-data {Object} formRules - валидация полей формы
 * @vue-event  created - сообщаем родительскому компоненту что комментарий создан
 */
export default {
  name: 'PostPage',
  data() {
    return {
      isLoading: false,
      formData: {
        name: '',
        text: '',
      },
      formRules: {
        name: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
        ],
        text: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.isLoading = true;
          const formData = {
            name: this.formData.name,
            text: this.formData.text,
          };
          try {
            setTimeout(() => {
              this.$message.success('Комментарий добавлен');
              this.$emit('created');
            }, 2000);
          } catch (e) {
            this.isLoading = false;
            this.$message.error('Ошибка добавления комментария!');
            console.log(e);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
