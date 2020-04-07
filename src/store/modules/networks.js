const state = {
  networks: []
}

const mutations = {
  setNetworks: (state, networks) => {
    state.networks = networks
  }
}

const actions = {
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
