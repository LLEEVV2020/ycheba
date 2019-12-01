<template>

  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav">
         
          <router-link tag='li' class="nav-item" exact="" to="/" active-class="active">
            <a class="nav-link">home</a>
          </router-link>

          <router-link tag='li' class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">cars </a>
          </router-link>
          
        </ul>
      </div>
    </nav>

    <router-view></router-view>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 39vh;">
      
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

  </div>

</template>

<script>


export default {
  
  

}
</script>

<style lang="scss" scoped>
 
 

</style>
