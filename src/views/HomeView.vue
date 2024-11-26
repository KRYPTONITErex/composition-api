<template>
  <div class="home">

    <div>{{ error }}</div>

    <div v-if="myposts.length>0">
      <PostList :myposts="myposts"></PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>

  </div>
</template>

<script>
import Spinner from '../assets/components/Spinner'
import PostList from '../assets/components/PostList'
import getPosts from '../composables/getPosts';



export default {
  components: {
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
