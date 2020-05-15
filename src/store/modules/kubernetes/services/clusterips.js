const state = {
    clusterips: [],
    totalclusterips: 0,
    inNamespace:1,
  }
  
  const mutations = {
    setClusterips: (state, clusterips) => {
      state.clusterips = clusterips
    },
    setTotalClusterips: (state, totalclusterips) => {
      state.totalclusterips = totalclusterips
    }
  }
  
  const actions = {
    getClusterips ({ commit }) {
      commit('setTotalClusterips', 0)
      // axios.get('api/v1/services?fieldSelector={spec.type=ClusterIP}')
      axios.get('api/v1/services')
        .then(response => {
          var clusterips = response.data.items.filter(service => service.spec.type=='ClusterIP');
          console.log('[Vuex/getClusterips] =>', clusterips)
          commit('setClusterips', clusterips)
          commit('setTotalClusterips', clusterips.length)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  
  const getters = {
    filteredClusteripsNamespace: (state) => (namespace) => {
      return state.clusterips.filter(obj => obj.metadata.namespace == namespace).length;
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  