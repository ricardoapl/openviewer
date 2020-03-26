import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
