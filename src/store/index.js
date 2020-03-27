import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem("token") || "",
    openstackAddress: sessionStorage.getItem("openstackAddress") || "",
    user: null,
  },
  mutations: {
    setUser: (state, user) => {
        state.user = user;
        sessionStorage.setItem("user", JSON.stringify(user));
    },
    clearUser: state => {
        state.user = null;
        sessionStorage.removeItem("user");
    },
    setToken: (state, token) => {
        state.token = token;
        sessionStorage.setItem("token", token);
        axios.defaults.headers.common['x-auth-token'] = token;
    },
    clearToken: state => {
        state.token = "";
        sessionStorage.removeItem("token");
        axios.defaults.headers.common['x-auth-token'] = undefined;
    },
    setOpenstackAddress: (state, openstackAddress) => {
      state.openstackAddress = openstackAddress;
      sessionStorage.setItem("openstackAddress", openstackAddress);
      axios.defaults.baseURL = openstackAddress;
    },
    clearOpenstackAddress: state => {
      state.openstackAddress = "";
      sessionStorage.removeItem("openstackAddress");
      axios.defaults.baseURL = undefined;
    },
  },
  actions: {
  },
  modules: {
  }
})
