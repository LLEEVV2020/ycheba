import Vue from 'vue'

import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)

 const app = new Vue({
  el: '#app',
  routes,
  render: h => h(App)
  
})
