import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      },
      component: () => import(/* webpackChunkName: 'indexLayout' */ '../layout/indexLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            requiresLogin: true
          },
          component: () => import(/* webpackChunkName: 'home' */ '../views/home')
        }
      ]
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
          beforeEnter: (to, from, next) => {
            const tokenInfo = JSON.parse(localStorage.getItem('tokenInfo'))
            if (tokenInfo && tokenInfo.expireTime > Date.now()) {
              next(from)
            } else {
              next()
            }
          },
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
})

router.beforeEach(async (to, from, next) => {
  // 登录判断
  const requiresLogin = to.matched.some(record => record.meta.requiresLogin)

  if (requiresLogin) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const tokenInfo = JSON.parse(localStorage.getItem('tokenInfo'))
    if (tokenInfo && tokenInfo.expireTime > Date.now()) {
      // 已登录，在登录页已经将 userInfo tokenInfo 存储到 localStorage
      // 每进入一个页面都更新 store 的 userInfo
      store.commit('saveUserInfo', userInfo)
      next()
    } else {
      // 未登录
      store.commit('saveUserInfo', null)
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

export default router
