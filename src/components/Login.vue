<template>
	<div id="login">
		<div class="login">
			<h4 class="title">登录系统</h4>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
				  <el-form-item label="账号" prop="name">
				    <el-input style="width: 300px;" placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="password">
				    <el-input style="width: 300px;" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
				  </el-form-item>
				  
				  <el-checkbox style="margin: 10px 0 20px 10px;" v-model="ruleForm.checked">记住密码</el-checkbox>

				  <el-form-item>
				    <el-button style="width: 100%;"  type="primary" @click="submitForm('ruleForm')">登录</el-button>
				    <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
				  </el-form-item>
			</el-form>
		</div>

	</div>

</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: '',
          checked:true
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 25, message: '密码长度在6个字符以上', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {//验证之后的处理
          this.$message('这是一条消息提示');
            alert('submit!');
          } else {//出错的处理
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

</style>