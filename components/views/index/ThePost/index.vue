<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: 0 }"
    class="index-page-component post"
  >
    <header slot="header" class="post-header">
      <h3>Post Title</h3>
      <small>
        <i class="el-icon-time"></i> {{ currentDate }}
      </small>
    </header>
    <div class="post-body">
      <img src="https://traveller-eu.ru/sites/default/files/inline-images/2017-09-22%2009.50.03%202-800x533.jpg" alt="post image" class="post-img">
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>
      <span>
       <i class="el-icon-message"></i> 12
     </span>
    </footer>
  </el-card>
</template>

<script>
import currentDate from '@/helpers/currentDate';
/**
 * @module components/views/index/ThePost/index.vue
 * @desc компонент поста
 * @vue-computed {String} currentDate - возвращает текущую дату в строковом формате
 */
export default {
  name: 'IndexPage',
  methods: {
    openPost() {
      this.$router.push('/post/1');
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
.post {
  margin-bottom: 20px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-img {
  width: 100%;
  height: auto;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
</style>
