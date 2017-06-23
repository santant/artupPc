<template>
	<div id="home">
		<mt-header @click.native='testBtn'>
		 <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button>关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		 
		 	<h3>welcome vuex-demo</h3>
		    <input type="button" value="增加" @click="add">
		    <div>
		      现在数字为: {{count}}
		    </div>
		    <div>
		      现在数字为test: {{test2}}
		    </div>
		    <i class="icon iconfont">&#xe600;</i>
	</div>
</template>
	
<script>
import { Toast ,Indicator ,MessageBox,Swipe, SwipeItem} from 'mint-ui';	
import {mapGetters, mapActions} from 'vuex'
import  Api   from '../API.js'
import filter  from '../filter.js'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   //拿到数据
    computed:mapGetters([
      'count',
      'test2'
    ]),
    //提交方法
    methods:mapActions([
      'add','testBtn'
    ]),
//  methods:{
//	    	mapActions([
//	      'add','testBtn'
//	    ])
//  },
    mounted(){
		Api.testBaidu.test('cors/login.do?format=json&username=admin11&password=123456&sessionId=3666a395ea96456dbded009fd14da1a8').then((res)=>{
		 this.$store.state.mutations.test2 = '222'
//		 this.$store.state.test2 = res.data;
		 console.log()
		})
	}
}

</script>

<style type="text/css" lang="less">

</style>