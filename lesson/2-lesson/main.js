

var app = new Vue({
  el: '#app',
  data: {
    name: 'Lev2'
  },
  methods: {
    changeName: function(event) {
      this.name = event.target.value;
    }
  }
});