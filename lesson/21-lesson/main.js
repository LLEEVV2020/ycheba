var vue = new Vue({
  
  data: {
    title: 'Приет с большого бодуна!'
  },
  template: '<div class=""><h2 ref="hwaeding"> {{ title }} </h2><p> обязательно должна быть обёртка div</p></div>',
  methods: { 
    alertFast: function () {
      
    }
  },
  
  computed: {},
  watch: {
    
  }

});

vue.$mount('#app')

