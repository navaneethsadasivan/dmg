<template>
  <div class="categoryPage">
    <category-list/>
    <category-add/>
  </div>
</template>

<script>
    import CategoryList from "../components/categories/category-list";
    import CategoryAdd from "../components/categories/category-add";
    export default {
      name: "Categories",
      components: {CategoryAdd, CategoryList},
      layout: 'app'
    }
</script>

<style scoped>
  .categoryPage {
    display: flex;
    justify-content: space-between;
  }
</style>
