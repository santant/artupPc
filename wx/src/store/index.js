import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//处理数据
import mutations from './mutations'
//提交数据
import actions from './actions'

//给模块儿暴露出去
export default new Vuex.Store({	
	modules:{
		mutations
	},
	actions
});