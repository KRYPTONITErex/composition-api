<template>

  <!-- <h2>THIS IS DETAIL PAGE - {{ id }}</h2> -->

  <div class="post" v-if="mypost">
    <h2 class="lt">{{ mypost.title }}</h2>
    <p>{{ mypost.body }}</p>

    <button @click="deletepost" class="deletebutton">DELETE</button>
  </div>
  <div v-else><Spinner></Spinner></div>

</template>

<script>
import Spinner from '../assets/components/Spinner'
import getPost from '../composables/getPost';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { db } from '../firebase/config';

export default {
  components: { Spinner },
    props: ["id"],
    setup(props){
      let route = useRoute();
      let router = useRouter();
      // console.log(route.params.id)
      
      let {mypost,error,load} = getPost(route.params.id);
      load();
      let deletepost = async ()=>{
        // alert ("clicked")
        let id = props.id;
        await db.collection("myposts").doc(id).delete();

        router.push("/");

      }
      return{mypost, error,deletepost}
    }

}
</script>

<style scoped>

.lt{
  text-decoration: none;
  color: black;
  background-color: rgb(255, 247, 0);
  border-radius: 5px;
}

.details{
  display: flex;
  flex-direction: column; /* Stack title and body vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text alignment */
  min-height: auto; /* Fill the viewport vertically for centering */
  color: rgb(4, 79, 72);
  padding: 20px;
}


.post h2{
  padding: 10px;
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
  max-width: 300px;
  border: solid 2px rgb(255, 253, 253);
}

.post h2::before{
    margin-left: 30px;
    content: "";
    display: block;
    width: 115%;
    height: 120%;
    background: #ff3300;
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

.deletebutton {
  width: auto;
  margin: 30px;
  background-color: #ff824d; /* Vibrant red */
  color: white; /* White text for contrast */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Comfortable padding */
  font-size: 16px; /* Readable font size */
  font-weight: bold; /* Make text bold */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth hover effect */
}

.button-container {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.deletebutton:hover {
  background-color: #e62300; /* Darker red on hover */
  transform: scale(1.05); /* Slightly enlarge on hover */
}

.deletebutton:active {
  color: rgb(0, 0, 0);
  background-color: #ffd000; /* Even darker red on click */
  transform: scale(0.95); /* Slightly shrink on click */
}


</style>