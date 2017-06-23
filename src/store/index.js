import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//处理数据
import mutations from './mutations'
//提交数据
import actions from './actions'

console.log(mutations)
export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});