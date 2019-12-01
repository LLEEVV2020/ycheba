<template>

  <div class="container">
  <!--  <form class="pt-3" >
      <div class="form-group">
        <label for="email"></label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          v-model="email"
        >
      </div>
    </form>-->
    
    <div class="form-group">
        <label for="name">Имя машины</label>
        <input 
          type="text" 
          id="name" 
          class="form-control"
          v-model.trim="carName"
        >
      </div>
    <div class="form-group">
        <label for="year">Год машины</label>
        <input 
          type="text" 
          id="year" 
          class="form-control"
          v-model.number="carYear"
        >
     </div>

    <button 
      class="btn btn-success"
      @click="createCar"
      >Создать машину</button>

  </div>

</template>

<script>

export default {
  
  data () {
    return {
     carName: '',
     carYear: '2018'
    }
  },
  methods: {
    createCar(){
      const car = {
        name: this.carName,
        year: this.carYear
      }
      this.$http.post('http://localhost:3000/cars', car)
        .then(response => {
          return response.json()
        })
        .then(newCar => {
          console.log(newCar)
        })
    }
  },
  components:{
    
  }

}
</script>

<style lang="scss" scoped>
 
 

</style>
