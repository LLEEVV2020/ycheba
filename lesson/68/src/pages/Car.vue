<template>

  <div>
    <h1>car id {{ id }}</h1>

    <button class="btn btn-sm btn-info" @click="goBackToCars">Назад</button>
  </div>

</template>

<script>

export default {
  data(){
      return {
          //id: this.$router.currentRoute.params['id']
          id: this.$route.params['id']
      }
  },
  methods:{
      goBackToCars(){
          this.$router.push('/cars')
      }
  },
  watch: {
      $route (toR, fromR){
          this.id = toR.params['id']
      }
  }
}
</script>

<style lang="scss" scoped>
 

</style>