<template>
    <div class="categoryList">
      <el-collapse v-model="categoryCollapse" accordion>
        <div v-for="(category,index) in categories" :key="index">
          <el-collapse-item :title="category.categoryName" :name=index>
            <div v-for="(categoryItem, itemIndex) in category.categoryItems" :key="itemIndex">
              <category-item :name="categoryItem.itemName"/>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CategoryItem from "./category-item";

    export default {
      name: "CategoryList",
      components: {CategoryItem},
      data() {
        return {
          categoryCollapse: 0
        }
      },
      computed: {
        ...mapGetters ({
          categories: 'category/getCategories'
        })
      }
    }
</script>

<style scoped>
  .categoryList {
    width: 700px;
    margin: 0 10px;
  }
  .categoryList > .el-collapse-item {
    margin: 5%;
  }
</style>
