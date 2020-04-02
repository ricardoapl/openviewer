const state = {
  servers: {},
  flavors: {},
  networks: [],
  images: []
}

const mutations = {
  setServers: (state, servers) => {
    state.servers = servers
  },
  setFlavors: (state, flavors) => {
    state.flavors = flavors
  },
  setNetworks: (state, networks) => {
    state.networks = networks
  },
  setImages: (state, images) => {
    state.images = images
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
  },
  getNetworks ({ commit }) {
    // XXX Get URL by parsing this.$store.state.authentication.openstackAddress
    const url = 'http://127.0.0.1:9696/v2.0/networks'
    axios.get(url)
      .then(response => {
        console.log(response)
        commit('setNetworks', response.data.networks)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getImages ({ commit }) {
    axios.get('/image/v2/images')
      .then(response => {
        console.log(response)
        commit('setImages', response.data.images)
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
