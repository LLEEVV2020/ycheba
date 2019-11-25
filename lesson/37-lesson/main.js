import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'

export const eventEmitter = new Vue();

Vue.component('app-car', Car)

new Vue({
  el: '#app',
  render: h => h(App)
})

