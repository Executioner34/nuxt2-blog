<template>
    <el-form
      :model="formData"
      :rules="formRules"
      ref="form"
      @submit.native.prevent="onSubmit"
      class="post-details-page-comment-form-component">
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
          round>Добавить комментарий</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
/**
 * @module components/views/post/_PostDetails/CommentForm/CommentForm.vue
 * @desc компонент формы создания комментария для поста
 * @vue-data {Object} formData - данные полей формы
 * @vue-data {Object} formRules - валидация полей формы
 */
export default {
  name: 'PostDetailsPageCommentForm',
  data() {
    return {
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
          // mock
          console.log('Form is Valid');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
