<template>
    <div>
        <h2>Counter {{counter}}</h2>
        
    </div>
</template>

<script>

export default {
  // props: ['counter']
    computed: {
        counter(){
            return this.$store.getters.computedCouner
        }
    }
}
</script>

<style lang="scss" scoped>
  
  
</style>