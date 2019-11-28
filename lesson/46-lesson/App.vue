<template>

  <div>
    <!--параметры и аргументы-->
    <h2 v-colored:background.font ="'#9f8'"> {{title}} </h2>  
    <h2 v-colored:color.delay ="'#3ff'"> {{title}} </h2>  
      <h2 v-font> Ctid </h2>  
  


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
      title: "Бесмысленный стыд",
      carName: 'RFord'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode){
        el.style.fontSize = '80px' 
      } 
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
