import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import OpenStackClient from './clients/openstack'
import KubernetesClient from './clients/kubernetes'
import FlaskindClient from './clients/flaskind'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.prototype.$openstack = OpenStackClient
Vue.prototype.$kubernetes = KubernetesClient
Vue.prototype.$flaskind = FlaskindClient

// XXX (ricardoapl) The following are used by store modules (and OpenStack components)
window.axios = OpenStackClient
window.kaxios = KubernetesClient

Vue.prototype.$prometheus = 'http://127.0.0.1:9090'
Vue.prototype.$grafana = 'http://127.0.0.1:3000'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
