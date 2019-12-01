<template>

  <div>
    
    <button 
        class="on"
        :class="{'active':value}"
        @click="onChange(true)"
    >on</button>
    
    <button 
        class="off"
        :class="{'active':!value}"
        @click="onChange(false)"
    >off</button>
  </div>

</template>

<script>

export default {
  props: ['value'],
  methods: {
    onChange (newValue){
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  button{
      border: none;
      cursor: pointer;
      padding: 5px 15px;
      color: #fff;
  }
  .on.active{
      background-color: green;
  }
  .off.active{
      background-color: red;
  }

</style>