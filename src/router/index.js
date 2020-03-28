import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/login-unscoped',
    name: 'LoginUnscoped',
    component: () => import('../components/authentication/LoginUnscoped.vue')
  },
  {
    path: '/login-scoped',
    name: 'LoginScoped',
    component:  () => import('../components/authentication/LoginScoped.vue')
  },
  {  
    path: '/instances',
    name: 'Instances',
    component: () => import('../components/instances/InstanceList.vue')
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../components/images/ImageList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
