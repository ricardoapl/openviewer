const state = {
    loadbalancers: [],
    totalloadbalancers: 0,
    inNamespace:1,
  }
  
  const mutations = {
    setLoadbalancers: (state, loadbalancers) => {
      state.loadbalancers = loadbalancers
    },
    setTotalLoadbalancers: (state, totalloadbalancers) => {
      state.totalloadbalancers = totalloadbalancers
    }
  }
  
  const actions = {
    getLoadbalancers ({ commit }) {
      commit('setTotalLoadbalancers', 0)
      // axios.get('api/v1/services?fieldSelector={spec.type=LoadBalancer}')
      axios.get('api/v1/services')
        .then(response => {
          var loadbalancers = response.data.items.filter(service => service.spec.type=='LoadBalancer');
          console.log('[Vuex/getLoadbalancers] =>', loadbalancers)
          commit('setLoadbalancers', loadbalancers)
          commit('setTotalLoadbalancers', loadbalancers.length)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  
  const getters = {
    filteredLoadbalancersNamespace: (state) => (namespace) => {
      return state.loadbalancers.filter(obj => obj.metadata.namespace == namespace).length;
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }
  