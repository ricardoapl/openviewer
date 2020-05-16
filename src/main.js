import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.config.productionTip = false

window.axios = axios
window.kaxios = axios.create()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
