import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.config.productionTip = false

window.axios = axios

// TODO (ricardoapl) Remove after login is implemented
axios.defaults.baseURL = "http://192.168.1.144:8888"

// TODO (ricardoapl) Uncomment the following code after login is implemented
// XXX (ricardoapl) Try to move this into router/index.js
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.state.authentication.tokenUnscoped === '') {
//       next({
//         name: 'LoginUnscoped'
//       })
//     } else {
//       next()
//     }
//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
//     if (store.state.authentication.tokenUnscoped !== '') {
//       next({
//         name: 'Home'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

// COMPONENT REGISTRATION
import namespacesList from './kubernetes/components/namespaces/namespacesList.vue'
import nodesList from './kubernetes/components/nodes/nodesList.vue'
import servicesList from './kubernetes/components/services/servicesList.vue'
import podsList from './kubernetes/components/pods/podsList.vue'
import rolesList from './kubernetes/components/roles/rolesList.vue'
import deploymentsList from './kubernetes/components/deployments/deploymentsList.vue'

Vue.component('namespaces-list', namespacesList)
Vue.component('nodes-list', nodesList)
Vue.component('services-list', servicesList)
Vue.component('pods-list', podsList)
Vue.component('roles-list', rolesList)
Vue.component('deployments-list', deploymentsList)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
