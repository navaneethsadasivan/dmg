<template>
    <el-table
      :data="categories"
      row-id="name"
      lazy
      :load="load"
      :tree-props="{children: 'items'}"
      default-expand-all
    >
      <el-table-column
        label="Category"
        prop="name"
        width="300"
      ></el-table-column>
      <el-table-column
        label="Active"
        prop="active"
        width="120"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="scope.row.active ? 'success' : 'warning'" 
            plain
            @click="toggle(scope.row)"
          >
            {{ scope.row.active }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="Description"
        prop="description"
        width="200"
      ></el-table-column>
      <el-table-column
        width="250"
        fixed="right"
        align="left"
      >
        <template slot="header">
          <el-input
            v-model="search"
            type="text"
            size="mini"
            placeholder="type to search"
          ></el-input>
        </template>
        <template slot-scope="scope">
          <el-button type="warning" size="mini" plain>
            <i class="ri-edit-line"></i>
          </el-button>
          <el-button type="danger" size="mini" plain @click="remove(scope)">
            <i class="ri-delete-bin-line"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: "CategoryList",
      data() {
        return {
          categoryCollapse: 0,
          search: ''
        }
      },
      computed: {
        ...mapGetters ({
          categories: 'category/getCategories'
        })
      },
      methods: {
        toggle(category) {
          this.$store.dispatch('category/toggle', category)
        },
        load(tree, treeNode, resolve) {
          resolve()
        },
        remove(category) {
          this.$confirm('Are you sure you want to remove this category').then(
            _ => {
              this.$store.dispatch('category/remove', category.row)
              this.$notify({
                  title: 'Success',
                  message: 'Category Removed',
                  type: 'success'
              });
            }
          ).catch(
              _ => {}
          )
        }
      }
    }
</script>

<style scoped>
  .categoryList > .el-collapse-item__header {
    text-align: center;
  }
  .categoryList > .el-collapse-item {
    margin: 5%;
  }
</style>
