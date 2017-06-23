<template>
	<div id="bbs-select">
		<mt-header title="选择产品">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>		
		<div class="bbsImg">
			<img src="../../../assets/img/bbs.png"/>
		</div>
		
		<dl class="slect_dl">
			<dt>
				颜色分类
			</dt>
			<dd>
				<div class="dd_slect dd_active"><b></b>智慧蓝</div>
				<div class="dd_slect"><b></b>欢乐红</div>
				<div class="dd_slect"><b></b>活力橙</div>
				<div class="dd_slect"><b></b>健康绿</div>
			</dd>
		</dl>
		<dl class="slect_dl">
			<dt>选择页数</dt>
			<dd>
				<div class="dd_slect dd_active">24页</div>
				<div class="dd_slect">28页</div>
			
			</dd>
		</dl>
		<dl class="slect_dl">
			<dt>选择尺寸</dt>
			<dd>
				<div class="dd_slect dd_active dd_slectWidth">170mm×235mm</div>
				<div class="dd_slect dd_slectWidth">170mm×235mm</div>			
			</dd>
		</dl>		
		<i style="height: 2.9375rem; display: block; width: 100%;"></i>
		<div class="cart_btn">
			
			<div class="price">
				合计<span><b>¥</b>88.00</span></div> 
			<div class="crectOrder">
				下一步
			</div>
		</div>
	</div>
	
	
</template>

<script>
</script>

<style>
</style>