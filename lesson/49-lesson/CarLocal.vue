<template>
    <div class="car">
         <slot name="title"> </slot> 
         <hr>
         <hr>
        <slot name="text"> </slot> 

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
  .car{
    background-color: blueviolet;
    padding: 20px;
    color: #fff;
  }
  div{
    background-color: chartreuse;
    border: 1px solid #000;
  }

</style>