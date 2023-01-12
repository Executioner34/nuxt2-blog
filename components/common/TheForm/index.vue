<template>
  <el-form
    :model="formData"
    :rules="formRules"
    ref="form"
    @submit.native.prevent="onSubmitEvent"
    class="the-form-component">
    <h2>{{ title }}</h2>
    <el-form-item :label="labelInput[0]" prop="first">
      <el-input v-model.trim="formData.first" />
    </el-form-item>
    <el-form-item
      :label="labelInput[1]"
      prop="second"
      class="input"
      :class="classInput">
      <el-input
        v-model.trim="formData.second"
        :type="typeInput"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="isLoading"
        ref="button"
        round
      >{{ buttonText}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/**
 * @module components/common/TheForm/index.vue
 * @desc форма с двумя полями и кнопкой
 * @vue-prop {Object} formData - объект с полями first и second для инпутов формы
 * @vue-prop {Object} formRules - объект для валидации инпутов формы
 * @vue-prop {String} title - заглавный текст страницы
 * @vue-prop {Array} labelInput - массив строк для лэйблов инпутов
 * @vue-prop {String} buttonText - текст для  кнопки формы
 * @vue-prop {Boolean} isLoading - для состояния кнопки
 * @vue-prop {String} type - тип формы.
 * @vue-computed {Boolean} isLogin - на основе props.type определяет тип
 * @vue-computed {String} typeInput - на основе isLogin возвращает строку для
 * определения второго инпута
 * @vue-computed {String} classInput - на основе isLogin возращает строку для модификатора класса
 * @vue-event {Void} onSubmit - оповещает родителя о клике на кнопку
 */
export default {
  name: 'TheForm',
  props: {
    formData: {
      type: Object,
      required: true,
    },
    formRules: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: 'Title',
    },
    labelInput: {
      type: Array,
      required: false,
      default: () => (['First', 'Second']),
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Submit',
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'comment',
      validator: (value) => ['comment', 'login', 'create'].includes(value),
    },
  },
  computed: {
    isLogin() {
      return (this.type === 'login' || this.type === 'create');
    },
    typeInput() {
      return (this.isLogin ? 'password' : 'textarea');
    },
    classInput() {
      return this.isLogin ? 'login' : '';
    },
  },
  methods: {
    onSubmitEvent() {
      // Валидация формы
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('onSubmit', this.formData);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.the-form-component {
  .input {
    margin-bottom: 16px;
    &.login {
      margin-bottom: 32px;
    }
  }
}
</style>
