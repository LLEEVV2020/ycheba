<template>

  <div>
    
    
    <select v-model="social">
      <option v-for="s in vocil" v-bind:key="s.id">{{ s }}</option>
    </select>
    
    <p>{{social}}</p>
  </div>

</template>

<script>

export default {
  data () {
    return {
      social: '222222',
      vocil: ['1111111','222222']
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
