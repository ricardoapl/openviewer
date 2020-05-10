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
  },
  {
    path: '/floatingips',
    name: 'FloatingIPs',
    component: () => import('../components/networks/floatingips/FloatingIpView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    // XXX Only for "admin"
    path: '/segments',
    name: 'Segments',
    component: () => import('../components/availability/segments/SegmentView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    // XXX Only for "admin"
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../components/availability/notifications/NotificationView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/orchestrations',
    name: 'Orchestrations',
    component: () => import('../components/orchestration/OrchestrationView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // KUBERNETES
  {
    path: '/kubernetes',
    name: 'KHome',
    component: () => import('../components/kubernetes/HomeView.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
