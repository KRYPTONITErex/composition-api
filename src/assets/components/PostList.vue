<template>

    <h2>My Post List</h2>

    <div v-for="mypost in myposts" :key="mypost.id">
        <SinglePost :mypost="mypost"></SinglePost>
    </div>
  


</template>

<script>
import SinglePost from './SinglePost'

export default {
  components: { SinglePost },

    props: ["myposts"],

    setup(props){
     

    }

}
</script>

<style>

</style>