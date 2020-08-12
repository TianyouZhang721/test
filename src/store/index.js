import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations,
    actions
})