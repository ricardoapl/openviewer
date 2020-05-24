import FlaskindClient from '../../../clients/flaskind'

const state = {
  clusters: [],
  serverURL: '',
  clusterServer: ''
}

const mutations = {
  setClusters: (state, clusters) => {
    state.clusters = clusters
  },
  setServerURL: (state, url) => {
    state.serverURL = url
    FlaskindClient.defaults.baseURL = url
  },
  setClusterServer: (state, clusterServer) => {
    state.clusterServer = clusterServer
  }
}

const actions = {
  getClusters ({ commit }) {
    FlaskindClient.get('/kube/cluster')
      .then(response => {
        console.log('[Vuex/getClusters] =>', response.data.data)
        commit('setClusters', response.data.data)
      })
      .catch(error => {
        commit('setClusters', [])
        console.log(error)
      })
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
