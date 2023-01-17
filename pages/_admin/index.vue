<template>
  <div class="admin-page-component">
    <h2>Welcome to Admin Page</h2>
  </div>
</template>

<script>
/**
 * @module pages/_admin/index.vue
 * @desc страница по маршруту /admin
 */
export default {
  name: 'AdminPage',
  layout: 'admin',
  middleware: ['admin-auth'],
};
</script>
