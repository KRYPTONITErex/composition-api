<template>
  
   <div class="tag">
    <div v-if="error">{{ error }}</div>

<div class="layout" v-if="myposts.length">
    <div>
        <PostList :myposts="filteredPosts"></PostList>
    </div>
    <div>
        <TagClound :myposts="myposts"></TagClound>
    </div>
</div>
<div v-else>Loading ...</div>
   </div>

</template>

<script>
import TagClound from '../assets/components/TagClound'
import PostList from '../assets/components/PostList'
import { computed } from 'vue';
import getPosts from '../composables/getPosts';
export default {
  components: {
    TagClound, PostList },
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

.tag{
    max-width: 1200px;
    margin: 0 auto;
}

</style>