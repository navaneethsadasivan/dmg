<template>
  <div class="categoryItem">
    <el-row type="flex">
      <el-col>
        {{ name }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "CategoryItem",
      props: {
        name: {
          type: String,
          default: ''
        }
      }
    }
</script>

<style scoped>
  .categoryItem {
    padding: 2%;
  }
</style>
