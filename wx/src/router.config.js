//import Home from './components/Home.vue'
import Login from './components/Login.vue'
import User from './components/user/userInfo.vue'
import NewAddress from './components/user/newAddress.vue'
import OrderList from './components/user/orderList.vue'

import Cart from './components/cart/cart.vue'
//宝宝书选择
import bbsSelect from './components/product/bbs/bbsSelect.vue'
//图片编辑
import editImg from './components/editImg/editImg.vue'

//BbsImg 宝宝书 图片上传
import BbsImg from './components/editImg/bbsImg.vue'

////导出路由
export default{
	routes:[
	 	{ 
	 		path: '/', component: User	 		
	 	},
//		{
//			path:'/', component:Home, //首页 home
//			children: [
//	            { path: '/orderList', component: orderList }
////	            { path: '/page5', component: Page5, name: '页面5' }
//     		 ]
//		},
		{ 
	 		path: '/Login', component: Login	//测试vuex 		
	 	},
		{
			path:'/User', component:User //个人列表
		},
		{
			path:'/NewAddress', component:NewAddress //新建地址
		},
		{
			path:'/OrderList', component:OrderList //订单列表
		},
		{
			path:'/cart', component:Cart //购物车
		},
		{
			path:'/bbsSelect', component:bbsSelect //宝宝书选择
		},
		{
			path:'/editImg', component:editImg //图片编辑
		},
		{
			path:'/BbsImg', component:BbsImg //宝宝书图片上传
		}		
	]
}
