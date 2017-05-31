<template>
	<div id="home">
		<div  class="header el-col el-col-24">
			<div  class="logo el-col el-col-10 logo-width">
				雅昌 Artup
			</div>
			<div  class="el-col el-col-10">
				<div  class="tools"><i  class="fa fa-align-justify"></i></div>
			</div>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link userinfo-inner"><img src="https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png" />张志刚 </span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided >退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			
		</div>
		<div class="pj_flex">
				<div class="pj_left_flex">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>导航一</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
						<el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
						<el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
					</el-menu>
				</div>
				<!--右侧的导航栏-->
				<div class="pj_right_flex">
					<section style="margin-bottom: 60px;"  class="content-container">					
						<el-col :span="24">
							<span class="title"><i>首页/</i><i>项目/</i><b>页面一</b></span>					
						</el-col>
						
						
						<!--<span>
							{{number2 |sum}}
						</span>-->
						
						
						<!--主页的跳转路由-->
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
						
						<!--<transition name="fade"  mode="out-in">
							<router-view></router-view>
						</transition>-->
					</section>
				</div>
						
	</div>
	</div>
</template>

<script>
	import Api from '../API.js'
	import filter from '../filter.js'
	console.log(Api.testBaidu)
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				number2:'11'
			}
		},
		methods: {	
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		 mounted(){ //页面加载完成
		 	//测试用api,调用ajax
			Api.testBaidu.jsonpBaidu('vue作者').then((res)=>{
				console.log(res)
			})
		 }
	}
</script>

<style type="text/css" lang="less">
	@import '../assets/less/style.less';

	
	
</style>