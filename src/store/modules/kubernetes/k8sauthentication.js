const state = {
  token: sessionStorage.getItem('tokenKubernetes') || '',
  kubernetesAddress: sessionStorage.getItem('kubernetesAddress') || ''
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
    sessionStorage.setItem('tokenKubernetes', token)
    kaxios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  setKubernetesAddress: (state, kubernetesAddress) => {
    state.kubernetesAddress = kubernetesAddress
    sessionStorage.setItem('kubernetesAddress', kubernetesAddress)
    kaxios.defaults.baseURL = kubernetesAddress
  },
  clearState: (state) => {
    state.token = ''
    state.kubernetesAddress = ''
    sessionStorage.removeItem('tokenKubernetes')
    sessionStorage.removeItem('kubernetesAddress')
    kaxios.defaults.headers.common.Authorization = ''
    kaxios.defaults.baseURL = ''
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
