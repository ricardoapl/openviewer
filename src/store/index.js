import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openstackAddress: sessionStorage.getItem("openstackAddress") || "",
    tokenUnscoped: sessionStorage.getItem("tokenUnscoped") || "",
    tokenScoped: sessionStorage.getItem("tokenScoped") || "",
    idSelectedProject: sessionStorage.getItem("idSelectedProject") || "",
    projects: null,
    user: null,
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(user))
    },
    clearUser: state => {
      state.user = null
      sessionStorage.removeItem('user')
    },
    setToken: (state, data) => {
        if(data.type == 'scoped') {
          state.tokenScoped = data.token;
        }
        else {
          state.tokenUnscoped = data.token;
        }
        axios.defaults.headers.common['x-auth-token'] = data.token;
        sessionStorage.setItem((data.type == 'scoped') ? 'tokenScoped' : 'tokenUnscoped', data.token);
    },
    clearTokens: state => {
        state.tokenScoped = "";
        state.tokenUnscoped = "";
        sessionStorage.removeItem("tokenScoped");
        sessionStorage.removeItem("tokenUnscoped");
        axios.defaults.headers.common['x-auth-token'] = undefined;
    },
    setOpenstackAddress: (state, openstackAddress) => {
      state.openstackAddress = openstackAddress
      sessionStorage.setItem('openstackAddress', openstackAddress)
      axios.defaults.baseURL = openstackAddress
    },
    clearOpenstackAddress: state => {
      state.openstackAddress = "";
      sessionStorage.removeItem("openstackAddress");
      axios.defaults.baseURL = undefined;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
      sessionStorage.setItem("projects", JSON.stringify(projects));
    },
    setIdSelectedProject: (state, idSelectedProject) => {
      state.idSelectedProject = idSelectedProject;
      sessionStorage.setItem("idSelectedProject", idSelectedProject);
    },
  },
  actions: {
  },
  modules: {
  }
})
