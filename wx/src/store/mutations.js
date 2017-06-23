//引入状态
import * as types from './types'
//拿到的数据
import getters from './getters'

import  Api   from '../API.js'
import { Toast } from 'mint-ui';

const state = {
  count: 20,
  test2:'1',
  editImg:'',//和图片编辑页面传输的地址
  BBS:{
  	
  }  // 宝宝书
};
const mutations = {
	[types.ADD](state) {
		state.count++;
	},
	[types.TEST](state) {
		Toast('提示信息');
		Api.testBaidu.test('cors/login.do?format=json&username=admin11&password=123456&sessionId=3666a395ea96456dbded009fd14da1a8').then((res)=>{
		    state.test2 = res.data
//			Toast('提示信息');

		})	
		
		
		
	}
};
export default {
	state,
	mutations,
	getters
}