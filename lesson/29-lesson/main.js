var component = {
  template: `
  <div style="border: 1px solid #999;">
      <h2 ref="hwaeding"> {{ title }} </h2>
      <button @click="alertFast">suffb</button>
      <button @click="doDestroy">doDestroy</button>
  </div>
  `,
  data: function () {
    return {
      title: 'Приет с большого бодуна!'
    }
  },
  methods: { 
    alertFast: function () {
      this.title = 'gqqqqqqqqqrf ggS'
      this.$refs.hwaeding.style.color = 'red'
    },
    doDestroy: function () {
      this.$destroy()
    }
  }
}




var vue = new Vue({
  el: '#app',
  components: {
    'my-petyx': component
  },
  computed: {},
  watch: { }
});

var vue2 = new Vue({
  el: '#app2',
  components: {
    myPetyx: component
  },
  computed: {},
  watch: { }
});