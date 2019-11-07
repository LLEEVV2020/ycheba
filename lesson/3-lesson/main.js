

var app = new Vue({
  el: '#app',
  data: {
    name: 'Lev2',
    namber: 444,
    isok: true,
    string: "моё имя звер лев"
  },
  methods: {
    sayHello: function() {
      return 'Я мужик'
    }
  }
});