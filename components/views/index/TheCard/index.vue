<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: 0 }"
    class="the-post-component"
  >
    <div slot="header" class="header">
      <h3>{{ postData.title }}</h3>
      <small>
        <app-icon icon="el-icon-time" /> {{ formatDate }}
      </small>
    </div>
    <div class="body">
      <img
        :src="postData.image"
        alt="post image"
        class="img">
    </div>
    <div class="footer">
      <el-button round @click="openPost(postData._id)">Открыть</el-button>
      <span>
       <app-icon icon="el-icon-message" /> {{ postData.comments.length }}
     </span>
    </div>
  </el-card>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';
/**
 * @module components/views/index/ThePost/index.vue
 * @desc компонент поста
 * @vue-props {Object} postData - данные для поста
 * @vue-computed {String} formatDate - форматирует дату в строку в необходимый формат
 */
export default {
  name: 'ThePost',
  components: {
    AppIcon,
  },
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openPost(id) {
      this.$router.push(`/post/${id}`);
    },
  },
  computed: {
    formatDate() {
      return new Date(this.postData.date).toLocaleString();
    },
  },
};
</script>

<style lang="scss" scoped>
.the-post-component {
  margin-bottom: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img {
    width: 100%;
    height: auto;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
}

</style>
