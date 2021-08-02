<template>
  <el-container>
    <div class="tableHeader">
      <h2>Showing {{ total }} product(s)</h2>
    </div>
    <el-table
      :data="list.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      border
      style="width:100%"
    >
      <el-table-column
        label="Name"
        prop="name"
        width="400"
        sortable
      ></el-table-column>
      <el-table-column
        label="Price"
        prop="price"
        width="150"
        sortable
      ></el-table-column>
      <el-table-column
        label="Active"
        prop="status"
        width="150"
      >
        <template slot-scope="scope">
          <div>
            <el-button
              size="small"
              :type="scope.row.status ? 'success' : 'warning'"
              plain
              @click="toggleStatus(scope.row)"
            >
              {{  scope.row.status }}
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Tags"
        width="200"
      >
        <template slot-scope="scope">
          <div style="display: flex">
            <div v-for="(tag, index) in scope.row.tags" :key="index">
              <el-tag type="info">{{ tag }}</el-tag>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column 
        fixed="right"
        align="left"
        width="400"
      >
        <template slot="header" slot-scope>
          <div style="display:flex">
            <el-input 
              v-model="search"
              size="mini"
              placeholder="Type to search"
            ></el-input>
            <el-button
              type="success"
              size="mini"
              plain
              @click="openDrawer('new')"
            >
              + New
            </el-button>
          </div>
        </template>
        <template slot-scope="scope">
          <el-button 
            size="mini"
            type="primary"
            plain
          >
            <i class="ri-eye-line"></i> 
          </el-button>
          <el-button 
            size="mini"
            type="warning"
            plain
            @click="openDrawer('edit', scope)"
          >
            <i class="ri-edit-line"></i> 
          </el-button>
          <el-button 
            size="mini"
            type="danger"
            plain
            @click="remove(scope)"
          >
            <i class="ri-delete-bin-line"></i> 
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-drawer
      ref="drawer"
      :title="drawer.title"
      :visible.sync="drawer.visibility"
      :custom-class="drawer.mode"
      @closed="resetForm('productForm')"
    >
      <el-container class="newProductForm">
        <el-form ref="productForm" :model="productForm" :rules="productRules">
          <el-form-item label="Product Name" prop="name">
            <el-input v-model="productForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Product Price" prop="price">
            <el-input v-model="productForm.price"></el-input>
          </el-form-item>
          <el-form-item label="Product Tags" prop="tags">
            <el-select v-model="productForm.selectedTags" multiple>
              <el-option
                v-for="(tag,index) in tags"
                :key="index"
                :label="tag.label"
                :value="tag.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin-top: 15%">
            <el-button type="info" plain @click="submit('productForm')">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-container>
    </el-drawer>
  </el-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default ({
    name: 'ProductList',
    data() {
        return {
          search: '',
          editProduct: null,
          drawer: {
            title: '',
            mode: '',
            visibility: false
          },
          tags: [
            {label: 'Natural', value: 'Natural'},
            {label: 'No preserve', value: 'No preserve'},
            {label: 'Chem-Free', value: 'Chem-Free'}
          ],
          productForm: {
            name: '',
            price: null,
            selectedTags: []
          },
          productRules: {
            name: [
              {required: true, message: 'Please enter product name', trigger: 'blur'}
            ],
            price: [
              {required: true, message: 'Please enter product price', trigger: 'blur'},
            ],
            selectedTags: [
              {type: Array, required: true, message: 'Please choose the right tags', trigger: 'blur'}
            ]
          }
        }
      },
      computed: {
        ...mapGetters({
          list: 'product/getProducts',
          total: 'product/getTotalProducts'
        })
      },
      methods: {
        openDrawer(mode, data=null) {
          if(mode === 'new') {
            this.drawer.title = 'Add New Product'
            this.drawer.mode = 'new'
            this.drawer.visibility = true
          } else if (mode === 'edit') {
            this.editProduct = data.row
            this.productForm.name = data.row.name
            this.productForm.price = data.row.price
            this.productForm.selectedTags = data.row.tags
            this.drawer.title = 'Edit Product'
            this.drawer.mode = 'edit'
            this.drawer.visibility = true
          }
        },
        toggleStatus(product) {
          this.$store.dispatch('product/changeStatus', product)
        },
        submit(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              if (this.drawer.mode === 'edit') {
                this.$store.dispatch('product/update', {
                  product: this.editProduct,
                  update: this.productForm
                })
                this.drawer.visibility = false
              } else {
                this.$store.dispatch('product/add', this.productForm)
                this.resetForm(formName)
                this.$refs.drawer.closeDrawer()
              }
            }
          })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields()
        },
        remove(product) {
          this.$confirm('Are you sure you want to remove this product').then(
            _ => {
              this.$store.dispatch('product/remove', product.row)
              this.$notify({
                title: 'Success',
                message: 'Product Removed',
                type: 'success'
              });
            }
          ).catch(
            _ => {}
          )
        }
      }
  })
</script>

<style scoped>
  .el-container {
    display: block;
  }
  .tableHeader {
    background-color: white;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .newProductForm {
    margin: 0 10%;
    background-color: #ebfceb;
    padding: 5%;
  }
</style>