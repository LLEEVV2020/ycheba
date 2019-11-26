<template>

  <div>
    
    <h2 v-colored> {{title}} </h2>

    <app-counter></app-counter>

    <app-car-local >
      <h2 slot="title">{{carName}} + html</h2>
      <p slot="text">Lorem, ipsum dolor.</p>
    </app-car-local>
  </div>

</template>

<script>
import CarLocal from './CarLocal.vue'
import Counter from './Counter.vue'

export default {
  data(){
    return {
      carName: 'RFord',
      title: 'бсмысленный стыд'
    }
  },
  components: {
    appCarLocal: CarLocal,
    appCounter: Counter
  }
}
</script>

<style lang="scss" scoped>
  h2{
    background-color: darkslateblue;
  }

</style>
