import Vue from 'vue'
import vueRouter  from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(vueRouter )

const router = new vueRouter({
  routes,
  mode: 'history' 
}); 

 const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
})
