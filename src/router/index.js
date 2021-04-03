import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/home')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: 'accountLayout' */ '../layout/accountLayout.vue'),
    redirect: '/account/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: 'login' */ '../views/account/login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: 'register' */ '../views/account/register.vue')
      },
      {
        path: 'forget',
        name: 'Forget',
        component: () => import(/* webpackChunkName: 'forget' */ '../views/account/forget.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
