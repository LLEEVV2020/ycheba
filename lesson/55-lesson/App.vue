<template>

  <div>
    
    <input type="text" v-model.number="age">
    <p>{{age}}</p>
    
  </div>

</template>

<script>

export default {
  data () {
    return {
     age: 20
    }
  },
  watch:{
    age (value) {
      console.log(value)
      console.log(typeof value)
    }
  }

}
</script>

<style lang="scss" scoped>
  textarea{
    height: 100px;
    width: 400px;
  }
  h1{
    white-space: pre;
  }

</style>
