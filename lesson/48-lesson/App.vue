<template>

  <div>
    <!--параметры и аргументы-->
    <h2 v-colored:background.font ="'#9f8'"> {{title}} </h2>  
    <h2 v-colored:color.delay ="'#3ff'"> {{title}} </h2>  
    
    <input type="text" v-model="searcName">
    <ul>
      <li  v-for="name of filteredNames" v-bind:key="name.id">{{name}}</li>
    </ul>

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
      title: "Бесggмысленный стыд",
      carName: 'RFord', 
      searcName: '',
      names: ['Vlad', 'Max', 'Elena', 'Igor']

    }
  },
  computed: {
    filteredNames(){
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searcName.toLowerCase()) !== -1
      })
    }
  },
  filters:{
    lowercase(value){
      return  value.toLowerCase();
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
