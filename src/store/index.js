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

// KUBERNETES

import namespaces from './modules/kubernetes/modules/namespaces'
import nodes from './modules/kubernetes/modules/nodes'
import roles from './modules/kubernetes/modules/roles'
import deployments from './modules/kubernetes/modules/deployments'
import pods from './modules/kubernetes/modules/pods'

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
    orchestrations,
    namespaces,
    nodes,
    roles,
    pods,
    deployments,
  }
})
