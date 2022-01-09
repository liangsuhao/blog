import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from './request/api/index.js'
import store from  './store/index'

// 将各模块api挂载在vue实例上
Vue.prototype.$api = api

import router from './router.js'
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
