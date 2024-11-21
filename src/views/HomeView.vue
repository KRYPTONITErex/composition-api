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
      {title:"fb post", body:"photo graphy - When developing a Vue.js application, it is crucial to follow best practices for structure and reactivity. Start by ensuring proper separation of concerns by splitting each component into its own file, making the codebase easier to maintain. Use ref or reactive for managing reactive state, and always initialize data structures correctly to avoid runtime errors. Props should be treated as read-only and passed cleanly between components to maintain a unidirectional data flow. Finally, pay attention to key attributes in loops and ensure templates are well-organized, as these small details can greatly improve the app’s performance and readability.", id:1},
      {title:"linkedin post", body:"job posts", id:2}
    ]
    )

    return {myposts}

  }
  
}
</script>
