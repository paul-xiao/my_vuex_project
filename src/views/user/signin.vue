<template>
  <div class="login">
    <el-form :label-position="labelPosition" label-width="80px" :model="formData" ref="formName">
      <el-form-item>
        new here? <a href="/signup">Sign Up</a>
       </el-form-item>
      <el-form-item label="username" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="formData.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formData)">signin</el-button>
        <el-button @click="resetForm('formName')">cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(Form) {
       this.$http.post('/signin',Form).then(({data}) => {
        if(data.success){
           this.$message.success('signin success')
           this.$store.commit('getToken',data)
           this.$router.push('/user')
        } else {
          this.$message.error('not authrized');
        }
       }).catch(err => this.$message.error(err));
    },
    resetForm(formName) {
      console.log(formName)
      this.$refs[formName].resetFields();
    } 
  }
};
</script>
<style lang="less">
  .login{
    width: 400px;
    height: 500px;
    margin: 0 auto;
    margin-top: 200px;
  }
</style>
