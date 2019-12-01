<template>

  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email"></label>
        <input 
          type="email" 
          id="email" 
          class="form-control"
          v-model="email"
        >
      </div>
    </form>
    
    
    

  </div>

</template>

<script>

export default {
  
  data () {
    return {
     email: ''
    }
  },
  components:{
    
  }

}
</script>

<style lang="scss" scoped>
 
 

</style>
