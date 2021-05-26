import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/common/plugins/antd'
import '@/common/plugins/veevalidate'

import '@/assets/fonts/iconfont.css'
import '@/assets/style/index.less'
import '@/assets/style/antd.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
