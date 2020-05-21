import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

// XXX (ricardoapl) Split routes into modules (openstack and kuberentes)
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../components/landing/LandingView'),
    meta: {
      requiresAuth: false,
      isKubernetes: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/HomeView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/login-unscoped',
    name: 'LoginUnscoped',
    component: () => import('../components/authentication/LoginUnscoped.vue'),
    meta: {
      requiresVisitor: true,
      isKubernetes: false
    }
  },
  {
    path: '/login-scoped',
    name: 'LoginScoped',
    component: () => import('../components/authentication/LoginScoped.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/authentication/Logout.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/instances',
    name: 'Instances',
    component: () => import('../components/instances/InstanceView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../components/images/ImageView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/volumes',
    name: 'Volumes',
    component: () => import('../components/volumes/VolumeView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/floatingips',
    name: 'FloatingIPs',
    component: () => import('../components/networks/floatingips/FloatingIpView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    // XXX Only for "admin"
    path: '/segments',
    name: 'Segments',
    component: () => import('../components/availability/segments/SegmentView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    // XXX Only for "admin"
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../components/availability/notifications/NotificationView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  {
    path: '/orchestrations',
    name: 'Orchestrations',
    component: () => import('../components/orchestration/OrchestrationView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: false
    }
  },
  // KUBERNETES
  {
    path: '/kubernetes/login',
    name: 'LoginKubernetes',
    component: () => import('../components/kubernetes/authentication/Login.vue'),
    meta: {
      requiresVisitor: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes/logout',
    name: 'LogoutKubernetes',
    component: () => import('../components/kubernetes/authentication/Logout.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes',
    name: 'KHome',
    component: () => import('../components/kubernetes/HomeView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes/administration',
    name: 'Administration',
    component: () => import('../components/kubernetes/administration/AdministrationView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes/monitoring',
    name: 'Monitoring',
    component: () => import('../components/kubernetes/monitoring/MonitoringView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes/workloads',
    name: 'Workloads',
    component: () => import('../components/kubernetes/workloads/WorkloadsView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  },
  {
    path: '/kubernetes/services',
    name: 'Services',
    component: () => import('../components/kubernetes/services/ServicesView.vue'),
    meta: {
      requiresAuth: true,
      isKubernetes: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => (record.meta.requiresAuth && record.meta.isKubernetes))) {
    if (store.state.k8sauthentication.token === '') {
      next({
        name: 'LoginKubernetes'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => (record.meta.requiresAuth && !record.meta.isKubernetes))) {
    if (store.state.authentication.tokenUnscoped === '') {
      next({
        name: 'LoginUnscoped'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => (record.meta.requiresVisitor && record.meta.isKubernetes))) {
    if (store.state.k8sauthentication.token !== '') {
      next({
        name: 'LandingPage'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => (record.meta.requiresVisitor && !record.meta.isKubernetes))) {
    if (store.state.authentication.tokenUnscoped !== '') {
      next({
        name: 'LandingPage'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
