<template>
	<div id="app">
		<transition name="fade"  mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'app',
	 components: {
	}
}
</script>

<style type="text/css" lang="less">
	@import './assets/less/style.less';
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	#app {
		 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;		
	}	
	/*切换路由的动画*/
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>