import Vue from 'vue'

import vueRouter  from 'vue-router'
import App from './App.vue'
import Routes from './routes'

Vue.use(vueRouter )

const router = new vueRouter({
  routes: Routes
}); 

 const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
  
})
