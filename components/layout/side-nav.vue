<template>
  <div>
    <el-menu
      :collapse="isCollapse"
      active-text-color="#008000"
      :default-active="isActive"
    >
      <div class="menuToggle">
        <i class="ri-menu-line ri-xl" @click="toggle"></i>
      </div>
      <li v-for="(menuItem, index) in pages" :key="index">
        <NuxtLink
          :to="menuItem.path"
          style="text-decoration: none; color: black"
        >
          <el-menu-item :index="(index+1).toString()" @click="updateItem((index+1).toString())">
            <i :class="menuItem.icon" class="ri-xl"></i>
            <span slot="title">
              {{menuItem.name}}
            </span>
          </el-menu-item>
        </NuxtLink>
      </li>
    </el-menu>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      name: "SideNav",
      data() {
        return {
          pages: [
            {path: '/', name: 'Home', icon: 'ri-home-2-line'},
            {path: '/products', name: 'Products', icon: 'ri-store-fill'},
            {path: '/categories', name: 'Categories', icon: 'ri-file-copy-line'},
            {path: '/orders', name: 'Orders', icon: 'ri-archive-line'}
          ]
        }
      },
      computed: {
        ...mapGetters({
          isCollapse: 'dashboard/getNavBarState',
          isActive: 'dashboard/getNavBarCurrentItem'
        })
      },
      methods: {
        ...mapActions({
          toggle: 'dashboard/doToggle',
          updateItem: 'dashboard/doUpdateItem'
        })
      }
    }
</script>

<style scoped>
  .el-menu--collapse {
    padding-top: 20%;
    height: 100%;
  }
  .el-menu--collapse > .menuToggle {
    justify-content: center;
  }
  .el-menu--collapse > li {
    padding-top: 20%;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 250px;
    height: 100%;
  }
  .el-menu-item > span{
    font-size: large;
  }
  .ri-xl {
    vertical-align: middle;
  }
  .menuToggle {
    display: flex;
    padding: 5%;
    justify-content: flex-end;
  }
  .menuToggle > i {
    padding: 5%;
  }
</style>
