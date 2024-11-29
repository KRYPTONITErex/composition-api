<template>
  <div class="home">

    <div>{{ error }}</div>

    <div class="layout" v-if="myposts.length>0">

      <div>
        <PostList :myposts="myposts"></PostList>
      </div>
      <div>
        <TagClound :myposts="myposts"></TagClound>
      </div>

    </div>

    <div v-else>
      <Spinner></Spinner>
    </div>

    <div>
      <App class="js"></App>
    </div>

  </div>
</template>

<script>
import TagClound from '../assets/components/TagClound'
import Spinner from '../assets/components/Spinner'
import PostList from '../assets/components/PostList'
import getPosts from '../composables/getPosts';



export default {
  components: {
    TagClound,
    Spinner, PostList },

  setup(){
    //composable function

    let {myposts,error,load} = getPosts()

    load();
    console.log(error.value)

    return {myposts,error}

    //destructuring
    let {name, age}={
      name: "Ko Lwin Phyo",
      age: 29
    }

  }
  
}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px;
}
</style>