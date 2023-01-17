<template>
  <el-table
    :data="posts"
    class="list-page-component"
  >
    <el-table-column
      prop="title"
      label="Название"
    />
    <el-table-column label="Дата">
      <template v-slot="{row: {date}}">
        <app-icon icon="el-icon-time" />
        <span class="date">{{ formatDate(date) }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотры">
      <template v-slot="{row: {views}}">
        <app-icon icon="el-icon-view" />
        <span class="views">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Комментарии">
      <template v-slot="{row: {comments}}">
        <app-icon icon="el-icon-message" />
        <span class="comment">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Действия">
      <template v-slot="{ row }">
        <the-tooltip
          text="Открыть пост"
          @click="openPost(row._id)"
        />
        <the-tooltip
          text="Удалить пост"
          button-type="danger"
          @click="removePost(row._id)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import AppIcon from '@/components/general/AppIcon/index.vue';
import TheTooltip from '@/components/common/TheTooltip/index.vue';
/**
 * @module pages/_admin/list/index.vue
 * @desc страница таблицы постов по маршруту /admin/list
 * @vue-data {Array} data - в компоненте удаляем посты, поэтому копируем в data пропс initialData
 * @vue-data {Array} posts - Список постов получаемый с сервера
 */
export default {
  name: 'ListPage',
  components: {
    TheTooltip,
    AppIcon,
  },
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    try {
      await store.dispatch('posts/getPosts');
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    openPost(id) {
      this.$router.push(`/admin/post/${id}`);
    },
    async removePost(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning',
        });
        await this.$store.dispatch('posts/removePost', id);
        this.$message.success('Пост удален');
      } catch (e) {
        //  Отмену удаления поста не обрабатываем
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-page-component {
  width: 100%;

  .comment,
  .views,
  .date {
    margin-left: 10px;
  }
}
</style>
