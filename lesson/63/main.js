import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
