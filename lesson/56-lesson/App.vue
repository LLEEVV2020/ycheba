<template>

  <div>
    
    <app-onoff v-model="switched"></app-onoff>
    
    <div>
      <h3 v-if="switched">роророророро </h3>
      <h3 v-else>Component is fgfggfgf</h3>
    </div>

  </div>

</template>

<script>
import Onoff from './Onoff.vue'

export default {
  
  data () {
    return {
     switched: false
    }
  },
  components:{
    appOnoff: Onoff
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
