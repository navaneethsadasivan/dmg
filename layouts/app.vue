<template>
  <div class="container" style="display: flex">
    <side-nav/>
    <el-container>
      <el-header>
        <banner/>
      </el-header>
      <el-main>
        <Nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
    import SideNav from "../components/layout/side-nav";
    import Banner from "../components/layout/banner";
    export default {
        name: "Default",
      components: {Banner, SideNav}
    }
</script>

<style scoped>
  .el-main {
    background-color: #ebfceb;
  }
  .el-header {
    padding: 0;
  }
  .sideNav {
    width: 250px;
  }
</style>
