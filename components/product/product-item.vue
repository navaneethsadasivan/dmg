<template>
    <el-card shadow="hover">
      <div>
        <div class="block">
          <el-image fit="fill">
          </el-image>
        </div>
        <el-divider/>
        <div class="cardBody">
          <el-switch
            :value="product.status"
            active-text="Active"
            inactive-text="Inactive"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="toggle(product)"
          ></el-switch>
          <div class="productInfo">
            <div>
              <h3>{{product.name}}</h3>
              <div class="tagGroup">
                <div v-for="tag in product.tags" :key="tag">
                  <el-tag effect="plain" type="info">{{tag}}</el-tag>
                </div>
              </div>
            </div>
            <div class="price">
              <span>&#8377;{{ product.price }}</span>
            </div>
          </div>
          <div class="itemButton">
            <el-button type="success" plain>
              <i class="ri-shopping-basket-line"></i>
              <span>Add to Basket</span>
            </el-button>
            <el-button type="warning" plain @click="drawer.visible = true">
              <i class="ri-edit-line"></i>
              <span>Edit</span>
            </el-button>
          </div>
        </div>
      </div>
      <el-drawer
        ref="editDrawer"
        :visible.sync="drawer.visible"
        title="Edit Product"
      >
        <el-container class="newProductForm">
          <el-form ref="productForm" :model="productForm" :rules="productRules">
            <el-form-item label="Product Name" prop="name">
              <el-input v-model="productForm.editName"></el-input>
            </el-form-item>
            <el-form-item label="Product Price" prop="price">
              <el-input v-model="productForm.editPrice"></el-input>
            </el-form-item>
            <el-form-item label="Product Tags" prop="tags">
              <el-select v-model="productForm.editTags" multiple>
                <el-option
                  v-for="(tag,index) in tags"
                  :key="index"
                  :label="tag.label"
                  :value="tag.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="margin-top: 15%">
              <el-button type="info" plain @click="submit('productForm', product)">Submit</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-drawer>
    </el-card>
</template>

<script>
    export default {
      name: "ProductItem",
      props: {
        product: {
          type: Object,
          default: null
        }
      },
      data() {
        return {
          productStatus: this.status,
          drawer: {
            visible: false
          },
          tags: [
            {label: 'Natural', value: 'Natural'},
            {label: 'No preserve', value: 'No preserve'},
            {label: 'Chem-Free', value: 'Chem-Free'}
          ],
          productForm: {
            editName: this.product.name,
            editPrice: this.product.price,
            editTags: this.product.tags
          },
          productRules: {
            editName: [
              {required: true, message: 'Please enter product name', trigger: 'blur'}
            ],
            editPrice: [
              {required: true, message: 'Please enter product price', trigger: 'blur'},
            ],
            editTags: [
              {type: Array, required: true, message: 'Please choose the right tags', trigger: 'blur'}
            ]
          }
        }
      },
      methods: {
        toggle(props) {
          this.$store.dispatch('product/changeStatus', props)
        },
        submit(formName, props) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$store.dispatch('product/update', {
                product: props,
                update: this.productForm
              })
              this.resetForm(formName)
              this.$refs.editDrawer.closeDrawer()
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
  .el-card {
    width: 300px;
    margin: 10px;
  }
  .block {
    display: flex;
    justify-content: center;
    height: 250px;
  }
  .el-image {
    width: 75%;
    height: 100%;
  }
  .productInfo {
    display: flex;
    justify-content: space-between;
  }
  .price {
    width: 50%;
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: xx-large;
    font-weight: bold;
  }
  .tagGroup {
    display: flex;
  }
  .itemButton {
    padding-top: 10%;
    display: flex;
    justify-content: center;
  }
  .itemButton > .el-button {
    width: 75%;
  }
  .newProductForm {
    margin: 0 10%;
    background-color: #f0d4a3;
    padding: 5%;
  }
  .el-form {
    width: 100%;
  }
</style>
