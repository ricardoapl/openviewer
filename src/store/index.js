import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import images from './modules/images'
import instances from './modules/instances'
import networks from './modules/networks'
import volumes from './modules/volumes'
import segments from './modules/availability/segments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    images,
    instances,
    networks,
    volumes,
    segments
  }
})
