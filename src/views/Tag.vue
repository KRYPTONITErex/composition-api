<template>
  
    <div v-if="error">{{ error }}</div>

    <div v-if="myposts.length">
        <PostList :myposts="filteredPosts"></PostList>
    </div>
    <div v-else>Loading ...</div>

</template>

<script>
import PostList from '../assets/components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts';
export default {
  components: { PostList },
    props:["tag"],

    setup(props){
        // console.log(props.tag)
       let {myposts,error,load} = getPosts();
       load();

       let filteredPosts = computed (()=>{
        return myposts.value.filter((myposts)=>{
            return myposts.tags.includes(props.tag)
        })
       })

       return{myposts,error,load,filteredPosts}
    }

}
</script>

<style>

</style>