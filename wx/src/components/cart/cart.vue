<template>
	<div id="cart">
		<mt-header title="购物车">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button>关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<!--购物车列表-->
		<ul class="cartList">
			<li>
				<div class="div_select">
					<b class=""></b>
				</div>
				<div class="div_comenter">
					<div class="img_cart">
						<img src="../../assets/img/bbs.png"/>
					</div>
					<ol class="img_msg">
						<li>宝宝书  智慧蓝 24页</li>
						<li>170mm*235mm</li>
						<li>2017-06-09  13:32</li>
						<li>¥100.01</li>
					</ol>
				</div>
				<div class="div_number">
					<ol>
						<li>减</li>
						<li>10</li>
						<li>加</li>
					</ol>
				</div>
			</li>
			<li>
				<div class="div_select">
					<b class="activeSelect"><i class="icon iconfont">&#xe672;</i></b>
				</div>
				<div class="div_comenter">
					<div class="img_cart">
						<img src="../../assets/img/bbs.png"/>
					</div>
					<ol class="img_msg">
						<li>宝宝书  智慧蓝 24页</li>
						<li>170mm*235mm</li>
						<li>2017-06-09  13:32</li>
						<li>¥100.01</li>
					</ol>
				</div>
				<div class="div_number">
					<ol>
						<li>减</li>
						<li>10</li>
						<li>加</li>
					</ol>
				</div>
			</li>			
		</ul>
		<!--购物车底部-->
		<i style="height: 2.9375rem;display: block;width: 100%;"></i>
		<div class="cart_btn">
			<div class="all_select">
				<b><i></i></b> 
				<span>全选</span>
			</div>
			<div class="price">
				合计<span><b>¥</b>88.00</span>
			</div>
			<div class="crectOrder">
				结算
			</div>
		</div>
	</div>
</template>
	
<script>
</script>

<style>
</style>