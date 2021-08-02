<template>
  <el-container>
    <el-header>
      <span>Showing {{total}} items</span>
      <el-button
        type="success" plain
        @click="drawer.visibility = true"
      >
        + New
      </el-button>
    </el-header>
    <el-main>
      <div v-if="list" class="items">
        <div v-for="(product,index) in list" :key="index" style="width: 30%">
          <product-item
            :product="product"
          />
        </div>
      </div>
    </el-main>

    <el-drawer
      ref="drawer"
      title="Add New Product"
      :visible.sync="drawer.visibility"
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

    export default {
      name: "ProductTest",
      data() {
        return {
          drawer: {
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
        submit(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$store.dispatch('product/add', this.productForm)
              this.resetForm(formName)
              this.$refs.drawer.closeDrawer()
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
  .el-container {
    background-color: white;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
  }
  .el-header > span {
    font-size: x-large;
    align-self: center;
  }
  .el-header > .el-button {
    width: 10%;
    height: 70%;
    align-self: center;
  }
  .items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .newProductForm {
    margin: 0 10%;
    background-color: #ebfceb;
    padding: 5%;
  }
  .el-form {
    width: 100%;
  }
</style>
