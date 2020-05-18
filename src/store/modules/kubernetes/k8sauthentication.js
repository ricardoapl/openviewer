const state = {
  kubernetesAddress: sessionStorage.getItem('kubernetesAddress') || '',
  token: sessionStorage.getItem('tokenKubernetes') || ''
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
    sessionStorage.setItem('tokenKubernetes', token)
    kaxios.defaults.headers.common.Authorization = 'Bearer ' + token
  },
  setKubernetesAddress: (state, kubernetesAddress) => {
    state.kubernetesAddress = kubernetesAddress
    sessionStorage.setItem('kubernetesAddress', kubernetesAddress)
    kaxios.defaults.baseURL = kubernetesAddress
  }
}

const actions = {

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
