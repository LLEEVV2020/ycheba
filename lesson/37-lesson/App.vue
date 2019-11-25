<template>

  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>

    <h1>Стыдливое сообщения: <em>{{ carName }}</em> </h1>

    <app-counter></app-counter>

    <app-car-local 
      :carName="carName"
      :carYear="carYear"
      :changeFank="chanNameToAudio"
      @nameChanged="carName = $event"
    ></app-car-local>
  </div>

</template>

<script>
import CarLocal from './CarLocal.vue'
import Counter from './Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford дочерняя строка',
      carYear: 2019,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    chanNameToAudio(){
      this.carName = 'Audio'
    }
  },
  components: {
    appCarLocal: CarLocal,
    appCounter: Counter
  }
}
</script>

<style lang="scss">


</style>
