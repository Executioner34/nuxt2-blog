<template>
  <el-card class="post-details-page-comment-component">
    <div class="comment-header">
      <span>Person name {{ comment}}</span>
      <span><i class="el-icon-time"></i> {{ currentDate }}</span>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>

<script>
import currentDate from '@/helpers/currentDate';

/**
 * @module components/views/post/_PostDetails/TheComment/TheComment.vue
 * @desc компонент комментария на странице детальной информации поста
 * @vue-prop {String || Number} component - текст комментария
 * @vue-computed {String} currentDate - текущая дата и время
 */
export default {
  name: 'PostDetailsPageComment',
  props: {
    comment: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    currentDate() {
      return currentDate();
    },
  },
};
</script>

<style lang="scss" scoped>
.post-details-page-comment-component {
  margin-bottom: 16px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.comment-text {
  white-space: pre-line;
}
</style>
