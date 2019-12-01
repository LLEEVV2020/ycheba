<template>

  <div>
    <h1>{{ textarea }}</h1>
    
    <textarea v-model="textarea"></textarea>
  </div>

</template>

<script>

export default {
  data () {
    return {
      name: 'Welcome to Your Vue.js App',
      textarea: 'hhhhhh'
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
