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
  min-height: auto; /* Fill the viewport vertically for centering */
  color: rgb(2, 34, 31);
  padding: 20px;
}


.post h2{
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-size: 26px;
    color: azure;
    margin: 30px;
    max-width: 200px;
}

.post h2::before{
    margin-left: 30px;
    content: "";
    display: block;
    width: 130%;
    height: 120%;
    background: #ff8800;
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

.pill{
    display: inline-block;
    align-items: flex;
    margin: 5px 5px 10px 0;
    color: #094143;
    background: #dafdf9;
    padding: 8px;
    border-radius: 10px;
    font-size: 14px;
}

</style>