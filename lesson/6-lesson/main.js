

var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    counter2: 0
  },
  methods: {
    riseCounter: function () {
      this.counter++;
    },
    onHover: function (event) {
      event.target.style.color = "red";
    }
  }
});