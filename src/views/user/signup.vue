<template>
  <div class="register">
    <el-form :label-position="labelPosition" :rules="rules" label-width="80px" :model="formData">
      <el-form-item>
        <a href="/login">Sign In</a>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="formData.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="cpwd">
        <el-input v-model="formData.cpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formData)">signup</el-button>
        <el-button @click="resetForm('formName')">cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formData.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      labelPosition: "right",
      formData: {
        name: "",
        pwd: "",
        cpwd: ""
      },
      rules: {
        name: [{ required: true, message: "please input username", trigger: "blur" }],
        pwd: [{ required: true, message: "please input password", trigger: "blur" }],
        cpwd: [{ required: true, message: "please comfirm your password", trigger: "blur" },
               { validator:validatePass2,trigger: 'blur'}]
      }
    };
  },
  methods: {
    submitForm(Form) {
      const user = {
        username:Form.name,
        password:Form.pwd
      }
      this.$http
        .post("/signup", user)
        .then(({ data }) => {
          if (data.success) {
            this.$message.success("signup success");
            this.$router.push("/login");
          } else {
            this.$message.error("signup failed, try again");
          }
        })
        .catch(err => this.$message.error(err));
    },
    resetForm() {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.register {
  width: 400px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
