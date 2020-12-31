import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Routes from './routes'
import Default from './layouts/Default'
import LayoutNonFooter from './layouts/LayoutNonFooter'

Vue.router = Routes
Vue.use(VueRouter)

Vue.component('default-layout', Default)
Vue.component('nonfooter-layout', LayoutNonFooter)

Vue.config.productionTip = false

new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app')

