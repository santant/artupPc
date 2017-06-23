<template>
	<div id="orderList">
		<mt-header title="我的订单">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="order">
			<ul>
				<li>
					<span>订单号</span>
					<span>875264405426667520</span>
					<span><i class="icon iconfont">&#xe68a;</i></span>
				</li>
				<li>
					<span>状态</span>
					<span>代付款</span>
				</li>
				<li class="ordersContent">
					<div class="orderContent">
						<ul>
							<li>
								<img src="../../assets/img/图层 3.png"/>
							</li>
							<li>
								<ul>
									<li>
										<span>宝宝书</span>
										<span>智慧蓝</span>
										<span>24页</span>
									</li>
									<li>170mm*235mm</li>
									<li>¥100.01</li>
								</ul>
							</li>
							<li>
								<span>X1</span>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<p>2017-06-09  13:32</p>
					<p>共1件商品</p>
					<p>合计：<span>¥100.01</span></p>
				</li>
				<li>
					<div>
						<p>取消订单</p>
						<p class="active">立即支付</p>
					</div>
				</li>
			</ul>
		</div>
		<!--订单-->
		<div class="order">
			<ul>
				<li>
					<span>订单号</span>
					<span>875264405426667520</span>
					<span><i class="icon iconfont">&#xe68a;</i></span>
				</li>
				<li>
					<span>状态</span>
					<span>代付款</span>
				</li>
				<li class="ordersContent">
					<div class="orderContent">
						<ul>
							<li>
								<img src="../../assets/img/图层 3.png"/>
							</li>
							<li>
								<ul>
									<li>
										<span>宝宝书</span>
										<span>智慧蓝</span>
										<span>24页</span>
									</li>
									<li>170mm*235mm</li>
									<li>¥100.01</li>
								</ul>
							</li>
							<li>
								<span>X1</span>
							</li>
						</ul>
					</div>
				</li>
				<li class="ordersContent">
					<div class="orderContent">
						<ul>
							<li>
								<img src="../../assets/img/图层 3.png"/>
							</li>
							<li>
								<ul>
									<li>
										<span>宝宝书</span>
										<span>智慧蓝</span>
										<span>24页</span>
									</li>
									<li>170mm*235mm</li>
									<li>¥100.01</li>
								</ul>
							</li>
							<li>
								<span>X1</span>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<p>2017-06-09  13:32</p>
					<p>共1件商品</p>
					<p>合计：<span>¥100.01</span></p>
				</li>
				<li>
					<div>
						<p>取消订单</p>
						<p class="active">立即支付</p>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
</script>
