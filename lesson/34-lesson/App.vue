<template>

  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>

    <h1>Стыдливое сообщения: <em>{{ carName }}</em> </h1>
    <app-car-local 
      :carName="carName"
      :carYear="carYear"
      @nameChanged="carName = $event"
    ></app-car-local>
  </div>

</template>

<script>
import CarLocal from './CarLocal.vue'

export default {
  data () {
    return {
      carName: 'Ford дочерняя строка',
      carYear: 2019,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appCarLocal: CarLocal
  }
}
</script>

<style lang="scss">


</style>
