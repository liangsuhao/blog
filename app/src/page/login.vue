<template>
    <div class="loginBlock">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
            <h3 class="title">登陆界面</h3>
            <el-form-item prop="account">
              <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
            <el-button type="primary" class="loginBtn"
                        @click.native.prevent="handleSubmit" :loading="logining">登录
            </el-button>
        </el-form-item>
  </el-form>  
    </div>
</template>

<script>
  export default {
    data(){
      return {
        logining: false,
        loginForm: {
          account: 'admin',
          checkPass: '123456'
         },
        loginRules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
         },
        checked: true
       }
     },
 
  methods: {
      handleSubmit() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.$api.loginApi.loginin(this.loginForm).then((arr)=>{
              alert(arr.msg);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="less" scoped>
 .loginBlock {
   width: 100%;
   height: 100%;
   background:linear-gradient(176deg, #76baff, #b1d2f4);
   position: absolute;
 }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    background: #2d3a4b;
    color: #fff;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
    .loginBtn {
        width: 100%;
        font-size: 20px;
        letter-spacing: 10px;
    }
  }
</style>