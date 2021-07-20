<template>
    <div class="banner">
      <el-row type="flex" justify="space-between">
        <el-col :span="6" :offset="1" style="align-self: center">
          <span class="heading">DMG</span>
        </el-col>
        <el-col :span="6" class="auth">
          <NuxtLink to="/login">Login</NuxtLink>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 100%;
    background-color: #008000;
  }
  .el-row {
    height: 100%
  }
  .heading {
    font-size: x-large;
    font-family: "Times New Roman",serif;
    font-weight: bold;
    color: white;
  }
  .auth {
    align-self: center;
    text-align: right;
    padding-right: 10%;
  }
  .auth > a {
    color: white;
    text-decoration: none;
  }
</style>
