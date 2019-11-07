

var app = new Vue({
  el: '#app',
  data: {
    url: "http://copy.css-world.ru",
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