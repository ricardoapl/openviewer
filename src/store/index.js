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
import k8sauthentication from './modules/kubernetes/k8sauthentication'
import namespaces from './modules/kubernetes/namespaces'
import nodes from './modules/kubernetes/nodes'
import roles from './modules/kubernetes/roles'
import deployments from './modules/kubernetes/deployments'
import pods from './modules/kubernetes/pods'
import clusterips from './modules/kubernetes/services/clusterips'
import nodeports from './modules/kubernetes/services/nodeports'
import loadbalancers from './modules/kubernetes/services/loadbalancers'
import hpas from './modules/kubernetes/hpas'
import clusters from './modules/kubernetes/clusters.js'

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
    k8sauthentication,
    namespaces,
    nodes,
    roles,
    pods,
    deployments,
    clusterips,
    nodeports,
    loadbalancers,
    hpas,
    clusters
  }
})
