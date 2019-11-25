<template>
    <div class="car">
         <h3>{{ carName }} / {{recversName}}</h3>   
        <p>Year: {{ carYear }}</p>
        <button @click="chargeName">chargeName</button>
        <button @click="changeFank">Cnsl и бемысленность</button>
        <button @click="updateCouner">Update Couneter</button>
    </div>
</template>

<script>
export default {
    

    props: {
      carName: {
        type: String,
        //required: true, // ( обязательное )
        default: 'Имя по умолчанию'
      },
      carYear: Number,
      changeFank: Function,
      counter: Number
    },
    methods: {
      chargeName(){
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      },
      updateCouner(){
        this.$emit('countedUbdeiter', this.counter++)
      }
    },
    computed: {
      recversName(){
        return this.carName.split('').reverse().join('')
      }
    }
}
</script>

<style lang="scss">
  .car{
    background-color: blueviolet;
    padding: 20px;
    color: #fff;
  }

</style>