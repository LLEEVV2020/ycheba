var app = new Vue({
  el: '#app',
  data: {
    title: 'Приет с большого бодуна!'
  },
  methods: { 
    alertFast: function () {
      console.log('gggggggggg');
    }
  },
  
  computed: {
  },
  watch: {
    
  }

});

var app2 = new Vue({
  el: '#app2',
  data: {
    title: 'вторая  прога'
  },
  methods: { 
    gupdate: function () {
      app.title = 'gdd впапапаа паапап'

      setTimeout( function () {
        app.alertFast()
      },1000)
    }
  },
  
  computed: {
  },
  watch: {
    
  }

});