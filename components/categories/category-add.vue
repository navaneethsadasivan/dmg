<template>
  <el-card>
    <template slot="header">
      Add Category/Category Item
    </template>
    <div>
      <el-collapse v-model="addCollapse" accordion>
        <el-collapse-item title="Add New Category" name="1">
          <el-form ref="categoryAddForm" :model="categoryAddForm" :rules="addRules">
            <el-form-item label="Category" prop="name">
              <el-input v-model="categoryAddForm.name"/>
            </el-form-item>
            <el-form-item label="Description" prop="description">
              <el-input v-model="categoryAddForm.description" type="textarea"/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" plain @click="submitCategoryForm('categoryAddForm')">Submit</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-collapse-item title="Add New Category Item" name="2">
          <el-form ref="categoryItemAddForm" :model="categoryItemAddForm" :rules="addItemRules">
            <el-form-item label="Category" prop="category">
              <el-select v-model="categoryItemAddForm.category">
                <el-option
                  v-for="(category,index) in categories"
                  :key="index"
                  :label="category.name"
                  :value="category.name"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Item" prop="item">
              <el-input v-model="categoryItemAddForm.item"/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" plain @click="submitCategoryItemForm('categoryItemAddForm')">Submit</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: "CategoryAdd",
      data() {
        return {
          categoryAddForm: {
            name: '',
            description: ''
          },
          categoryItemAddForm: {
            category: '',
            item: ''
          },
          addRules: {
            name: [
              {required: true, message:'Please enter category', trigger:'blur'}
            ],
            description: [
              {required: true, message:'Please enter description', trigger:'blur'}
            ]
          },
          addItemRules: {
            category: [
              {required: true, message:'Please choose a category', trigger:'blur'}
            ],
            item: [
              {required: true, message: 'Please enter name of new category item', trigger:'blur'}
            ]
          },
          addCollapse: '2'
        }
      },
      computed: {
        ...mapGetters ({
          categories: 'category/getCategories'
        })
      },
      methods: {
        submitCategoryForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              const payload = {
                name: this.categoryAddForm.name,
                description: this.categoryAddForm.description,
                items: []
              }
              this.$store.dispatch('category/addNewCategory', payload)
              this.resetForm(formName)
            }
          })
        },
        submitCategoryItemForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              const payload = {
                name: this.categoryItemAddForm.category,
                item: this.categoryItemAddForm.item
              }
              this.$store.dispatch('category/addNewCategoryItem', payload)
              this.resetForm(formName)
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields()
        }
      }
    }
</script>

<style scoped>
  .el-collapse {
    border-top: 0;
  }
</style>
