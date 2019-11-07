

var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    counter2: 0,
    title: "Счётчик"
  },
  methods: {
    riseCounter: function (num, str, event) {
      this.counter += num;
      this.title = str;

      if (num === 5){
        // blue
        event.target.style.color = "blue";

      } else if (num === 22){
        // red
        event.target.style.color = "red";
      }

    }
  }
});