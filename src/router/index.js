import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login-unscoped',
    name: 'LoginUnscoped',
    component: () => import('../components/authentication/LoginUnscoped.vue'),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/login-scoped',
    name: 'LoginScoped',
    component: () => import('../components/authentication/LoginScoped.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/authentication/Logout.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/instances',
    name: 'Instances',
    component: () => import('../components/instances/InstanceView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../components/images/ImageView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/volumes',
    name: 'Volumes',
    component: () => import('../components/volumes/VolumeView.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
