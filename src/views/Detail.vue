<template>

  <!-- <h2>THIS IS DETAIL PAGE - {{ id }}</h2> -->

  <div class="details" v-if="mypost">
    <h2 class="lt">{{ mypost.title }}</h2>
    <p>{{ mypost.body }}</p>
  </div>
  <div v-else><Spinner></Spinner></div>

</template>

<script>
import Spinner from '../assets/components/Spinner'
import getPost from '../composables/getPost';
export default {
  components: { Spinner },
    props: ["id"],
    setup(props){
        let {mypost,error,load} = getPost(props.id);
        load();
        return{mypost, error}
    }

}
</script>

<style>

.lt{
  text-decoration: none;
}

.details{
  display: flex;
  flex-direction: column; /* Stack title and body vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text alignment */
  min-height: 100vh; /* Fill the viewport vertically for centering */
  color: rgb(2, 34, 31);
  padding: 20px;
}

</style>