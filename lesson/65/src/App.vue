<template>

  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
         
          <li class="nav-item">
            <router-link class="nav-link" to="/">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cars'">cars</router-link>
          </li>
          
        </ul>
      </div>
    </nav>

    <router-view></router-view>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 39vh;">
      
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
         
          <li class="nav-item">
            <a class="nav-link" href="/">home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cars">cars</a>
          </li>
          
        </ul>
      </div>
    </nav>

  </div>

</template>

<script>


export default {
  
  

}
</script>

<style lang="scss" scoped>
 
 

</style>
