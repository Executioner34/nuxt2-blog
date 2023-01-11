<template>
  <article class="post-id-page-component">
    <div class="top">
      <div class="title">
        <h2>{{ post.title}}</h2>
        <nuxt-link to="/">
          <app-icon icon="el-icon-back" />
        </nuxt-link>
      </div>
      <div class="info">
        <small><app-icon icon="el-icon-time" /> {{ formatDate }}</small>
        <small>
          <app-icon icon="el-icon-view" /> {{ post.views}}
        </small>
      </div>
      <div class="image">
        <img :src="post.image" alt="post image" >
      </div>
    </div>
    <div class="middle">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolores nihil nisi nobis, odio pariatur quo quod sed soluta
        ut vel vero voluptate voluptates?
        Magnam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolores nihil nisi nobis, odio pariatur quo quod sed soluta
        ut vel vero voluptate voluptates?
        Magnam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        At dolores nihil nisi nobis, odio pariatur quo quod sed soluta
        ut vel vero voluptate voluptates?
        Magnam.</p>
    </div>
    <div class="bottom">
      <the-form
        v-if="canAddComment"
        :form-data="formData"
        :form-rules="formRules"
        :label-input="labelsInputs"
        :is-loading="isLoading"
        title="Добавить комментарий"
        button-text="Добавить комментарий"
        type="comment"
        @onSubmit="createCommentHandler"
      />

      <div
        v-if="post.comments.length"
        class="comments"
      >
        <the-comment
          v-for="(comment) in post.comments"
          :key="comment.author"
          :comment="comment.text"
          :username="comment.author"
          :date="comment.date"
        />
      </div>

      <div
        v-else
        class="x-text-center">Комментариев нет
      </div>

    </div>
  </article>
</template>

<script>
import TheComment from '@/components/views/post-page/TheComment/index.vue';
import TheForm from '@/components/common/TheForm/index.vue';
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module pages/post/_id.vue
 * @desc страница по пути /post/:id
 * @vue-data {Object} post - данные поста с сервера
 * @vue-data {Boolean} canAddComment - к каждому посту пользователь может
 * оставлять только один коммент
 * @vue-data {Object} formData - модель для инпутов комментария
 * @vue-data {Object} formRules - валидация инпутов комментария
 * @vue-data {Object} labelsInputs - массив для лайблов инпутов комментария
 * @vue-data {Boolean} isLoading - булевое значение состояние загрузки комментария
 * для кнопки отправки коммента
 * @vue-computed {String} formatDate - возвращает дату в нужном формате
 */
export default {
  name: 'PostIdPage',
  components: {
    TheComment,
    TheForm,
    AppIcon,
  },
  validate({ params }) {
    return !!params.id;
  },
  data() {
    return {
      canAddComment: true,
      formData: {
        first: '',
        second: '',
      },
      formRules: {
        first: [
          { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' },
        ],
        second: [
          { required: true, message: 'Введите ваш комментарий', trigger: 'blur' },
        ],
      },
      labelsInputs: ['Ваше имя', 'Текст комментария'],
      isLoading: false,
    };
  },
  async asyncData({ store, params, error }) {
    try {
      const post = await store.dispatch('posts/getPost', params.id);
      if (!post) return error({ message: `post ${post}`, statusCode: 404 });
      return { post };
    } catch (e) {
      return error({ message: e.message, statusCode: e.response.status });
    }
  },
  computed: {
    formatDate() {
      return new Date(this.post.date).toLocaleDateString();
    },
  },
  methods: {
    createCommentHandler(data) {
      this.isLoading = true;
      try {
        setTimeout(() => {
          this.$message.success('Комментарий добавлен');
          this.canAddComment = false;
        }, 2000);
      } catch (e) {
        this.$message.error('Ошибка добавления комментария');
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.post-id-page-component {
  max-width: 600px;
  margin: 0 auto;

  .top {
    margin-bottom: 24px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .image img {
    width: 100%;
    height: auto;
  }

  .middle {
    margin-bottom: 32px;
  }

}

</style>
