const state = {
  servers: {},
  flavors: {}
}

const mutations = {
  setServers: (state, servers) => {
    state.servers = servers
  },
  setFlavors: (state, flavors) => {
    state.flavors = flavors
  }
}

const actions = {
  getServers ({ commit }) {
    axios.get('/compute/v2.1/servers/detail')
      .then(response => {
        console.log(response)
        commit('setServers', response.data.servers)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getFlavors ({ commit }) {
    axios.get('/compute/v2.1/flavors')
      .then(response => {
        console.log(response)
        commit('setFlavors', response.data.flavors)
      })
      .catch(error => {
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
