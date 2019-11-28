import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import ColorDirective from './color'

Vue.directive('colored', ColorDirective)
Vue.filter('uppercase', value => value.toUpperCase())
Vue.component('app-list', List)

export const eventEmitter = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

