<template>

  <!-- <h2>THIS IS DETAIL PAGE - {{ id }}</h2> -->

  <div class="post" v-if="mypost">
    <h2 class="lt">{{ mypost.title }}</h2>
    <p>{{ mypost.body }}</p>
  </div>
  <div v-else><Spinner></Spinner></div>

</template>

<script>
import Spinner from '../assets/components/Spinner'
import getPost from '../composables/getPost';
import { useRoute } from 'vue-router';

export default {
  components: { Spinner },
    props: ["id"],
    setup(){
      let route = useRoute();
      // console.log(route.params.id)
      
      let {mypost,error,load} = getPost(route.params.id);
      load();
      return{mypost, error}
    }

}
</script>

<style scoped>

.lt{
  text-decoration: none;
  color: black;
  background-color: rgb(246, 242, 124);
  border-radius: 5px;
}

.details{
  display: flex;
  flex-direction: column; /* Stack title and body vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text alignment */
  min-height: auto; /* Fill the viewport vertically for centering */
  color: rgb(2, 34, 31);
  padding: 20px;
}


.post h2{
  font-family: stencil;
  margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-size: 26px;
    /* color: rgb(206, 255, 255); */
    margin: 30px;
    max-width: 200px;
    border: solid 2px whitesmoke;
}

.post h2::before{
    margin-left: 30px;
    content: "";
    display: block;
    width: 115%;
    height: 120%;
    background: #fc4710;
    position: absolute;
    z-index: -1;
    padding-right: 30px;
    left: -50px;
    transform: rotateZ(-5deg);
    border-radius: 10px;
}

.pt{
    padding-left: 15px;
}


</style>