<template>

  <div>
    <h1>car id {{ id }}</h1>

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
  watch: {
      $route (toR, fromR){
          this.id = toR.params['id']
      }
  }
}
</script>

<style lang="scss" scoped>
 

</style>