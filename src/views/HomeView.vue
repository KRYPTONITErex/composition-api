<template>
  <div class="home">

      <PostList :myposts="myposts"></PostList>

  </div>
</template>

<script>
import PostList from '../assets/components/PostList'
import { ref } from 'vue';



export default {
  components: { PostList },

  setup(){

    let myposts = ref ([
      
    
    ]
    )

    return {myposts}

  }
  
}
</script>
