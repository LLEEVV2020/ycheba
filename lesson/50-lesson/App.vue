<template>

  <div>
    <h1>{{ name }}</h1>
    <input type="text" v-model.lazy="name">
  </div>

</template>

<script>

export default {
  data () {
    return {
      name: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">


</style>
