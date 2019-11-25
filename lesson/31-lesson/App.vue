<template>

  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>
    <app-car-local></app-car-local>
  </div>

</template>

<script>
import CarLocal from './CarLocal.vue'

export default {
  data () {
    return {
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
