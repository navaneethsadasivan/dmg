<template>
    <el-card>
      <div slot="header">
        <span>{{ props.title }}</span>
      </div>
      <div>
        <el-row type="flex" justify="space-between">
          <el-col>
            <span>Type: </span>
          </el-col>
          <el-col>
            <span>{{ props.type }}</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col>
            <span>Category: </span>
          </el-col>
          <el-col>
            <span>{{ props.category }}</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col>
            <span>Color: </span>
          </el-col>
          <el-col>
            <span>{{ props.color }}</span>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col>
            <span>Description: </span>
          </el-col>
          <el-col>
            <span>{{ props.description }}</span>
          </el-col>
        </el-row>
      </div>
    </el-card>
</template>

<script>
    export default {
      name: "ProductItem",
      props: {
        title: {
          type: String,
          default: ''
        },
        type: {
          type: String,
          default: ''
        },
        category: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: ''
        },
        description: {
          type: String,
          default: ''
        }
      },
      data() {
        return {
          props: {
            title: ''
          }
        }
      }
    }
</script>

<style scoped>

</style>
