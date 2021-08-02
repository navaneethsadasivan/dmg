<template>
  <div class="categoryPage">
    <div style="width:65%; margin-right: 5%">
      <category-list/>
    </div>
    <div style="width: 30%">
      <category-add/>
    </div>
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
