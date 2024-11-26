<template>

    <h2 class="pltitle">My Post List</h2>

    <div v-for="mypost in myposts" :key="mypost.id" class="psl">
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
.psl{
    margin-bottom: 30px;
    border-bottom: 0.5px solid grey;
    width: 30%;
}

.pltitle{
    margin-top: 300px;
    text-align: center;
}

</style>