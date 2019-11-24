var app = new Vue({
  el: '#app',
  data: {
    title: 'Приет с большого бодуна!'
  },
  methods: { 
    alertFast: function () {
      this.title = 'gqqqqqqqqqrf ggS'
      this.$refs.hwaeding.style.color = 'red'
      console.log(this.$refs)
    }
  },
  
  computed: {
  },
  watch: {
    
  }

});

