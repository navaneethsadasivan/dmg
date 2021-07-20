<template>
  <div>
    <el-container>
      <el-aside width="250px">
        <side-nav/>
      </el-aside>
      <el-container>
        <el-header>
          <banner/>
        </el-header>
        <el-main>
          <div style="height: 500px">
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Dashboard",
        computed: {
          user() {
            return this.$store.state.user.authenticated
          }
        }
    }
</script>

<style scoped>
  .el-aside {
    overflow: hidden;
  }
</style>
