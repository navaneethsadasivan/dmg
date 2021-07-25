<template>
  <el-card shadow="always">
    <div class="header">
      <h2>{{title}}</h2>
    </div>
    <el-divider/>
    <div>
      <div class="icon">
        <i :class="icon" class="ri-4x"></i>
      </div>
      <el-divider/>
      <div v-for="detail in details" :key="detail.name" class="details">
        <div style="display: flex">
          <span>{{detail.name}} : </span>
          <span>{{detail.value}}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
    export default {
      name: "InfoCard",
      props: {
        title: {
          type: String,
          default: ''
        },
        icon: {
          type: String,
          default: ''
        },
        details: {
          type: Array,
          default: () => []
        }
      }
    }
</script>

<style scoped>
  .el-card {
    width: 20%;
    margin: 2%;
  }
  .el-divider {
    margin: 0 0 10% 0;
  }
  .header {
    padding: 1%;
    text-align: center;
  }
  .icon {
    padding: 1%;
    display: flex;
    justify-content: center;
  }
  .details {
    display: flex;
    justify-content: center;
  }
</style>
