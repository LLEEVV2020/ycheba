<template>
    <div>
        <h1>List</h1>
       <input type="text" v-model="searcName">
        <ul>
        <li  v-for="name of filteredNames" v-bind:key="name.id">{{name}}</li>
        </ul>
    </div>
</template>

<script>

import ListMixin from './listMixin'
export default {

    mixins: [ListMixin]

}
</script>

<style lang="scss" scoped>
  
   
  

</style>