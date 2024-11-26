<template>
    
  <div class="loader-container">

    <div class="loader"></div>

    <div class="loading-text">
      Loading...
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background-color: #f6fdfe;
    font-family: Arial, sans-serif;
    text-decoration: none;
  }
  
  .loader-container {
    text-align: center;
    position: relative;
  }
  
  .loader {
    width: 50px;
    height: 50px;
    border: 5px solid #ddd;
    border-top: 5px solid crimson;
    border-radius: 45%;
    animation: spin 1s linear infinite;
    margin: 0 auto 10px;
    box-shadow: 0px 0px 1000px rgb(0, 247, 255);
  }
  
  .loading-text {
    font-size: 16px;
    color: #333;
    position: relative;
  }
  
  
  
  /* Keyframes for spinning animation */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>