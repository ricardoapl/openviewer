const state = {
  servers: [],
  flavors: [],
  keypairs: []
}

const mutations = {
  setServers: (state, servers) => {
    state.servers = servers
  },
  setFlavors: (state, flavors) => {
    state.flavors = flavors
  },
  setKeypairs: (state, keypairs) => {
    state.keypairs = keypairs
  }
}

const actions = {
  getServers ({ commit }) {
    const url = '/compute/v2.1/servers/detail'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setServers'
        commit(mutation, response.data.servers)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getFlavors ({ commit }) {
    const url = '/compute/v2.1/flavors'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setFlavors'
        commit(mutation, response.data.flavors)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getKeypairs ({ commit }) {
    const url = '/compute/v2.1/os-keypairs'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setKeypairs'
        commit(mutation, response.data.keypairs)
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
