import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import slide from './modules/slide'
import content from './modules/content'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    slide,
    content
  }
})
