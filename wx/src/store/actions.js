import * as types from './types'
import  Api   from '../API.js'

export default {
	add: ({
		commit
	}) => {
		commit(types.ADD);
	},
	testBtn: ({
		commit,state
	}) => {
   		commit(types.TEST);
		alert('1')

		Api.testBaidu.test('cors/login.do?format=json&username=admin11&password=123456&sessionId=3666a395ea96456dbded009fd14da1a8').then((res)=>{
		 	commit(types.TEST,res.data);	
		})		

		
		
	},
	
	
}