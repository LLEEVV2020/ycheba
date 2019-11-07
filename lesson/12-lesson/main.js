

var app = new Vue({
  el: '#app',
  data: {
    isActive: false,
    color_first: '',
    color: 'blue'
  },
  computed: {
    getCssClassesSpeed: function () {
      return {
        'red': this.isActive,
        'green': !this.isActive
      }
    }
  },
  methods: {
    getCssClasses: function () {
      return {
        'red': this.isActive,
        'green': !this.isActive
      }
    }
  }
});