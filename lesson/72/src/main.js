import Vue from 'vue'
import vueRouter  from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.use(vueRouter )

const router = new vueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }
    if(to.hash){
      return { selector: to.hash }
    }

    return{
      x: 0,
      y: 0
    }
    
  }
}); 

 const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
  
})