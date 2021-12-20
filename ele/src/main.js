import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import {Button,Select} from 'element-ui'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.component(Button.name,Button)
Vue.use(Select)
// Vue.component(Select.name,Select)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
