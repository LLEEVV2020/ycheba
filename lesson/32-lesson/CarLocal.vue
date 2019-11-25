<template>
    <div class="car">
         <h3>{{ carName }}</h3>   
        <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>
export default {
    props: ['carName', 'carYear' ]
}
</script>

<style lang="scss">
  .car{
    background-color: blueviolet;
    padding: 20px;
    color: #fff;
  }

</style>