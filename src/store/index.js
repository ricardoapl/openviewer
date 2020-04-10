import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import images from './modules/images'
import instances from './modules/instances'
import networks from './modules/networks'
import volumes from './modules/volumes'
import notifications from './modules/availability/notifications'
import segments from './modules/availability/segments'
import orchestrations from './modules/orchestrations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
    images,
    instances,
    networks,
    volumes,
    notifications,
    segments,
    orchestrations
  }
})
