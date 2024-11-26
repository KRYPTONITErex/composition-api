<template>

  <!-- <h2>THIS IS DETAIL PAGE - {{ id }}</h2> -->

  <div v-if="mypost">
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

</style>