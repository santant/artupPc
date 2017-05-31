import Vue from 'vue'


// 分页
const PAGE_NO = 1
const PAGE_SIZE = 10
const platform='WX';
// 常量 API 接口地址
const HOST = 'http://192.168.82.13:86/minbo-test'

// 设置为请求头为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true

export default {	
		testBaidu:{
			//利用百度jsonp测试ajax
	  		jsonpBaidu:(texts) =>{ //jsonP百度
				return new Vue().$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+texts,{
					//修改jsonp的回调函数需要配置
					jsonp:'cb'
				})
	  		}
		}
}
  	


