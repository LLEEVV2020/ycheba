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

          <router-link tag='li' class="nav-item" to="/car/3" active-class="active">
            <a class="nav-link">car3</a>
          </router-link>
          <router-link tag='li' class="nav-item" to="/car/4" active-class="active">
            <a class="nav-link">car4</a>
          </router-link>
          
        </ul>
      </div>
    </nav>

    <router-view></router-view>



  </div>

</template>

<script>


export default {
  
  

}
</script>

<style lang="scss" scoped>
 
 

</style>
