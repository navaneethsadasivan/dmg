<template>
  <el-card shadow="always">
    <div style="display:flex; justify-content:space-around">
      <div class="header">
        <h3>{{title}}</h3>
      </div>
      <div class="icon">
        <i :class="icon" class="ri-2x"/>
      </div>
    </div>
    <el-divider/>
    <div class="details">
      <h1>{{ details.featuredValue }}</h1>
      <div v-for="detail in details.additionalDetails" :key="detail.name" style="width:50%">
        <div style="display: flex; justify-content: space-between">
          <span>{{detail.name}}</span>
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
          type: Object,
          default: () => {}
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
    margin: 0 0 1% 0;
  }
  .details {
    margin-left: 10%;
  }
  .icon {
    padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
