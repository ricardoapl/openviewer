const state = {
  ports: [],
  networks: [],
  floatingIps: [],
  floatingPools: []
}

const mutations = {
  setPorts: (state, ports) => {
    state.ports = ports
  },
  setNetworks: (state, networks) => {
    state.networks = networks
  },
  setFloatingIps: (state, floatingIps) => {
    state.floatingIps = floatingIps
  },
  setFloatingPools: (state, floatingPools) => {
    state.floatingPools = floatingPools
  }
}

const actions = {
  getPorts ({ commit }) {
    // XXX Get URL by parsing this.$store.state.authentication.openstackAddress and placing it into networks state
    const url = 'http://127.0.0.1:9696/v2.0/ports'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setPorts'
        commit(mutation, response.data.ports)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getNetworks ({ commit }) {
    // XXX Get URL by parsing this.$store.state.authentication.openstackAddress and placing it into networks state
    const url = 'http://127.0.0.1:9696/v2.0/networks'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setNetworks'
        commit(mutation, response.data.networks)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getFloatingIps ({ commit }) {
    // XXX Get URL by parsing this.$store.state.authentication.openstackAddress and placing it into networks state
    const url = 'http://127.0.0.1:9696/v2.0/floatingips'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setFloatingIps'
        commit(mutation, response.data.floatingips)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getFloatingPools ({ commit }) {
    // XXX Get URL by parsing this.$store.state.authentication.openstackAddress and placing it into networks state
    const url = 'http://127.0.0.1:9696/v2.0/floatingip_pools'
    axios.get(url)
      .then(response => {
        console.log(response)
        const mutation = 'setFloatingPools'
        commit(mutation, response.data.floatingip_pools)
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
