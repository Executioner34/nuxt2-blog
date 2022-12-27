<template>
    <el-table
      :data="data"
      class="list-page-component page"
    >
      <el-table-column
        prop="title"
        label="Название"
      />
      <el-table-column label="Дата">
        <template v-slot="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ formatDate(date) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Просмотры">
        <template v-slot="{row: {views}}">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Комментарии">
        <template v-slot="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Действия">
        <template v-slot="{ row }">
          <el-tooltip effect="dark" content="Открыть пост" placement="top">
            <el-button
              icon="el-icon-edit"
              type="primary"
              circle
              @click="openPost(row._id)"
            />
          </el-tooltip>
          <el-tooltip effect="dark" content="Удалить пост" placement="top">
            <el-button
              icon="el-icon-delete"
              type="danger"
              circle
              @click="removePost(row._id)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
/**
 * @module components/views/_admin/list/index.vue
 * @desc страница редактирования постов
 * @vue-prop {Array} initialData - массив постов на сайте
 * @vue-data {Array} data - в компоненте удаляем посты, поэтому копируем в data пропс initialData
 */
export default {
  name: 'ListPage',
  props: {
    initialData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      data: this.initialData,
    };
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
        await this.$store.dispatch('post/remove', id);
        this.data = this.data.filter((post) => post._id !== id);
        this.$message.success('Пост удален');
      } catch (e) {
      //  Отмену удаления поста не обрабатываем
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
}
</style>
