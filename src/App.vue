<template>

    <Navbar></Navbar>

  <router-view/>

  
</template>

<script>
import Navbar from './assets/components/Navbar.vue';

  export default{
    components: {Navbar}
    
  }

</script>

<style>
#app {
  width: 100%; /* Ensures it doesn't overflow the screen horizontally */
  height: 600px; /* Makes the height fill the entire viewport */
  margin: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
</style>
