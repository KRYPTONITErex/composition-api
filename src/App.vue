<template>

  <router-view/>

  
</template>

<style>
#app {
  width: 1200px;
  margin: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none; /* Removes underline globally for links */
}

a.router-link-exact-active {
  text-decoration: none; /* Ensures active links stay without underline */
}
</style>
