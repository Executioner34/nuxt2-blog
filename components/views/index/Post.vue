<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
        <h3>Post title</h3>
        <small>
          <i class="el-icon-time"></i> {{ new Date().toLocaleString() }}
        </small>
    </header>
    <div class="post-body">
      <img src="https://traveller-eu.ru/sites/default/files/inline-images/2017-09-22%2009.50.03%202-800x533.jpg" alt="post image" class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span><i class="el-icon-message"></i> 12</span>
    </footer>
  </el-card>
</template>

<script>
/**
 * @module components/view/index/Post.vue
 * @desc статья для страницы home
 * @vue-prop {type} name - desc
 * @vue-data {type} name - desc
 * @vue-computed {type} name - desc
 */
export default {
  name: 'VPost',
  methods: {
    openPost() {
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-img {
    width: 100%;
    height: auto;
  }

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
}

</style>
