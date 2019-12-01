<template>

  <div>
    <h1>{{ name }}</h1>
    
    <label for=""><input type="radio" value="111111" v-model="vocil">111111</label>
    <label for=""><input type="radio" value="222222" v-model="vocil">222222</label>
    <label for=""><input type="radio" value="333333" v-model="vocil">333333</label>
    
    <p>{{vocil}}</p>
  </div>

</template>

<script>

export default {
  data () {
    return {
      name: 'Welcome to Your Vue.js App',
      vocil: '222222'
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
