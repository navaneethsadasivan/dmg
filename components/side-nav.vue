<template>
    <el-menu
      background-color="#008000"
      text-color="#fff"
      active-text-color="#000"
    >
      <el-menu-item index="1">
        <NuxtLink to="/product" style="text-decoration: none; color: white">Product</NuxtLink>
      </el-menu-item>
      <el-menu-item index="2">
        Categories
      </el-menu-item>
      <el-menu-item index="3">
        Orders
      </el-menu-item>
      <el-menu-item index="4">
        Test
      </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideNav"
    }
</script>

<style scoped>
  .el-menu {
    height: 100%;
    padding-top: 80px;
  }
</style>
