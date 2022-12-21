<template>
 <article class="post-details-page-component">
   <header class="post-header">
     <div class="post-title">
       <h1>Post Title</h1>
       <NuxtLink to="/">
         <i class="el-icon-back"></i>
       </NuxtLink>
     </div>
     <div class="post-info">
       <small><i class="el-icon-time"></i> {{ currentDate }}</small>
       <small>
         <i class="el-icon-view"></i> 42
       </small>
     </div>
     <div class="post-image">
       <img src="https://traveller-eu.ru/sites/default/files/inline-images/2017-09-22%2009.50.03%202-800x533.jpg" alt="post image" >
     </div>
   </header>
   <main class="post-content">
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
   </main>
   <footer></footer>
 </article>
</template>

<script>
import currentDate from '@/helpers/currentDate';
/**
 * @module components/views/post/PostDetails/PostDetails.vue
 * @desc компонент детальной информации поста
 * @vue-computed {String} currentDate - возвращает текущую дату в виде строки
 */

export default {
  name: 'PostDetailsPage',
  computed: {
    currentDate() {
      return currentDate();
    },
  },

};
</script>

<style lang="scss" scoped>
.post-details-page-component {
  max-width: 600px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 24px;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.post-image img {
  width: 100%;
  height: auto;
}

.post-content {
  margin-bottom: 32px;
}

</style>
