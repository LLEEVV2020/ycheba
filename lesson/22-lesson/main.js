var vue = new Vue({
  el: '#app',
  data: {
    title: 'Приет с большого бодуна!'
  },
 
  methods: { 
    alertFast: function () {
      this.title = 'gqqqqqqqqqrf ggS'
      this.$refs.hwaeding.style.color = 'red'
    },
    doDestroy: function () {
      this.$destroy()
    }
  },
  computed: {},
  watch: { },

  /**
   * Жизненный цикл
   */

  beforeCreate: function () {
    console.log('beforeCreate - когда произошла инииализация и VUE готовится создать приложение')
  },

  created: function () {
    console.log('created  -  приложение  создано. Но не было создание html кода')
  },

  beforeMount: function () {
    console.log('beforeMount  -начал анализировать шаблон и готовится вставить вместо элемента el скомпилированный шаблон')
  },

  mounted: function () {
    console.log('mounted  -вставилось в шаблон в html')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate  - перед тем как начнуться обновляния на страннице')
  },
  updated: function () {
    console.log('updated  - после  обновляния на страннице')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy  - перед удаления приложения')
  },
  destroyed: function () {
    console.log('destroyed  - после удаления приложения')
  }

});

