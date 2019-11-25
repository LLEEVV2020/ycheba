<template>
    <div class="car">
         <h3>{{ carName }} / {{recversName}}</h3>   
        <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>
export default {
    //props: ['carName', 'carYear' ],

    /*props: {
      carName: String,
      carYear: Int32Array
    },*/

    props: {
      carName: {
        type: String,
        //required: true, // ( обязательное )
        default: 'Имя по умолчанию'
      },
      carYear: Int32Array
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