const state = {
  openstackAddress: sessionStorage.getItem('openstackAddress') || '',
  tokenUnscoped: sessionStorage.getItem('tokenUnscoped') || '',
  tokenScoped: sessionStorage.getItem('tokenScoped') || '',
  idSelectedProject: sessionStorage.getItem('idSelectedProject') || '',
  idLastProject: sessionStorage.getItem('idLastProject') || '',
  projects: JSON.parse(sessionStorage.getItem('projects')) || '',
  user: JSON.parse(sessionStorage.getItem('user')) || ''
}

const mutations = {
  setUser: (state, user) => {
    state.user = user
    sessionStorage.setItem('user', JSON.stringify(user))
  },
  setToken: (state, data) => {
    if (data.type === 'scoped') {
      state.tokenScoped = data.token
    } else {
      state.tokenUnscoped = data.token
    }
    axios.defaults.headers.common['x-auth-token'] = data.token
    sessionStorage.setItem((data.type === 'scoped') ? 'tokenScoped' : 'tokenUnscoped', data.token)
  },
  setOpenstackAddress: (state, openstackAddress) => {
    state.openstackAddress = openstackAddress
    sessionStorage.setItem('openstackAddress', openstackAddress)
    axios.defaults.baseURL = openstackAddress
  },
  setProjects: (state, projects) => {
    state.projects = projects
    sessionStorage.setItem('projects', JSON.stringify(projects))
  },
  setIdSelectedProject: (state, idSelectedProject) => {
    state.idSelectedProject = idSelectedProject
    sessionStorage.setItem('idSelectedProject', idSelectedProject)
  },
  setLastProjectId: (state, idLastProject) => {
    sessionStorage.setItem('idLastProject', idLastProject)
    state.idLastProject = idLastProject
  },
  clearAll: state => {
    state.openstackAddress = ''
    sessionStorage.removeItem('openstackAddress')
    state.tokenUnscoped = ''
    sessionStorage.removeItem('tokenUnscoped')
    state.tokenScoped = ''
    sessionStorage.removeItem('tokenScoped')
    state.idSelectedProject = ''
    sessionStorage.removeItem('idSelectedProject')
    state.idLastProject = ''
    sessionStorage.removeItem('idLastProject')
    state.user = null
    sessionStorage.removeItem('user')
    state.projects = null
    sessionStorage.removeItem('projects')
    axios.defaults.headers.common['x-auth-token'] = ''
    axios.defaults.baseURL = ''
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
