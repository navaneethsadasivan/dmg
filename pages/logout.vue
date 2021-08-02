<template>
    <div>
      <el-container>
        <el-card>
          <template slot="header">
            <span>Are you sure you want to logout?</span>
          </template>
          <el-row type="flex" justify="space-between">
            <el-button type="primary" @click="logOut">Yes</el-button>
            <el-button @click="goToHome">No</el-button>
          </el-row>
        </el-card>
      </el-container>
    </div>
</template>

<script>
    export default {
      name: "Logout",
      methods: {
        goToHome() {
          this.$store.dispatch('dashboard/doUpdateItem', '1')
          this.$router.push('/')
        },
        logOut() {
          this.$store.dispatch('user/logout')
        }
      }
    }
</script>

<style scoped>
  .el-container {
    margin-top: 15%;
    justify-content: center;
  }
  .el-card {
    width: 30%;
  }
</style>
