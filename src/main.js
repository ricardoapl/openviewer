import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import OpenStackClient from './clients/openstack'
import KubernetesClient from './clients/kubernetes'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.prototype.$openstack = OpenStackClient
Vue.prototype.$kubernetes = KubernetesClient
// XXX (ricardoapl) The following are used by store modules (and OpenStack components)
window.axios = OpenStackClient
window.kaxios = KubernetesClient

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
