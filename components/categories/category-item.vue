<template>
  <el-row type="flex">
    <el-col>
      {{ name }}
    </el-col>
  </el-row>
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

</style>
