<template>
  <div class="home">

    <div>{{ error }}</div>

    <div v-if="myposts.length>0">
      <PostList :myposts="myposts"></PostList>
    </div>
    <div v-else>
      loading ...
    </div>

  </div>
</template>

<script>
import PostList from '../assets/components/PostList'
import getPosts from '../composables/getPosts';



export default {
  components: { PostList },

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
