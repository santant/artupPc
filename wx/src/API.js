import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
// 常量 API 接口地址
const HOST = 'http://192.168.82.119:9090/artup-build-admin/builder/admin/'

//用户名全局变量获取
//const sessionIds = localStorage.getItem("sessionId");
////只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
//if (!sessionIds) {
//	alert('用户信息不存在!');  
//	location.href='#/'
//}
const VueHttp = new Vue();
export default {	
		testBaidu:{
			//利用百度jsonp测试ajax
//	  		jsonpBaidu:(texts) =>{ //jsonP百度
//				return new Vue().$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+texts,{
//					//修改jsonp的回调函数需要配置
//					jsonp:'cb'
//				})
//	  		},
	  		test:(inter)=>{
	  			return  VueHttp.$http.get(HOST+inter)   
	  		}
		}
	
}
  	


