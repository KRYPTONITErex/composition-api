<template>
      <h1 class="tit">BLOGGY VUE</h1>
  <header class="header">
    <nav class="routeList">
      <router-link :to="{ name: 'home' }" class="nav-link">HOME</router-link>
      <router-link :to="{ name: 'create' }" class="nav-link">CREATE</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
/* Overall Header Styling */
.header {
  gap: 10px; /* Reduce gap between links */
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 2px 10px 2px;
  display: inline-block;
  width: 90%;
  height: 25px;
  padding: 0px;
  background-color: #cee4ee; /* Dark background for contrast */
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 0.1px solid rgb(171, 224, 224);
  border-right: 0.3px solid rgb(173, 244, 244);
}

.tit {
  font-family: 'Courier New', Courier, monospace;
  font-size: 28px;
  color: #006aa3; /* Stylish accent color for the title */
  text-decoration: underline;
  text-underline-offset: 6px; /* Adjust underline gap */
  margin: 0 auto; /* Centers horizontally within the parent */
  padding: 10px;
  display: block; /* Ensures it behaves as a block-level element for auto margin */
  text-align: center; /* Centers the text within the element */
}

/* Individual Link Styling */
.nav-link {
  color: #097583; /* White links for visibility */
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px; /* Adds a button-like feel */
  border-radius: 5px; /* Smooth rounded edges */
  transition: all 0.3s ease; /* Smooth hover transition */
  margin: 5px;
}

/* Hover Effects for Links */
.nav-link:hover {
  background-color: #ee502c; /* Accent color on hover */
  color: #ffffff; /* Text changes to match the background */
  border-radius: 30px;
}

/* Active Link Styling */
.nav-link.router-link-exact-active {
  border-radius: 15px;
  background-color: #21ffd6;
  color: #094b40;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Highlight active link */
}

/* Responsive Design: Adjust Layout on Smaller Screens */
@media (max-width: 768px) {
  .header {
    flex-direction: column; /* Stack title and nav on small screens */
    text-align: center;
    justify-content: center;
    align-content: center;
    align-self: center;
  }

}
</style>