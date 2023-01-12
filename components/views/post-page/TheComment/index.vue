<template>
  <el-card class="the-comment-component">
    <div class="heading">
      <span>{{ username }}</span>
      <span><app-icon icon="el-icon-time" /> {{ formatDate }}</span>
    </div>
    <div class="text">
      {{ comment }}
    </div>
  </el-card>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';

/**
 * @module components/views/post-page/TheComment/index.vue
 * @desc компонент комментария на странице детальной информации поста
 * @vue-prop {String} comment - текст комментария
 * @vue-prop {String} username - автор комментария
 * @vue-prop {String} date - дата создания комментария в формате YYYY-mm-dd
 * @vue-computed {String} formatDate - форматирует дату в строку в необходимый формат
 */
export default {
  name: 'TheComment',
  components: {
    AppIcon,
  },
  props: {
    comment: {
      type: String,
      required: false,
      default: 'Lorem ipsum dolor sit amet.',
    },
    username: {
      type: String,
      required: false,
      default: 'username',
    },
    date: {
      type: String,
      required: false,
      default: () => new Date().toDateString(),
    },
  },
  computed: {
    formatDate() {
      return new Date(this.date).toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
.the-comment-component {
  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;
  }

  .text {
    white-space: pre-line;
  }
}

</style>
