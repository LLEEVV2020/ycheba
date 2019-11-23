

var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    counter2: 0
  },
  methods: { 
    add: function() {
      this.counter++;
    },
    sub: function() {
      this.counter--;
    },
    result: function() {
      console.log("ddddd");
      return this.counter > 3 ? 'больше 3' : 'меньше 3';
    }
  },
  
  computed: {
    compRez: function() {
      
      console.log("kjkkkkkkkk");
      return this.counter > 3 ? 'больше 3' : 'меньше 3';
    }
  },
  watch: {
    counter: function(value) {
      console.log(this.counter);
      console.log(value);
    }
  }

});