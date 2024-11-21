<template>

  <div class="home">

    <PostsList :posts="posts"></PostsList>


  </div>

</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from 'vue';


  export default {
  components: { PostsList },

    setup(){

      let posts = ref ([
        {title:"post title 1", body:"Vue.js is a progressive JavaScript framework widely used for building interactive and user-friendly web applications. It simplifies the development process with its two-way data binding, component-based architecture, and seamless integration with other libraries or existing projects. Developers appreciate its lightweight nature and flexibility, allowing them to focus on building features rather than dealing with complex configurations. With Vue’s intuitive syntax and extensive documentation, even beginners can quickly grasp its concepts and start creating dynamic applications. Whether developing single-page apps or integrating with backend frameworks, Vue.js provides a versatile and efficient solution for modern web development.", id:1},
        {title:"post title 2", body:"lorem ipsum2", id:2}

      ])


      return { posts }

      

      }
  
  }

</script>
