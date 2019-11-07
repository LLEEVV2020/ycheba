

var app = new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0
  },
  methods: {
    clickOnGoogle: function (event) {
      event.preventDefault();
    },
    handleMouseMove: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});