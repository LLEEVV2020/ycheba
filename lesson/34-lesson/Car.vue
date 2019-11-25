<template>
    <div>
         <h3>{{ carNameMain }}</h3>   
        <p>Year: {{ carYearMain }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            carNameMain: 'Ford',
             carYearMain: 2012   
        }
    }
}
</script>