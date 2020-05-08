import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.config.productionTip = false

window.axios = axios

// TODO (ricardoapl) Remove after login is implemented
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
