<template>

	<!--<router-link to='index'>
		index
	</router-link>-->
	<!--<router-link to=''>
		home
	</router-link>
	<router-link to=''>
		links
	</router-link>-->

	<div id="login">
		<div class="login">
			<form  class="el-form demo-ruleForm login-container el-form--label-left">
				<h3  class="title">系统登录</h3>
				<div  class="el-form-item is-required">
					
					<div class="el-form-item__content" style="margin-left: 0px;">
						<div  class="el-input">
							
							<input type="text" placeholder="账号" autocomplete="off" class="el-input__inner">
							
						</div>
						
					</div>
				</div>
				<div  class="el-form-item is-required">
					
					<div class="el-form-item__content" style="margin-left: 0px;">
						<div  class="el-input">
							<input type="password" placeholder="密码" autocomplete="off" class="el-input__inner">							
						</div>
					</div>
				</div> <label  class="el-checkbox remember"><span class="el-checkbox__input is-checked"><span class="el-checkbox__inner"></span><input type="checkbox" class="el-checkbox__original" value=""></span><span class="el-checkbox__label">记住密码<!----></span></label>
				<div  class="el-form-item" style="width: 100%;">
				
					<div class="el-form-item__content" style="margin-left: 0px;">
						<button  @click="login_delu" type="button" class="el-button el-button--primary" style="width: 100%;">
							
						<span>登录</span></button>
						
					</div>
				</div>
			</form>
		</div>

	</div>

</template>

<script>
	//vuejs逻辑
	export default {
	    methods: {
	      login_delu() {//登录的时候打开一条消息
	        this.$message('这是一条消息提示');
	      }
	    }
  }
	
</script>

<style>

</style>