<template>

  <div>
    <h4>Car name: {{$route.query.name}}</h4>
    <h5>car year: {{year}}</h5>

    <div class="scroll"></div>
    <div id="scroll">ghdbnt от вниз</div>
    <div class="scroll"></div>
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
    .scroll{
        width: 100px;
        height: 1000px;
        background-color: #ccc;
    }

</style>