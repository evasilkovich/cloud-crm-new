import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/black-green-light.css' // This line here
import 'vue-material/dist/theme/default.css' // This line here
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

Vue.use(VueMaterial)

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
