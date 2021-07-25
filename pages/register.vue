<template>
  <el-container>
    <el-card>
      <template slot="header">
        <span>Register</span>
      </template>
      <div class="loginCardBody">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
          <el-form-item label="Username" prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="Enter your username"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="Enter your password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Register</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </el-container>
</template>

<script>
    export default {
      name: "Register",
      data() {
        return {
          ruleForm: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {required: true, message: 'Please enter username', trigger: 'blur'}
            ],
            password: [
              {required: true, message: 'Please enter password', trigger: 'blur'},
              {min: 5, max: 12, message: 'Length must be 5 to 12', trigger: 'blur'}
            ]
          },
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$store.dispatch('user/register', {
                ...this.ruleForm
              })
            }
          })
        }
      }
    }
</script>

<style scoped>
  .el-container {
    margin-top: 7%;
    justify-content: center;
  }
  .el-card {
    width: 30%;
  }
</style>
