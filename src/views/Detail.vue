<template>

  <!-- <h2>THIS IS DETAIL PAGE - {{ id }}</h2> -->

  <div v-if="mypost">
    <h2>{{ mypost.title }}</h2>
    <p>{{ mypost.body }}</p>
  </div>
  <div v-else>Loading...</div>

</template>

<script>
import getPost from '../composables/getPost';
export default {
    props: ["id"],
    setup(props){
        let {mypost,error,load} = getPost(props.id);
        load();
        return{mypost, error}
    }

}
</script>

<style>

</style>