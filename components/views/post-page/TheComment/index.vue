<template>
  <el-card class="the-comment-component">
    <div class="top">
      <span>{{ username }}</span>
      <span><app-icon icon="el-icon-time" /> {{ date }}</span>
    </div>
    <div class="text">
      {{ comment }}
    </div>
  </el-card>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';

/**
 * @module components/views/post/_PostDetails/TheComment/index.vue
 * @desc компонент комментария на странице детальной информации поста
 * @vue-prop {String} comment - текст комментария
 * @vue-computed {String} currentDate - текущая дата и время
 */
export default {
  name: 'TheComment',
  components: {
    AppIcon,
  },
  props: {
    comment: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
      default: 'username',
    },
    date: {
      type: String,
      required: false,
      default: () => new Date().toLocaleDateString(),
    },
  },
  computed: {

  },
};
</script>

<style lang="scss" scoped>
.the-comment-component {
  margin-bottom: 16px;
  .header {
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
