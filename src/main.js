import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/common/plugins/antd'
import '@/common/plugins/veevalidate'

import '@/assets/fonts/iconfont.css'
import '@/assets/style/index.less'
import '@/assets/style/antd.less'

if (process.env.NODE_ENV !== 'production') {
  const modules = require.context('../mock', true, /\.js$/)
  modules.keys().forEach(m => modules(m))
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
