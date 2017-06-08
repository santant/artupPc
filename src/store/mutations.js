import {ADD} from './types'
import bbb from './types'
import getters from './getters'
console.log(bbb)
const state = {
  count: 20
};
console.log(ADD)
const mutations = {
	[ADD](state) {
		state.count++;
	}
};
export default {
	state,
	mutations,
	getters
}