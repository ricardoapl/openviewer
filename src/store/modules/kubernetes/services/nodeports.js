const state = {
    nodeports: [],
    totalnodeports: 0,
    inNamespace:1,
  }
  
  const mutations = {
    setNodeports: (state, nodeports) => {
      state.nodeports = nodeports
    },
    setTotalNodeports: (state, totalnodeports) => {
      state.totalnodeports = totalnodeports
    }
  }
  
  const actions = {
    getNodeports ({ commit }) {
      commit('setTotalNodeports', 0)
    //   axios.get('api/v1/services?fieldSelector={spec.type=NodePort}')
      axios.get('api/v1/services')
        .then(response => {
            var nodeports = response.data.items.filter(service => service.spec.type=='NodePort');
            console.log('[Vuex/getNodeports] =>', nodeports)
            commit('setNodeports', nodeports)
            commit('setTotalNodeports', nodeports.length)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  
  const getters = {
    filteredNodeportsNamespace: (state) => (namespace) => {
      return state.nodeports.filter(obj => obj.metadata.namespace == namespace).length;
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  