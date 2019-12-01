<template>

  <div>
    <h4>Car name: {{$route.query.name}}</h4>
    <h5>car year: {{year}}</h5>

  </div>

</template>

<script>

export default {
  computed:{
      year(){
          return this.$route.query.year
      }
  }
}
</script>

<style lang="scss" scoped>
 

</style>