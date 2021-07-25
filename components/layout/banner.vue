<template>
    <div class="banner">
      <el-row type="flex" justify="space-between">
        <el-col :span="4" :offset="1" style="align-self: center">
          <span class="heading">DMG</span>
        </el-col>
        <el-col :span="8" class="auth">
          <div v-if="user.loggedIn">
            <NuxtLink
              to="/logout"
              style="text-decoration: none; color: white"
            >
              <el-avatar>{{user.avatar}}</el-avatar>
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink to="/login">Login</NuxtLink>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
    name: "Banner",
    data() {
      return {
        user: {
          name: Cookie.get('user'),
          loggedIn: Cookie.get('loggedIn'),
          avatar: 'AD'
        }
      }
    }
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
    padding-right: 5%;
  }
  .auth > a {
    color: white;
    text-decoration: none;
  }
  .el-avatar {
    background-color: white;
    color: black;
    font-size: large;
  }
</style>
