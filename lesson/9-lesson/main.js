

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
    },
    alertValue: function (event) {
      if(event.keyCode === 13){
        alert(event.target.value);
      }
    },
    alertValue2: function (event) {
        alert(event.target.value);
    }
  }
});